import './testimonails.css';
import img1 from '../../images/testimonails/1.webp';
import img2 from '../../images/testimonails/2.jpg';
import img3 from '../../images/testimonails/3.png';
import img4 from '../../images/testimonails/4.webp';
import {FaStar} from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonails = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay : true,
        autoplaySpeed :1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className='testimonails'>
      <Slider {...settings}>
        <div className="testimonail">
            <img src={img1} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus iste quaerat doloremque fugit id libero ipsum? Laborum rerum temporibus, ipsam incidunt, eaque, vero accusantium quidem numquam sit hic non.
            </p>
            <div>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
            </div>
            <h2>Esraa Samy</h2>
            <h3>FuulStack Developer</h3>
        </div>
        <div className="testimonail">
            <img src={img2} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus iste quaerat doloremque fugit id libero ipsum? Laborum rerum temporibus, ipsam incidunt, eaque, vero accusantium quidem numquam sit hic non.
            </p>
            <div>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
            </div>
            <h2>Esraa Samy</h2>
            <h3>FuulStack Developer</h3>
        </div>
        <div className="testimonail">
            <img src={img3} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus iste quaerat doloremque fugit id libero ipsum? Laborum rerum temporibus, ipsam incidunt, eaque, vero accusantium quidem numquam sit hic non.
            </p>
            <div>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
            </div>
            <h2>Esraa Samy</h2>
            <h3>FuulStack Developer</h3>
        </div>
        <div className="testimonail">
            <img src={img4} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus iste quaerat doloremque fugit id libero ipsum? Laborum rerum temporibus, ipsam incidunt, eaque, vero accusantium quidem numquam sit hic non.
            </p>
            <div>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
           <FaStar className='star-icon'/>
            </div>
            <h2>Esraa Samy</h2>
            <h3>FuulStack Developer</h3>
        </div>
    </Slider>
    </div>
  )
}

export default Testimonails
