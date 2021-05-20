import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { stateAndDist } from "../states-and-districts";
import Card from "./Card";

const ListHelps = () => {
  const [namec, setNamec] = useState([]);
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);
  const [helptype, setHelpType] = useState("Oxygen");
  const [state, setState] = useState("Uttar Pradesh");
  const [district, setDistrict] = useState("Lucknow");
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
    helps.fdata.map((k, i) => {
      setNamec((namec) => [...namec, k.helpType]);
      if (
        k.helpType === helptype &&
        k.state === state &&
        k.district === district
      )
        setCount((count) => [...count, k]);
    });
    console.log(namec);
    setFlag(true);
  };

  const handleChange = (event) => {
    setHelpType(event.target.value);
    setFlag(false);
    setCount([]);
  };
  const handleState = (event) => {
    setState(event.target.value);
    setFlag(false);
    setCount([]);
  };
  const handleDistrict = (event) => {
    setDistrict(event.target.value);
    setFlag(false);
    setCount([]);
  };
  const handlefSubmit = (event) => {
    event.preventDefault();

    data.fdata.map((k, i) => {
      if (
        k.helpType === helptype &&
        k.state === state &&
        k.district === district
      )
        setCount((count) => [...count, k]);
    });
    setFlag(true);
    console.log(count);
  };
  return (
    <div
      style={{
        alignItems: "center",
        padding: "5px",
      }}
    >
      <Container style={{ alignItems: "center" }}>
        <h3>Search for Help:</h3>

        <form onSubmit={handlefSubmit}>
          <Row
            style={{
              margin: "5px",
              padding: "5px",
              alignItems: "center",
            }}
          >
            <Col sm={12} lg={4}>
              <label class="form-label">Help</label>
              <input
                class="form-control"
                list="helptypelist"
                value={helptype}
                onChange={handleChange}
              ></input>
              <datalist id="helptypelist">
                <option value="Oxygen" />
                <option value="Remdesivir" />
                <option value="ventilator" />
                <option value="Plasma" />
                <option value="ICU Beds" />
                <option value="Covid Vaccination" />
                <option value="Fabiflu" />
                <option value="Free Consultation" />
                <option value="Get Free Consultation from MBBS Doctors on Covid-19" />
              </datalist>
            </Col>
            <Col sm={12} lg={4}>
              <label>State</label>
              <input
                class="form-control"
                list="datalistOptions"
                value={state}
                onChange={handleState}
              ></input>
              <datalist id="datalistOptions">
                {stateAndDist.states.map((e, k) => {
                  console.log();
                  return <option key={k} value={e.state} />;
                })}
              </datalist>
            </Col>
            <Col sm={12} lg={4}>
              <label>District</label>
              <input
                class="form-control"
                list="districtOptions"
                value={district}
                onChange={handleDistrict}
              ></input>
              <datalist id="districtOptions">
                {stateAndDist.states.map((e, k) => {
                  //console.log(e.state, e.districts);
                  return (
                    state === e.state &&
                    e.districts.map((v, i) => {
                      //console.log(v);
                      return <option key={i} value={v} />;
                    })
                  );
                })}
              </datalist>
            </Col>
          </Row>
          {flag ? (
            <input disabled type="submit"></input>
          ) : (
            <input type="submit"></input>
          )}
        </form>
        <Row style={{ alignItems: "center", marginTop: "10px" }}>
          {count.length > 0 ? (
            count.map((k, i) => {
              return <Card key={i} props={k} />;
            })
          ) : (
            <div>
              No data (Please search for your need above or Add any lead you
              know below)
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ListHelps;
