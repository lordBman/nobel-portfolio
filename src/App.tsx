import { Background, Header } from "./components"

import './css/icons.css'
import { createSignal, onMount } from "solid-js"
import { Route, Router } from "@solidjs/router"
import Home from "./pages/home"
import AllProjects from "./pages/all-project"
import Project from "./pages/project"

const appThemeKey = 'appTheme'
const App = () =>{
    const [isDark, setDark] = createSignal(false);

    const toggleDark = () =>{
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem(appThemeKey, isDark ? 'dark' : 'light');
        
        setDark(isDark)
    }

    onMount(()=>{
        const saved = localStorage.getItem(appThemeKey);
        if (saved === 'dark') {
            document.body.classList.add('dark');
            setDark(true)
        }
    });

    return (
        <div class="app-container">
            <Background isDark={isDark()} />
            <Header />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/projects" component={AllProjects} />
                <Route path="/projects/:id" component={Project} />
            </Router>
            <button class="theme-toggle" id="themeToggleBtn" onClick={toggleDark}>
                <i class={ isDark() ? "fas fa-sun" : "fas fa-moon" }></i> <span>{ isDark() ? "Light Mode" : "Dark Mode" }</span>
            </button>
        </div>
    )
}

export default App