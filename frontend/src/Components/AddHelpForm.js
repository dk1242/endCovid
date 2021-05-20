import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { stateAndDist } from "../states-and-districts";
import { AddHelp } from "./ApiHelp";
const AddHelpForm = () => {
  const [data, setData] = useState([]);
  const [helptype, setHelpType] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [stateName, setStateName] = useState("");
  const [districtName, setDistrictName] = useState("");
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const helps = await fetch(`https://endcorona.herokuapp.com/help`, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setData(helps);
  };
  const handleChange = (event) => {
    setHelpType(event.target.value);
  };
  const handleState = (event) => {
    setStateName(event.target.value);
  };
  const handleDistrict = (event) => {
    setDistrictName(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    const data = {
      helpType: helptype,
      name: name,
      address: address,
      state: stateName,
      district: districtName,
      phoneNo: phone,
      email: email,
    };

    AddHelp(data)
      .then((ndata) => {
        console.log(ndata);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Resource Added");
  };

  return (
    <div>
      <Container>
        <h2>Add help resources</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "2px" }}>
            <label className="form-label">
              Write Help Type (Mention blood type if Plasma)
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              class="form-control"
              list="helptypelist4"
              value={helptype}
              onChange={handleChange}
              required
            ></input>
            <datalist id="helptypelist4">
              <option value="Oxygen" />
              <option value="Remdesivir" />
              <option value="ICU Beds" />
              <option value="ventilator" />
              <option value="Plasma" />
              <option value="Covid Vaccination" />
              <option value="Fabiflu" />
              <option value="Free Consultation" />
              <option value="Get Free Consultation from MBBS Doctors on Covid-19" />
            </datalist>
          </div>
          <div style={{ margin: "2px" }}>
            <label>
              Hospital Name (if Beds) / Distributor Name (if Remdesivir /
              Flabiflu / Oxygen) / Donor's name(if Plasma){" "}
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              value={name}
              class="form-control"
              onChange={handleName}
              required
            ></input>
          </div>
          <div style={{ margin: "2px" }}>
            <label>Address</label>
            <input
              type="text"
              value={address}
              class="form-control"
              onChange={handleAddress}
            ></input>
          </div>
          <div className="row">
            <div className="col" style={{ margin: "2px" }}>
              <label>
                State<span style={{ color: "red" }}>*</span>
              </label>
              <input
                class="form-control"
                list="datalistOptions3"
                value={stateName}
                onChange={handleState}
                required
              ></input>
              <datalist id="datalistOptions3">
                {stateAndDist.states.map((e, k) => {
                  console.log();
                  return <option key={k} value={e.state} />;
                })}
              </datalist>
            </div>
            <div className="col" style={{ margin: "2px" }}>
              <label>
                District<span style={{ color: "red" }}>*</span>
              </label>
              <input
                class="form-control"
                list="districtOptions2"
                value={districtName}
                onChange={handleDistrict}
                required
              ></input>
              <datalist id="districtOptions2">
                {stateAndDist.states.map((e, k) => {
                  //console.log(e.state, e.districts);
                  return (
                    stateName === e.state &&
                    e.districts.map((v, i) => {
                      return <option key={i} value={v} />;
                    })
                  );
                })}
              </datalist>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ margin: "2px" }}>
              <label>Phone Number</label>
              <input
                type="text"
                value={phone}
                class="form-control"
                onChange={handlePhone}
              ></input>
            </div>
            <div className="col" style={{ margin: "2px" }}>
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                class="form-control"
                onChange={handleEmail}
              ></input>
            </div>
          </div>
          <div style={{ color: "red" }}>* marked fields are required.</div>
          <div style={{ margin: "5px" }}>
            <button type="submit">Add Resource</button>
          </div>
        </form>
      </Container>
    </div>
  );
};
export default AddHelpForm;
