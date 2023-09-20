const exp=require('express');
const expressAsyncHandler=require('express-async-handler');
const mClient=require('mongodb').MongoClient;
const app=exp();
const path=require('path');
const pApp=require('./APIs/postRoute');
const oApp=require('./APIs/openRoute');

app.use(exp.json({limit:'500mb'}));

const dburl="mongodb+srv://admin:admin@cluster0.0i8dyo8.mongodb.net/?retryWrites=true&w=majority";

mClient.connect(dburl)
.then((client)=>{

    const theDb=client.db('theDb');

    const pColl=theDb.collection('pColl');

    app.set('pColl',pColl);
    console.log("database has started successfully");
},(err)=>{
    console.log("error has occured"+err);
})

app.get('/',(req,res)=>{
    res.send({message:"response to the request "})
})

app.use('/oapp',oApp);

// app.use(exp.static(path.join(__dirname,)));

// app.use('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,));
// })

app.use((req,res,next)=>{
    res.send({message:"invalid path"});
})

app.use((err,req,res,next)=>{
    res.send("synchronised error "+err.message);
})

app.listen(6000,()=>{
    console.log("server started successfully");
})