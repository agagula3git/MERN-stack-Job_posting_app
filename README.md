# MERN Stack - Job Posting Web Application 
This project guides you through set up the server-side using Express and development of user interfaces using a popular library React.

## General Info
In order to post a new job, you just need to click on the link -Post a job- located on the main page. It will redirect you to the new page with a form block, where you are required to enter the information about the actual job like title, name of the company, location, type of the job and the other information in the form of description.  
When you finish entering the data, you can back to the main page and take a look at the posted job that you just entered in your database.  
The layout of homepage is given by the following image:

## Configuring the server-side

The first thing we should do is configure the server-side by installing NodeJs framework Express and connecting it to MongoDB database.  
Creata a package.json file:
```bash
npm init
```
This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults.

After you create a package.json file, install Express in the project directory and save it in the dependencies list with the following command:
```bash
npm i --s express
```

Assuming you’ve already installed MongoDB, in command prompt enter the following command for installation a MongoDB object mongoose:
```bash
npm i mongoose@5.3.4
```
Now that you've installed the required dependencies, the next step is to include them by adding the code shown in the following listing to index.js.
```python
const express = require('express');
const mongoose = require('mongoose');
```

Before you start using Express, you need to define an instance of it, which handles the request and response from the server to the client. In this case, it is the variable app.
```python
const app = express();
```

Now you could add the following code to check if everything is OK with the installation of needed packages.
```python
app.get('/', (req, res)=>{
    res.send('Hello World');
}) .listen(3000, ()=>{
    console.log('Server started on port 3000. Good luck!');
})
```
Before you start the server, I advise you to install nodemon dependencies that will monitor for any changes in your source and automatically restart your server.
To install nodemon, just run the following command at the prompt:
```bash
npm i -d nodemon
```
Now that you've installed nodemon, run the following command at the prompt to start the server:
```bash
npm run dev
```
Before you do it, make sure that you add the following code to your package.json file:
```python
"scripts": {
    "start": "node app",
    "dev": "nodemon app"
}
```
This will start the server. If everything is ok, you should see the message in your terminal:
```python
Server started on port 3000. Good luck!
```
#### Connecting to MongoDB
Now it's time to set up your MongoDB connection and define Model for interacting with MongoDB. Considering that our app uses only one database, you should use mongoose.connect to define a connection. Connect take a mongoDB//URI, options and the callback function.
In a new directory called models/ create a new file for defining Model through the Schema interface.
```python
const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
    title: {
        type: String
    },
    company: {
        type: String
    },
    location: {
        type: String
    },
    type: {
        type: String
    },
    description: {
        type: String
    },
    created_at: {
        type: String
    }
}, {collection: 'job-ads'});

const model = mongoose.model('JobModel', JobSchema);

module.exports = model;
```
To import created model from db.js file, use the following code:
```python
const JobAds = require('./models/db')
```
In Studio 3T create new connection with the following data - name and DB server.  

Studio 3T is the professional IDE, client, and GUI for MongoDB. You could visit the following link for downloading this IDE. 
[Download Studio 3T](https://studio3t.com/download/)  
## Building the Frontend
For building the client-side, we'll use a popular library used to create user interfaces React. 
#### Getting Started with Create React App
Create React App is a command line interface (CLI) tool that will create relatively simple, production-ready React application. There're two different ways to install your production-ready React application. You can do it in a single step by running the following command at the prompt:
```bash
npx create-react-app my-app
```
Another way to do the same thing is using your favorite package manager. In this project, we'll use npm. In a terminal window, run the following
command at the prompt:
```bash
npm install --global create-react-app
```
Once installed, you can create a new project with
```bash
create-react-app mern-app
```
Whether you use your favorite package manager or the first way to do the same in a single step, creating a new application can take a few minutes, depending on the time it takes to install the dependencies on your machine.  
  
When it completes, there will be a newly created my-app directory waiting for you. To view the application, you’ll start the development server, which takes care of serving
your JavaScript code to the browser (among other things).  Navigate to ./frontend/mern-app directory now, and run the following command at the prompt: 
```bash
npm start
```
If create-react-app didn’t open a browser window automatically after starting the development server, open a browser and head to [localhost:3000](http://localhost:3000).
Try changing the home page layout by editing the src/App.js file. You should see the browser refresh automatically, without having to reload the page.  

The default port used by Express is 3000, the same default port used by ReactJS development server. Consequently, we need to resolve this port conflict by changing one of the ports. Assume that we’re adamant to keep port 3000 for React, so the port change should be applied to NodeJS bakcend. So we'll set up that this app starts a server and listens on port 3001 for connections.
## Running the frontend and backend
Follow the steps below to run both the frontend and backend of our MERN stack application.
To run the server, type the following command at the prompt:
```bash
npm run dev
```
From the frontend project directory, run the command below:
```bash
npm start
```
## 🙌 Contribution
I hope that this project will help you to unlock new ideas and improve your skills. Should you need any further information, please do not hesitate to [contact](mailto:agagula3@etf.unsa.ba) me.  
  
Best regards,  
Ajdin G.

