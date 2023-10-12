import React from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Start() {

    const [text] = useTypewriter({
        words: ['Un site E-commerce développé', 'par  Mr. Andson RAJAONA', 'Un Développeur FullStack'],
        loop: {},
        typeSpeed: 40,
        deleteSpeed: 40
  
      })
    
    return (
        <div className='container-fluid welcome p-0'>

            <div className="container">
                <div className="row  content-center  ">
                    <div className=" presentation p-5 col-md-6 text-center  ">

                        <img src="./myprofile.png" className='img-fluid w-50' alt="" />
                        <h1 className='fw-bold mt-1 mb-3 '>Vokatry ny Tantsaha</h1>
                        <p > 
                        {text}
                        <span style={{color:' green '}}>
                            <Cursor cursorStyle='|' /> 
                        </span>
                        </p>
                        <Link className=' btn mb-4 mt-2 start-button' to='/home'> Commencer le projet</Link>
                    </div>
                </div>


            </div>







        </div>
    );
}

export default Start;
