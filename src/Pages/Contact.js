import React from 'react';
import "../Styles/style.css";
import { useForm } from 'react-hook-form';
function Contact() {
    const {register, handleSubmit,reset,  formState: { errors, isSubmitSuccessful }} = useForm();
    const onSubmit = (data) => {
    console.log('Form submitted:', data);
    reset(); 
  };

    return(
    <div>
       < img src="../images/bg-01.jpg" alt="About Us" className="img-fluid"/>
       <div className="container mt-5">
        <div className="row">
        <div className="col-md-6">
       {isSubmitSuccessful && (

        <div className="alert alert-success" role="alert">
          Thank you! Your message has been sent.
        </div>
        )}

      <form onSubmit={handleSubmit(onSubmit)} className="p-4 border square bg-light shadow-sm"style={{ height: '300px' }}>
        <h3 className="text-center mb-4">Send Us Message</h3>
        <div className="mb-3">

         <input type="email" placeholder="Your Email Address" className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email', {required: 'Email is required',pattern: {value: /^\S+@\S+$/i, message: 'Invalid email format'
              }})}/>{errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <textarea rows="4" placeholder="How Can We Help?"className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            {...register('message', { required: 'Message is required' })}/>
           {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
        </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          
      </form>
    </div>

    <div className="col-md-6 mt-4 mt-md-0">
      <div className="p-5 border square bg-white shadow-sm" style={{ height: '300px' }}>
        <h5>Address</h5>
        <p className="text-secondary  fs-8" >Dress shoping Center 8th floor, 379 <br></br> Hudson St, New York, NY 10018 US</p>
        <h5>Lets Talk</h5>
        <p className="text-primary fs-8" >+1 800 1236879</p>
        <h5>Sale Support</h5>
        <p className="text-primary fs-8" >contact@example.com</p>
    </div>
    </div>
    </div>
    </div>
{/* Map */}
    <div className="col-md-12 mt-4 mt-md-0">
    <div className="border rounded shadow-sm overflow-hidden" style={{ height: '300px', marginTop:'100px'}}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9698121165246!2d-74.00601508459258!3d40.73061027932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af1801ba4d%3A0xa6aebf3d7f2c9635!2s379%20Hudson%20St%2C%20New%20York%2C%20NY%2010014%2C%20USA!5e0!3m2!1sen!2sus!4v1614288464072!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
</div>
    );
}
export default Contact;