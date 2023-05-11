import Footer from "../footer/Footer";
import Header from "../navbar/Header";
import React from "react";
export default function Layout({children,handleLogin,handleLogout}) { 
    return(
      <>
       <Header handleLogout={handleLogout}/>
       <main>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {handleLogin:handleLogin});
        })}
      </main>
        <Footer/>
      </>
    );
  }