import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotificationProvider } from "./contexts/NotificationContext";
import Layout from "./components/Layout/index";
import Home from "./pages/Home";
import NoteDetail from "./pages/NoteDetail";
import NewNote from "./pages/NewNote";
import "./App.css";

function App() {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/notes/:id" element={<NoteDetail />} />
            <Route path="/new" element={<NewNote />} />
          </Route>
        </Routes>
      </Router>
    </NotificationProvider>
  );
}

export default App;
