import React from 'react';
import './contact.css';
function Contact() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="contact.css" />
      <div className="contact-form-container">
        <form action="#" className="contact-form">
          <div className="contact-input-container">
            <input type="text" className="input" placeholder="Name" />
          </div>
          <div className="contact-input-container">
            <input type="text" className="input" placeholder="Email" />
          </div>
          <div className="contact-input-container">
            <textarea className="msg-input" cols={30} rows={10} placeholder="your message" defaultValue={""} />
          </div>
          <div className="contact-input-container">
            <input type="submit" className="input" defaultValue="send" />
          </div>
        </form>
      </div>
    </div>
  );  
}

export default Contact;
