import { For, Show } from "solid-js"
import hosIcon from "../assets/Harmonyos--Streamline.svg"
import appGakaryIcon from "../assets/huawei-appgallery.svg"

export interface MobileProject{
    name: string
    image: string
    desc: string
    platforms:{
        android?: boolean
        ios?: boolean
        harmonyOS?: boolean
    }
    techs: string[],
    downloads:{
        android?: string
        ios?: string
        harmonyOS?: string
    }
} 

const MobileProjectItem = (props: { project: MobileProject }) =>{
    return (
        <div class="timeline-content" style={{ display: "flex", width: "100%", "flex-direction": "row", gap: "2rem", "align-items": "start" }}>
            <img style={{ width: "200px", "border-radius": "20px", border: "solid 2px #e2e8f0" }} src={props.project.image} alt="screenshot" />
            <div class="card-content" style={{ flex: 1, display: "flex", "flex-direction": "column" }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ display: "flex", "flex-direction": "row", "align-items": "center", gap: "8px" }}>
                        <div class="icon-circle" style={{ "box-shadow": "none", "font-size": "28px" }}><i class="glyphs--mobile-bold"></i></div>{props.project.name}
                    </h3>
                    <div class="platform-icons">
                        <Show when={props.project.platforms.android}>
                            <span><i class="fab fa-android"></i> Android</span>
                        </Show>
                        <Show when={props.project.platforms.ios}>
                            <span><i class="fab fa-apple"></i> iOS</span>
                        </Show>
                        <Show when={props.project.platforms.harmonyOS}>
                            <span><img src={hosIcon} style={{ width: "16px" }} /> Harmony OS</span>
                        </Show>
                    </div>    
                    <p class="desc">{props.project.desc}</p>
                    <div class="tech-stack">
                        <For each={props.project.techs}>
                            {(item) => <span class="tech-badge">{item}</span>}
                        </For>
                    </div>
                </div>
                <div class="btn-group">
                    <Show when={props.project.downloads.android}>
                        <a href={props.project.downloads.android} class="btn btn-outline"><i class="fab fa-google-play"></i> Play Store</a>
                    </Show>
                    <Show when={props.project.downloads.ios}>
                        <a href={props.project.downloads.ios} class="btn btn-outline"><i class="fab fa-app-store-ios"></i> App Store</a>
                    </Show>
                    <Show when={props.project.downloads.harmonyOS}>
                        <a href={props.project.downloads.harmonyOS} class="btn btn-outline"><img src={appGakaryIcon} style={{ width: "14px" }} /> App Gallery</a>
                    </Show>
                </div>
            </div>
        </div>
    );
}

export interface WebProject{
    name: string
    image: string
    desc: string
    techs: string[],
    url?: string
}

const WebProjectItem = (props: { project: WebProject }) =>{
    return (
        <div class="timeline-content" style={{ display: "flex", width: "100%", "flex-direction": "column", gap: "1.4rem", "align-items": "stretch" }}>
            <img style={{ "border-radius": "8px", width: "100%", border: "solid 2px #e2e8f0" }} src={props.project.image} alt="screenshot" />
            <div class="card-content" style={{ display: "flex", "flex-direction": "column", width: "100%" }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ display: "flex", "flex-direction": "row", "align-items": "center", gap: "8px" }}>
                        <div class="icon-circle" style={{ "box-shadow": "none", "font-size": "28px" }}><i class="glyphs--globe-bold"></i></div>{props.project.name}
                    </h3>   
                    <p class="desc">{props.project.desc}</p>
                    <div class="tech-stack">
                        <For each={props.project.techs}>
                            {(item) => <span class="tech-badge">{item}</span>}
                        </For>
                    </div>
                </div>
                <div class="btn-group">
                    <Show when={props.project.url}>
                        <a href={props.project.url} class="btn btn-outline"><i class="fa-solid fa-rocket"></i> Visit</a>
                    </Show>
                </div>
            </div>
        </div>
    );
}

export { MobileProjectItem, WebProjectItem };