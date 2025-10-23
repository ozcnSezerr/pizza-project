import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormHeader from "./components/FormHeader";
import SuccessPage from "./components/SuccessPage";
import "./App.css";
import SiparisForm from "./components/SiparisForm";
import MainPage from "./components/MainPage";
function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Switch>
        <Route path="/form">
          <FormHeader />
          <SiparisForm />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
