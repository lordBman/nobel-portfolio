import { Experience, Services, Projects } from "../sections";
import About from "../sections/about";
import Contact from "../sections/contact";

const Home = () =>{
    return (
        <main>
            <About />
            <Experience />
            <Services />
            <Projects />
            <Contact />
        </main>
    );
}

export default Home;