// App.jsx
import Footer from './components/Footer';
import HeaderBar from './components/HeaderBar';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <HeaderBar />
      <Navbar />
      <main className="min-h-screen">
        {/* Add your main content here */}
        <div className="container mx-auto py-8">
        < HeroSection/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;