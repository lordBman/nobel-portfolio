import { createSignal, onCleanup, onMount, type JSX } from "solid-js";

const scrollToSection = (id: string, offset: number = 80) =>{
    const element = document.getElementById(id);
    const main = Array.from(document.getElementsByTagName("main"))[0]
    if(main && element){
        const containerRect = main.getBoundingClientRect();
        const sectionRect = element.getBoundingClientRect();
        const scrollOffset = sectionRect.top - containerRect.top + main.scrollTop - offset;
        main.scrollTo({
            top: scrollOffset,
            behavior: 'smooth',
        });
    }
}

const HeaderItem = (props: { id: string, label: string, active: string, icon: string, click: (id: string) => void }) =>{
     // Handles clicking a navigation link
    const handleNavClick: JSX.EventHandler<HTMLAnchorElement, MouseEvent> = () => {
        /*event.preventDefault();
        if( document.location.pathname !== "/"){
            document.location = "/"
        }
        scrollToSection(props.id, 0);*/
    };

    return (
        <li>
            <a href={`/#${props.id}`} class={ props.active === props.id ? "active" : "" } onClick={handleNavClick}>
                <i class={ props.icon } style={{ "font-size": "2rem" }} /> {props.label}
            </a>
        </li>
    );
}

const Header = () =>{
    const [activeSection, setActiveSection] = createSignal('home');

    onMount(() => {
        // Get all section elements
        const sectionElements =  Array.from(document.getElementsByTagName("section"));

        // Configure observer: a section is considered active when > 40% visible
        let observer: IntersectionObserver = new IntersectionObserver((entries) => {
            // Find the entry with the highest intersection ratio
            let bestEntry = null;
            let bestRatio = 0;
            
            for (const entry of entries) {
                if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
                    bestRatio = entry.intersectionRatio;
                    bestEntry = entry;
                }
            }
            
            if (bestEntry) {
                const activeId = bestEntry.target.id;
                setActiveSection(activeId);
            }
        }, { threshold: [0.3, 0.6, 0.9] }); // trigger at different visibility levels

        // Observe each section
        sectionElements.forEach(section => observer?.observe(section));

        // Set initial active section based on current scroll
        // (manually check which section is most visible on mount)
        const checkInitialActive = () => {
            let maxRatio = 0;
            let activeId = sectionElements[0].id;
            for (const section of sectionElements) {
                const rect = section.getBoundingClientRect();
                const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
                const ratio = visibleHeight / rect.height;
                if (ratio > maxRatio) {
                    maxRatio = ratio;
                    activeId = section.id;
                }
            }
            setActiveSection(activeId);
        }
        checkInitialActive();
        alert(document.location.pathname)

        // Cleanup observer when component unmounts
        onCleanup(() => {
            if (observer) observer.disconnect();
        });
    })
    
    return (
        <header>
            <div class="nav-bar">
                <div class="logo"><h1><i class="fas fa-code"></i> Nobel</h1></div>
                <ul class="nav-links">
                    <HeaderItem id="about" label="About" active={activeSection()} icon="glyphs--user-duo" click={setActiveSection}/>
                    <HeaderItem id="experience" label="Experience" active={activeSection()} icon="glyphs--laptop-code-duo" click={setActiveSection} />
                    <HeaderItem id="services" label="Services" active={activeSection()} icon="glyphs--layer-group-duo" click={setActiveSection}/>
                    <HeaderItem id="projects" label="Projects" active={activeSection()} icon="glyphs--rocket-duo" click={setActiveSection}/>
                </ul>
                <ul class="nav-links">
                    <HeaderItem id="contact" label="Contact" active={activeSection()} icon="glyphs--mailbox-duo" click={setActiveSection}/>
                </ul>
            </div>
        </header>
    );
}

export default Header