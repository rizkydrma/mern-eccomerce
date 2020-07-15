import {
  React,
  BrowserRouter as Router,
  Switch,
  Route,
  useSelector,
} from "libraries";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";
import { appRoutes } from "routes";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <Router>
      <div className="grid-container">
        <Header userInfo={userInfo} />
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
