import { React, BrowserRouter as Router, Switch, Route } from "libraries";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";
import { appRoutes } from "routes";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />
        <Sidebar />

        <main className="main">
          <div className="content">
            <Switch>
              {appRoutes.map((route, index) => (
                <Route {...route} key={index} />
              ))}
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
