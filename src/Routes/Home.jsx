import React, { useState, useEffect } from 'react';
import Life from '../Components/life/Life';
import Navbar from '../Components/navbar/Navbar'
import fire from '../Astronut/fire.jpg'
import { PulseLoader } from 'react-spinners';
import './home.css'




const Home = () => {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);


  return (

    <div className='unit'>
            {
        loading ?
        (
          <div>
            <img src={fire} alt="fire" className='dolo'/>
            <PulseLoader color="#36d7b7" loading={loading} size={20} />
          </div>
        )
        :
        <div>
          <Life />
          <Navbar />
        </div>
      }
    </div>
  );
}


export default Home;