// import React, { useEffect, useState } from 'react';
// import Card from '../components/Card'
// import axios from 'axios';


// const Home = () => {
//   const [loading, setLoading] = useState(false);
//   const [allPosts, setAllPosts] = useState([]);

//   const [searchText, setSearchText] = useState('');
//   const [searchTimeout, setSearchTimeout] = useState(null);
//   const [searchedResults, setSearchedResults] = useState(null);



//   // const handleSearchChange = (e) => {
//   //   clearTimeout(searchTimeout);
//   //   setSearchText(e.target.value);

//   //   setSearchTimeout(
//   //     setTimeout(() => {
//   //       const searchResult = allPosts.filter(
//   //         (item) =>
//   //           item.name.toLowerCase().includes(searchText.toLowerCase()) ||
//   //           item.prompt.toLowerCase().includes(searchText.toLowerCase())
//   //       );
//   //       setSearchedResults(searchResult);
//   //     }, 500)
//   //   );
//   // };


//   useEffect(()=>{

//     const fun=async()=>{

//       const data=await axios.get('http://localhost:4000/papp/getal');
//       console.log(data.data.data);

//       setAllPosts(data.data.data);

//     }
//     fun();

//   },[])

//   return (
//     <section className="container">
//       <div>
//         <h1 className="font-weight-bold text-dark display-4">The Community Showcase</h1>
//         <p className="mt-2 text-muted lead">Browse through a collection of imaginative and visually stunning images generated by DALL-E AI</p>
//       </div>

//       <div className="mt-4">
//         <div className="form-group">
//           <label htmlFor="text" className="font-weight-bold">Search posts</label>
//           <input
//             type="text"
//             className="form-control"
//             id="text"
//             placeholder="Search something..."
//             // value={searchText}
//             // onChange={handleSearchChange}
//           />
//         </div>
//       </div>

//       <div className="mt-4">
      
//         {allPosts.length==0 && <h3 className='text-center'>NO POSTS YET</h3>}
//         {
//             allPosts.map((i,index)=>{
//               return <Card  key={index} photo={i.photo} name={i.name} prompt={i.prompt}/>
//             })
  

//         }
       
//       </div>

      
      
        
      
//     </section>
//   );
// };

// export default Home;











import React, { useEffect, useState } from 'react';
import Card from '../components/Card'
import axios from 'axios';


const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(()=>{

    const fun=async()=>{

      const data=await axios.get('http://localhost:4000/papp/getal');
      console.log(data.data.data);

      setAllPosts(data.data.data);

    }
    fun();

  },[])

  return (
    <section className="container">
      <div>
        <h1 className="font-weight-bold text-dark display-4">The Community Showcase</h1>
        <p className="-mt2 text-muted lead">Browse through a collection of imaginative and visually stunning images generated by DALL-E AI</p>
      </div>

      <div className="mt-4">
        <div className="form-group">
          <label htmlFor="text" className="font-weight-bold">Search posts</label>
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="Search something..."

          />
        </div>
      </div>

      <div className="mt-4">
      
        {allPosts.length==0 && <h3 className='text-center'>NO POSTS YET</h3>}
        {
            allPosts.map((i,index)=>{
              return <Card  key={index} photo={i.photo} name={i.name} prompt={i.prompt}/>
            })
        }
      </div>  
    </section>
  );
};

export default Home;