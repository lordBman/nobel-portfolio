import { Show } from "solid-js";

interface MobileProject{
    id: string;
    title: string;
    description: string;
    language: string;
    framework: string;
    screenshots: string[];
    downloadLinks: {
        android?: string;
        ios?: string;
        harmony?: string;
    };
}

const MobileProjectView = (props: { project: MobileProject }) =>{
    return (
        <div class="project-card">
            <div class="screenshot-area">
                { props.project.screenshots.map((url)=> (<img class="screenshot-img" src={url} alt="screenshot" />)) }
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