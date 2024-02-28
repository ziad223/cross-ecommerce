import { FaTruck } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <h1 className='title' >Services</h1>
      <div className="services container">
   <div className="service">
        <FaTruck/>
        <p>Free Shipping</p>
   </div>
   <div className="service">
        <FaTruck/>
        <p>Free Shipping</p>
   </div>
   <div className="service">
        <FaTruck/>
        <p>Free Shipping</p>
   </div>
   <div className="service">
        <FaTruck/>
        <p>Free Shipping</p>
   </div>
      </div>
    </div>
  )
}

export default Services
