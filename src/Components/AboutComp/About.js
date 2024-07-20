import AboutIMG from '../AboutComp/media/AnanthHomeProfileImg.jpeg'
import '../AboutComp/About.css';
import AnanthProfileImg from '../AboutComp/media/AnanthHomeProfileImg.jpeg';

export default function About(){
        let ProfileIMgAboutPage;
        if(window.screen.width <1000){
            ProfileIMgAboutPage = AnanthProfileImg;
        }else{
            ProfileIMgAboutPage =  AboutIMG;
        }
    return(
        <>
            <div className="container text-light my-3 border-top" style={{maxHeight:'86vh'}}>
                <div id = 'secondContainer' className="container d-flex">
                    <div id='imageOuterContainprofImageer' className='d-flex align-items-center'>
                        <div id='imageContainer' className='d-flex align-items-center' style={{width:'100%',flexFlow:'column nowrap'}}>
                            <img id= 'profImage' src={ProfileIMgAboutPage} alt="AboutIMG"/>
                            <ul className='ulAboutPage'>
                                <li>
                                    <a target='_blank' rel="noreferrer" href="https://mail.google.com/mail/u/0/?tab=wm#search/myresume/KtbxLrjNXKgDGkDjRSbVxZgxQwqDBQzMpg?compose=DmwnWtDsVNgXFQSwftssKhngfLjhvMJkvxwSLXVJpnCGdhZwCWGsjkNfNmtQsDHzkqrJqvSlghmB">
                                        <i class="fa-lg fa fa-envelope" aria-hidden="true" title='email ananth'> </i>
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/ananth-shetty">
                                        <i class="fa-lg fa fa-linkedin-square" aria-hidden="true" title="ananth's linkedin profile"> </i>
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' rel="noreferrer" href="https://github.com/ananthsb">
                                        <i class="fa-lg fa fa-github-square" aria-hidden="true" title="ananth's github profile"> </i>
                                    </a></li>
                                <li>
                                    <a href="https://www.instagram.com/ananth_s_b/" target='_blank' rel="noreferrer">
                                        <i class="fa-lg fa fa-instagram" aria-hidden="true" title="ananth's Instagram profile"> </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/ananth.shetty.94/" target='_blank' rel="noreferrer">
                                        <i class="fa-lg fa fa-facebook-square" aria-hidden="true" title="ananth's Facebook profile"> </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                        <hr className="text-light"/>
                    <div className='pt-3 align-items-center justify-content-center' id='rightDiv'>
                        <h2 className='text-center' style={{borderBottom:'1px dashed antiquewhite'}}>About Me</h2>
                        <div style={{padding:'5% 5% 0% 5%', maxHeight:'85%', overflowY:'auto',overflowX:'hidden'}}>
                            <p style={{textIndent:'80px'}}>
                            &nbsp; A <b>self taught</b> passionate Frontend Web
                            Developer. By using web technologies I build amazing projects and
                            focus on solving problems for different niches and different
                            industries using the power of technology. <br /> <br />
                            With my current knowledge of all the languages mentioned below i have built this portfolio as well.
                            Where i can show case my skills and knowledge of web development. Being a noob into the web Development world.<br/><br/>
                            I will love to hear from you. Whether it's a project, job
                            opportunity, or just a chat. Feel free to contact me.   <br /> <br />
                            </p>
    
                            <b>I am Familiar with Technologies like:-</b>
                            <div id='tableContainer' className="container mb-3">
                                <table>
                                    <tr><th></th>      <td><div className= 'd-flex justify-content-center titleBottomBorder'>Basic</div></td>     <td><div className= 'd-flex justify-content-center titleBottomBorder'>Advance</div></td> </tr>
                                    <tr><th>HTML</th>    <td><div className='tdBorder'><div id='skillBasic' style={{width:'100%'}}> </div></div></td> <td><div className= 'tdBorder' ><div id='skillAdvance' style={{width:'75%'}} > </div></div></td></tr>
                                    <tr><th>CSS</th>    <td><div className='tdBorder'><div id='skillBasic' style={{width:'100%'}}> </div></div></td> <td><div className= 'tdBorder' ><div id='skillAdvance' style={{width:'60%'}} > </div></div></td></tr>
                                    <tr><th>Java Script</th> <td><div className='tdBorder'><div id='skillBasic' style={{width:'100%'}}> </div></div></td> <td><div className= 'tdBorder' ><div id='skillAdvance' style={{width:'95%'}} > </div></div></td></tr>
                                    <tr><th>React-JS</th>    <td><div className='tdBorder'><div id='skillBasic' style={{width:'100%'}}> </div></div></td> <td><div className= 'tdBorder' ><div id='skillAdvance' style={{width:'0%'}} > </div></div></td></tr>
                                    <tr><th>Jquery</th>    <td><div className='tdBorder'><div id='skillBasic' style={{width:'100%'}}> </div></div></td> <td><div className= 'tdBorder' ><div id='skillAdvance' style={{width:'50%'}} > </div></div></td></tr>
                                    <tr><th>Python</th>    <td><div className='tdBorder'><div id='skillBasic' style={{width:'100%'}}> </div></div></td> <td><div className= 'tdBorder' ><div id='skillAdvance' style={{width:'60%'}} > </div></div></td></tr>
                                    <tr><th>Bootstrap</th>    <td><div className='tdBorder'><div id='skillBasic' style={{width:'100%'}}> </div></div></td> <td><div className= 'tdBorder' ><div id='skillAdvance' style={{width:'0%'}} > </div></div></td></tr>
                                </table>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}