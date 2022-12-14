import { useEffect, useState } from "react";
import List from "./list.component"
import Search from "./search.component"

//To return Content Component
let Content = () => {
    const [loading, setLoading] = useState(false); //state for Loading Animation

    //Function for Loading Animation
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, []);
    return <div id="content">
        {loading ? <div className="homeLoading">
            <div className="d-flex justify-content-center">
        <div className="spinner-border text-success m-5" style={{ width: 50, height: 50 }} role="status">
          <span className="sr-only"></span>
        </div>
      </div>
        </div> : <List/>}
        <Search />
    </div>
}

export default Content;