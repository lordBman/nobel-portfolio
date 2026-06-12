import { createAsync, useParams } from "@solidjs/router";
import { getProject, type MobileProject, type WebProject } from "../data";

interface Data{ project?: MobileProject | WebProject, loading: boolean }

const loader = async(id: string): Promise<Data> =>{
    try{
        const result = await getProject(id);
        
        return { project: result, loading: false }
    }catch(error){
        console.error(error)
    }
    return { loading: false }
}

const Project = () => {
    const { id } = useParams();
    const data = createAsync<Data>(() => loader(id!), { initialValue: { loading: true } });
    
    return (
        <section class="container container-padding" id="projects" style={{ display: "flex", "flex-direction": "row", gap: "2rem", "align-items": "start" }}>
            <img style={{ width: "200px", "border-radius": "30px", border: "solid 2px #e2e8f0" }} src={"https://raw.githubusercontent.com/lordBman/bweatherflutter/refs/heads/main/Screenshot%202024-06-01%20090147.png"} alt="screenshot" />
            <div class="card-content" style={{ flex: 1, display: "flex", "flex-direction": "column" }}>
                <div style={{ flex: 1 }}>
                    <h3>BWeather</h3>
                    <div class="platform-icons">
                        <span><i class="fab fa-android"></i> Android</span>
                        <span><i class="fab fa-apple"></i> iOS</span>
                        <span><i class="fas fa-tablet-alt"></i> Tablet (adaptive)</span>
                    </div>    
                    <p class="desc">BWeather is a clean, feature‑rich weather application built for both mobile and tablet form factors. It provides real‑time weather information with a focus on intuitive UX and scalable code structure. The app demonstrates robust state handling, responsive layouts, and a polished dual‑theme experience.</p>
                    
                    <div class="section-subtitle"><i class="fas fa-star"></i> Key Features</div>
                    <div class="features-grid">
                        <div class="feature-item"><i class="fas fa-temperature-low"></i> Current conditions (feels like, wind, humidity)</div>
                        <div class="feature-item"><i class="fas fa-calendar-week"></i> 5‑day forecast + hourly breakdown</div>
                        <div class="feature-item"><i class="fas fa-map-marker-alt"></i> Location management & favorite cities</div>
                        <div class="feature-item"><i class="fas fa-moon"></i> Light & Dark mode (system / manual)</div>
                        <div class="feature-item"><i class="fas fa-tablet"></i> Tablet‑optimised responsive layout</div>
                        <div class="feature-item"><i class="fas fa-chart-line"></i> Real-time weather API integration</div>
                    </div>

                    <div class="section-subtitle"><i class="fas fa-microchip"></i> Technical Highlights</div>
                    <ul class="highlight-list">
                        <li><strong>BLoC</strong> – Centralised state management (weather data, theme, location) ensuring predictable updates and testability.</li>
                        <li><strong>Modular design</strong> – Separated into features (weather, settings, location search, theme) for easier maintenance and scalability.</li>
                        <li><strong>API integration</strong> – Fetches live weather data via REST; handles loading, error, and empty states gracefully.</li>
                        <li><strong>Responsive UI</strong> – Custom <code>LayoutBuilder</code> and <code>MediaQuery</code> breakpoints for phone/tablet adaptation.</li>
                    </ul>
                    <div><span class="tech-badge">Dart</span><span class="tech-badge">Flutter</span></div>
                </div>
                <div class="btn-group">
                    <a href="#" class="btn btn-primary" target="_blank"><i class="fab fa-github"></i> Source code (demo)</a>
                    <a href="#" class="btn btn-outline"><i class="fab fa-google-play"></i> Android APK</a>
                    <a href="#" class="btn btn-outline"><i class="fab fa-app-store-ios"></i> App Store</a>
                </div>
            </div>
        </section>
    );
}

export default Project;