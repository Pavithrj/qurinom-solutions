import './App.css';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import HeaderContainer from './Components/HeaderConainer';
import HeaderContent from './Components/HeaderContent';
import LeaderShip from './Components/LeaderShip';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div>
      <TopBar />
      <HeaderContainer />
      <HeaderContent />
      <AboutUs />
      <LeaderShip />
      <Footer />
    </div>
  );
}

export default App;
