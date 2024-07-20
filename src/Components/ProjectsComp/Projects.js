import '../ProjectsComp/Projects.css';
import NewsMonkeyPreview from '../ProjectsComp/Media/NewsMonkeyPreview.mp4';
import NewsmokeyZipFile from '../ProjectsComp/ZipFolder/NewsmokeyZipFile.zip';
import TextUtilsPreview from '../ProjectsComp/Media/TextUtilsPreview.mp4';
import TextUtilsSourceCode1 from '../ProjectsComp/ZipFolder/TextUtilsSourceCode1.zip';
import MonthlyExpensesPreview from '../ProjectsComp/Media/MonthlyExpensesPreview.mp4';
import MonthlyExpenses from '../ProjectsComp/ZipFolder/MonthlyExpenses.zip';
import studentLibraryPreview from '../ProjectsComp/Media/studentLibraryPreview.mp4';
import studentLibrarySourceCode from '../ProjectsComp/ZipFolder/studentLibrarySourceCode.zip';
import randomJokesPreview from '../ProjectsComp/Media/otherProjects/randomJokesPreview.mp4';
import randomJokes from '../ProjectsComp/ZipFolder/otherProjectsZipFolder/randomJokes.zip';
import thermometerPreview from '../ProjectsComp/Media/otherProjects/thermometerPreview.mp4';
import thermometeZip from '../ProjectsComp/ZipFolder/otherProjectsZipFolder/thermometeZip.zip'
import BulbOnOffPreview from '../ProjectsComp/Media/otherProjects/BulbOnOffPreview.mp4';
import bulbOnOffZip from '../ProjectsComp/ZipFolder/otherProjectsZipFolder/bulbOnOffZip.zip';
import tempConverterPreview from '../ProjectsComp/Media/otherProjects/tempConverterPreview.mp4';
import tempConverterZip from '../ProjectsComp/ZipFolder/otherProjectsZipFolder/tempConverterZip.zip'

