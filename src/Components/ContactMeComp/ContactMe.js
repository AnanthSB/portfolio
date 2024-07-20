import '../ContactMeComp/ContactMe.css'

export default function Contact(){

    return(
        <>
        <div className='mainContainer' id="contactMe">
            <div className="titleContainer text-center">
                <h3 className="title">Contact Info</h3>
            </div>
            <hr style={{width:"100%"}}/>
            <div id='contactContainer' className="container bg-dark shadow border-top border-2">
            <ul  className="contactContainerUL list-style-none" style={{backgroundColor:'rgb(21,25,29)', listStyleType:'none'}}>
                    <li className="contactContainerUlLi">
                        <span className="spanClass icon"><i className="fa fa-phone" aria-hidden="true"></i>
                        </span>
                        <span className="text">+91 9676838413</span>
                    </li>
                    <li className="contactContainerUlLi">
                        <a target="_blank" rel="noreferrer" className="linksOnHover"
                            href="https://mail.google.com/mail/u/0/?tab=wm#search/myresume/KtbxLrjNXKgDGkDjRSbVxZgxQwqDBQzMpg?compose=DmwnWtDsVNgXFQSwftssKhngfLjhvMJkvxwSLXVJpnCGdhZwCWGsjkNfNmtQsDHzkqrJqvSlghmB"
                            style={{color:'rgb(197,198,199)'}}>
                            <span className="spanClass icon">
                                <i className="fa fa-envelope-o" aria-hidden="true">
                                </i>
                            </span>
                            <span className="text">ananth4sb@gmail.com</span></a>
                    </li>
                    <li className="contactContainerUlLi">
                        <a target="_blank" rel="noreferrer" className="linksOnHover " href="https://linkedin.com/in/ananth-shetty-8ab243232"
                            style={{color:'rgb(197,198,199)'}}>
                        <span className="spanClass icon"><i className="fa fa-linkedin" aria-hidden="true"></i>
                        </span>
                        <span className="text">linkedin.com/in/ananth-shetty/</span></a>
                    </li>
                    <li className="contactContainerUlLi">
                        <a target="_blank" rel="noreferrer" className="linksOnHover " href="https://github.com/ananthsb"
                        style={{color:'rgb(197,198,199)'}}>
                        <span className="spanClass icon"><i className="fa fa-github" aria-hidden="true"></i>
                        </span>
                        <span className="text">github.com/ananthsb</span></a>
                    </li>
                    <li className="contactContainerUlLi">
                        <a target="_blank" rel="noreferrer" className="linksOnHover " href="http://ananthshetty.in/"
                        style={{color:'rgb(197,198,199)'}}>
                        <span className="spanClass icon"><i className="fa fa-globe" aria-hidden="true"></i>
                        </span>
                            <span className="text">ananthshetty.in</span></a>
                    </li>
                </ul>
            </div>
        <div className='footerContainer bg-dark  d-flex justify-content-center text-muted'>
            <p>Please click any link above to contact me</p>
        </div>
        </div>
        </>
    )
}