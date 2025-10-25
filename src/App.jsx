import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SuccessPage from "./components/SuccessPage";
import "./App.css";
import "./form.css";
import FormPage from "./components/FormPage";
import MainPage from "./components/MainPage";
function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/form">
          <FormPage />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
