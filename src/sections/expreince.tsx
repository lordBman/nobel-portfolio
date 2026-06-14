import "../css/experience.scss";

const Experience = () =>{
    return (
        <section class="container container-padding" id="experience">
            <h2 class="section-header">
                <i class="glyphs--laptop-code-duo" /> Experience
            </h2>

            <div class="timeline" style={{ "max-width": "1000px", margin: "0 auto" }}>
                <div class="timeline-item">
                    <div class="timeline-left">
                        <span class="year-badge">2017 — 2019</span>
                    </div>
                    <div class="timeline-icon">
                        <div class="icon-circle"><i class="fas fa-microchip"></i></div>
                    </div>
                    <div class="timeline-content">
                        <div class="role-title">
                            Senior Engineer & Technical Instructor
                            <span class="period-mobile"><i class="far fa-calendar-alt"></i> 2017 – 2019</span>
                        </div>
                        <div class="company">Golden Viosam LTD · Full‑stack & Embedded</div>
                        <div class="description">
                            Led software development training and delivered high‑performance web/mobile solutions. Mentored junior engineers, worked on embedded systems (robotics using C++ and assembly) as both academic project and hobby. Brought deep understanding of entire development stack with focus on scalable architectures.
                        </div>
                        <div class="tech-stack">
                            <span class="tech-badge">C++ / Assembly</span>
                            <span class="tech-badge">Embedded Systems</span>
                            <span class="tech-badge">Technical Mentorship</span>
                            <span class="tech-badge">Web fundamentals</span>
                            <span class="tech-badge">Agile</span>
                        </div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-left">
                        <span class="year-badge">2023</span>
                    </div>
                    <div class="timeline-icon">
                        <div class="icon-circle"><i class="fas fa-mobile-alt"></i></div>
                    </div>
                    <div class="timeline-content">
                        <div class="role-title">
                            Mobile App Developer (Flutter & Android)
                            <span class="period-mobile"><i class="far fa-calendar-alt"></i> 2020 – present</span>
                        </div>
                        <div class="company">Essential NG + Freelance · Cross‑platform & Games</div>
                        <div class="description">
                            Worked as Mobile App Developer at Essential NG (Flutter, 2023). Developed and maintained Android/iOS apps using Flutter and Android Native (Jetpack Compose, XML). Designed 2D games with LibGDX framework. Collaborated directly with clients to define specs, estimate timelines, and deliver high-quality solutions. Implemented test‑driven development and Git version control.
                        </div>
                        <div class="tech-stack">
                            <span class="tech-badge">Flutter</span>
                            <span class="tech-badge">Android Native</span>
                            <span class="tech-badge">Jetpack Compose</span>
                            <span class="tech-badge">LibGDX</span>
                            <span class="tech-badge">TDD</span>
                            <span class="tech-badge">Git</span>
                            <span class="tech-badge">Firebase/Supabase</span>
                        </div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-left">
                        <span class="year-badge">2022 — Current</span>
                    </div>
                    <div class="timeline-icon">
                        <div class="icon-circle"><i class="fas fa-laptop-code"></i></div>
                    </div>
                    <div class="timeline-content">
                        <div class="role-title">
                            Web & Back‑End Developer
                            <span class="period-mobile"><i class="far fa-calendar-alt"></i> 2022 – present</span>
                        </div>
                        <div class="company">Freelance · React, NodeJS, Express, MySQL</div>
                        <div class="description">
                            Built responsive and dynamic websites using React + Bootstrap. Created RESTful APIs with Express (NodeJS), managed databases with MySQL and Prisma ORM. Leveraged Firebase and Supabase as backend solutions. Convert UI/UX (Figma) designs to fully functional websites and also designed UI/UX using Figma. Utilized Git for version control and team collaboration.
                        </div>
                        <div class="tech-stack">
                            <span class="tech-badge">React</span>
                            <span class="tech-badge">NodeJS / Express</span>
                            <span class="tech-badge">MySQL / Prisma</span>
                            <span class="tech-badge">Firebase</span>
                            <span class="tech-badge">Supabase</span>
                            <span class="tech-badge">Figma</span>
                            <span class="tech-badge">Bootstrap</span>
                        </div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-left">
                        <span class="year-badge">2022 — Current</span>
                    </div>
                    <div class="timeline-icon">
                        <div class="icon-circle"><i class="fab fa-microsoft"></i></div>
                    </div>
                    <div class="timeline-content">
                        <div class="role-title">
                            Azure App Service Specialist
                            <span class="period-mobile"><i class="far fa-calendar-alt"></i> 2022 – present</span>
                        </div>
                        <div class="company">Tek Experts · Cloud & DevOps</div>
                        <div class="description">
                            Website and API deployment to Azure platform (Web Apps, Static Web App, Function App, Container Apps, Logic App). Designed and managed Git + Azure DevOps deployment pipelines. Troubleshot platform issues, configured App Service integrations with Azure Storage, SQL Database and more. Automated workflows using Azure Functions & Logic Apps. Worked with multi‑framework support: Blazor, Flask, WordPress, React, NextJS, Java Spring.
                        </div>
                        <div class="tech-stack">
                            <span class="tech-badge">Azure App Service</span>
                            <span class="tech-badge">Azure DevOps</span>
                            <span class="tech-badge">CI/CD Pipelines</span>
                            <span class="tech-badge">Function Apps</span>
                            <span class="tech-badge">Logic Apps</span>
                            <span class="tech-badge">Docker / Containers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience