import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Books from "./pages/Books";
import Quotes from "./pages/Quotes";
import BookDetails from "./pages/BookDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
