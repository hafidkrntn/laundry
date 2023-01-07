import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Customer from "./pages/customer";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login/index";
import MasterData from "./pages/masterData";
import Transaksi from "./pages/transaksi";
import GuardRoute from "./components/guardRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <div className="w-[95%] mx-auto">
                <Sidebar />
              </div>
            </div>
          }
        >
          <Route
            path="dashboard"
            element={
              // <GuardRoute>
                <Dashboard />
              // </GuardRoute>
            }
          />
          <Route
            path="transaksi"
            element={
              // <GuardRoute>
                <Transaksi />
              // </GuardRoute>
            }
          />
          <Route path="master-data" element={<MasterData />} />
          <Route path="customer" element={<Customer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
