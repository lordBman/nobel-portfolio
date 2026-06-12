import { Experience, Services, Projects } from "../sections";
import About from "../sections/about";
import Contact from "../sections/contact";

const Home = () =>{
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

export default Home;