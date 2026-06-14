import { createSignal, For, onMount, Show } from "solid-js";
import { MobileProjectItem, WebProjectItem } from "../components";
import { allMobileProjects, allWebProjects, type MobileProject, type WebProject } from "../data";

import "../css/projects.scss"

const filter = (projects: MobileProject[] | WebProject[], filterText = '') => {
    const lowerFilter = filterText.toLowerCase().trim();

    if (lowerFilter !== '') {
        const filtered = projects.filter(project => 
            project.name.toLowerCase().includes(lowerFilter) ||
            project.desc.toLowerCase().includes(lowerFilter) ||
            project.techs.find((tech)=> tech.toLowerCase().includes(lowerFilter))
        );

        return filtered
    }
    return projects
}

const AllProjects = () =>{
    const [getChoice, setChoice] = createSignal<"mobile" | "web">("mobile");
    const [getFilter, setFilter] = createSignal("")

    let inputFilterRef: HTMLInputElement | undefined;

    onMount(()=>{
        if(inputFilterRef){
            inputFilterRef.addEventListener("input", (event) =>{
                event.preventDefault()

                setFilter(inputFilterRef.value)
            });
        }
    })

    const viewMobile = () => setChoice("mobile");
    const viewWeb = () => setChoice("web");

    return (
        <section class="container container-padding"  id="projects" style={{ "text-align": "center" }}>
            <div style={{ display: "flex", "align-items": "center", "justify-content": "space-between", "margin-bottom": "10px" }}>
                <h2 class="section-header">
                    <i class="glyphs--rocket-duo" /> All Projects
                </h2>
            </div>

            <div class="filter-wrapper">
                <div class="border" style={{ display: "flex", "flex-direction": "row", width: "14rem", "border-radius": "40px", overflow: "clip" }}>
                    <button class={ getChoice() === "mobile" ? "btn-primary" : "btn-outline" } style={{ flex: 1, "border-radius": "0", border: "none", display: "flex", "flex-direction": "row", gap: "4px", "align-items": "center" }} onClick={viewMobile}>
                        <i class="glyphs--mobile-bold" style={{ "font-size": "1.6rem" }}></i> Mobile
                    </button>
                    <button class={ getChoice() === "web" ? "btn-primary" : "btn-outline" } style={{ flex: 1, "border-radius": "0", border: "none",  display: "flex", "flex-direction": "row", gap: "4px", "align-items": "center" }} onClick={viewWeb}>
                        <i class="glyphs--globe-bold" style={{ "font-size": "1.6rem" }}></i> Web
                    </button>
                </div>
                <div class="filter-input-container">
                    <input type="text" id="filterInput" class="filter-input" placeholder="Filter by name, tech stack..." ref={inputFilterRef} />
                    <i class="fas fa-search"></i>
                </div>
            </div>

            <div class="projects-grid">
                <Show when={getChoice() === "mobile"}>
                    <For each={filter(allMobileProjects, getFilter())}>
                        { (project) => (<MobileProjectItem project={project as MobileProject}/>) }
                    </For>
                </Show>
                <Show when={getChoice() === "web"}>
                    <For each={filter(allWebProjects, getFilter())}>
                        { (project) => (<WebProjectItem project={project}/>) }
                    </For>
                </Show>
            </div>
        </section>
    );
}

export default AllProjects;