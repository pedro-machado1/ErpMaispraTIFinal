import "./App.css";
import "./assets/css/texts.css";
import "./assets/css/buttons.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import ProtectedRoute from "./components/ProtectedRoute";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";
import AddClientPage from "./pages/addClientPage/AddClientPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage/Login";
import { useAuth } from "./components/AuthContext";
import AddEmployeePage from "./pages/addEmployeePage/AddEmployeePage";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Router>
          {isAuthenticated &&<Header isLoggedIn={isAuthenticated} />}
          {isAuthenticated && <NavigationMenu />}
          
        <Routes>
        {!isAuthenticated && <Route path="/" element={<Login />} />}
          {!isAuthenticated && <Route path="/login" element={<Login />} />}
          {!isAuthenticated && <Route path="/resetpassword" element={<ResetPassword/>} />}
          <Route
            path="/cliente"
            element={
              <ProtectedRoute isLoggedIn={isAuthenticated }>
                <AddClientPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/funcionario"
            element={
              <ProtectedRoute isLoggedIn={isAuthenticated }>
                <AddEmployeePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute isLoggedIn={isAuthenticated }>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

/*
[{
  nome: "nome",
  desc: "desc"
},
{
  nome: "nome",
  desc: "desc"
}]
obj.map(() => {

})

// usar firstChield
// context api / useZustends
*/
