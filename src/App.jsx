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
        <Route
          path="login"
          element={
            <GuardRoute>
              <Login />
            </GuardRoute>
          }
        />
        <Route
          path="/"
          element={
            <>
              <GuardRoute />
              <Navbar />
              <div className="w-[95%] mx-auto">
                <Sidebar />
              </div>
            </>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transaksi" element={<Transaksi />} />
          <Route path="master-data" element={<MasterData />} />
          <Route path="customer" element={<Customer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
