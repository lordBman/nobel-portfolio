import "../css/services.scss";

const Services = () =>{
    return (
        <section class="container container-padding" id="services">
            <div class="section-header" style={{ "margin-bottom": "8px" }}>
                <i class="glyphs--layer-group-duo" /> Core Competencies & Services
            </div>
            <p style={{ "margin-bottom": "20px" }}>Full-stack expertise · Cross-platform mobile · Cloud solutions · modern web & app craftsmanship</p>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon"><i class="fas fa-mobile-alt"></i></div>
                    <h3>Cross-Platform Mobile</h3>
                    <p>Native-quality apps for iOS, Android, and HarmonyOS using Flutter (Dart) and Android Native (Jetpack Compose, XML). I build responsive, fluid interfaces that feel at home on every device — from phones to tablets.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">Flutter</span>
                        <span class="tech-badge">Android Native</span>
                        <span class="tech-badge">Jetpack Compose</span>
                        <span class="tech-badge">HarmonyOS</span>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon"><i class="fas fa-globe"></i></div>
                    <h3>Full-Stack Web Apps</h3>
                    <p>End-to-end web solutions: dynamic frontends with React, Bootstrap, and responsive design, paired with robust backends using NodeJS, Express, and MySQL/Prisma. I also design RESTful APIs and integrate third-party services.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">React</span>
                        <span class="tech-badge">SolidJS</span>
                        <span class="tech-badge">NodeJS / Express</span>
                        <span class="tech-badge">Prisma ORM</span>
                        <span class="tech-badge">Drizzle</span>
                        <span class="tech-badge">REST API</span>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon"><i class="fab fa-microsoft"></i></div>
                    <h3>Azure Cloud & DevOps</h3>
                    <p>Deploy and manage scalable applications on Azure (Web Apps, Function Apps, Logic Apps, Containers). I design CI/CD pipelines with Git + Azure DevOps, troubleshoot platform issues, and integrate Azure Storage, SQL, and other resources.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">Azure App Service</span>
                        <span class="tech-badge">CI/CD Pipelines</span>
                        <span class="tech-badge">Function Apps</span>
                        <span class="tech-badge">DevOps</span>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon"><i class="fa fa-paint-brush"></i></div>
                    <h3>UI/UX Design and Implementation</h3>
                    <p>Pixel-perfect conversion of Figma / Adobe XD designs into responsive, accessible frontend code using HTML5, CSS3, Tailwind, Bootstrap, React and Next.js. I also prototype designs in Figma to bridge the gap between vision and reality.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">Figma Design</span>
                        <span class="tech-badge">Figma to Code</span>
                        <span class="tech-badge">Responsive Design</span>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon"><i class="fas fa-database"></i></div>
                    <h3>Backend & Database Integration</h3>
                    <p>Seamless connection between frontend and backend systems using Firebase, Supabase, or custom NodeJS APIs. I manage relational (MySQL) and NoSQL databases with migrations using Prisma, and ensure real-time sync where needed.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">Firebase / Supabase</span>
                        <span class="tech-badge">MySQL / Prisma / Drizzle</span>
                        <span class="tech-badge">REST / GraphQL</span>
                        <span class="tech-badge">Real-time Data</span>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon"><i class="fas fa-rocket"></i></div>
                    <h3>Performance & Scalability</h3>
                    <p>Optimize asset delivery, code splitting, and follow modern best practices (lazy loading, caching, efficient state management with BLoC/Redux). I build modular, test-driven applications that scale from startup to enterprise.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">TDD</span>
                        <span class="tech-badge">Modular Design</span>
                        <span class="tech-badge">BLoC / Redux</span>
                        <span class="tech-badge">Web Vitals</span>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon"><i class="fas fa-gamepad"></i></div>
                    <h3>Game Dev & Embedded Hobby</h3>
                    <p>2D game development using LibGDX (Java) and embedded systems programming (C++ / Assembly) for robotics. Although a hobby, this sharpens my low-level logic and performance-oriented mindset, bringing creativity to software solutions.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">LibGDX</span>
                        <span class="tech-badge">Godot</span>
                        <span class="tech-badge">C++ / Assembly</span>
                        <span class="tech-badge">Robotics</span>
                        <span class="tech-badge">Game Mechanics</span>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon"><i class="fas fa-seedling"></i></div>
                    <h3>Continuous Growth</h3>
                    <p>I stay on top of emerging trends in frontend, mobile, and cloud ecosystems. From new Flutter features to Azure innovations, I bring fresh, efficient solutions to every project — always learning, always evolving.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">React</span>
                        <span class="tech-badge">SolidJS</span>
                        <span class="tech-badge">Flutter</span>
                        <span class="tech-badge">AI tooling</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services