import store from "../redux/store";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.scss";

const AirbnbPage = lazy(() => import("../pages/AirbnbPage"));

function App() {
  return (
    <Suspense fallback={<div className="spinner-border text-primary" role="status"></div>}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AirbnbPage />} />
            <Route path="*" element={<div>NOT FOUND 404</div>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
