import Footer from "../footer/Footer";
import Header from "../navbar/Header";
import React from "react";
export default function Layout({children,handleLogin,handleLogout,user,isAuthenticated}) { 
    return(
      <>
       <Header user={user} isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
       <main>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { user: user ,handleLogin:handleLogin,isAuthenticated:isAuthenticated});
        })}
      </main>
        <Footer/>
      </>
    );
  }