import { MobileProjectItem, MobileProjectView, WebProjectView } from "../components";

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

const Projects = () =>{
    return (
        <div class="container" id="experience" style={{ "max-width": "1300px", margin: "0 auto",  "margin-top": "50px" }}>
            <h2 class="timeline-header">
                <i class="glyphs--rocket-duo" /> Projects
            </h2>
            <div class="projects-grid">
                <MobileProjectItem />
                <MobileProjectItem />
                <MobileProjectItem />
            </div>
        </div>
    );
}
export default Projects