import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Predictions from "./pages/predictions/Predictions";
import './app.css'

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Predictions />
      </div>
    </div>
  );
}

export default App;
