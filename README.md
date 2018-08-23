# Websocket Chat

> This is a PoC made for an internal presentation

## Motivation

Websocket allows browsers to listen to asynchonous server actions, so it makes it easier to wait for heavy/slow processing requests.

## Requirements
- NodeJS 8.x - [download](https://nodejs.org/en/download/)
- Now cli - [download](https://zeit.co/download) (deploy only)

## How to run

Clone this repo.
```sh
git clone https://github.com/DawTaylor/websocket-chat.git
```

### Server
```sh
cd websocket-chat/server
npm install
npm start
```

### Client

```sh
cd websocket-chat/client
npm install
npm start
```

Your websocket client will be available under [http://localhost:3000](http://localhost:3000)

> Please note that the client will try to open a socket to the default server url:port which is http://localhost:5000, change `websocket-chat/client/src/App.js:8` accordingly if needed.

## How to deploy

### Server

Update `websocket-chat/server/now.json` with your information.

```json
{
  "name": "websocket-srv", // Name of your server application
  "alias": "websocket-srv.now.sh" // An alias to your application, if you don't want to update websocket-chat/client/src/App.js:8 everytime you update your server
}
```

```sh
now login # if you haven't already
now # this will deploy your server application
now alias # this will assign the now.json alias to your server application
```

### Client

> Update your `websocket-chat/client/src/App.js:8` file with the server url/alias

Update `websocket-chat/client/now.json` with your information.

```json
{
  "name": "websocket-client", // Name of your client application
  "alias": "websocket-client.now.sh" // An alias to your application, if you don't want to access a new url everytime you deploy your client
}
```

```sh
now login # if you haven't already
now # this will deploy your client application
now alias # this will assign the now.json alias to your client application
```

Your websocket client will be available under the now deployment's url or the assigned alias.
