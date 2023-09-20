import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import  preview  from '../assets/preview.png';

import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {

  const {register,handleSubmit,formState:{errors},reset}=useForm();
  const navigate = useNavigate();


  const [form, setForm] = useState({
    // name: '',
    // prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const fun=(data)=>{
    console.log(JSON.stringify({prompt:data.prompt}));

  }

  // const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // const handleSurpriseMe = () => {
  //   const randomPrompt = getRandomPrompt(form.prompt);
  //   setForm({ ...form, prompt: randomPrompt });
  // };

//   const generateImage = async () => {
//     if (form.prompt) {
//       try {
//         setGeneratingImg(true);
//         const response = await fetch("http://localhost:8080/api/v1/dalle", {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             prompt: form.prompt,
//           }),
//         });

//         const data = await response.json();
//         setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
//       } catch (err) {
//         alert(err);
//       } finally {
//         setGeneratingImg(false);
//       }
//     } else {
//       alert('Please provide proper prompt');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (form.prompt && form.photo) {
//       setLoading(true);
//       try {
//         const response = await fetch('http://localhost:8080/api/v1/post', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ ...form }),
//         });

//         await response.json();
//         // alert('Success');
//         navigate('/');
//       } catch (err) {
//         alert(err);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       alert('Please generate an image with proper details');
//     }
//   };

  return (
    <section className="container mx-auto mt-5">
      <form className="mt-5 max-w-3xl" onSubmit={handleSubmit(fun)}  >
      <div>
        <h1 className="fw-extrabold text-dark fs-10">Create</h1>
        <p className="mt-2 text-muted" style={{ fontSize: '14px', maxWidth: '500px' }}>
  Generate an imaginative image through DALL-E AI and share it with the community
</p>


      </div>

      
  <div class="mb-4">
    <label htmlFor="name" className="form-label">Your Name</label>
    <input
      type="text"
      class="form-control"
      id="name"
      placeholder="Ex., john doe"
      // value={form.name}
      // onChange={handleChange}
      name="name"
      {...register("name",{required:true})}
    />
    {errors.name?.type==='required'  && <p className='text-danger'>*pls enter the name</p>}
  </div>

  <div class="mb-4">
    <label htmlFor="prompt" className="form-label">Prompt</label>
    <input
      type="text"
      class="form-control"
      id="prompt"
      placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
      // value={form.prompt}
      // onChange={handleChange}
      name="prompt"
      {...register("prompt",{required:true})}
    />
     {errors.prompt?.type==='required'  && <p className='text-danger'>*pls enter the prompt</p>}
  </div>

  <div className="mb-4">
    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-ring-blue-500 focus-ring-opacity-50 w-64 p-3 h-64 flex justify-center items-center">
      {form.photo ? (
        <img
          src={form.photo}
          // alt={form.prompt}
          className="w-100 h-100 object-fit-contain"
        />
      ) : (
        <img
          src={preview}
          alt="preview"
          className="w-20 h-20 object-fit-contain opacity-40"
        />
      )}

      {generatingImg && (
        <div className="position-absolute inset-0 z-0 d-flex justify-content-center align-items-center bg-opacity-50 bg-dark rounded-lg">
          <Loader />
        </div>
      )}
    </div>
  </div>

  <div className="mb-4">
    <button
      type="submit"
      
      className="btn btn-success w-20"
    >
      {generatingImg ? 'Generating...' : 'Generate'}
    </button>
  </div>

  <div className="mb-4">
  <p className="mt-2 text-muted" style={{ fontSize: '14px' }}>
  ** Once you have created the image you want, you can share it with others in the community **
</p>

    {/* <button
      type="submit"
      onClick={()=>navigate("/")}
      class="btn btn-primary w-30"
    >
      {loading ? 'Sharing...' : 'Share with the Community'}
    </button> */}
  </div>
</form>

    </section>
  );
};

export default CreatePost;