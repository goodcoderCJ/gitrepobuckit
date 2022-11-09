import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import GitRepo from "./components/GitRepo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBound from "./components/ErrorBound";
import Notfound from "./components/Notfound";
import NestedPage from "./components/NestedPage";
import repos from "./components/GitRepo";
function App() {
  return (
    <ErrorBound>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repo" element={<GitRepo />}>
            <Route path="/repo/nested" element={<NestedPage props={repos} />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer className="footer" />
      </div>
    </ErrorBound>
  );
}

export default App;
