import { ConfigProvider } from "antd";
import theme from "./theme/index";
import { BrowserRouter } from "react-router-dom";
// import Routers from "./routes/index";
import Routers from "./routes/routes";
function App() {
  return (
    <ConfigProvider direction="ltr" theme={theme}>
      <BrowserRouter>
          <Routers />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
