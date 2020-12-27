import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/slack_clone_react/:roomId">
                  <Chat />
                </Route>

                <Route path="/">
                  <h3>Welcome</h3>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
