// Node.js code to create an API endpoint
const express = require('express');
const cors = require('cors');
const fs=require('fs')
const app = express();
const port = 3001; // Change the port number as needed
const readJSONFile = require('./readJSONFile'); // Importing the function to read JSON file

app.use(cors());

app.get('/api/jsondata', async (req, res) => {

    const path='D:\\PROJECTS\\react\\dashboard\\server\\data.json';
    if(fs.existsSync(path)){
        const jsonData=fs.readFileSync(path,'utf-8')
        res.status(200).json(jsonData)
    }
    else{
        res.status(404).json({eror:'file not tere'})
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
