# MERN Stack - Job Posting Web Application 

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
