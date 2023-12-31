import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from "../../assets/resume.pdf";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import Header from "../../components/header/Header";
import { TypeAnimation } from 'react-type-animation';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="div-top">
       {/*<DisplayLottie animationData={greeting.animation}  ></DisplayLottie>*/}
        </div>
        <div className="greeting-main">
          
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                
                {greeting.title}{" "}
                {/*<span className="wave-emoji">{emoji("👋")}</span>*/}
              </h1>
              <p className={
                isDark
                  ? "dark-mode greeting-text-p "
                  : "greeting-text-p subTitle"
              }> 
              <TypeAnimation
               
      sequence={[
        'Software Engineer', // Types 'One'
        1000, // Waits 1s
        'Full Stack Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Curious Learner', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      //style={{ fontSize: '2em', display: 'inline-block' }}
    />
    </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
               
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={pdf}
                  />

                )}
              </div>
            </div>
          </div>
          {/*<div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
            </div>*/}
        </div>
        <div className="div-bottom">
          <Header></Header>
        </div>
      </div>
    </Fade>
  );
}
