import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SearchContainer from './components/SearchContainer/SearchContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <SearchContainer />
      <Footer />
    </div>
  )
}

export default App;
