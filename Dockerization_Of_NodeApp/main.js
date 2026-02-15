const express=require("express");

const app=express();
const PORT=8000;


app.get("/",(req,res)=>{
     return res.json("dockerization of the node app");

})



app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`);
})