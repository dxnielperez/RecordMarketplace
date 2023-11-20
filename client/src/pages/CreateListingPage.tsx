import { useEffect } from 'react';
import { CreateNewListing } from '../components/CreateNewListing';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';

export function CreateListingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem('token');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div>
      <Header />
      <CreateNewListing />
      <Footer />
    </div>
  );
}
