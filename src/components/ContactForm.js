import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import TextField from "./TextField";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="frame23">
      <div className="frame24">
        <footer className="rectangle-footer" />
        <img className="icon" alt="" src="/18591063@2x.png" />
        <div className="copyright-2022-all">
          Copyright 2022 All Right Reserved By SG
        </div>
        <div className="get-news-about-container">
          <p className="blank-line">&nbsp;</p>
          <p className="blank-line">
            Get news about articles and updates in your inbox.
          </p>
        </div>
        <div className="newslleter">Newslleter</div>
       <form>
        <input type="text" name="name" id="" placeholder="NAME"/>
        <input type="email" name="email" id="" placeholder="EMAIL"/>
        <textarea  name="message" id="" cols="30" rows="10" placeholder="MESSAGE"/>
       </form>
        <div className="lorem-ipsum-dolor-container">
          <p className="blank-line">{`GET `}</p>
          <p className="blank-line">IN TOUCH</p>
        </div>
        <div className="frame-child3" />
        <div className="frame-child4" />
        <div className="frame-child5" />
        <div className="button">
          <div className="button-child" />
          <div className="send">SEND</div>
        </div>
      </div>
      <div className="frame25">
        <div className="frame26">
          <TextField
            textFieldPosition="absolute"
            textFieldTop="0px"
            textFieldLeft="0px"
          />
          <TextField
            textFieldPosition="absolute"
            textFieldTop="0px"
            textFieldLeft="336px"
          />
          <TextField
            textFieldPosition="absolute"
            textFieldTop="0px"
            textFieldLeft="666px"
          />
          <TextField
            textFieldPosition="absolute"
            textFieldTop="0px"
            textFieldLeft="997px"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
