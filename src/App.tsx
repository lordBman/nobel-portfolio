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
        const currentTheme = document.documentElement.getAttribute("data-theme") ?? "light";

        const newTheme = currentTheme === "light" ? "dark" : "light"
        localStorage.setItem(appThemeKey, newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        setDark(newTheme === "dark");
    }

    onMount(()=>{
        const saved = localStorage.getItem(appThemeKey) ?? "light";
        document.documentElement.setAttribute('data-theme', saved);

        setDark(saved === 'dark')
    });

    return (
        <div class="app-container">
            <Background isDark={isDark()} />
            <Header />
            <main>
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/projects" component={AllProjects} />
                    <Route path="/projects/:id" component={Project} />
                </Router>
            </main>
            <button class="theme-toggle" onClick={toggleDark}>
                <i class={ isDark() ? "fas fa-sun" : "fas fa-moon" }></i> <span>{ isDark() ? "Light Mode" : "Dark Mode" }</span>
            </button>
        </div>
    )
}

export default App