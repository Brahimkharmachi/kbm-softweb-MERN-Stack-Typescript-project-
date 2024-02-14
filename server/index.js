const express = require ('express') ;
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





mongoose.connect(
    "mongodb+srv://brahimkharmachi:*****@cluster0.7ayln3q.mongodb.net/*****?retryWrites=true&w=majority",{
        family: 4,    
    })
    .then(console.log("DB is connected"))
    .catch(err => console.log(err))


const messageSchema = new mongoose.Schema({
    email: String,
    subject: String,
    message: String,
  });
  
  const Message = mongoose.model('mycontact', messageSchema);
  
  

app.post('/contact/api/mycontact', async (req, res) => {
         const { email, subject, message } = req.body;
         const newMessage = new Message({ email, subject, message });

    try {
      await newMessage.save();
      res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending message' });
    }
  });




const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});