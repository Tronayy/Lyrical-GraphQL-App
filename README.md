# Lyrical-App-React-GraphQL
An app that shows a list of songs and each song has a list of lyrics attached with it. Users can enter new songs as well as new lyrics. Users can also upvote each entered lyric
in order to show correct lyrics of the songs.

## Design
The app has a simple design utilizing material-icons. 

## Backend 
The backend rest API is a mongo database that is being accessed by using graphql. 

## Utilities
The app uses the following libraries:
1. React hooks
2. Express-graphql
3. React-router
4. Apollo
5. materialize

## How to Run Backend
Please follow the guidelines given below to run server on local development machine:

1. Clone the repo or download zip file.
2. Go to server folder.
3. Install dependencies by running the script npm install.
4. Please insert your MongoDB URI in server.js file. The URI can be accessed from MongDB atlas.
5. Run the app by running the script npm start. The app will run on localhost:4000.
6. You can access the graphiql playground on http://localhost:4000/graphql.

Once you successfully run the server, you can run frontend application by following the guidelines in the public repository lyrical-graphql-client.

## How to Run Frontend
After you successfully run the server, you can run this app on your local development machine by following the steps provided below:

1. Go to unzipped directory.
2. Install dependencies by running the script npm install.
3. Run the app by running the script npm start. The app will run on localhost:3000.
