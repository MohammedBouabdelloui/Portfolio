import './HeroimgStyle.css';
import intro_img from './img/intro.jpg';
import { Link, LINK} from "react-router-dom";
const Heroimg = () =>{
    return(
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={intro_img} alt="introimg"/>
                <div className="conten">
                    <p>HI, I'M A FREELANCER</p>
                    <h1>WEB PROGRAMMER</h1>
                    <div>
                        <Link to="/Projet" className='btn'>PROJET</Link>
                        <Link to="/Contact" className='btn light'>CONTACT</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Heroimg