
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookList from "./components/bookList.component";
import CreateBook from "./components/createBook.component";

export default function App(){
    return (
        <>
    
        <BrowserRouter>
        <Routes>
        {/* <Navbar /> */}
    
          {/* <div className="container"> */}
            <Route path="/" exact element={<BookList />} />
            <Route path="/create" element={<CreateBook />} />
          {/* </div> */}
          </Routes>
        </BrowserRouter>
        </>
      );
}