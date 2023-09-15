import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Drawer } from "antd";
import { DateInput } from "sutra-library";

function Home(props) {
  const [formValues, setFormValues] = useState({
    name: "",
    frequency: "",
    lastMeet: null,
    scheduleDate: null,
  });
  const [inputFormData, setInputFormData] = useState([]);
  const [bankName, setBankName] = useState("");
  const [bankLogo, setBankLogo] = useState(null);

  const location = useLocation();
  const navigate =useNavigate();
  const bankNameInput = React.useRef();
  const bankLogoInput = React.useRef();

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    const darkFavicon = location.state.id;
    favicon.href = darkFavicon;
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

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const clearInput = (e) => {
    e.preventDefault();
    bankNameInput.current.value = "";
    bankLogoInput.current.value = "";
  };

  const handleChange = (e) => {
    setBankName(e.target.value);
  };
  const handleChangeLogo = (e) => {
    if (e.target.files && e.target.files[0]) {
      setBankLogo(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleChangeForm = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  let { name, frequency, lastMeet, scheduleDate } = formValues;
  function handleSubmit() {
    setInputFormData([
      ...inputFormData,
      { name, frequency, lastMeet, scheduleDate },
    ]);
    console.log(inputFormData);
    console.log(formValues);
    setFormValues({ name: "", frequency: "", lastMeet: "", scheduleDate: "" });
  }

  function goToExternal(){
    const id=5;
    navigate("/external", {state:{logo:bankLogo,bank:bankName}})
  }
  return (
    <>
      <div>
        <body>
          <header>
            <nav>
              <div className="right">
                {bankLogo ? (
                  <p>
                    {" "}
                    <img alt="preview image" width="180" src={bankLogo} />
                  </p>
                ) : (
                  <></>
                )}
                <p style={{ margin: "10px" }}>
                  <h1>{bankName}</h1>
                </p>
                <form>
                  <input
                    type="text"
                    placeholder="Enter name"
                    onChange={handleChange}
                    ref={bankNameInput}
                  />
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    placeholder="Enter price"
                    onChange={handleChangeLogo}
                    ref={bankLogoInput}
                  />
                  <button onClick={clearInput}>Reset</button>
                  <button onClick={goToExternal}>External</button>
                </form>
              </div>
            </nav>
          </header>
          <main>
            <section className="firstSection">
              
              <div className="leftSection">
                
                <div
                  class="card shadow-2-strong card-registration p-2 mt-3"
                  style={{ borderradius: "15px" }}
                >
                  <span className="purple">
                    <h2>Assembly</h2>
                    <h3>Meeting List</h3>
                  </span>
                 
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
                          name="frequency"
                          value={formValues.frequency}
                          onChange={handleChangeForm}
                          class="form-control form-control-lg"
                        />
                        <label for="lname">Frequency:</label>
                        </div>

                       </div>
                        </div>
                  <div class="row">
                    <div class="col-md-6  ">
                      <div class="form-outline datepicker w-100">
                        <br />
                        <DateInput
                        name="lastMeet"
                        defaultValue={new Date()}
                        CaptionType='OnTopLabel'
                        displayLabel='Last Meet:'
                        placeholder='Choose a date'
                        value={formValues.lastMeet}
                        onChange={handleChangeForm}
                        />
                        <DateInput
                        name="scheduleDate"
                        defaultValue={new Date()}
                        CaptionType='OnTopLabel'
                        displayLabel='Schedule Date:'
                        placeholder='Choose a date'
                        value={formValues.scheduleDate}
                        onChange={handleChangeForm}
                        />

                      </div>
                    </div>
                  </div>
                  <div class="mt-1 pt-2">
                    <button type="submit" onClick={handleSubmit} value="Submit">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            
              <div className="rightSection">
                <img src="developer-png.png" alt=""></img>
              </div>
            </section>
            <hr />
          </main>
          <footer>
            <Button type="primary" onClick={showDrawer}>
              Open
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="left"
              onClose={onClose}
              open={open}
            >
              <div className="leftDrawer">
                {inputFormData.map((obj, i) => {
                  return (
                    <>
                      <table class="table table-dark">
                        <tr key={i}>
                          <th scope="row">user name</th>

                          <th scope="row"> {obj.name}</th>
                        </tr>
                        <tr>
                          <th scope="row">committee's</th>

                          <th scope="row"> {obj.frequency}</th>
                        </tr>
                        <tr>
                          <th scope="row">meeting to schedule</th>

                          <th scope="row"> {obj.scheduleDate}</th>
                        </tr>
                        <tr>
                          <th scope="row">Meeting work</th>
                        </tr>
                        <tr>
                          <th scope="row"> Ajenda </th>
                        </tr>
                        <tr>
                          {" "}
                          <th scope="row"> check & approve</th>
                        </tr>
                        <tr>
                          <th scope="row">History</th>
                        </tr>
                        <tr>
                          {" "}
                          <th scope="row">Broadcast message</th>
                        </tr>
                      </table>
                    </>
                  );
                })}
              </div>
            </Drawer>

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
export default Home;
