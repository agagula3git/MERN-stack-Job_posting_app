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
