import Footer from "../footer/Footer";
import Header from "../navbar/Header";

export default function Layout({children}) { 
    return(
      <>
       <Header/>
        <main>{children}</main>
        <Footer/>
      </>
    );
  }