import background from "../assets/background.jpg";
import book from "../data/details.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./header.component";
import moment from "moment";

//Details Component Function 
let Details = () => {

  let params = useParams(); //Variable to store the Route parameters from URL
  let data = book.data; // Variable for storing JSON file data
  let hid = params.id; //Variable to store the id from the parameters
  const [loading, setLoading] = useState(false); //state for Loading Animation

  //Function for Loading Animation
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div id="detailCont">
      <Header />
      <br />
      {/* Loading Animation */}
      {loading ? <div className="d-flex justify-content-center">
        <div className="spinner-border text-success m-5" style={{ width: 50, height: 50 }} role="status">
          <span className="sr-only"></span>
        </div>
      </div> : <div id="maincard" className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6 ">
            <div className="card-body">
              {data.map((val, idx) => {
                if (val._id === hid) {
                  return (
                    <div id="cardback" key={idx}>
                      <h3 className="card-title">₹{val.title} /-</h3>
                      <div className="cardbtn">
                        College : {val.college}
                      </div>
                      <div className="cardbtn">
                        Year : {val.year}
                      </div>
                      <div className="cardbtn">
                        Branch : {val.branch}
                      </div>
                      <div id="branch">
                      {val.tags.map((x, idx) => {
                        return (
                          <button key={idx} id="bran">
                            {x} <br />
                          </button>
                        );
                      })}
                    </div>
                      <span>Created By : {val.name}</span>
                      <div>
                        <span>{moment(val.createdAt).fromNow()}</span> {/*Moment node module to calculate date and time */}
                      </div>
                      <hr />
                      <br />
                      <hr />
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className="col-md-6">
            <img
              id="detimg"
              src={background}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Details;
