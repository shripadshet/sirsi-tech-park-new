import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Drawer } from "antd";

function Externals(props) {
  const [formValues, setFormValues] = useState({
    name: "",
    mobile: "",
    email: "",
    purpose: "",
    address: "",
    state: "",
    city: "",
    zip: "",
  });
  const [inputFormData, setInputFormData] = useState([]);

  const location = useLocation();
  const bankNameInput = React.useRef();
  const bankLogoInput = React.useRef();

  useEffect(() => {
    <script>
      $(document).ready(function()
      {$("#cars").on("change", function () {
        var demovalue = $(this).val();
        $("div.myDiv").hide();
        $("#show" + demovalue).show();
      })}
      );
    </script>;
  }, []);

  const handleChangeForm = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  let { name, mobile, email, purpose, address, state, city, zip } = formValues;
  function handleSubmit() {
    setInputFormData([
      ...inputFormData,
      { name, mobile, email, purpose, address, state, city, zip },
    ]);
    console.log(inputFormData);
    console.log(formValues);
    setFormValues({
      name: "",
      mobile: "",
      email: "",
      purpose: "",
      address: "",
      state: "",
      city: "",
      zip: "",
    });
  }
  function deletedata(i) {
    console.log(i, "this index row want to be delete");
    let total = [...inputFormData];
    total.splice(i, 1);
    setInputFormData(total);
  }

  return (
    <>
      <div>
        <body>
          <header>
            <nav>
            <div className="right">
                {location.state.logo ? (
                  <p>
                    {" "}
                    <img alt="preview image" width="180" src={location.state.logo} />
                  </p>
                ) : (
                  <></>
                )}
                <p style={{ margin: "10px" }}>
                  <h1>{location.state.bank}</h1>
                </p>
              </div>
            </nav>
          </header>
          <main>
            <section className="external">
              <div className="externalLeft">
                <div
                  class="card shadow-2-strong card-registration p-2 mt-3"
                  style={{ borderradius: "15px" }}
                >
                  <span className="purple">
                    <h2>Assembly</h2>
                  </span>
                  <div class="row">
                    <div class="col-12  mb-2">
                      <label class="form-label select-label">Meeting</label>
                      <select class="select form-control-lg">
                        <option value="1" disabled>
                          Choose option
                        </option>
                        <option value="2">Meeting 1</option>
                        <option value="3">Meeting 2</option>
                        <option value="4">Meeting 3</option>
                      </select>

                      <h3 class="mt-1 pb-1 ">List the externals</h3>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="form-outline">
                        <input
                          type="text"
                          name="name"
                          value={formValues.name}
                          onChange={handleChangeForm}
                          class="form-control form-control-lg"
                        />
                        <label for="fname">Name:</label>
                      </div>
                    </div>

                    <div class="col-md-6 ">
                      <div class="form-outline">
                        <input
                          type="text"
                          name="mobile"
                          value={formValues.mobile}
                          onChange={handleChangeForm}
                          class="form-control form-control-lg"
                        />
                        <label for="lname">Mobile</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="form-outline">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          value={formValues.email}
                          onChange={handleChangeForm}
                        />
                        <label for="inputEmail3">Email</label>
                      </div>
                    </div>
                    <div class="col-md-6 ">
                      <div class="form-outline">
                        <input
                          type="email"
                          class="form-control"
                          name="purpose"
                          value={formValues.purpose}
                          onChange={handleChangeForm}
                        />
                        <label for="Schedule">Purpose</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-outline mb-2">
                    <input
                      type="text"
                      name="address"
                      value={formValues.address}
                      onChange={handleChangeForm}
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example8">
                      Address
                    </label>
                  </div>

                  <div class="row">
                    <div class="col-md-4">
                      <select
                        class="select"
                        name="state"
                        value={formValues.state}
                        onChange={handleChangeForm}
                      >
                        <option value="1">State</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Mahaarastra">Mahaarastra</option>
                      </select>
                    </div>
                    <div class="col-md-4 ">
                      <select
                        class="select"
                        name="city"
                        value={formValues.city}
                        onChange={handleChangeForm}
                      >
                        <option value="1">City</option>
                        <option value="Banglore">Banglore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                      </select>
                    </div>
                    <div class="col-md-4 ">
                      <input
                        type="text"
                        name="zip"
                        value={formValues.zip}
                        onChange={handleChangeForm}
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example3">
                        Zip
                      </label>
                    </div>
                  </div>
                  <div class=" pt-1">
                    <button type="submit" onClick={handleSubmit} value="Submit">
                      Add
                    </button>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Number</th>
                          <th>Update</th>
                          <th>Delete</th>
                        </tr>
                        {inputFormData &&
                          inputFormData.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.mobile}</td>
                                <td>{item.email}</td>
                                <td>
                                  <button onClick={() => deletedata(i)}>
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                      </thead>
                    </table>
                  </div>
                </div>
              </div>

              <div className="externalRight">
                <img src="developer-png.png" alt=""></img>
              </div>
            </section>
          </main>
          <footer className="externalFooter">
            <div className="footer">
              <div className="footer-first">
                <h3> Developer Portfollio</h3>
              </div>
              <div className="footer-second">
                <ul>
                  <li>Home</li>
                  <li>Projects</li>
                  <li>Services</li>
                  <li>About</li>
                  <li>Contact Me</li>
                </ul>
              </div>
            </div>
            <div className="footerrights">
              www.Portfollio.com | All rights reserved.
            </div>
          </footer>
        </body>
      </div>
    </>
  );
}
export default Externals;
