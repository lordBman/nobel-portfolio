import { Background, Header } from "./components"

import './css/icons.css'
import { createSignal, onMount } from "solid-js"
import { Route, Router } from "@solidjs/router"
import HomePage from "./pages/home"
import AllProjectsPage from "./pages/all-project"
import MobileProjectPage from "./pages/mobile-project"
import WebProjectPage from "./pages/web-project"

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

    const baseUrl = import.meta.env.VITE_BASE_URL ?? "";

    return (
        <div class="app-container">
            <Background isDark={isDark()} />
            <Header />
            <main>
                <Router>
                    <Route path={`${baseUrl}/`} component={HomePage} />
                    <Route path={`${baseUrl}/projects`} component={AllProjectsPage} />
                    <Route path={`${baseUrl}/projects/mobile/:id`} component={MobileProjectPage} />
                    <Route path={`${baseUrl}/projects/web/:id`} component={WebProjectPage} />
                </Router>
            </main>
            <button class="theme-toggle" onClick={toggleDark}>
                <i class={ isDark() ? "fas fa-sun" : "fas fa-moon" }></i> <span>{ isDark() ? "Light Mode" : "Dark Mode" }</span>
            </button>
        </div>
    )
}

export default App