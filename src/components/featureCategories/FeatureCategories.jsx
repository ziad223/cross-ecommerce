import './featureCategories.css';
import img1 from '../../images/products/product-1.jpg';
import img2 from '../../images/products/product-2.jpg';
import img3 from '../../images/products/product-3.jpg';
import img4 from '../../images/products/product-4.jpg';
import img5 from '../../images/products/product-5.jpg';
import img6 from '../../images/products/product-6.jpg';
import img7 from '../../images/products/product-7.jpg';
import img8 from '../../images/products/product-8.jpg';
import { FaStar } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureCategories = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });


  return (
    <div className='feature-categories'>
      <div className="container">
        <div className="title">
            <h2>Featured Categories</h2>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
            <div className="features" >
                <div className="feature" data-aos="fade-right"> 
              <img src={img1} alt="product" />
              <h3>Watches</h3>
              <h2>Xiaomi Mi Band 5</h2>
              <div>
                <div className='stars'> 
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                </div>
                <p>4.0 Review(s)</p>
              </div>
              <h1>$199.00</h1>
                </div>
                <div className="feature" data-aos="fade-up">
              <img src={img2} alt="product" />
              <h3>Watches</h3>
              <h2>Xiaomi Mi Band 5</h2>
              <div>
                <div className='stars'> 
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                </div>
                <p>4.0 Review(s)</p>
              </div>
              <h1>$199.00</h1>
                </div>
                <div className="feature" data-aos="fade-down">
              <img src={img3} alt="product" />
              <h3>Watches</h3>
              <h2>Xiaomi Mi Band 5</h2>
              <div>
                <div className='stars'> 
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                </div>
                <p>4.0 Review(s)</p>
              </div>
              <h1>$199.00</h1>
                </div>
                <div className="feature" data-aos="fade-left">
              <img src={img4} alt="product" />
              <h3>Watches</h3>
              <h2>Xiaomi Mi Band 5</h2>
              <div>
                <div className='stars'> 
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                </div>
                <p>4.0 Review(s)</p>
              </div>
              <h1>$199.00</h1>
                </div>
                <div className="feature">
              <img src={img5} alt="product" />
              <h3>Watches</h3>
              <h2>Xiaomi Mi Band 5</h2>
              <div>
                <div className='stars'> 
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                </div>
                <p>4.0 Review(s)</p>
              </div>
              <h1>$199.00</h1>
                </div>
                <div className="feature">
              <img src={img6} alt="product" />
              <h3>Watches</h3>
              <h2>Xiaomi Mi Band 5</h2>
              <div>
                <div className='stars'> 
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                </div>
                <p>4.0 Review(s)</p>
              </div>
              <h1>$199.00</h1>
                </div>
                <div className="feature">
              <img src={img7} alt="product" />
              <h3>Watches</h3>
              <h2>Xiaomi Mi Band 5</h2>
              <div>
                <div className='stars'> 
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                </div>
                <p>4.0 Review(s)</p>
              </div>
              <h1>$199.00</h1>
                </div>
                <div className="feature">
              <img src={img8} alt="product" />
              <h3>Watches</h3>
              <h2>Xiaomi Mi Band 5</h2>
              <div>
                <div className='stars'> 
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                 <FaStar className='star-icon'/>
                </div>
                <p>4.0 Review(s)</p>
              </div>
              <h1>$199.00</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCategories
