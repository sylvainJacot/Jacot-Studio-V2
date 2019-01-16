import React, { Component } from 'react';
import '../stylesheets/components/header.scss'
import Logo from '../images/Logo.svg';
import FacebookIC from '../images/FacebookIC.svg';
import InstagramIC from '../images/InstagramIC.svg';
import MessengerIC from '../images/MessengerIC.svg';
import WhatsAppIC from '../images/WhatsAppIC.svg';
import PropTypes from 'prop-types';

const socials = [
  {href:"/", title:"Link to jacot studio's Facebook page", source:`${FacebookIC}`, alt:"facebook"},
  {href:"/", title:"Link to jacot studio's instagram page", source:`${InstagramIC}`, alt:"Instagram"},
  {href:"/", title:"Link to jacot studio's Messenger page", source:`${MessengerIC}`, alt:"Messenger"},
  {href:"/", title:"Link to jacot studio's Whatsapp chat", source:`${WhatsAppIC}`, alt:"What's app"},
];

class header extends Component {
    render() {
      return (
        <div className="HeaderContainer">
        <img src={Logo} alt="Logo Jacot Studio"/>
        <div className="SocialsContainer">
        {socials.map((social, index) =>(
          <a key={`social-${index}`} href={social.href} title={social.title}>
            <img src={social.source} alt={social.alt}/>
          </a>
        ))}
        </div>
        </div>
      );
    }
  }
  
  export default header;