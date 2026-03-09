import {Router} from "express";

const router=Router();


router.get("/",(req,res)=>{
    res.json({message:"hello from docker v3"});
})

router.get("/health",(req,res)=>{
   throw new Error("Internal server error");
   res.status(200).json({message:"everything is good here"});

})


export default router;