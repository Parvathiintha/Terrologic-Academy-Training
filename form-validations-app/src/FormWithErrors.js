import React, { useState } from "react";

const FormWithErrors = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  //handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //validate input forms

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is reqiured";
    if (!formData.email.trim()) tempErrors.email = "email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "enter a valid email";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("form is valid", formData);
      alert("form submitted successfully");
      setFormData({ name: "", email: "" });
      setErrors({});
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: 300, margin: "30px auto" }}
      >
        <div style={{ marginBottom: 10 }}>
          <label>Name:</label>
          <br />
          <input
            name="name"
            size="30"
            value={formData.name}
            onChange={handleChange}
            placeholder="enter your text"
            // style={{ width: "100", padding: 5 }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>EMAIL:</label>

          <br />
          <input
            name="email"
            size="40"
            value={formData.email}
            onChange={handleChange}
            placeholder="enter your email"
            style={{ width: "100px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <button type="submit" style={{ padding: "6px " }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormWithErrors;
