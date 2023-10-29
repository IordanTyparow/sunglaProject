import { Routes, Route } from "react-router-dom"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import Create from "./components/create/Create"
import Login from "./components/Login/Login"
import ErrorPage from "./components/404/ErrorPage"

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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
