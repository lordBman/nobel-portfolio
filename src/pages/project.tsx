import { createAsync, useParams } from "@solidjs/router";
import { getProject, type MobileProject, type WebProject } from "../data";
import { For, Show } from "solid-js";

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
        <Show when={data().project}>
            <section class="container container-padding" id="projects" style={{ display: "flex", "flex-direction": "row", gap: "2rem", "align-items": "start" }}>
                <img style={{ width: "200px", "border-radius": "30px", border: "solid 2px #e2e8f0" }} src={data().project?.image} alt="screenshot" />
                <div class="card-content" style={{ flex: 1, display: "flex", "flex-direction": "column" }}>
                    <div class="surface-content" style={{ flex: "none" }}>
                        <h3 style={{ display: "flex", "flex-direction": "row", "align-items": "center", gap: "8px" }}>
                            <div class="icon-circle" style={{ "box-shadow": "none", "font-size": "28px" }}><i class="glyphs--mobile-bold"></i></div>{data().project?.name}
                        </h3>
                        <div class="platform-icons">
                            <Show when={(data().project as any).platforms?.android}>
                                <span><i class="fab fa-android"></i> Android</span>
                            </Show>
                            <Show when={(data().project as any).platforms.ios}>
                                <span><i class="fab fa-apple"></i> iOS</span>
                            </Show>
                            <Show when={(data().project as any).platforms.harmonyOS}>
                                <span>
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Harmonyos--Streamline-Simple-Icons" height="16">
                                        <path d="M1.861 0H3.59v3.548h3.861V0H9.19v8.883H7.458V5.136H3.59v3.746H1.858Zm8.248 8.883ZM13.854 0h1.706l2.809 4.7h0.1L21.278 0h1.719v8.883h-1.719v-4.38l0.1 -1.489h-0.1l-2.334 3.983h-1.039l-2.347 -3.983h-0.1l0.1 1.489v4.38h-1.706Zm4.702 21.648a4.082 4.082 0 0 1 -1.154 -0.161 3.417 3.417 0 0 1 -1.01 -0.484 3.5 3.5 0 0 1 -0.8 -0.782 3.817 3.817 0 0 1 -0.538 -1.092l1.666 -0.62a2.411 2.411 0 0 0 0.643 1.116 1.683 1.683 0 0 0 1.207 0.434 2.173 2.173 0 0 0 0.524 -0.062 1.749 1.749 0 0 0 0.459 -0.2 1.02 1.02 0 0 0 0.328 -0.335 0.88 0.88 0 0 0 0.118 -0.459 1.052 1.052 0 0 0 -0.092 -0.447 1.031 1.031 0 0 0 -0.315 -0.373 2.538 2.538 0 0 0 -0.564 -0.335 8.135 8.135 0 0 0 -0.852 -0.335l-0.577 -0.2a4.753 4.753 0 0 1 -0.774 -0.335 3.44 3.44 0 0 1 -0.7 -0.509 2.662 2.662 0 0 1 -0.525 -0.695 2.093 2.093 0 0 1 -0.2 -0.918 2.248 2.248 0 0 1 0.21 -0.968 2.433 2.433 0 0 1 0.616 -0.794 2.87 2.87 0 0 1 0.957 -0.533 3.726 3.726 0 0 1 1.246 -0.2 3.57 3.57 0 0 1 1.22 0.186 2.783 2.783 0 0 1 0.879 0.459 2.468 2.468 0 0 1 0.59 0.608 2.9 2.9 0 0 1 0.328 0.633l-1.56 0.62a1.55 1.55 0 0 0 -0.485 -0.67 1.387 1.387 0 0 0 -0.944 -0.3 1.655 1.655 0 0 0 -0.957 0.261 0.754 0.754 0 0 0 -0.38 0.658 0.843 0.843 0 0 0 0.367 0.682 4.232 4.232 0 0 0 1.167 0.534l0.59 0.186a6.271 6.271 0 0 1 1.023 0.434 2.948 2.948 0 0 1 0.8 0.57 2.191 2.191 0 0 1 0.511 0.769 2.44 2.44 0 0 1 0.183 0.98 2.317 2.317 0 0 1 -0.3 1.2 2.559 2.559 0 0 1 -0.747 0.819 3.361 3.361 0 0 1 -1.036 0.484 4.184 4.184 0 0 1 -1.128 0.161Zm-13.028 0a4.441 4.441 0 0 1 -3.23 -1.34 4.757 4.757 0 0 1 -0.956 -1.476 4.912 4.912 0 0 1 -0.339 -1.824 4.813 4.813 0 0 1 0.339 -1.811 4.569 4.569 0 0 1 0.956 -1.477 4.38 4.38 0 0 1 1.427 -0.992 4.5 4.5 0 0 1 1.8 -0.36 4.417 4.417 0 0 1 1.79 0.36 4.343 4.343 0 0 1 1.44 0.992 4.418 4.418 0 0 1 0.944 1.477 4.67 4.67 0 0 1 0.351 1.811 4.765 4.765 0 0 1 -0.351 1.824 4.589 4.589 0 0 1 -0.944 1.476 4.495 4.495 0 0 1 -3.23 1.34Zm0 -1.588a2.822 2.822 0 0 0 1.125 -0.223 2.761 2.761 0 0 0 0.92 -0.621 2.723 2.723 0 0 0 0.617 -0.955 3.321 3.321 0 0 0 0.23 -1.253 3.227 3.227 0 0 0 -0.23 -1.24 2.7 2.7 0 0 0 -0.617 -0.968 2.759 2.759 0 0 0 -0.92 -0.62 2.821 2.821 0 0 0 -1.125 -0.223 2.856 2.856 0 0 0 -2.057 0.844 2.946 2.946 0 0 0 -0.617 0.968 3.388 3.388 0 0 0 -0.218 1.24 3.488 3.488 0 0 0 0.218 1.253 2.972 2.972 0 0 0 0.617 0.955 2.856 2.856 0 0 0 2.057 0.843Zm4.972 1.389Zm-8.269 1.039h6.5V24h-6.5Z" fill="currentColor" stroke-width="1"></path>
                                    </svg> Harmony OS
                                </span>
                            </Show>
                        </div>    
                        <p class="desc">{data().project?.desc}</p>
                        <div class="tech-stack">
                            <For each={data().project?.techs}>
                                {(item) => <span class="tech-badge">{item}</span>}
                            </For>
                        </div>
                        
                        <div class="section-subtitle"><i class="fas fa-star"></i> Key Features</div>
                        <div class="features-grid">
                            <div class="surface-content feature-item">
                                <i class="fas fa-temperature-low"></i>
                                <div style={{ display: "flex", "flex-direction": "column", "align-items": "start", "justify-content": "start", height: "100%" }}>
                                    <span style={{ "font-size": "14px", "font-weight": "600" }}>Current conditions</span>
                                    <span style={{ "font-size": "12px", "font-weight": "lighter", "color": "var(--color-on-surface-variant)" }}>feels like, wind, humidity</span>
                                </div>
                            </div>
                            <div class="surface-content feature-item">
                                <i class="fas fa-calendar-week"></i>
                                <div style={{ display: "flex", "flex-direction": "column", "align-items": "start", "justify-content": "start", height: "100%" }}>
                                    <span style={{ "font-size": "14px", "font-weight": "600" }}>Hourly/Daily Forecast</span>
                                    <span style={{ "font-size": "12px", "font-weight": "lighter", "color": "var(--color-on-surface-variant)" }}>Get 5 days and hourly wether forecast</span>
                                </div>
                            </div>
                            <div class="surface-content feature-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <div style={{ display: "flex", "flex-direction": "column", "align-items": "start", "justify-content": "start", height: "100%" }}>
                                    <span style={{ "font-size": "14px", "font-weight": "600" }}>Location management</span>
                                    <span style={{ "font-size": "12px", "font-weight": "lighter", "color": "var(--color-on-surface-variant)" }}>Add and remove Cities</span>
                                </div>
                            </div>
                            <div class="surface-content feature-item">
                                <i class="fas fa-moon"></i>
                                <div style={{ display: "flex", "flex-direction": "column", "align-items": "start", "justify-content": "start", height: "100%" }}>
                                    <span style={{ "font-size": "14px", "font-weight": "600" }}>Light & Dark mode</span>
                                    <span style={{ "font-size": "12px", "font-weight": "lighter", "color": "var(--color-on-surface-variant)" }}>Support of light and dark mode</span>
                                </div>
                            </div>
                            <div class="surface-content feature-item">
                                <i class="fa7-solid--tablet-alt"></i>
                                <div style={{ display: "flex", "flex-direction": "column", "align-items": "start", "justify-content": "start", height: "100%" }}>
                                    <span style={{ "font-size": "14px", "font-weight": "600" }}>Responsive</span>
                                    <span style={{ "font-size": "12px", "font-weight": "lighter", "color": "var(--color-on-surface-variant)" }}>Tablet‑optimised responsive layout</span>
                                </div>
                            </div>
                            <div class="surface-content feature-item">
                                <i class="fas fa-chart-line"></i>
                                <div style={{ display: "flex", "flex-direction": "column", "align-items": "start", "justify-content": "start", height: "100%" }}>
                                    <span style={{ "font-size": "14px", "font-weight": "600" }}>Real-time Update</span>
                                    <span style={{ "font-size": "12px", "font-weight": "lighter", "color": "var(--color-on-surface-variant)" }}>Real-time weather API integration</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="surface-content" style={{ flex: "none", "margin-top": "20px" }}>
                        <div class="section-subtitle"><i class="fas fa-microchip"></i> Technical Highlights</div>
                        <ul class="highlight-list" style={{ color: "var(--color-on-surface-variant)" }}>
                            <li><strong>BLoC</strong> – Centralised state management (weather data, theme, location) ensuring predictable updates and testability.</li>
                            <li><strong>Modular design</strong> – Separated into features (weather, settings, location search, theme) for easier maintenance and scalability.</li>
                            <li><strong>API integration</strong> – Fetches live weather data via REST; handles loading, error, and empty states gracefully.</li>
                            <li><strong>Responsive UI</strong> – Custom <code>LayoutBuilder</code> and <code>MediaQuery</code> breakpoints for phone/tablet adaptation.</li>
                        </ul>
                    </div>
                </div>
                <div class="surface-content" style={{ flex: "none", width: "16rem", padding: "1.5rem 0" }}>
                    <h3 style={{ "padding-left": "1.5rem" }}>Downloads</h3>
                    <div class="btn-group" style={{ "flex-direction": "column", "padding-left": "1.5rem", "padding-right": "1.5rem" }}>
                        <a href="#" class="btn btn-outline"><i class="fab fa-google-play"></i> Android APK</a>
                        <a href="#" class="btn btn-outline"><i class="fab fa-app-store-ios"></i> App Store</a>
                    </div>
                    <hr style={{ height: "0.2px", border: "none" }}/>
                    <div class="btn-group" style={{ "flex-direction": "column", "padding-left": "1.5rem", "padding-right": "1.5rem" }}>
                        <a href="#" class="btn btn-primary" target="_blank"><i class="fab fa-github"></i> Source code</a>
                    </div>
                </div>
            </section>
        </Show>
    );
}

export default Project;