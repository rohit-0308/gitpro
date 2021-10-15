import Header from "./components/Header";
import SideBar from "./components/sidebar/SideBar";
import Body from "./components/RepoBody/Body";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <SideBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
