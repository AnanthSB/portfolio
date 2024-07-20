import myWorkSpace1 from '../HomeComp/media/describg6.webp';
import myWorkSpace2 from '../HomeComp/media/AnanthHomeProfileImg.jpeg';
import '../HomeComp/Home.css';

export default function Home(){
    return(
        <>
        <div className="container-fluid containerMain px-1 py-1" id="Home" >
            <div className='my-1' style={{width:'100%',maxHeight:'50vh',position:'relative',top:'0%'}}>
                <div className=''>
                    <img src={myWorkSpace1} alt="bgimg" className='respWorkspaceImg'/>
                    <div className='innerContainer'>
                        <span style={{color:"#ffffffad !important"}}>Front</span>
                        <span style={{color:"#ffffffad !important"}}>End</span>
                        <span style={{color:"#ffffffad !important"}}>Dev</span>
                    </div>
                </div>
                <img src={myWorkSpace2} alt="bgimg" id='responsiveProficon' title='Ananth Shetty'/>
            </div>
            <div className="container descriContainer">
                <div className='d-flex justify-content-center '>
                    <h2 style={{width:'30%'}} className='helloClass text-center fs-1 fw-bold'>Hey there !,</h2>
                </div>
                <div className='descriParaContainer d-flex justify-content-center align-items-center' style={{padding:'0% 5%', textIndent:'15%'}}>
                    <p className='descriClass text-center fs-2'>
                        I'm Ananth- A Front End Developer. My expertise is in the area of responsive web development.
                        With every line of code. I strive to make the web a beatiful place.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}