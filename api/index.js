const express = require ('express');
const cors = require ('cors');
const mongoose  = require ('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

//create route
app.get('/api/notes', (req, res) => {
    res.status(200).json({message: "This is my api.."})
})

//creaate the server
app.listen(4000, () => {
    console.log("Server is running on port 4000");

})