import { type ProjectFeature } from "../data";

interface ProjectFeatureProps{
    feature: ProjectFeature
}

const ProjectFeatureView = (props: ProjectFeatureProps) =>{
    return (
        <div class="surface-content feature-item">
            <i class={props.feature.iconClass}></i>
            <div style={{ display: "flex", "flex-direction": "column", "align-items": "start", "justify-content": "start", height: "100%" }}>
                <span style={{ "font-size": "15px", "font-weight": "600" }}>{props.feature.tile}</span>
                <span style={{ "font-size": "12px", "font-weight": "lighter", "color": "var(--color-on-surface-variant)" }}>{props.feature.description}</span>
            </div>
        </div>
    );
}

export default ProjectFeatureView;