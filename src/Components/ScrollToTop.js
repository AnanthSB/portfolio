import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

{/* <NavBar style={{width:'100%'}}/>
<Home style={{width:'100%'}}/>
<Projects style={{width:'100%'}}/>
<Resume style={{width:'100%'}}/>
<Contact style={{width:'100%'}}/>
<Footer style={{width:'100%'}}/> */}