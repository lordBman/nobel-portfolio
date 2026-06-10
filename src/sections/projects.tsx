import { MobileProjectItem, WebProjectItem } from "../components";
import type { MobileProject, WebProject } from "../components/project-item";

 const projectsData = {
    websites: [
        {
            id: "web1",
            title: "Fintech Dashboard",
            description: "Modern financial analytics dashboard with light/dark theme, realtime charts.",
            language: "TypeScript, Node.js",
            framework: "React, Next.js, Tailwind",
            screenshots: [
                "https://placehold.co/400x200/1e293b/white?text=Dark+Mode+Dashboard",
                "https://placehold.co/400x200/f8fafc/0f172a?text=Light+Mode+Dashboard"
            ],
            url: "https://example.com/fintech-demo"
        },
        {
            id: "web2",
            title: "Portfolio & Blog CMS",
            description: "Dynamic blog platform with headless CMS, Prisma ORM, postgres.",
            language: "JavaScript, SQL",
            framework: "React, Express, Prisma",
            screenshots: [
                "https://placehold.co/400x200/0f172a/white?text=Blog+Dark",
                "https://placehold.co/400x200/ffffff/111?text=Blog+Light"
            ],
            url: "https://example.com/blog-cms"
        },
        {
            id: "web3",
            title: "E-Commerce Storefront",
            description: "Responsive e-commerce with cart, Stripe integration, fully responsive.",
            language: "React, Node",
            framework: "Next.js, Bootstrap",
            screenshots: [
                "https://placehold.co/400x200/111827/f9fafb?text=Dark+Store",
                "https://placehold.co/400x200/f3f4f6/000?text=Light+Store"
            ],
            url: "https://example.com/shopdemo"
        },
        {
            id: "web4",
            title: "AI Image Generator UI",
            description: "Frontend for stable diffusion, dark/light canvas, API integration.",
            language: "Python Flask, JS",
            framework: "React, Tailwind",
            screenshots: [
                "https://placehold.co/400x200/1e1e2f/eeeeee?text=AI+Dark",
                "https://placehold.co/400x200/ffffff/2d2d2d?text=AI+Light"
            ],
            url: "https://example.com/ai-generator"
        }
    ],
    mobileApps: [
        {
            id: "mobile1",
            title: "BWeather",
            description: "Cross-platform finance app with charts, dark/light mode, biometric auth.",
            language: "Dart",
            framework: "Flutter",
            screenshots: {
                light: "https://raw.githubusercontent.com/lordBman/bweatherflutter/refs/heads/main/Screenshot%202024-06-01%20090147.png",
                dark: "https://raw.githubusercontent.com/lordBman/bweatherflutter/refs/heads/main/Screenshot%202024-06-24%20073214.png",
                tablet: "https://placehold.co/500x200/334155/white?text=Tablet+View"
            },
            downloadLinks: {
                android: "https://play.google.com/store/apps/details?id=expense.tracker",
                ios: "https://apps.apple.com/app/expense-tracker",
                harmony: "https://appgallery.huawei.com/app/expense-tracker"
            }
        },
        {
            id: "mobile2",
            title: "Fitness Mate",
            description: "Workout planner, step counter, and health insights for mobile & tablet.",
            language: "Dart, Kotlin",
            framework: "Flutter & Android Native",
            screenshots: {
                light: "https://placehold.co/300x200/18181b/white?text=Fitness+Dark+UI",
                dark: "https://placehold.co/300x200/ffffff/000?text=Fitness+Light+UI"
            },
            downloadLinks: {
                android: "https://play.google.com/store/apps/details?id=fitness.mate",
                ios: "https://apps.apple.com/app/fitness-mate",
                harmony: "https://appgallery.huawei.com/app/fitness-mate"
            }
        },
        {
            id: "mobile3",
            title: "News Aggregator",
            description: "Personalized news app, offline reading, dark/light, tablet optimized.",
            language: "Dart",
            framework: "Flutter, Riverpod",
            screenshots: {
                light: "https://placehold.co/300x200/2d2f36/ffffff?text=News+Dark",
                dark: "https://placehold.co/300x200/fef9e8/333?text=News+Light"
            },
            downloadLinks: {
                android: "https://play.google.com/store/apps/details?id=news.aggregator",
                ios: "https://apps.apple.com/app/news-aggregator",
                harmony: "https://appgallery.huawei.com/app/newsapp"
            }
        },
        {
            id: "mobile4",
            title: "TaskFlow",
            description: "Productivity suite with kanban, cross-platform sync, tablet support.",
            language: "Dart",
            framework: "Flutter, Supabase",
            screenshots: {
                light: "https://placehold.co/300x200/1a1a2e/f0f0f0?text=Task+Dark+Mobile",
                dark: "https://placehold.co/300x200/f5f5fa/1a1a2e?text=Task+Light+Mobile"
            },
            downloadLinks: {
                android: "https://play.google.com/store/apps/details?id=task.flow",
                ios: "https://apps.apple.com/app/taskflow",
                harmony: "https://appgallery.huawei.com/taskflow"
            }
        }
    ]
};

