import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SearchContainer from './components/SearchContainer/SearchContainer';
import TermsAndConditions from './components/Terms/TermsAndConditions';
import { BrowserRouter, Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Redirect to="/search" />  {/* seems like NOOB idea!!! HELP */}
        <Route path="/search" component={SearchContainer} />
        <Route path="/terms" component={TermsAndConditions} />
        <Footer />
      </div></BrowserRouter>
  )
}

export default App;

