import Footer from "../footer/footer";
import "./home.css"; // the file containing the styles for the html in the code in this file
import { Link } from "react-router-dom";

// sample code, you can remove everything in return statement and put your own html
export default function Home() {
  return (
    <div>
      <body>
        <div className="content">
          <div className="logoContainer">
            <img
              src={require("./assets/IMG-20240214-WA0001.jpg")}
              className="logo"
            />
          </div>
          <div className="buttons">
            <Link className="button" to={"/Factory"}>
              Factory
            </Link>
            <Link className="button">Farm</Link>
            <Link className="button">Institute</Link>
            <Link className="button">Machinery</Link>
          </div>
          <Footer />
        </div>
      </body>
    </div>
  );
}
