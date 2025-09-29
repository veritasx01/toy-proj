import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./Pages/HomePage";
import { NavBar } from "./components/NavBar";
import { store } from "./store/store";
import { ToyIndex } from "./Pages/ToyIndex";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/toys" element={<ToyIndex />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
