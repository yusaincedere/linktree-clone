import '@/styles/globals.css';
import Layout from '@/components/layout/layout.js';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user,setUser] = useState();
  const handleLogin = async (user) => {
    setIsAuthenticated(true);
    Router.push('/');
    setUser(user);
  };
  const handleLogout = async () => {
    // Implement logout logic here and set isAuthenticated to false
    setIsAuthenticated(false);
    setUser(null);
    Router.push('/');
  };


  return (
    <Layout handleLogout={handleLogout} isAuthenticated={isAuthenticated} user={user} handleLogin={handleLogin}>
    <Component {...pageProps}/>
    </Layout>
 
 
  )
}
