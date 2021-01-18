import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
