export interface ProjectFeature{
    iconClass: string
    tile: string
    description: string
}
export interface MobileProject{
    id: string
    name: string
    image: string
    darkImage?: string
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

export interface MobileProjectDetails extends MobileProject{
    features?: ProjectFeature[],
    tech_details?: { title: string, description: string }[]
}

const bweather: MobileProjectDetails = {
    id: "jvvfdvfjvcvc",
    name: "BWeather",
    image: "https://raw.githubusercontent.com/lordBman/bweatherflutter/refs/heads/main/Screenshot%202024-06-01%20090147.png",
    desc: "BWeather is a clean, feature‑rich weather application built for both mobile and tablet form factors. It provides real‑time weather information with a focus on intuitive UX and scalable code structure. The app demonstrates robust state handling, responsive layouts, and a polished dual‑theme experience.",
    platforms: {
        android: true,
        ios: true
    },
    techs: [ "Flutter(Dart)", "BLoC (global state management)", "Responsive Design", "Modular Architecture", "SharedPreferences" ],
    downloads:{
        android: "#",
        ios: "#"
    },
    features: [
        { iconClass: "fas fa-temperature-low", tile: "Current conditions", description: "feels like, wind, humidity" },
        { iconClass: "fas fa-calendar-week", tile: "Hourly/Daily Forecast", description: "Get 5 days and hourly wether forecast" },
        { iconClass: "fas fa-map-marker-alt", tile: "Location management", description: "Add and remove Cities" },

        { iconClass: "fas fa-moon", tile: "Light & Dark mode", description: "Support of light and dark mode" },
        { iconClass: "fa7-solid--tablet-alt", tile: "Responsive", description: "Tablet‑optimised responsive layout" },
        { iconClass: "fas fa-chart-line", tile: "Real-time Update", description: "Real-time weather API integration" },
    ],
    tech_details: [
        { title: "BLoC", description: "Centralised state management (weather data, theme, location) ensuring predictable updates and testability." },
        { title: "Modular design", description: "Separated into features (weather, settings, location search, theme) for easier maintenance and scalability." },
        { title: "API integration", description: "Fetches live weather data via REST; handles loading, error, and empty states gracefully." },
        { title: "Responsive UI", description: "Custom LayoutBuilder and MediaQuery breakpoints for phone/tablet adaptation." }
    ]
}

const bmusic: MobileProjectDetails = {
    id: "jvbjvdbcucd",
    name: "BMusic",
    image: "https://github.com/BsoftLimited/Bmusic/blob/latest/Screenshot_20260609-044429.png?raw=true",
    desc: "BMusic is a full‑featured music player app designed for a seamless listening experience on both phones and tablets. It organizes tracks by songs, albums, artists, and playlists, with robust state management and a polished dual‑theme interface. The app handles local audio files, displays metadata, and provides intuitive navigation and playback controls.",
    platforms: {
        android: true,
        ios: true
    },
    techs: [  "Flutter(Dart)", "BLoC (global state management)", "Responsive Design", "Modular Architecture", "SharedPreferences", "local audio playback", "media metadata handling" ],
    downloads:{
        android: "#",
        ios: "#"
    }
}

const harmonyCalculator: MobileProjectDetails = {
    id: "vhfifhtfjojrfro",
    name: "Harmony Calculator",
    image: "https://github.com/lordBman/Harmony-Calculator/blob/main/Screenshot_2026-04-09T000202.png?raw=true",
    desc: "Harmony Calculator is a full‑featured scientific calculator built with ArkUI‑X, enabling a single codebase to run seamlessly on HarmonyOS, iOS, and Android. It combines a clean, intuitive interface with advanced mathematical operations, making it suitable for students, engineers, and everyday users. The app supports both light and dark themes and adapts beautifully to tablet screen sizes.",
    platforms: {
        android: true,
        ios: true,
        harmonyOS: true
    },
    techs: [  "ArkTS", "ArkUI‑X", "ArkUI state management", "Cross Platform", "Responsive Design", "Modular Architecture", "SharedPreferences", "Harmony OS IO system" ],
    downloads:{
        android: "#",
        ios: "#",
        harmonyOS: "#"
    }
}

const blinkArkUI: MobileProjectDetails = {
    id: "hfiogithjrtjopr",
    name: "BLink ArkUI",
    image: "https://github.com/lordBman/BLink-ArkUI/blob/main/Home.png?raw=true",
    desc: "BLink is a full‑featured link shortener app built exclusively for HarmonyOS. It allows users to shorten long URLs, track click performance, and generate scannable barcodes from shortened links. The dashboard provides a clear overview of total links, total clicks, and a 30‑day click trend graph, making it ideal for marketers, content creators, and anyone managing multiple links.",
    platforms: {
        harmonyOS: true
    },
    techs: [  "ArkTS", "ArkUI state management", "Responsive Design", "Modular Architecture", "SharedPreferences", "REST API", "Analytics", "QRCode generation" ],
    downloads:{
        harmonyOS: "#"
    }
}

export interface WebProject{
    id: string;
    name: string
    image: string
    darkImage?: string
    desc: string
    techs: string[],
    url?: string
}

export interface WebProjectDetails extends WebProject{

}

const blink: WebProjectDetails = {
    id: "jfvhfuvhfvhfvfv",
    name: "BLink",
    image: "https://github.com/lordBman/BLink-API/blob/bun-port/Web-Homepage.png?raw=true",
    desc: "BLink is a full‑featured link shortener Website. It allows users to shorten long URLs, Turning any long URL into a clean, shareable BLink in seconds. Track clicks, manage your links, and take control of your sharing — right from your the portal or phone..",
    techs: [  "API", "Bun", "ElysiaJS", "Authentication", "JWT", "Responsive Design", "Modular Architecture", "REST API", "Analytics", "QRCode generation" ],
    url: "#"
}

const connect: WebProjectDetails = {
    id: "vghfuvgfuvfvhfvhdi",
    name: "Connect",
    image: "https://github.com/BsoftLimited/Connect/blob/copy-stream/Screenshot%202026-06-09%20195737.png?raw=true",
    desc: "Connect is a feature‑rich file sharing and management web application that bridges a modern TypeScript frontend with a high‑performance Rust backend. It allows users to download, upload, and view files directly from a host PC, with granular permission controls (Guest, User, Admin). The entire stack is designed for speed, scalability, and real‑time feedback – from multithreaded file operations to live progress reporting via WebSockets.",
    techs: [  "API", " Bun (TypeScript)", "ElysiaJS", "Authentication", "JWT", "Rust", "SolidJS", "Sass", "Esbuild"," SolidJS state management", "WebSockets", "Tokio (async Rust)", "C‑FFI", "User Preferences API" ],
    url: "#"
}

const pickTwoFast = <T>(arr: T[]): T[] => {
    if (arr.length < 2) return [...arr];
    
    const index1 = Math.floor(Math.random() * arr.length);
    let index2 = Math.floor(Math.random() * arr.length);
    
    while (index2 === index1) {
        index2 = Math.floor(Math.random() * arr.length);
    }
    
    return [arr[index1], arr[index2]];
}

const allMobileProjects: MobileProjectDetails[] = [
    blinkArkUI, bmusic, bweather, harmonyCalculator
]

const allWebProjects: WebProjectDetails[] = [
    blink, connect
]

const randomMobileProjects = async() => pickTwoFast(allMobileProjects)
const randomWebProjects = async() => pickTwoFast(allWebProjects)
export { allMobileProjects, allWebProjects, randomMobileProjects, randomWebProjects }