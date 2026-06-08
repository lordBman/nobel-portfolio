const Header = () =>{
    return (
        <header>
            <div class="nav-bar">
                <div class="logo"><h1><i class="fas fa-code"></i> Nobel</h1></div>
                <ul class="nav-links">
                    <li><a href="#about" class="active"><i class="glyphs--user-duo" style={{ "font-size": "1.8rem" }} /> About</a></li>
                    <li><a href="#experience"><i class="glyphs--laptop-code-duo" style={{ "font-size": "1.8rem" }} /> Experience</a></li>
                    <li><a href="#projects"><i class="glyphs--rocket-duo" style={{ "font-size": "1.8rem" }}/> Projects</a></li>  
                </ul>
                <ul class="nav-links">
                    <li><a href="#contact"><i class="glyphs--mailbox-duo" style={{ "font-size": "1.8rem" }} /> Contact</a></li>
                    <li><a href="#settings"><i class="glyphs--cog-1-duo" style={{ "font-size": "1.8rem" }} /> Settings</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header