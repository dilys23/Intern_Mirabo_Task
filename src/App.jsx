
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import getroutes from './routes/routes';
function App() {
  return (
    
    <Router>
      <Routes>
        {getroutes().map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
 
  );
}

export default App;