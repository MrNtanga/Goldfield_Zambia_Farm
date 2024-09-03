import "./header.css";
import { useNavigate } from "react-router-dom";
export default function Header({ page }) {
  const Navigate = useNavigate();
  return (
    <div className="mainHeaderContainer">
      <div className="backAndPageContainer" onClick={() => Navigate(-1)}>
        <img
          src={require("./assets/back-icon-3.jpg")}
          style={{ height: "24px", width: "24px" }}
        />
      </div>
      <h1>Goldfield Zambia Farm</h1>
    </div>
  );
}
