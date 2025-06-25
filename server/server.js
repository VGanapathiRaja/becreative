const express= require('express');
const Cors =require('cors');
const { default: mongoose } = require('mongoose');
const customer = require('./modal/modal');


const app =express();
const PORT=5000;
app.use(Cors());
app.use(express.json());

// Db connect

    // mongoose.connect('mongodb://localhost:27017/demoreact',{
    mongoose.connect('mongodb://127.0.0.1:27017/demoreact',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Get method
    app.get('/',(req,res)=>{
        res.send("Backend and server coneected");
    });

// Post method
    app.post('/mern', async(req,res)=>{
         try {
    const { fullname,email,subject,messages } = req.body;

    if (!fullname || !email || !subject || !messages) {
      return res.status(400).json({ error: 'All fields required' });
    }
    const newUser = new mern({fullname,email,subject,messages});
    await newUser.save();
    res.status(200).json({ message: 'User saved successfully' });
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ error: 'Internal Server Error' });   
  }
    });


// server running
app.listen(PORT,(err)=>{
    if(err){
        console.log('Something went wrong in server');
    }
    else{
        console.log(`server running on port ${PORT} successfully`);
    }
});