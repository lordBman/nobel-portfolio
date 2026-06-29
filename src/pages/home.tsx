import { Experience, Services, Projects } from "../sections";
import About from "../sections/about";
import Contact from "../sections/contact";

const HomePage = () =>{
    return (
        <>
            <About />
            <Experience />
            <Services />
            <Projects />
            <Contact />
        </>
    );
}

export default HomePage;