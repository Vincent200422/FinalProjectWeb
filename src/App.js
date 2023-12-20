import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarBoot from './NavbarBoot';
import Footer from './components/footer/Footer';
import { Dna } from  'react-loader-spinner'
import OurMenu from './ourmenu/OurMenu';
import Description from './description/Description';
import Specials from './specials/Specials';
import Reservation from './reservation/Reservation';
import Remarks from './remarks/Remarks';


const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./contact/Contact'));

function LoadingIndicator() {
  return (
    <div style={loadingStyle}>
     <Dna
  visible={true}
  height="150"
  width="150"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
  
</div>
  );
}

const loadingStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <Router>
      <NavbarBoot />
      <Container fluid>
        <Row>
          <Col style={{ marginBottom: '-3rem' }}>
            <Routes>
              <Route path="/" element={<Suspense fallback={<LoadingIndicator />}><Home /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<LoadingIndicator />}><About /></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<LoadingIndicator />}><Contact /></Suspense>} />
              <Route path="/ourmenu" element={<Suspense fallback={<LoadingIndicator />}><OurMenu /></Suspense>} />
              <Route path="/description" element={<Suspense fallback={<LoadingIndicator />}><Description /></Suspense>} />
              <Route path="/specials" element={<Suspense fallback={<LoadingIndicator />}><Specials /></Suspense>} />
              <Route path="/reservation" element={<Suspense fallback={<LoadingIndicator />}><Reservation /></Suspense>} />
              <Route path="/remarks" element={<Suspense fallback={<LoadingIndicator />}><Remarks /></Suspense>} />
              
              
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

