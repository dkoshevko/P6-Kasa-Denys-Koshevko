import Router from "./routes/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
