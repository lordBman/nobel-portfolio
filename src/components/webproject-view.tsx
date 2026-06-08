interface WebProject {
    id: string;
    title: string;
    description: string;
    language: string;
    framework: string;
    screenshots: string[];
    url: string;
}

const WebProjectView = (props: { project: WebProject }) =>{
    return (
        <div class="project-card">
            <div class="screenshot-area">
                { props.project.screenshots.map((url)=> (<img class="screenshot-img" src={url} alt="screenshot" />)) }
            </div>
            <div class="card-content">
                <h3>🌐 {props.project.title}</h3>
                <div><span class="tech-badge">{props.project.language}</span><span class="tech-badge">{props.project.framework}</span></div>
                <p class="desc">{props.project.description}</p>
                <div class="card-links">
                    <a href={props.project.url} target="_blank" class="btn-outline" style="padding:6px 16px;">🔗 Live Demo</a>
                </div>
            </div>
        </div>
    );
}

export default WebProjectView;