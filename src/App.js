import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import BranchPage from "./components/BranchPage/BranchPage";
import SideBar from "./components/LeftPanel/SideBar";
import Body from "./components/RightPanel/Body";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/repos/:username/:name/commits/:sha">
            <BranchPage />
          </Route>

          <Route path="/repos/:username/:name/branches">
            <div className="App">
              <Header />
              <div className="app__body">
                <SideBar />
                <Body />
              </div>
            </div>
          </Route>

          <Route path="/" exact>
            <div className="App">
              <Header />
              <div className="app__body">
                <SideBar />
                <Body />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
