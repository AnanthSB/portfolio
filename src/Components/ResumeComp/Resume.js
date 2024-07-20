import loading from './loading.gif';

export default function Resume(){
    let embedTag = document.getElementById('embedTag');

    return(
        <>
            <div className="mt-3 bg-dark">
            {(embedTag === null)?
            <div id='loadingImg' className='container d-flex justify-content-center align-items-center'
                 style={{width:'100%',height:'auto'}}>
                <img src= {loading} alt="Loading" style={{width:'25px'}} />
            </div> :""}
            <div id="embedTag">
                <embed src="https://ananthshetty.w3spaces.com/My-Resume/index.html" type=""
                style={{width:'100%', height:'100vh', marginTop:'-3%'}}/>
            </div>
            </div>
        </>
    )
}