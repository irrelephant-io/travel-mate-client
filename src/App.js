import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SearchContainer from './components/SearchContainer/SearchContainer';
import SearchResult from './components/SearchResult/SearchResult';
import TermsAndConditions from './components/Terms/TermsAndConditions';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Route exact path="/" component={SearchContainer} />
        <Route path="/result" component={SearchResult} />
        <Route path="/terms" component={TermsAndConditions} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;

