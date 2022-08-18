import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    // <div className="App">
    //   <p>Movie Database App</p>
    // </div>
  )
}

export default App
