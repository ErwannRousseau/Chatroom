//Import des dépendances
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('socket.io');
const Server = require('http').Server;

//Je crée mon "application", elle me permettra de configurer mon API
//ainsi que de démarrer mon serveur
const app = express();

//Configuration de mon serveur
app.use(bodyParser.json()); //Permet de récupérer des valeurs envoyées par le client
app.use(cors('*')); //Permet d'autoriser les requêtes venant du front
const server = Server(app);
const io = socket(server, {
  cors: {
    origin: "*",
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
  }
});

//Ma "base de données" (en mémoire, pas une vraie bdd)
const db = {
  users: [
      {
          id: 1,
          email: 'bob@ross.com',
          username: 'Bob Ross',
          password: 'trees'
      },
      {
          id: 2,
          email: 'bob@marley.com',
          username: 'Bob Marley',
          password: 'trees'
      }
  ],

  messages: [
      {
          id: 1,
          author: 'Bob Ross',
          text: "Salut tout le monde ! J'aime la peinture et les arbres."
      },
      {
          id: 2,
          author: 'Bob Dylan',
          text: "C'est cool"
      }
  ]
};

//On configure la connexion au serveur
//via websockets (ws://) grâce à la librairie socket.io
//correctement configurée
io.on('connect', (ws) => {

    //une fois connecté, je vais écouter des évènements via ws
    ws.on('new_message', (message) => {

      //On récupère la logique de création de nouveau message
      db.messages = [...db.messages, {
          id: Math.max(...new Set(db.messages.map(m => m.id))) + 1,
          author: message.author,
          text: message.text
      }];

      //Notre serveur renvoie un évènement à tous les clients actuellement connectés
      //cet évènement s'appelle 'incoming_message' et contient la liste de tous les messages
      io.emit('incoming_message', db.messages);
  });

});

//L'API va écouter les requêtes GET sur http://localhost:3000/
//et renvoyer un json indiquant que la requête est un succès
app.get('/', (req, res) => {
    res.json({status: 'Success'});
});

//Une requête GET sur http://localhost:3000/messages
//me renverra un JSON avec la liste de tous les messages
app.get('/messages', (req, res) => {
    res.json(db.messages);
});

//Exemple pour récupérer un messages
app.get('/messages/:id', (req, res) => {
    res.json(db.messages.find(message => message.id === Number(req.params.id)));
});

//Route POST qui permet de se connecter
app.post('/login', (req, res) => {
    //On récupère l'utilisateur qui a pour email ET password
    //ceux envoyés en POST
    //Si pas d'utilisateur correspondant : ERREUR 401 (unauthorized)
    const user = db.users.find(user => (user.email === req.body.email) && (user.password === req.body.password))

    if(user) {
        res.json(user);
    } else {
        res.sendStatus(401);
    }
});

app.post('/messages', (req, res) => {
    db.messages = [...db.messages, {
        id: Math.max(...new Set(db.messages.map(m => m.id))) + 1,
        author: req.body.author,
        text: req.body.text
    }];

    res.json(db.messages);
});

server.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});
