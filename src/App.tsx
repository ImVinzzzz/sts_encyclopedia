import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StarField from './components/StarField'

function App() {
  return (
    <BrowserRouter>
      <StarField />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/species/:id" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
