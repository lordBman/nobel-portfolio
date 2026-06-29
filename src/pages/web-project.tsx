import { createAsync, useParams } from "@solidjs/router";
import { allWebProjects, type WebProjectDetails } from "../data";
import { Show } from "solid-js";

interface Data{ project?: WebProjectDetails, loading: boolean }

const loader = async(id: string): Promise<Data> =>{
    try{
        const result = allWebProjects.find((project)=> project.id === id);
        return { project: result, loading: false }
    }catch(error){
        console.error(error)
    }
    return { loading: false }
}

const WebProjectPage = () =>{
    const { id } = useParams();
        const data = createAsync<Data>(() => loader(id!), { initialValue: { loading: true } });

    return (
        <Show when={data().project}>
            <section class="container container-padding" id="projects" style={{ display: "flex", "flex-direction": "row", gap: "2rem", "align-items": "start" }}>
                <h1>{data().project?.name}</h1>
            </section>
        </Show>
    );
}

export default WebProjectPage;