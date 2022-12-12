import background from "../assets/background.jpg";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import like from "../assets/like.png";
import book from "../data/details.json";
import moment from "moment";
import { NavLink } from "react-router-dom";

//List Component Function to Display The List of Books and to Filter them by Search
let List = () => {

  let books = useSelector((state) => state.search.books); // State to Hold the Search By Book Field Inputs
  let colleges = useSelector((state) => state.search.colleges); // State to Hold the Search By Colleges Field Inputs
  const [loading, setLoading] = useState(false); //State for Loading Animation

  //Function for Loading Animation
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [books, colleges]);

  var bookSearch = []; //Variable to hold the Inputs from the books state for Filtering Search
  var collegeSearch = []; //Variable to hold the Inputs from the colleges state for Filtering Search
  var found = true; //Varible Used for Conditional rendering of List
  var show = true;  //Varible Used for Conditional rendering of List

  // Function to Store the states to Array Variable
  Object.keys(books).forEach(function (item) {
    bookSearch.push(books[item]);
  });
  Object.keys(colleges).forEach(function (item) {
    collegeSearch.push(colleges[item]);
  })


  let data = book.data; //Varible to hold the JSON file Data

  //Conditional Function To Return show=false and found=false when Search does Not Match any Book in the List
  data.map((val) => {
    if ((bookSearch[0].bookName !== val.name.toLowerCase() && bookSearch[0].bookName !== "") || (collegeSearch[0].collegeName !== val.college.toLowerCase() && collegeSearch[0].collegeName !== "")) {
      return [(show = false), (found = false)];
    }
  });

  //Conditional Function To Return show=false and found=true when Search is Passed
  data.map((val) => {
    if ((bookSearch[0].bookName == val.name.toLowerCase()) || (collegeSearch[0].collegeName == val.college.toLowerCase())) {
      return [(show = false), (found = true)];
    }
  });

  //Conditional Function To Return show=true and found=false when Search is empty 
  data.map((val) => {
    if ((bookSearch[0].bookName == "") && (collegeSearch[0].collegeName == "")) {
      return [(show = true), (found = false)];
    }
  });

  return (
    <div id="mainList">
      {/* loading Animation */}
      {loading ? <div className="d-flex justify-content-center">
        <div className="spinner-border text-success m-5" style={{ width: 50, height: 50 }} role="status">
          <span className="sr-only"></span>
        </div>
      </div> : <div className="row row-cols-1 row-cols-xl-3 row-cols-xxl-4 row-cols-md-1 row-cols-lg-3   row-cols-sm-1 g-4">
        {/* To render Book List when show=true */}
        {show &&
          data.map((val, idx) => {
            return (
              <div className="col" key={idx}>
                <NavLink to={"/details/" + val._id} className="cardlink">
                  <div className="card">
                    <div id="cardNd">
                      <img
                        src={background}
                        className="card-img-top"
                        alt="book"
                        id="listimg"
                      />
                      <div id="cardName">{val.name}</div>
                      <div id="cardDate">
                        <span>{moment(val.createdAt).fromNow()}</span>
                      </div>
                    </div>
                    <div id="cardback">
                      <div className="cardbtn">
                        College : {val.college}
                      </div>
                      <div className="cardbtn">
                        Year : {val.year}
                      </div>
                      <div className="cardbtn">
                        Branch : {val.branch}
                      </div>
                    </div>
                    <div id="price">
                      <h5>₹{val.title} /-</h5>
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
                    <div className="likes">
                      <img src={like} alt="like" width={25} height={23} />
                      <span id="likenum">
                        {val.likes.length === 0 && `Like`}
                        {val.likes.length === 1 && val.likes.length + ` Like`}
                        {val.likes.length > 1 && val.likes.length + ` Likes`}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
          {/* To render the List if the book is found */}
        {!show &&
          found &&
          data.map((val, idx) => {
            if (bookSearch[0].bookName == val.name.toLowerCase() || collegeSearch[0].collegeName == val.college.toLowerCase()) {
              return (
                <div className="col" key={idx}>
                  <NavLink to={"/details/" + val._id} className="cardlink">
                    <div className="card">
                      <div id="cardNd">
                        <img
                          src={background}
                          className="card-img-top"
                          alt="book"
                          id="listimg"
                        />
                        <div id="cardName">{val.name}</div>
                        <div id="cardDate">
                          <span>{moment(val.createdAt).fromNow()}</span>
                        </div>
                      </div>
                      <div id="cardback">
                        <div className="cardbtn">
                          College : {val.college}
                        </div>
                        <div className="cardbtn">
                          Year : {val.year}
                        </div>
                        <div className="cardbtn">
                          Branch : {val.branch}
                        </div>
                      </div>
                      <div id="price">
                        <h5>₹{val.title} /-</h5>
                      </div>
                      <div id="branch">
                        {val.tags.map((x, idx) => {
                          return (
                            <span key={idx} id="bran">
                              {x} <br />
                            </span>
                          );
                        })}
                      </div>
                      <div className="likes">
                        <img src={like} alt="like" width={25} height={25} />
                        <span id="likenum">
                          {val.likes.length === 0 && `Like`}
                          {val.likes.length === 1 && val.likes.length + ` Like`}
                          {val.likes.length > 1 && val.likes.length + ` Likes`}
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            }
          })}
          {/* to Render if the search does not find any book in the list */}
        {!show && !found && <div id="notfound">No Books Found  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
      </div>}
    </div>
  );
};

export default List;
