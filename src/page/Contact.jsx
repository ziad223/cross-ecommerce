import React from 'react'

const Contact = () => {
  return (
    <div>
     <h1 className='title'>Contact</h1>
     <div className="contact-content container">
        <div className="contact-left">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109953.89570010334!2d31.597683434480658!3d30.54763028241135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f19b2daeb3bf%3A0x6998377cc5452529!2z2LTYsdmD2Kkg2KjYsdin2YHZiCDZhNij2KzZh9iy2Kkg2KfZhNij2LfZgdin2KEg2YjYp9mE2KPZhtiw2KfYsQ!5e0!3m2!1sar!2seg!4v1708345606252!5m2!1sar!2seg" ></iframe>
        </div>
        <div className="contact-right">
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Your Email' />
            <input type="text" placeholder='Your Phone' />
            <textarea  placeholder='Your Message'></textarea>
        </div>
     </div>
    </div>
  )
}

export default Contact
