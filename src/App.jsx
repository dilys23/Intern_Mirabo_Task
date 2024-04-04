
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import getroutes from './routes/routes';
import { ConfigProvider } from 'antd';
import theme from "./theme/index";
function App() {
  return (
    <ConfigProvider direction='ltr' theme={theme}>
    <Router>
      <Routes>
        {getroutes().map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
    </ConfigProvider>
  );
}

export default App;