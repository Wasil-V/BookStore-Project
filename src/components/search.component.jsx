import { useDispatch } from "react-redux";
import { searchbook } from "../redux/";
import React from "react";
import { useRef, useState } from "react";

//Search Component function to Search for books
let Search = () => {

  let [validateStateCollege, changeValidateStateCollege] = useState(""); //state to validate Search By College Field in Search 
  let [validateStateBook, changeValidateStateBook] = useState(""); //state to validate Search By Books Field in Search 


  var book = "";    // Variable to Hold the Input from Search By Book Field
  var college = ""; // Variable to Hold the Input from Search By College Field

  let inputFeildBook = useRef(); //Variable to clear the Search By Book Field after Submit
  let inputFeildCollege = useRef();  //Variable to clear the Search By College Field after Submit
  let ValidateCollege = useRef(); //Variable to Validate the Search By College Field
  let ValidateBook = useRef(); // Variable to Validate the Search By Book Field
  let dispatch = useDispatch(); //Dispatch for Redux Store

  //Function to Store Input from Search By Book Field and to Change the state for Validation
  let setBook = (e) => {
    book = e.target.value;
    book = book.toLowerCase().trim();
    if (book !== "") {
      changeValidateStateBook("");
      changeValidateStateCollege("");
    }
  };

  //Function to Store Input from Search By College Field and to Change the state for Validation
  let setCollege = (e) => {
    college = e.target.value;
    college = college.toLowerCase().trim();
    if (college !== "") {
      changeValidateStateCollege("");
      changeValidateStateBook("");
    }
  };

  //Function to clear the Search Fields after Submit and change Validation States
  let clearSearch = (e) => {

    e.preventDefault();

    inputFeildBook.current.value = "";
    inputFeildCollege.current.value = "";

    if (
      inputFeildBook.current.value === "" &&
      inputFeildCollege.current.value === ""
    ) {
      changeValidateStateCollege("Please Enter College");
      changeValidateStateBook("Please Enter Book");
    }

    if (
      inputFeildBook.current.value !== "" ||
      inputFeildCollege.current.value !== ""
    ) {
      ValidateCollege.current = "";
      ValidateBook.current = "";
    }
  };

  return (
    <div id="searchbox">
      <form action="#">
        <div class="field">
          <input name="college" type="text"
            required
            onInput={(e) => {
              setCollege(e);
            }}
            autoComplete={"off"}
            id="college"
            ref={inputFeildCollege}
          />
          <label htmlFor="college">Search By College</label>
          <span className="valspan" data-testid="collegeval">
            {validateStateCollege}
          </span>
        </div>
        <br />
        <div class="field">
          <input type="text"
            required
            onInput={(e) => {
              setBook(e);
            }}
            autoComplete={"off"}
            id="book"
            name="book"
            ref={inputFeildBook}
          />
          <label htmlFor="book">Search By Book</label>
          <span className="valspan" data-testid="bookval">
            {validateStateBook}
          </span>
        </div>
        <br />
        <br />
        <button
          className="searchBtn"
          data-testid="submit"
          onClick={(e) => {
            dispatch(searchbook(book, college));  //Dispatch to send the Input from search fields to the Redux Store 
            clearSearch(e);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
