import { For } from "solid-js";
import { MobileProjectItem, WebProjectItem } from "../components";
import { randomMobileProjects, randomWebProjects, type MobileProject, type WebProject } from "../data";
import { createAsync } from "@solidjs/router";


const Projects = () =>{
    const mobileProjects = createAsync<MobileProject[]>(()=> randomMobileProjects())
    const webProjects = createAsync<WebProject[]>(()=> randomWebProjects())

    const clicked = () => document.location = `/projects`;

    return (
        <section class="container container-padding" id="projects">
            <div style={{ display: "flex", "align-items": "center", "justify-content": "space-between" }}>
                <h2 class="section-header">
                    <i class="glyphs--rocket-duo" /> Feature Projects
                </h2>
                <button class="btn-outline" onClick={clicked}>View All Projects <i class="fas fa-arrow-right"></i></button>
            </div>
            <div class="projects-grid">
                <For each={mobileProjects()}>
                    { (project) => (<MobileProjectItem project={project}/>) }
                </For>
                <For each={webProjects()}>
                    { (project) => (<WebProjectItem project={project}/>) }
                </For>
            </div>
        </section>
    );
}
export default Projects