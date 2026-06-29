import { SolidTyper } from "solid-typer";
import nobelImage from '../assets/nobel.jpg';

import "../css/about.scss";

const About = () => {
    return (
        <section class="container" id="about" style={{ display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
            <div class="hero">
                <div class="hero-avatar">
                    <div class="avatar">
                        <img src={nobelImage} alt="Nobel Okelekele" style={{ width: '100%', height: '100%', 'object-fit': 'cover', 'border-radius': '50%' }} />
                    </div>
                </div>
                <div class="hero-content">
                    <span class="hero-badge"><i class="fas fa-code"></i> Mobile App Dev</span>
                    <div>
                        <span style={{ "font-size": "1.0rem", "font-weight": "400" }}>Hi, my name is</span>
                        <h2>Nobel Bobby Okelekele</h2>
                        <SolidTyper style={{ "font-size": "1.6rem", "font-family": "monospace", "font-weight": "lighter" }} text={[ "I am a Software Engineer", "I am a Mobile App Developer", "Building cross-platform excellence.", "Crafting Digital Experiences with Code"]} typingSpeed={80} backspaceSpeed={30} loop={true} cursor={true} />
                    </div>
                    <p>Highly motivated and skilled Cross platform Mobile developer with three years of experience in software development. Proficient in various programming languages and frameworks, including Flutter, Android Native(Jetpack Composer and XML), React, React Native, and NodeJS. Strong problem-solving skills and a passion for learning new technologies. Graduated with a Bachelor's degree in Electrical Electronics Engineering from Niger Delta University in 2019.</p>
                    <div class="contact-info">
                        <div class="contact-chip"><i class="fas fa-map-marker-alt"></i> Lagos, Nigeria</div>
                        <div class="contact-chip"><i class="fas fa-phone-alt"></i> +234 (0)7087952034</div>
                        <div class="contact-chip"><i class="fas fa-envelope"></i> okelelekenobel@gmail.com</div>
                        <div class="contact-chip"><i class="fab fa-github"></i> github.com/lordbman</div>
                    </div>
                    <div>
                        <a href="path/to/resume" class="btn-primary"><i class="fa fa-download" aria-hidden="true"></i> Download Resume</a>
                        <a href="#contact" class="btn-outline" style={{ "margin-left": '16px' }}><i class="fa fa-envelope" aria-hidden="true"></i> Contact Me</a>
                    </div>
                </div>    
            </div>
        </section>
    );
}

export default About;