import React, {useState} from "react";
import {images} from '../../constants';
import { client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Contact.scss';

const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const { username, email, message } = formData;
  
    const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = () => {
      setLoading(true);
  
      const contact = {
        _type: 'contact',
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };
  
      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    };
  
    return (
      <>
        <h2 className="head-text">Take a Chai & chat with me</h2>
  
        <div className="app__contact-cards">
          <div className="app__contact-card ">
            <img src={images.email} alt="email" />
            <a href="mailto:mghariom17@gmail.com" className="p-text">mghariom17@gmail.com</a>
          </div>
        </div>
        {/* {!isFormSubmitted ? (
          <div className="app__contact-form app__flex">
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">
              Thank you for getting in touch!
            </h3>
          </div>
        )} */}
      </>
    );
}

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contact',
);
