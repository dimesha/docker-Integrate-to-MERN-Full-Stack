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
app.get('/api/notes', (req, res) => {
    res.status(200).json({message: "This is my api.."})
})

//creaate the server
app.listen(4000, () => {
    console.log("Server is running on port 4000");

})