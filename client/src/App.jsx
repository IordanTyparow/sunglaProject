import { Routes, Route } from "react-router-dom"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import Create from "./components/create/Create"
import Login from "./components/Login/Login"
import ErrorPage from "./components/404/ErrorPage"
import Register from "./components/register/Register"
import Detaitls from "./components/details/Details"
import Edit from "./components/edit/Edit"

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sunglasses/:sunglassesId/details" element={<Detaitls />} />
          <Route path="/sunglasses/:sunglassesId/edit" element={<Edit />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
