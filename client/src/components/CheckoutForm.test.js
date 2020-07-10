import React from "react";
import { render, cleanup } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

afterEach(cleanup)

test("form header renders", () => {
    render(<nav/>)
});

test("form shows success message on submit with form details", () => {});