export default function Projects() {

  
  return (
    <div style={{marginTop:'5%',minHeight:"534px",flexFlow:"column nowrap",justifyContent:"flex-start",}} className="d-flex">
      <h2 className="text-center my-3" style={{color:'rgb(197,198,199)'}}>My Projects</h2>
    <hr />
      <div className="accordion container my-3" id="accordionExample">

        {/* News Monkey */}
        <div className="accordion-item" style={{border:'0px'}}>
          {/* <h2 className="accordion-header border" id="headingOne" style={{position:'relative',zIndex:0}}>
            <button className="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
              News Monkey
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex justify-content-center">
            <div className="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-around" style={{width:'100%',backgroundColor:'rgb(21,25,29)'}}>
                  <div className="col" style={{maxHeight:'unset'}}>
                    <div className="card bg-dark text-light border  border-1 my-1 ">
                      <div className="container d-flex justify-content-center align-items-center border-bottom" style={{borderWidth:'90%',minHeight:'28vh'}}>
                        <video  controls style={{width:'66%', height:'27vh'}}>
                          <source src={NewsMonkeyPreview} type="video/mp4" /> Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="card-body" style={{fontSize:'14px',padding:'0.25rem 1rem'}}>
                        <h5 className="card-title text-decoration-underline" style={{margin:'0.25rem auto'}}>News Monkey</h5>
                        <p className="card-text" style={{textIndent:'50px'}}>
                         This project was build while learning the react js, with this News Monkey
                         you can read top news headlines of the given catogeries like General, Business,
                         Entertainment, Health, Science, Sports and Technology.<br/>
                         To check out the live experinace of this project, please <a href={NewsmokeyZipFile} download>Download</a> the
                         zip file, unzip and open by any code editor from  index.html file. <br />
                         <a href={NewsmokeyZipFile} download>Download NewsMonkey zipFile</a><br />
                        </p>
                      </div>
                      <div style={{padding:'4px 20px',fontSize:'0.9rem'}} className="d-flex align-items-center justify-content-between card-footer bg-transparent border-success">
                          <b>Technologies Used:</b> React JS, Bootstrap, JS, CSS AND HTML
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div> */}
        </div>

        {/* Textutils */}
        <div className="accordion-item" style={{border:'0px'}}>
          {/* <h2 className="accordion-header border" id="headingTwo" style={{position:'relative',zIndex:0}}>
            <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
              TextUtils
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex justify-content-center">
            <div className="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-around" style={{width:'100%',backgroundColor:'rgb(21,25,29)'}}>
                  <div className="col" style={{maxHeight:'unset'}}>
                    <div className="card bg-dark text-light border  border-1 my-1" style={{borderWidth:'90%',minHeight:'28vh'}}>
                    <div className="container d-flex justify-content-center align-items-center border-bottom" style={{borderWidth:'90%',minHeight:'28vh'}}>
                      <video controls style={{width:'66%', height:'27vh'}}>
                        <source  src={TextUtilsPreview} type='video/mp4'/>
                        Your browser does not support the video tag.
                      </video>
                    </div>
                      <div className="card-body" style={{fontSize:'14px',padding:'0.25rem 1rem'}}>
                        <h5 className="card-title text-decoration-underline" style={{margin:'0.25rem auto'}}>TextUtils</h5>
                        <p className="card-text" style={{textIndent:'50px'}}>
                          TextUtils(Was Build while learning Course) is a word counter and a charecter counting utility, which can be used to manipulate the text in the way you want.<br/>
                        You can remove extra spaces, You can remove empty lines, copy the manipulated text as well as convert your text from Uppercase to Lowercase and Lowercase to Uppercase.<br/>
                        <b>To check out the live experinace of this project, please click on</b> &nbsp;
                            <a href="https://ananthshetty.w3spaces.com/TextUtils/index.html" target='_blank' rel="noreferrer">check out...</a><br />
                            To download Source Code click here <b><a href={TextUtilsSourceCode1} download>Download</a></b>
                        </p>
                      </div>
                      <div style={{padding:'4px 20px',fontSize:'0.9rem'}} className="d-flex align-items-center justify-content-between card-footer bg-transparent border-success">
                          <b>Technologies Used:</b>React JS, Bootstrap, JS, CSS AND HTML
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div> */}
        </div>

        {/* Monthly Expenses */}
        <div className="accordion-item" style={{border:'0px'}}>
          <h2 className="accordion-header border" id="headingThree" style={{position:'relative',zIndex:0}} >
            <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Monthly Expenses
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex justify-content-center">
            <div className="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-around" style={{width:'100%',backgroundColor:'rgb(21,25,29)'}}>
                  <div className="col" style={{maxHeight:'unset'}}>
                    <div className="card bg-dark text-light border  border-1 my-1">
                    <div className="container d-flex justify-content-center align-items-center border-bottom" style={{borderWidth:'90%',minHeight:'28vh'}}>
                      <video controls style={{width:'66%', height:'27vh'}}>
                        <source  src={MonthlyExpensesPreview}/>
                      </video>
                    </div>                    
                      <div className="card-body" style={{fontSize:'14px',padding:'0.25rem 1rem'}}>
                        <h5 className="card-title text-decoration-underline" style={{margin:'0.25rem auto'}}>Monthly Expenses</h5>
                        <p className="card-text" style={{textIndent:'50px'}}>
                        This project contains a single page application, where the user can add, delete and can checkout their  monthly expenses by
                        sorting with yearwise, monthly wise or daily wise by selecting the given  options. And user can keep a track of how much
                        they are spending every year and every month by selecting the given options as shown in above sample video.
                         <br/><b>Please Click check out  to see the live project</b> &nbsp;
                        <a href="https://ananthshetty.w3spaces.com/Monthly-Expenses/index.html" target='_blank' rel="noreferrer">check out...</a><br />
                        To download Source Code click here <b><a href={MonthlyExpenses} download>Download</a></b>
                         </p>
                      </div>
                      <div style={{padding:'4px 20px',fontSize:'0.9rem'}} className="d-flex align-items-center justify-content-between card-footer bg-transparent border-success">
                          <b>Technologies Used:</b> JS,CSS AND HTML
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* Student Library */}
        <div className="accordion-item" style={{border:'0px'}}>
          <h2 className="accordion-header border" id="headingFour" style={{position:'relative',zIndex:0}}>
            <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Student Library
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex justify-content-center">
            <div className="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-around" style={{width:'100%',backgroundColor:'rgb(21,25,29)'}}>
                  <div className="col" style={{maxHeight:'unset'}}>
                    <div className="card bg-dark text-light border  border-1 my-1">
                    <div className="container d-flex justify-content-center align-items-center border-bottom" style={{borderWidth:'90%',minHeight:'28vh'}}>
                      <video controls style={{width:'66%', height:'27vh'}}>
                        <source  src={studentLibraryPreview} type='video/mp4'/>
                        Your browser does not support the video tag.
                      </video>
                    </div>
                      <div className="card-body" style={{fontSize:'14px',padding:'0.25rem 1rem'}}>
                        <h5 className="card-title text-decoration-underline" style={{margin:'0.25rem auto'}}>Student Library</h5>
                        <p className="card-text" style={{textIndent:'50px'}}>
                            This library has two pages, one for login and one for main page where student can borrow, return, add and delete books from library.
                            <br/><b>To check out the live experinace of this project, please click on</b> &nbsp;
                            <a href="https://ananthshetty.w3spaces.com/My-Resume/studentLib/studentLib_LoginPage/studentLibLoginPage.html" target='_blank' rel="noreferrer">check out...</a><br />
                            To download Source Code click here <b><a href={studentLibrarySourceCode} Download>Download</a></b>
                        </p>
                      </div>
                      <div style={{padding:'4px 20px',fontSize:'0.9rem'}} className="d-flex align-items-center justify-content-between card-footer bg-transparent border-success">
                          <b>Technologies Used:</b> JQuery, JS, CSS AND HTML
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* View More Projects */}
        {/* <div className="accordion-item" style={{border:'0px'}}>
          <h2 className="accordion-header border" id="headingFive" style={{position:'relative',zIndex:0, width:'100%'}}>
            <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" >
              View More Projects
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <div className="row row-cols-4 g-3 d-flex justify-content-even mx-2 " style={{width: '100%',margin: 'auto auto auto auto',paddingBottom: '1%',backgroundColor:'rgb(21,25,29)'}}>
                  <div className="col belowScreen800px">
                    <div className="card bg-dark text-light border border-1 shadow rounded p-1" >
                      <video controls>
                        <source  src={randomJokesPreview} type='video/mp4'/>
                        Your browser does not support the video tag.
                      </video>
                      <div className="card-body" style={{padding:'0.1rem 0.2rem'}}>
                        <h5 className="card-title text-decoration-underline">Random Jokes</h5>
                        <p className="card-text" >
                            Displays different different jokes on every clicks of Next Joke button.<br/>
                            To download Source Code Please click here <b><a href={randomJokes} Download>Download</a></b>
                        </p>
                      </div>
                      <div style={{padding:'.2rem 0.2rem', minHeight:'3.4rem'}} className="d-flex align-items-center justify-content-between card-footer bg-transparent border-success">
                          <b>Technologies Used: </b>Bootstrap, JS, CSS AND HTML
                      </div>
                    </div>
                  </div>

                  <div className="col belowScreen800px">
                    <div className="card bg-dark text-light border border-1 shadow rounded p-1" >
                      <video controls>
                        <source  src={thermometerPreview} type='video/mp4'/>
                        Your browser does not support the video tag.
                      </video>
                      <div className="card-body" style={{padding:'0.1rem 0.2rem',}}>
                        <h5 className="card-title text-decoration-underline">Thermometer</h5>
                        <p className="card-text" >
                            Shows temperature in increasing order as shown in above video sample.<br/>
                            To download Source Code Please click here <b><a href={thermometeZip} Download>Download</a></b>
                        </p>
                      </div>
                      <div style={{padding:'.2rem 0.2rem',minHeight:'3.4rem'}} className="d-flex align-items-center justify-content-between card-footer bg-transparent border-success">
                          <b>Technologies Used: </b>&nbsp;JS, CSS AND HTML
                      </div>
                    </div>
                  </div>
                  
                  <div className="col belowScreen800px" >
                    <div className="card bg-dark text-light border border-1 shadow rounded p-1" >
                      <video controls>
                        <source  src={BulbOnOffPreview} type='video/mp4'/>
                        Your browser does not support the video tag.
                      </video>
                      <div className="card-body" style={{padding:'0.1rem 0.2rem'}}>
                        <h5 className="card-title text-decoration-underline">Bulb ON/OFF</h5>
                        <p className="card-text" >
                            The bulb changes its color on clicking the button ON/OFF. Built while learning basic Jquery.<br/>
                            To download Source Code Please click here <b><a href={bulbOnOffZip} Download>Download</a></b>
                        </p>
                      </div>
                      <div style={{padding:'.2rem 0.2rem', minHeight:'3.4rem'}} className="d-flex align-items-center justify-content-between card-footer bg-transparent border-success">
                          <b>Technologies Used: </b>JQuery, JS, CSS AND HTML
                      </div>
                    </div>
                  </div>
                  <div className="col belowScreen800px" >
                    <div className="card bg-dark text-light border border-1 shadow rounded p-1" >
                      <video controls>
                        <source  src={tempConverterPreview} type='video/mp4'/>
                        Your browser does not support the video tag.
                      </video>
                      <div className="card-body" style={{padding:'0.1rem 0.2rem'}}>
                        <h5 className="card-title text-decoration-underline">Temperature Converter</h5>
                        <p className="card-text" >
                            Helps in converting the temperature from Celsius to Fahrenheit and Fahrenheit to Celsius.<br/>
                            To download Source Code Please click here <b><a href={tempConverterZip} download>Download</a></b>
                        </p>
                      </div>
                      <div style={{padding:'.2rem 0.2rem', minHeight:'3.4rem'}} className="d-flex align-items-center justify-content-between card-footer bg-transparent border-success">
                          <b>Technologies Used: </b>&nbsp;JS, CSS AND HTML
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}
