import resumePage1 from "./media/resumePage1.jpg";
import resumePage2 from "./media/resumePage2.jpg";
import resumePDF from "./media/ananthResume.pdf";
import "../ResumeComp/Resume.css";

export default function Resume(){

    return(
        <>
            <div className="resumeContainer mt-3 bg-dark">
                <div className="downloadContainer">
                    <a title="Download resume" className="text-light" href={resumePDF} download>Download</a>
                </div>
                <div className="resumePage1">
                    <img src={resumePage1} alt="Page1"/>
                </div>
                <hr />
                <div className="resumePage2">
                    <img src={resumePage2} alt="Page1"/>
                </div>
            </div>
        </>
    )
}