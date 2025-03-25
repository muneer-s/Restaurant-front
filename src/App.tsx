import Header from './components/Header';
import backgroundImage from '../assets/home-img.jpg';

function App() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <p className="text-2xl font-bold text-white">Welcome to Home</p>
      </div>
    </div>
  );
}

export default App;
