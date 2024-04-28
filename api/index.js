const express = require ('express');
const cors = require ('cors');
const mongoose  = require ('mongoose');
const Note  = require('./Note');
const app = express();

app.use(cors());
app.use(express.json());

//connect with mongoDB
mongoose.connect('mongodb://localhost:27017/notes', {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log('Connected to MongoDB.'))
.catch(err => console.error(err));


//create route
app.get('/api/notes', async(req, res) => {
    try{
        const notes = await Note.find();
        res.status(200).json({message:"Fetched Note Successfully..", data: notes});
    }catch(err){
        res.status(500).json({message:"Error fetching notes..", error: err});
    }
    
})


app.post('/api/notes', async(req, res) => {
    try{
        const newNote = new Note({
            title: req.body.title,
            content: req.body.content
        })
        const saveNote = await newNote.save();
        res.status(201).json({message:"Note created successfully", data:saveNote});
    }catch(err){
        res.status(500).json({message:"Error fetching notes..", error: err});
    }

})


app.all('*', (req, res) => {
    res.status(404).json("<h1>404 | Page not found");
})

//creaate the server
app.listen(4000, () => {
    console.log("Server is running on port 4000");

})