import '../NavComp/NavBar.css'
import AnanthProfileImg from '../NavComp/AnanthHomeProfileImg.jpeg';
// import { Link } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";


export default function NavBar(){
  
    return(
        <>
            <nav className="navBarStyle navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid " style={{display:'flex',justifyContent:'space-between', width:'100%'}}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <AnchorLink href='#Home' to ="Home" id='AnanthProfileImg' className='text-light' title="Developer Ananth"
                        style= 
                        {{ position:'relative', left:'1%', width:'', hight:'100%', display:'flex', justifyContent:'center', alignItems:'flex-end'}}>
                        Ananth_
                        <div className='AnanthProfileImgIcon'>
                          <img src={AnanthProfileImg} alt="AnanthLogo"/>
                        </div>
                        _Shetty
                      </AnchorLink>
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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </nav>
        </>
    )
}