import "../css/contact.css"

const Contact = () =>{
    return (
        <section class="container container-padding" id="contact">
            <h2 class="section-header">
                <i class="glyphs--mailbox-duo" /> Contact
            </h2>
            <div class="contact-wrapper">
                <div class="contact-grid">
                    <div class="contact-info-section">
                        <div class="section-eyebrow"><i class="fas fa-comment-dots"></i> Connect directly</div>
                        <div class="main-headline">
                            Got A Project <span class="highlight">In Mind?</span>
                        </div>
                        <div style="font-weight: 700; font-size: 1.4rem; margin-bottom: 32px;">LET'S MAKE IT HAPPEN</div>
                        
                        <div class="contact-details">
                            <div class="contact-item">
                                <div class="contact-icon"><i class="fab fa-linkedin-in"></i></div>
                                <div>
                                    <div class="contact-label">LINKEDIN</div>
                                    <a href="#" target="_blank">Nobel Okelekele</a>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                                <div>
                                    <div class="contact-label">EMAIL</div>
                                    <a href="mailto:okelekelenobel@gmail.com">okelekelenobel@gmail.com</a>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="contact-icon"><i class="fas fa-globe"></i></div>
                                <div>
                                    <div class="contact-label">WEBSITE / GITHUB</div>
                                    <a href="https://github.com/lordbman" target="_blank">github.com/lordbman</a>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="contact-icon"><i class="fas fa-phone-alt"></i></div>
                                <div>
                                    <div class="contact-label">PHONE</div>
                                    <span class="inline-detail">+234 (0)7087952034</span>
                                </div>
                            </div>
                        </div>
                        <div style="font-size: 1.2rem; margin-top: 40px; letter-spacing: 1.2px; font-weight: 300;">
                            <i class="fas fa-map-marker-alt"></i> Lagos, Nigeria · Available for remote / worldwide collaboration
                        </div>
                    </div>

                    <div class="contact-form">
                        <div class="section-eyebrow"><i class="fas fa-paper-plane"></i> Send me an email</div>
                        <div class="main-headline" style="font-size: 1.8rem;">I'M VERY RESPONSIVE <br />TO MESSAGES</div>
                        
                        <form id="contactForm" action="https://formspree.io/f/mwvjrplq" method="post">
                            <div class="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="e.g. Oluwaseun Adebayo" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="hello@example.com" required />
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Project inquiry / Collaboration" required />
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Tell me about your idea, timeline, or any specific requirements..." required></textarea>
                            </div>
                            <button type="submit" class="send-btn"><i class="fas fa-location-arrow"></i> Send Message</button>
                            <div class="small-note"><i class="fas fa-lock"></i> I'll get back within 24 hours – guaranteed.</div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;