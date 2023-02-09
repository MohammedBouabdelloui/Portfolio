import "./bio.css";
import React, { useState } from 'react';
import bio_img from './img/bio.jpeg';


const Bio = () => {
  const [text , setText] = useState(true);


  function Read_More(){
    setText(!text);
  }
  return (
    <section className='about'>
      <div className="image">
        <img src={bio_img} alt="Photograph Of Me" />
        <span className="text_img">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, explicabo?
        </span>
      </div>


      <div className="text">
        <h1>Mohammed </h1>
        <h2> Developer <spn>Web</spn> </h2>
        <p className="bio">
              I am a full web developer with 2 years of experience in website building and website design.
              I have a strong passion for web development and enjoy working with clients to create beautiful and functional websites .<br></br>
              <p className={text?'less':'more'}>
              My name is Mohamed, a young Moroccan man in his twenties. I learned programming the hard way via youtube and ista university in 2 years of hard work. I strive to provide the best possible service to my clients and always strive to exceed their expectations. I am confident that my skills and experience will make me the ideal candidate for your next project. If you are interested in hiring me, please feel free to contact me. I look forward to hearing from you soon.
              I look forward to hearing from you soon.
              </p>
        </p>

      {
        text?(<button onClick={Read_More} >Read More...</button>):(<button onClick={Read_More} >Read Less...</button>)
      }
      
      </div>



    </section>
  )
}

export default Bio