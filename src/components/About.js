import React from 'react';
import ContactForm from './ContactForm';
import typingEffect from './TypingEffect';

const About = () => {
  return ( 
    <>
      <div id="about">
        <p>Welcome...</p>
        <p>I'm Joseph Giardina, but everyone calls me 'Joey' or 'JG'.</p>
        <p>I'm a(n) {typingEffect}from the NYC Metropolitan Area.</p>
        <p>For collaboration, consultation, or to connect, feel free to use the 'contact me' form below or connect via LinkedIn.</p>
      </div>
      <div id="form">
        <ContactForm />
      </div>
    </>
    )      
}

export default About;
