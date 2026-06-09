const MobileProjectItem = () =>{
    return (
        <div class="timeline-content" style={{ display: "flex", width: "100%", "flex-direction": "row", gap: "2rem", "align-items": "start" }}>
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
                    <div class="tech-stack">
                        <span class="tech-badge">Dart</span>
                        <span class="tech-badge">Flutter</span>
                        <span class="tech-badge">Bloc</span>
                        <span class="tech-badge">Responsive Design</span>
                        <span class="tech-badge">Modular Architecture</span>
                        <span class="tech-badge">SharedPreferences</span>
                    </div>
                </div>
                <div class="btn-group">
                    <a href="#" class="btn btn-outline"><i class="fab fa-google-play"></i> Play Store</a>
                    <a href="#" class="btn btn-outline"><i class="fab fa-app-store-ios"></i> App Store</a>
                </div>
            </div>
        </div>
    );
}

export { MobileProjectItem };