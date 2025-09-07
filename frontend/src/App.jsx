import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes, useLocation } from 'react-router-dom'

import Footer from '@/components/Footer.jsx';
import Home from '@/pages/Home.jsx';
import PageList from '@/pages/PageList.jsx';

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<PageList />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
