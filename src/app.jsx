import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/details.component";
import Main from "./components/main.component";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />  {/* Router to render the Main Component */}
            <Route path="/details/:id" element={<Details />} />  {/* Router to render the Details Component */}
          </Routes> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
