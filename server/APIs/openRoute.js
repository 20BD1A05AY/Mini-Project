const exp=require('express');
const oApp=exp.Router();
const Configuration=require('openai').Configuration;
const OpenAIApi=require('openai').OpenAIApi;
const expressAsyncHandler=require('express-async-handler');

oApp.use(exp.json());

const configuration = new Configuration({
    apiKey:"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"
  });

  const openai = new OpenAIApi(configuration);

  oApp.get('/nor',(req,res)=>{
    res.send({message:"this is open route"});
  })

  oApp.post('/geti',expressAsyncHandler(async(request,response)=>{
    // console.log(request.body);
    const {prompt}=request.body;
    console.log(prompt);

    const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json',
      });

      const image=aiResponse.data.data[0].b64_json;
      response.send({photo:image});

  }))

//   router.route('/').post(async (req, res) => {
//     try {
//       const { prompt } = req.body;
  
//       const aiResponse = await openai.createImage({
//         prompt,
//         n: 1,
//         size: '1024x1024',
//         response_format: 'b64_json',
//       });
  
//       const image = aiResponse.data.data[0].b64_json;
//       res.status(200).json({ photo: image });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send(error?.response.data.error.message || 'Something went wrong');
//     }
// });


module.exports=oApp;