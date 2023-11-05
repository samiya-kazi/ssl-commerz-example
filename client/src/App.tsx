import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormPage from './Pages/FormPage'
import SuccessPage from './Pages/SuccessPage'
import FailPage from './Pages/FailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormPage />} />
        <Route path='/success' element={<SuccessPage />} />
        <Route path='/fail' element={<FailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
