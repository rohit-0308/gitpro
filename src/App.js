import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import BranchPage from "./components/BranchPage/BranchPage";
import SideBar from "./components/sidebar/SideBar";
import Body from "./components/RepoBody/Body";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="App">
              <Header />
              <div className="app__body">
                <SideBar />
                <Body />
              </div>
            </div>
          </Route>
          <Route path="/branch">
            <BranchPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
