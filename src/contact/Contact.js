
import './index.css'
import  mapImages from '../img/image 112.png'
import { Container } from 'react-bootstrap'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yul4jc3', 'template_1bdy4xg', form.current, 'J84A-d6yZA9GRSQcQ')
        .then((result) => {
            form.current.reset(); // Clear the form fields
            window.location.reload(); // Reload the page
        }, (error) => {
            console.log(error.text);
        });

      
        
    };

  return (

<div className='contact-parent'>
    <Container className='container-contact'>



        <div className="content-wrapper">

<h1>Contact Us</h1>
<p>Connect with us today by reaching out through our contact form. We value your feedback and inquiries, and our team is ready to assist you with any questions you may have.</p>


        </div>

<section className="contact" id="contact">


    <form ref={form} onSubmit={sendEmail}>



<div className="inputbox">
    <div className="content-form">

    <label >Name</label>
    <input name='user_name' type="text" placeholder='Enter your Name'  required />
  
    </div>

<div className="content-form">

    <label >Email</label>
    <input name='user_email'  type=
    "email"   required  placeholder='Enter your Email'/>
</div>
    </div>









<div className="inputbox-percent-messages">
    <label >Messages</label>
    <textarea
    
    name="message"
          rows="4"
          cols="50"
          placeholder="Write Your Messages"

        ></textarea>
</div>



<div className="inputbox-percent">
    <button className="btn" type="submit" value="Send">
        Submit
    </button>
</div>





    </form>



</section>
    
    </Container>

<div className="map-image">
<img src={mapImages} alt="" />
</div>


</div>
  )
}

export default Contact


