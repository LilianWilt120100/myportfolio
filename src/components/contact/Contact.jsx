import './Contact.css';
import phone from "../../img/phone.png";
import mail from "../../img/mail.png";
import adresse from "../../img/adresse.png";
import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    const formRef = useRef();
    const [done, setDone]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_bmq3cci', 'template_48b9q1o', formRef.current, 'hABKJEjaI7MILJ9bB')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

    }
  return (
    <div class="c">
        <div class="c-bg"></div>
            <div class="c-wrapper">
                <div class="c-left">
                    <h1 class="c-title">Contact</h1>
                    <div class="c-info">
                        <div class="c-info-item">
                            <img src={phone} alt="" class="c-icon" />
                            0623819308
                        </div>
                        <div class="c-info-item">
                            <img src={mail} alt="" class="c-icon" />
                            lilian.wilt@hotmail.com
                        </div>
                        <div class="c-info-item">
                            <img src={adresse} alt="" class="c-icon" />
                            55220 - Villers sur Meuse
                        </div>
                    </div>
                </div>
                <div class="c-right">
                    <p class="c-desc">
                        <b>What's your story ?</b> We can discuss about anything you want. Simply enter the informations and submit this form. Enjoy it !
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor : darkMode && "#333", color : darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor : darkMode && "#333", color : darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor : darkMode && "#333", color : darkMode && "white"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor : darkMode && "#333", color : darkMode && "white"}} name="message" placeholder="Message" rows="5"></textarea>
                        <button>Submit</button>
                        {done && "Thank you for your submit !"}
                    </form>
                </div>
            </div>
        
    </div>
  )
}

export default Contact