"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Nav from "../nav.js";
import { useState } from "react";

/// TODO: Mention in the report that you used chatgpt to know how to include bootstrap. 

export default function BookAppointment() {
  const [form_submission_successful, set_form_submission_successful] = useState(false);

  const on_form_submit = (e) => {
    e.preventDefault();
    set_form_submission_successful(true);

    const form = document.getElementById("my_form");
    if (form !== null) {
      form.reset();
    }

    setTimeout(() => {
      window.location.href = "/project/1";
    }, 5000);
  };

  return (
    <>
    <Nav />

    { form_submission_successful && 
      (
        <div className="alert alert-success w-50 mx-auto mt-5" role="alert">
          <h4 className="alert-heading">Appointment booked successfully!</h4>
          <p>
            Thank you for booking an appointment with us!
          </p>
          <hr/>
          <p className="mb-0">You will be soon redirected to the home page!</p>
        </div>
      ) 
    }

    <div className="container">
      <form className="form" onSubmit={on_form_submit} id="my_form">
        <div className="forminput">
          <label htmlFor="name"> Your name </label>
          <input type="text" id="name" placeholder="First Last" required />
        </div>

        <div className="forminput">
          <label htmlFor="email"> Your email </label>
          <input type="email" id="email" placeholder="jhondoe@gmail.com" required />
        </div>

        <div className="forminput">
          <label htmlFor="phone"> Your phone number </label>
          <input type="tel" id="phone" placeholder="+1 XXXXXXXXXX" pattern="[+]{1}1 [0-9]{10}" required />
        </div>

        <div className="forminput">
          <label htmlFor="stafftype">Staff type</label>
          <select id="stafftype">
            <option value="">Please select a staff member</option>
            <option value="">Bike technician</option>
            <option value="">Sales professional</option>
            <option value="">Customer service</option>
            <option value="">Facilities</option>
            <option value="">IT support</option>
          </select>
        </div>

        <div className="forminput">
          <label htmlFor="details">Details</label>
          <textarea id="details" rows={4} placeholder="Include more information here..."></textarea>
        </div>

        <div className="forminput">
          <label htmlFor="date">Appointment date</label>
          <input id="date" type="date" required />
        </div>

        <button type="submit" className="btn btn-dark"> Request an appointment </button>
      </form>

    </div>
    </>
  );
}
