import express from 'express';
import router from './routes/router.js';


const app=express();

const PORT=process.env.PORT??8000;

app.use("/",router);

app.listen(PORT,()=>{
    console.log(`server is running at the port :${PORT}`);
    
})