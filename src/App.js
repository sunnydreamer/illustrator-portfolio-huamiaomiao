import "./App.css";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Hua Miao Miao Illustration</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Huamiaomiao Portfolio" />
        </Helmet>
      </div>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" />
          <Route path="/contact" />
        </Routes>
      </div>
    </>
  );
}

export default App;
