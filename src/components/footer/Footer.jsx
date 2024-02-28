import './footer.css'
import logo from '../../images/team/logo.svg'
import {FaFacebook , FaTwitter , FaWhatsapp , FaInstagram , FaTiktok} from 'react-icons/fa';
import img1 from '../../images/footer visa/1.png';
import img2 from '../../images/footer visa/2.png';
import img3 from '../../images/footer visa/3.png';
import img4 from '../../images/footer visa/4.png';
import img5 from '../../images/footer visa/5.png';
import img6 from '../../images/footer visa/6.png';


const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-content">
    <div className="footer-up">
        <div className="footer-up-left">
      <img src={logo} alt="" />
        </div>
        <div className="footer-up-middle">
            <h2>Subscribe to our Newsletter</h2>
            <h3>Get all the latest information, Sales and Offers.</h3>
        </div>
        <div className="footer-up-right">
            <input type="text" placeholder='Email address...' />
            <button>Subscribe</button>
        </div>
        
      </div>
      <hr />

      <div className="footer-middle">
        <div className="footer-middle-desc">
            <h2>Bravo Company</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatibus? Inventore excepturi harum eum expedita! Cupiditate temporibus provident omnis voluptatibus libero architecto aperiam nobis, fugiat officiis cum voluptas, sequi quasi.
            </p>
        </div>
        <div className="footer-middle-social">
            <h2>Social Media</h2>
            <ul>
                <li><a href="#"><FaFacebook className='footer-icon'/></a></li>
                <li><a href="#"><FaTwitter className='footer-icon'/></a></li>
                <li><a href="#"><FaWhatsapp className='footer-icon'/></a></li>
                <li><a href="#"><FaInstagram className='footer-icon'/></a></li>
                <li><a href="#"><FaTiktok className='footer-icon'/></a></li>
            </ul>
        </div>
        <div className="footer-middle-links">
            <h2>Useful Links</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bootom">
        <h3>Copyright by@Bravo Team - 2024</h3>
        <div>
     <img src={img1} alt="visa" />
     <img src={img2} alt="visa" />
     <img src={img3} alt="visa" />
     <img src={img4} alt="visa" />
     <img src={img5} alt="visa" />
     <img src={img6} alt="visa" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
