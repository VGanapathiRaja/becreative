const express = require('express');
const Cors = require('cors');
const {default:mongoose} =require('mongoose');
const customer =require('./modal/modal');
require('dotenv').config();

const app = express();
app.use(Cors());
app.use(express.json());
const Port =8080;

// db
    
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{console.log('mongodb connected')})
      .catch((err)=>{console.log(err)})  

// get
    app.get('/', (req,res)=>{
        res.send('Ready to send data');
    });

// post
    app.post('/customer',async(req,res)=>{
        try {
    const { fullname,email,subject,messages } = req.body;

    if (!fullname || !email || !subject || !messages) {
      return res.status(400).json({ error: 'All fields required' });
    }
    
    const newUser = new customer({fullname,email,subject,messages});
    await newUser.save();
    res.status(200).json({ message: 'User saved successfully' });
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ error: 'Internal Server Error' });   
  }
    })

// Running env
app.listen(Port,(err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(`Server running on port ${Port}`);
    }
});
