
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Melis Keşen",
  title: "Hi all, I'm Melis",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building"
  ),
  displayGreeting: true 
};

export {
  illustration,
  greeting,
  splashScreen,
};
