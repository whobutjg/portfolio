import { useToasts } from 'react-toast-notifications';
import React from 'react';
import emailjs from 'emailjs-com';


class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  sendMessage(event) {
    event.preventDefault();
    // if (!this.validateMail()) {
    //   return;
    // }
    const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: "jgiardinajg@gmail.com",
      message: this.state.message
    }
    emailjs
      .send("gmail", "portfoliosite", templateParams, "template_enn28ul")
      .then(
        function(response) {
          useToasts.success("Your message has successfully sent!", {
            position: useToasts.POSITION.BOTTOM_CENTER
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          useToasts.error("Your message was not able to be sent");
        }
      );
    this.setState({
      name: "",
      email: "",
      feedback: ""
    });
  }

  render() {
    return (
      <>
      <div id="contact-form">
         <form
          className="ui form"
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <textarea
            id="name"
            name="name"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Your name"
            required
            value={this.state.name}
            style={{ width: "50%" }}
            rows={1}
          />
          <br />
          <textarea
            id="email"
            name="email"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Email address"
            required
            value={this.state.email}
            // error={this.state.errors.email}
            style={{ width: "50%" }}
            rows={1}
          />
          <br />
          <textarea
            id="message"
            name="message"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Message.."
            required
            value={this.state.feedback}
            style={{ width: "50%", height: "250px" }}
          />
          <br />
          <input
            type="button"
            value="Send"
            className="ui button"
            style={{
              fontFamily: "Montserrat",
              fontSize: "20px",
              color: "black"
            }}
            onClick={this.sendMessage.bind(this)}
          />
        </form>
      </div>
      </>
    )
  }
} 

export default ContactForm;