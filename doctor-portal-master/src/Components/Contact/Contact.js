import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div id='Contact'>
          <div className="container">
             <h4>Contact Us</h4>
             <h2>Stay Connected with Us</h2>
             <input type="text" placeholder='Email address'/>
             <input type="text" placeholder='subject'/>
             <textarea name="" placeholder='Your message'></textarea>
             <input type="submit" value="Submit" className='button'/>
          </div>
        </div>
    );
};

export default Contact;