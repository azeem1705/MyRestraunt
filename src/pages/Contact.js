import React from "react";
import Layout from "../components/Layout";
import "../styles/contactus.css";
import { Divider } from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Divider color="white"/>
      <section id="contact">
  
  <h1 className="section-header">Contact</h1>
  
  <div className="contact-wrapper">
  

    
    <form id="contact-form" className="form-horizontal" role="form">
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required />
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
        </div>
      </div>

      <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
          <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
 
    
      <div className="direct-contact-container">

        <ul className="contact-list">
          <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Adilabad, Telanagana</span></i></li>
          
          <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
          
          <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">bcom.chaiwala@gmail.com</a></span></i></li>
          
        </ul>
          <br/>
        <hr/>
        <ul className="social-media-list">
          <li><a href="#" target="_blank" className="contact-icon">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="fb" width="60px" height="60px"/>
          </a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="fb" width="60px" height="60px"/></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644" alt="fb" width="60px" height="60px"/></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" alt="fb" width="60px" height="60px"/></a>
          </li>       
        </ul>
        <hr/>

        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
  </div>
  
</section>  
  <Divider color="white"/>
  
    </Layout>
  );
};

export default Contact;
