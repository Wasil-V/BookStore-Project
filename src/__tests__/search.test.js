import { fireEvent, render, screen } from '@testing-library/react';
import { } from '@testing-library/jest-dom';
import Search from '../components/search.component';
import userEvent from '@testing-library/user-event'
import { Provider } from "react-redux";
import store from "../redux/store";

describe("Test search component", () => {
    test("render search with one button", async () => {
        render(<Provider store={store}>
            <Search />
        </Provider>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
    })

    test("college search should be type text", () => {
        render(<Provider store={store}>
            <Search />
        </Provider>);
        const college = screen.getByPlaceholderText("Search By College")
        expect(college).toHaveAttribute("type", "text");
    })

    test("book search should be type text", () => {
        render(<Provider store={store}>
            <Search />
        </Provider>);
        const book = screen.getByPlaceholderText("Search By Book")
        expect(book).toHaveAttribute("type", "text");
    })

    test("validation for Submit when the Fields are Empty", () => {
        render(<Provider store={store}>
            <Search />
        </Provider>);
        const college = screen.getByTestId("collegeval");
        const book = screen.getByTestId("bookval");
        const submitBtn = screen.getByTestId("submit");

        fireEvent.click(submitBtn)

        expect(college.textContent).toBe("Please Enter College")
        expect(book.textContent).toBe("Please Enter Book")
    })

    test("validation for when the user types", () => {
        render(<Provider store={store}>
            <Search />
        </Provider>);

        const submitBtn = screen.getByTestId("submit");
        const collegeInputNode = screen.getByPlaceholderText("Search By College");
        const bookInputNode = screen.getByPlaceholderText("Search By Book");
        const college = screen.getByTestId("collegeval");
        const book = screen.getByTestId("bookval");

        userEvent.click(submitBtn);
        expect(college.textContent).toBe("Please Enter College");
        expect(book.textContent).toBe("Please Enter Book");

        userEvent.type(collegeInputNode, "xyz");
        userEvent.type(bookInputNode, "knight");

        expect(college.textContent).toBe("");
        expect(book.textContent).toBe("");

    })

    test("validation for when the user searches by college", () => {
        render(<Provider store={store}>
            <Search />
        </Provider>);

        const submitBtn = screen.getByTestId("submit");
        const collegeInputNode = screen.getByPlaceholderText("Search By College");
        const college = screen.getByTestId("collegeval");
       
        userEvent.click(submitBtn);
        expect(college.textContent).toBe("Please Enter College");

        userEvent.type(collegeInputNode, "xyz");
        
        expect(college.textContent).toBe("");

    })
    test("validation for when the user searches by book", () => {
        render(<Provider store={store}>
            <Search />
        </Provider>);

        const submitBtn = screen.getByTestId("submit");
        const bookInputNode = screen.getByPlaceholderText("Search By Book");
        const book = screen.getByTestId("bookval");
       
        userEvent.click(submitBtn);
        expect(book.textContent).toBe("Please Enter Book");

        userEvent.type(bookInputNode, "xyz");
        
        expect(book.textContent).toBe("");

    })


})