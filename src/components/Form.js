import React, { useState, useEffect } from "react";
import { country_list } from "../../src/utils/constant";
import { Link } from "react-router-dom";

const Form = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    contactNum: "",
    departureCount: "",
    destinationCount: "",
    departureDate: "",
    returnDate: "",
    classService: "",
    serviceNeed: [],
  });

  const [bFormValue, setbFormValue] = useState([]);

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (formValue.firstName && formValue.lastName && formValue.email) {
      setIsDisabled(false);
    }
  }, [formValue]);

  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(bFormValue));
  }, [bFormValue]);

  const changeHandeler = (e) => {
    if (e.target.type === "checkbox") {
      let tempAarray = [...formValue.serviceNeed];

      if (e.target.checked) {
        tempAarray.push(e.target.value);
      } else {
        let i = tempAarray.indexOf(e.target.value);
        tempAarray.splice(i, 1);
      }
      setFormValue({
        ...formValue,
        serviceNeed: [...tempAarray],
      });
    } else {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitHandeler = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    // let getData = JSON.parse(localStorage.getItem("myData"))
    // getData.push(formValue)
    // let myData = JSON.stringify(getData);
    // console.log(getData)
    // localStorage.setItem("myData", myData)

    setbFormValue([...bFormValue, formValue]);

    localStorage.setItem("myData", JSON.stringify(bFormValue));
    alert("Form submitted successfully");

    setFormValue({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      contactNum: "",
      departureCount: "",
      destinationCount: "",
      departureDate: "",
      returnDate: "",
      classService: "",
      serviceNeed: [],
    });

    // console.log(bFormValue.firstName)
  };

  return (
    <>
      <form onSubmit={submitHandeler}>
        <div
          style={{ marginTop: "150px", marginBottom: "50px" }}
          className="container"
        >
          <Link to="/contact">
            <i className="fa-solid fa-backward text-primary"> Back</i>
          </Link>
          <div className="card shadow-lg p-5">
            <h1 className="text-center mt-3">Travel Information Form</h1>
            <p className=" text-center">
              Please provide us with the contact information below and we will
              arrange to reserve your ticket.
            </p>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="">First Name</label>
                <input
                  value={formValue.firstName}
                  name="firstName"
                  onChange={changeHandeler}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group col-md-6">
                <label for="">Last Name</label>
                <input
                  value={formValue.lastName}
                  name="lastName"
                  onChange={changeHandeler}
                  type="text"
                  className="form-control"
                  id=""
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-4">
                <label>Date of Birth</label>
                <input
                  value={formValue.dateOfBirth}
                  name="dateOfBirth"
                  onChange={changeHandeler}
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="col-md-4">
                <label>Email</label>
                <input
                  value={formValue.email}
                  name="email"
                  onChange={changeHandeler}
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="col-md-4">
                <label>Contact Number</label>
                <input
                  value={formValue.contactNum}
                  name="contactNum"
                  onChange={changeHandeler}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <h3 className="mt-5">Travel Details</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Departure Country</label>
                <select
                  value={formValue.departureCount}
                  name="departureCount"
                  onChange={changeHandeler}
                  className="form-control"
                >
                  <option value="Select Country">Select Country</option>
                  {country_list.map((country) => (
                    <option value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div className="form-group  col-md-6">
                <label>Destination Country</label>
                <select
                  value={formValue.destinationCount}
                  name="destinationCount"
                  onChange={changeHandeler}
                  className="form-control"
                >
                  <option value="Select Country">Select Country</option>
                  {country_list.map((country) => (
                    <option value={country}>{country}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group  col-md-6">
                <label>Departure Date</label>
                <input
                  value={formValue.departureDate}
                  name="departureDate"
                  onChange={changeHandeler}
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="form-group  col-md-6">
                <label>Return Date</label>
                <input
                  value={formValue.returnDate}
                  name="returnDate"
                  onChange={changeHandeler}
                  type="date"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Class Of Service</label>
                <select
                  value={formValue.classService}
                  name="classService"
                  onChange={changeHandeler}
                  className="form-control"
                >
                  <option value=""></option>
                  <option value="Economy class">Economy class</option>
                  <option value="First Class">First Class</option>
                  <option value="Business Class">Business Class</option>
                </select>
              </div>
            </div>
            <p>Please check the services that you need</p>

            <div className="form-row">
              <div className="form-group col-md-4">
                <input
                  name="serviceNeed"
                  value="Airline Tickets"
                  onChange={changeHandeler}
                  type="checkbox"
                />
                <label className="ml-2"> Airline Tickets</label>
              </div>
              <div className="form-group col-md-4">
                <input
                  name="serviceNeed"
                  value="Rental Car"
                  onChange={changeHandeler}
                  type="checkbox"
                />
                <label className="ml-2"> Rental Car</label>
              </div>
              <div className="form-group col-md-4">
                <input
                  name="serviceNeed"
                  value="Hotel Accomadations"
                  onChange={changeHandeler}
                  type="checkbox"
                />
                <label className="ml-2"> Hotel Accomadations</label>
              </div>
            </div>

            <button disabled={isDisabled} className="btn btn-info">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
