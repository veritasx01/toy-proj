import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import { store } from "./store/store";
import { ToyIndex } from "./pages/ToyIndex";
import { ToyEdit } from "./pages/ToyEdit";
import { ToyDetails } from "./pages/ToyDetails";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/toy-proj">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/toys" element={<ToyIndex />}></Route>
          <Route path="/edit" element={<ToyEdit />}></Route>
          <Route path="/edit/:toyId" element={<ToyEdit />}></Route>
          <Route path="/details" element={<ToyDetails />}></Route>
          <Route path="/details/:toyId" element={<ToyDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
