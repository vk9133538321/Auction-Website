const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const Signup = require('./Auction_models/Signup');
const Auctiondata = require('./Auction_models/Auctiondata');

app.use(express.json())

app.get('/hi', (req, res) => {
  res.send('Hello World!')
})


//Sign up
app.post('/Signup',async (req, res)=>{
  try{
    const Signup1 = await Signup.create(req.body)
    res.status(200).json(Signup1)
    console.log('Data Saved:', Signup1)
  } catch (error){
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
})   

//Signin
app.post('/Signin', async(req, res)=>{
  try{
    const {rollno,password}= req.body
    const user = await Signup.findOne({rollno})
    if(!user){
      return res.status(400).json({error:'user not found'})
    }

    if(user.password !==password){
      return res.status(400).json({error:'Invalid password'})
    }
    res.status(200).json({ message: 'Sign-in successful', user });
  } catch (error) {
    console.error('Signin Error:', error);
    res.status(500).json({ error: error.message });
  }
})


//Auctiondata
app.post("/addAuction", async(req, res)=>{
  try{
    const{ title, description, link, img} = req.body

    const newAuction = await Auctiondata.create({
      title,
      description,
      link,
      img
    })
    res.status(200).json({ message: "Auction data added successfully!", auction: newAuction });
  } catch (error) {
    console.error("Error adding auction:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

//Get Auction data
app.get('/getAuctions', async (req, res) => {
  try {
    const auctions = await Auctiondata.find();
    res.status(200).json(auctions);
  } catch (error) {
    console.error('Error retrieving auctions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect("mongodb+srv://Vishal:Vishal91@auction.3vs0ekj.mongodb.net/").then(()=>{
  console.log("connected to MongoDB")
}).catch((err)=>{
  console.log("MongoDB not connected", err)
}
)