/*const Projects = () =>{
    const featuredWebs = projectsData.websites.slice(0,3);
    const featuredMobiles = projectsData.mobileApps.slice(0,3);

    return (
        <div class="container" id="projects">
            <h2 class="section-title">Featured Projects</h2>
            <div id="featured-projects-container">
                <div style="margin-bottom: 20px;">
                    <h3 style="font-size:1.5rem;">💻 Websites & Web Apps</h3>
                    <div class="projects-grid">
                        { featuredWebs.map((project)=> (<WebProjectView project={project}/>)) }
                    </div>
                </div>
                <div style="margin-top: 40px;">
                    <h3 style="font-size:1.5rem;">📱 Mobile Apps (Android/iOS/HarmonyOS)</h3>
                    <div class="projects-grid">
                        { featuredMobiles.map((project)=> (<MobileProjectView project={project}/>)) }
                    </div>
                </div>
            </div>
            <div class="view-all-link">
                <a href="#" id="viewAllProjectsBtn" class="btn-outline" style="background:white;"><i class="fas fa-arrow-right"></i> View All Projects (Full list)</a>
            </div>
        </div>
    );
}*/

const bweather: MobileProject = {
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
    }
}

const bmusic: MobileProject = {
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

const harmonyCalculator: MobileProject = {
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

const blinkArkUI: MobileProject = {
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

const blink: WebProject = {
    name: "BLink",
    //image: "https://github.com/lordBman/BLink-API/blob/bun-port/Desktop%20-%20Homepage.png?raw=true",
    image: "https://github.com/BsoftLimited/Connect/blob/copy-stream/Screenshot%202026-06-09%20195737.png?raw=true",
    desc: "BLink is a full‑featured link shortener Website. It allows users to shorten long URLs, Turning any long URL into a clean, shareable BLink in seconds. Track clicks, manage your links, and take control of your sharing — right from your the portal or phone..",
    techs: [  "API", "Bun", "ElysiaJS", "Authentication", "JWT", "Responsive Design", "Modular Architecture", "REST API", "Analytics", "QRCode generation" ],
    url: "#"
}

const connect: WebProject = {
    name: "Connect",
    image: "https://github.com/BsoftLimited/Connect/blob/copy-stream/Screenshot%202026-06-09%20195737.png?raw=true",
    desc: "Connect is a feature‑rich file sharing and management web application that bridges a modern TypeScript frontend with a high‑performance Rust backend. It allows users to download, upload, and view files directly from a host PC, with granular permission controls (Guest, User, Admin). The entire stack is designed for speed, scalability, and real‑time feedback – from multithreaded file operations to live progress reporting via WebSockets.",
    techs: [  "API", " Bun (TypeScript)", "ElysiaJS", "Authentication", "JWT", "Rust", "SolidJS", "Sass", "Esbuild"," SolidJS state management", "WebSockets", "Tokio (async Rust)", "C‑FFI", "User Preferences API" ],
    url: "#"
}

const Projects = () =>{
    return (
        <section class="container container-padding" id="projects">
            <h2 class="section-header">
                <i class="glyphs--rocket-duo" /> Projects
            </h2>
            <div class="projects-grid">
                <MobileProjectItem project={bweather}/>
                <MobileProjectItem project={bmusic}/>
                <MobileProjectItem project={harmonyCalculator}/>
                <MobileProjectItem project={blinkArkUI} />
                <WebProjectItem project={connect} />
            </div>
        </section>
    );
}
export default Projects