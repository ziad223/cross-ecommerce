import './header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

  return (
    <div className='header'>
      <div className="container">
        <div className="header-content">
            <div className="header-left" data-aos="fade-right">
                <div>
                    <h2>No restocking fee ($35 savings)</h2>
                    <h3>M75 Sport Watch</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                    </p>
                    <h2 className='pr'>Now Only $320.99</h2>
                    <button>Shop Now</button>
                </div>
            </div>
            <div className="header-right"  data-aos="fade-left">
                <div className="header-right-up">
                    <div>
                    <h2>New line required</h2>
                    <h3>iPhone 12 Pro Max</h3>
                    <h1>$259.99</h1>
                    </div>
                </div>
                <div className="header-right-down">
                    <div>
                        <h3>
                        Weekly Sale!
                        </h3>
                        <h2>
                        Saving up to 50% off all online store items this week.
                        </h2>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
