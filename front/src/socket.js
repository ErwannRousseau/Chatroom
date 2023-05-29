// Fichier qui contient une référence à la connexion websockets
// sur notre serveur

import socketIOClient from 'socket.io-client';

const socket = socketIOClient('ws://localhost:3000');

export default socket;
