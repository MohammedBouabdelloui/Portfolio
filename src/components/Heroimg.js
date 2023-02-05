import './HeroimgStyle.css';
import intro_img from './img/intro.jpg';
import profaile from './img/profaile.png';
import { FaGithub,FaInstagram ,FaLinkedin ,FaFacebook } from "react-icons/fa";
const Heroimg = () =>{
    return(
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={intro_img} alt="introimg"/>
                <div className="conten">
                    <div className='conten_writing' >
                        <h1>Welcome I'm Mohammed</h1>
                        <p>Full-Stack Developer</p>
                    </div>
                    
                        <img className='profaile' src={profaile}></img>
                        <div className='icon'>
                            <a href='https://github.com/MohammedBouabdelloui'><FaGithub /></a>
                            <a href='https://www.instagram.com/mohamed_s_imo/'><FaInstagram /></a>
                            <a href='https://www.linkedin.com/in/mohammed-bouabdellaoui-835022254'><FaLinkedin /></a>
                            <a href='#'><FaFacebook /></a>
                        </div>
                        
                    
                    
                </div>
            </div>
        </div>
    )

}
export default Heroimg