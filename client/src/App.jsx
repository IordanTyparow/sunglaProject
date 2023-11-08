import { Routes, Route } from "react-router-dom"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import Create from "./components/create/Create"
import Login from "./components/auth/login/Login"
import ErrorPage from "./components/404/ErrorPage"
import Register from "./components/auth/register/Register"
import Detaitls from "./components/details/Details"
import Edit from "./components/edit/Edit"
import Delete from "./components/delete/Delete"
import Logout from "./components/auth/logout/Logout"

import { AuthProvider } from "../context/authContext"
import { SunglassesProvider } from "../context/sunglassesContext"

function App() {

  return (
    <AuthProvider>
      <Header />
      <SunglassesProvider>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sunglasses/catalog" element={<Catalog />} />
            <Route path="/sunglasses/create" element={<Create />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/sunglasses/:sunglassesId/details" element={<Detaitls />} />
            <Route path="/sunglasses/:sunglassesId/edit" element={<Edit />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/sunglasses/:sunglassesId/delete" element={<Delete />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </SunglassesProvider>

      <Footer />
    </AuthProvider>
  )
}

export default App
