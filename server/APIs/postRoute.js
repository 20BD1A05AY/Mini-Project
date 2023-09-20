const exp=require('express')
const pApp=exp.Router();
const cloudinary=require('cloudinary');
const expressAsyncHandler=require('express-async-handler');

pApp.use(exp.json());


cloudinary.config({
    cloud_name:"dkkmp1twv",
    api_key:"572387581297733", 
    api_secret:"_VyuOauUyrVm7ZrSf6lSbrrmIjY"
});

pApp.get('/',expressAsyncHandler(async(req,res)=>{

    const pColl=req.app.get('pColl');

    const posts=await pColl.find({});

    res.send({success:true,data:posts});

}))

pApp.post('/',expressAsyncHandler(async(request,response)=>{

    const {name,prompt,photo}=request.body;
          const photoUrl = await cloudinary.uploader.upload(photo);
          const pColl=request.app.get('pColl');
          const obj={
            name:name,prompt:prompt,photo:photoUrl.url
          }

    const newPost=await  pColl.insertOne(obj);


      res.send({success:true,data:newPost});

}))



module.exports=pApp;