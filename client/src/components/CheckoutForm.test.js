import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows


test("form header renders", () => {
   const {getByText} = render(<CheckoutForm/>)
   const header = screen.getByText(/checkout form/i)
   expect(header).toBeInTheDocument()
    
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstNameInput =(screen.getByLabelText(/first name:/i))
    const lastNameInput =(screen.getByLabelText(/last name:/i))
    const addressInput =(screen.getByLabelText(/address:/i))
    const cityInput =(screen.getByLabelText(/city:/i))
    const stateInput =(screen.getByLabelText(/state:/i))
    const zipInput =(screen.getByLabelText(/zip:/i))

    fireEvent.change(firstNameInput, {target:{value:'John'}})
    fireEvent.change(lastNameInput, {target:{value:'Smith'}})
    fireEvent.change(addressInput, {target:{value:'123 Blvd'}})
    fireEvent.change(cityInput, {target:{value:'Fake City'}})
    fireEvent.change(stateInput, {target:{value:'Utah'}})
    fireEvent.change(zipInput, {target:{value:'84660'}})

    const submitButton = screen.getByTestId(/button/i)
    fireEvent.click(submitButton)
    const successMessage = screen.getByTestId(/successMessage/i)
    expect(successMessage).toBeInTheDocument()
});
