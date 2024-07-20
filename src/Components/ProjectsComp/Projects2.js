import '../ProjectsComp/Projects.css';
import todoAppVideo from "./Media/newFile/1todoAppPresentationVideo.mp4";
import weatherAppVideo from "./Media/newFile/2weatherAppPresentationVideo.mp4";
import newsTimeAppVideo from "./Media/newFile/newsTimePresentationVideo.mp4";
import "../ResumeComp/Resume3.css"

export default function Projects() {

  
  return (
    <>
    <div className="outerContainer d-flex" id="projects">
      <h2 className="text-center" style={{paddingBottom:"3px",borderBottom:"1px solid",color:'rgb(197,198,199)'}}>My Projects</h2>
      <div className='text-light projectsContainer'>
      <div style={{width:"100%"}} className="keySkills">
                        <div style={{marginLeft:"1rem"}} className="marginLeft2Rem">
                                <h4 style={{fontWeight:"lighter",display:"flex", margin:"0px 0px"}}>To-Do List</h4>
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
                        </div>
      </div>

      </div>


      <div className='videosContainer my-3'>
        <div className='videoContainer my-2'>
            <h3 className='text-light'>Todo App</h3>
            <video src={todoAppVideo} controls></video>
        </div>
        
        <div className='videoContainer my-2'>
            <h3 className='text-light'>Weather App</h3>
            <video src={weatherAppVideo} controls></video>
        </div>
        
        <div className='videoContainer my-2'>
            <h3 className='text-light'>NewsTime App</h3>
            <video src={newsTimeAppVideo} controls></video>
        </div>
      </div>
    </div>

  
    </>
  )
}