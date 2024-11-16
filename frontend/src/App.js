import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';  // Add useLocation here
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const App = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top whenever the route changes
  }, [location]);  // This effect runs whenever the route changes

  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
