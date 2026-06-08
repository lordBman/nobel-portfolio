import { Background, Header } from "./components"
import { Experience, Home, Projects } from "./sections"

import './css/icons.css'

const App = () =>{
    return (
        <div class="app-container">
            <Background />
            <Header />
            <main>
                <Home />
                <Experience />
                <Projects />
            </main>
        </div>
    )
}

export default App