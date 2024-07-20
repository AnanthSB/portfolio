// import resumePage1 from "./media/resumePage1.jpg";
// import resumePage2 from "./media/resumePage2.jpg";
import resumePDF from "./media/ananthResume.pdf";
import "../ResumeComp/Resume.css";
import "../ResumeComp/Resume3.css";

export default function Resume(){
    return(
        <>
            <div className="resumeContainer bg-dark" id="resume" >
                <div className="resumeMainContainer">
                    <div className="nameTitle">
                            <h1>Ananth Shetty</h1>
                    </div>
                    <div className="reactDev">
                        <h4>React Developer</h4>
                    </div>
                    <div className="contactDetails">
                        <span><i className="fa fa-phone" aria-hidden="true"></i>      &nbsp;9676838413</span>
                        <span><i className="fa fa-envelope" aria-hidden="true"></i>
                               &nbsp;<a href=
                                        "https://mail.google.com/mail/u/0/?tab=wm#search/myresume/KtbxLrjNXKgDGkDjRSbVxZgxQwqDBQzMpg"
                                     rel="noreferrer" >ananth4sb@gmail.com</a></span>
                        <span><i className="fa fa-map-marker" aria-hidden="true"></i> &nbsp;Hyderabad</span>
                        <span><i className="fa fa-globe" aria-hidden="true"></i>     &nbsp;<a href="https://ananthshetty.in" target="_blank" rel="noreferrer">https://ananthshetty.in</a></span>
                    </div>
                    <hr/>
                    <div className="keySkills">
                        <table className="marginLeft2Rem">
                            <tbody>
                                <tr><th><h3 style={{margin: "2.5px 0px"}}>KEY SKILLS</h3></th></tr>
                                <tr> <td>JavaScript</td> <td>React Hooks</td> </tr>
                                <tr> <td>React-JS</td> <td>MongoDB</td> </tr>
                                <tr>  <td>HTML</td> <td>Bootstrap</td> </tr>
                                <tr> <td>CSS</td> <td>Node-JS</td> </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr/>
                    <div className="keySkills">
                        <table className="marginLeft2Rem">
                            <th><h3 style={{display:"flex", margin: "2.5px 0px"}}>EDUCATION</h3></th>
                            <tbody>
                                <tr> <td>BCA(Computer Science)</td></tr>
                                <tr> <td>Gulbarga University</td></tr>
                                <tr> <td>May - 2018</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <hr/>
                    <div className="keySkills">
                        <table className="marginLeft2Rem">
                            <th><h3 style={{display:"flex",margin:"2.5px 0px"}}>Certifications</h3></th>
                            <tbody>
                                <th><h3 style={{display:"flex", margin: "0px 0px"}}>React - The Complete Guide (incl Hooks, React Router, Redux)</h3></th>
                                <tr> <td><span>certificate id:</span> <span>UC-7697ff96-801a-45f6-a13c-869f5423173b</span></td></tr>
                                <tr> <td><span>url: </span> <span>ude.my/UC-7697ff96-801a-45f6-a13c-869f5423173b</span></td></tr>
                                <tr> <td>Mar - 2022</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <hr/>
                    <div className="keySkills">
                        <div className="marginLeft2Rem">
                            <h3 style={{display:"flex", margin:"2.5px 0px"}}>Project</h3>
                                <h4 style={{fontWeight:"lighter",display:"flex", margin:"0px 0px"}}>To-Do List:</h4>
                                <ul style={{marginLeft:"-1.60rem", marginTop:"3px"}}>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>Built with CRUD features by using React-js Framework.</p></li>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>Tech Stack: React-hooks, Bootstrap,LocalStorage.</p></li>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>A Complete responsive web app works on desktop, mobile, tab,etc.</p></li>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>Project link:- &nbsp;<a href="https://ananthshetty.in/todoApp/" target="_blank" rel="noreferrer">https://ananthshetty.in/todoApp/</a></p> </li>
                                </ul>

                                <h4 style={{fontWeight:"lighter",display: "flex", margin: "0px 0px"}}>Weather App</h4>
                                <ul style={{marginLeft: "-1.60rem", marginTop: "3px"}}>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>Built by using React-js Framework, Bootstrap, FontAwesome and REST API.</p></li>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>Serves live Weather data from Weather REST API (provider: weatherstack).</p></li>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>A Complete responsive web app works on desktop, mobile, tab,etc.</p></li>
                                </ul>

                                <h4 style={{fontWeight:"lighter",display: "flex", margin: "0px 0px"}}>NewsTime</h4>
                                <ul style={{marginLeft: "-1.60rem", marginTop: "3px"}}>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>Built by using React-js Framework, Bootstrap, FontAwesome & REST API.</p></li>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>Serves latest News from news REST API (provider: newsapi).</p></li>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>A Complete responsive web app works on desktop, mobile, tab,etc.</p></li>
                                </ul>

                                <h4 style={{fontWeight:"lighter",display: "flex", margin: "0px 0px"}}>Portfolio:</h4>
                                <ul style={{marginLeft: "-1.60rem", marginTop: "3px"}}>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>Built online portfolio for self by using React-JS framework.</p></li>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>Tech Stack: React-JS,Bootstrap, Godady's domain and hosting Platform.</p></li>
                                    <li><p style={{margin:"0px",paddingLeft:"8px"}}>A Complete responsive web app works on desktop, mobile, tab,etc.
                                    <br/>Portfolio link:- <a href="https://ananthshetty.in" target="_blank" rel="noreferrer">https://ananthshetty.in</a></p></li>
                                </ul>
                        </div>
                    </div>
                    <div style={{width:"64%", display:"flex",justifyContent:"right",marginBottom:"1rem"}}>
                        <div className="downloadContainer">
                            <a title="Download resume" className="text-light" href={resumePDF} download>Download</a>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </>
    )
}