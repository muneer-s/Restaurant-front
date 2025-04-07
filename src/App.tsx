import Footer from './components/Footer';
import Header from './components/Header';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Home3 from './components/Home3';

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col bg-cover bg-center text-center">
      <Header />
      <Home1/>
      <Home2/>
      <Home3/>
      <Footer/>
    </div>
  );
}

export default App;
