# Chatroom

![screen shot apercu de Chatroom](./screenshot.png)

**Chatroom** is an instant messaging web application, powered by Express for the API, React for the front-end and WebSocket for an instant messaging experience.

### Step 1: Installing dependencies

Make sure you have Node.js and Yarn installed on your system.

In the API folder, run the following command to install the dependencies :

```
yarn install
```

In the Front folder, also run the following command to install the dependencies:

```
yarn install
```

### Step 2: Starting the API

1. Open a terminal window and navigate to the api folder.
2. Run the following command to start the API:

```
yarn start
```

### Step 3: Starting the front-end application

1. Open another terminal window and navigate to the front folder.
2. Run the following command to start the front application:

```
yarn start
```

### Step 4: Using chat

1. Open your browser and go to the URL <http://localhost:8080> (or another URL specified in your front-end application).
2. Log in with one of the following two predefined users:

   - User 1 :

     Username: Bob Ross

     Email: `bob@ross.com`

     Password: `trees`

   - User 2 :

     Username: Bob Marley

     Email: `bob@marley.com`

     Password: `trees`

3. Open a new browser tab and log in with another account from the two predefined users.
4. You can now chat with the two separate accounts. Please note that although you can talk to yourself, you can also initiate a conversation between the two accounts.

Please note that this code does not robustly manage security aspects such as authentication and authorisation. This guide is for development and demonstration purposes only.

Have fun using your chat!
