import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import getroutes from "./routes/routes";
import PrivateRoutes from "./routes/PrivateRoute";
import { ConfigProvider } from "antd";
import theme from "./theme/index";
import HomePage from "./pages/Home/HomePage";
function App() {
  return (
    <ConfigProvider direction="ltr" theme={theme}>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/homepage" element={<HomePage />}></Route>
          </Route>
          {getroutes().map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
