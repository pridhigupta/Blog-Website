import Newfile from "./components/newfile/Newfile";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/Topbar"
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/register">
          {user ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Homepage/> : <Login/>}
        </Route>
        <Route path="/write">
        {user ? <Write/> : <Register/>}
        </Route>
        <Route path="/settings">
        {user ? <Settings/> : <Register/>}
        </Route>
        <Route path="/post">
          <Single />
        </Route>
        <Route path="/sidebar">
          <Sidebar />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/newfile">
          <Newfile/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
