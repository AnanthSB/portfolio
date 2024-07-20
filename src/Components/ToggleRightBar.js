import AnchorLink from "react-anchor-link-smooth-scroll";
import "./ToggleRightBar.css";

const ToggleRightBar = ()=>{
    return(
        <>
        <div className="toggleRightBarUlContainer">
            <ul className="navUL ul navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="navULli nav-item">
                      <AnchorLink href='#Home' className="nav-link" aria-current="page" to ="Home">Home</AnchorLink>
                    </li>
                    {/* <li className="nav-item" style={{height: "23px"}}>
                      <Link className="nav-link" aria-current="page" to ="About">About</Link>
                    </li> */}
                    <li className="navULli nav-item">
                      <AnchorLink href="#projects" className="nav-link" to ="Projects">Projects</AnchorLink>
                    </li>
                    <li className="navULli nav-item">
                      <AnchorLink href="#resume" className="nav-link" to ="Resume">Resume</AnchorLink>
                    </li>
                    <li className="navULli nav-item">
                      <AnchorLink href="#contactMe" className="nav-link" to ="Contact">Contact Me</AnchorLink>
                    </li>
                  </ul>
        </div>            
        </>
    )
}

export default ToggleRightBar;