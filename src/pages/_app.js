import '@/styles/globals.css';
import Layout from '@/components/layout/layout.js';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const handleLogin = async (user) => {
    localStorage.setItem('isAuthenticated', "true");
    router.push('/');
    localStorage.setItem('userName', user.userName);
    localStorage.setItem('userPhoto', user.photoUrl);
  };
  const handleLogout = async () => {
    // Implement logout logic here and set isAuthenticated to false
    localStorage.setItem('isAuthenticated', "false");
    localStorage.setItem('userName', "");
    localStorage.setItem('userPhoto', "");
    setUser(null);
    router.push('/');
  };


  return (
    <Layout handleLogout={handleLogout} handleLogin={handleLogin}>
    <Component {...pageProps}/>
    </Layout>
  )
}
