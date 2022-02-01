import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import MovieForm from "./components/movieForm";
import Movies from "./components/Movies";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <NavBar user={user} />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/new" component={MovieForm} />

          <Route path="/movies" render={(props) => <Movies {...props} />} />
          <Redirect to="/movies"></Redirect>
        </Switch>
      </main>
    </div>
  );
}

export default App;
