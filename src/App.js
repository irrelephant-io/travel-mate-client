import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import FlightSelector from './components/FlightSelector/FlightSelector';
import SearchResult from './components/SearchResult/SearchResult';
import TermsAndConditions from './components/Terms/TermsAndConditions';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Route exact path="/" component={() => <FlightSelector btnText="Next" btnNavLink="/arrival" placeholder="From?" />} />
        <Route path="/arrival" component={() => <FlightSelector btnText="Search" btnNavLink="/optimizations" placeholder="To?" />} />
        <Route path="/result" component={SearchResult} />
        <Route path="/terms" component={TermsAndConditions} />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App;