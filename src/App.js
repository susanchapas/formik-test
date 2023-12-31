import React from "react";
import { useFormik } from "formik";

function App() {

  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      alert("Login Successful");
    },
    
    validate: (values) => {
      let errors = {};
      if (!values.email.includes("@")) {
        errors.email = "Username should be an email."
      }
      if (!values.password) {
        errors.password = "Field required"
      }
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="emailField">
          Email:
        </label>

        <br/>

        <input 
          type="text" 
          id="emailField" 
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <br/>

        <label htmlFor="pswField">
          Password:
        </label>

        <br/>

        <input 
          type="text" 
          id="pswField" 
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <br/>
        
        {
          formik.errors.email ? 
          (
            <div id="emailError" style={{ color: "red" }}>
              {formik.errors.email}
            </div>
          ) : 
          null
        }

        {
          formik.errors.password ? 
          (
            <div id="pswError" style={{ color: "red" }}>
              {formik.errors.password}
            </div>
          ) : 
          null
        }

        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
