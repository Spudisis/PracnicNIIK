import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";
import s from "./app.module.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className={s.wrapper}>
      <div className={s.img}>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
