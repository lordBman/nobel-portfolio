import { Show } from "solid-js";

interface MobileProject{
    id: string;
    title: string;
    description: string;
    language: string;
    framework: string;
    screenshots: {
        light: string;
        dark: string;
        table?: string
    };
    downloadLinks: {
        android?: string;
        ios?: string;
        harmony?: string;
    };
}

const MobileProjectView = (props: { project: MobileProject }) =>{
    return (
        <div class="project-card">
            <div class="mobile-screenshot-area">
                <img class="mobile-screenshot-img" src={props.project.screenshots.light} alt="screenshot" />
                <img class="mobile-screenshot-img" src={props.project.screenshots.dark} alt="screenshot" />
                <Show when={props.project.screenshots.table}>
                    <img class="screenshot-img" src={props.project.screenshots.table} alt="screenshot" />
                </Show>
            </div>
            <div class="card-content">
                <h3>📱 {props.project.title}</h3>
                <div><span class="tech-badge">{props.project.language}</span><span class="tech-badge">{props.project.framework}</span></div>
                <p class="desc">{props.project.description}</p>
                <div class="card-links">
                    <Show when={props.project.downloadLinks.android}>
                        <a href={props.project.downloadLinks.android} target="_blank"><i class="fab fa-android"></i> Android</a>
                    </Show>
                    <Show when={props.project.downloadLinks.ios}>
                        <a href={props.project.downloadLinks.ios} target="_blank"><i class="fab fa-apple"></i> iOS</a>
                    </Show>
                    <Show when={props.project.downloadLinks.harmony}>
                        <a href={props.project.downloadLinks.harmony} target="_blank"><i class="fas fa-mobile-alt"></i> HarmonyOS</a>
                    </Show>
                </div>
            </div>
        </div>
    );
}

export default MobileProjectView