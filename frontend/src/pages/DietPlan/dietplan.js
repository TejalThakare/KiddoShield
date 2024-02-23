import SixTotwelveMonths from "./SixTotwelveMonths";
import OneTotwoyear from "./OneTotwoyear";
import ThreeToFouryear from "./ThreeToFouryear";
import FiveTosixyears from "./FiveTosixyears";
import SevenToeightyears from "./SevenToeightyears";
import NineTotenyears from "./NineTotenyears";
import ElevenTotwelveyears from "./ElevenTotwelveyears";
import "../../styles/dietplan.css";
import { useState } from "react";

export default function DietPlan() {
  const [state, setState] = useState("");
  const ageHandler = (e) => {
    console.log(e.target.id);
    window.scrollTo(0, 0);
    setState(e.target.id);
  };
  return (
    <>
      <nav
        className="navbar  fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <h2 className="navbar-heading">Diet Plan</h2>
      </nav>

      <div className="container">
        <div className="leftcontainer">
          <div className="row" id="row--vaccine">
            <div className="col-sm">
              <table className="table table-hover" onClick={ageHandler}>
                <tr scope="col">
                  <th className="vaccine-age" scope="col">
                    <i className="fas fa-home"></i>
                    &nbsp;Parent
                  </th>
                </tr>
                <tr scope="col">
                  <td
                    id="SixTotwelveMonths"
                    className="vaccine-age"
                    scope="col"
                  >
                    6-12 Months
                  </td>
                </tr>
                <tr scope="col">
                  <td id="OneTotwoyear" className="vaccine-age" scope="col">
                    1-2 Years
                  </td>
                </tr>
                <tr scope="col">
                  <td id="ThreeTofouryear" className="vaccine-age" scope="col">
                    3-4 Years
                  </td>
                </tr>
                <tr scope="col">
                  <td id="FiveTosixyears" className="vaccine-age" scope="col">
                    5-6 Years
                  </td>
                </tr>
                <tr scope="col">
                  <td
                    id="SevenToeightyears"
                    className="vaccine-age"
                    scope="col"
                  >
                    7-8 Years
                  </td>
                </tr>
                <tr scope="col">
                  <td id="NineTotenyears" className="vaccine-age" scope="col">
                    9-10 Years
                  </td>
                </tr>
                <tr scope="col">
                  <td
                    id="ElevenTotwelveyears"
                    className="vaccine-age"
                    scope="col"
                  >
                    11-12 Years
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
        <div className="rightcontainer">
          {state === "" ? <SixTotwelveMonths /> : null}
          {state === "SixTotwelveMonths" ? (
            <SixTotwelveMonths></SixTotwelveMonths>
          ) : null}
          {state === "OneTotwoyear" ? <OneTotwoyear /> : null}
          {state === "ThreeTofouryear" ? <ThreeToFouryear /> : null}
          {state === "FiveTosixyears" ? <FiveTosixyears /> : null}
          {state === "SevenToeightyears" ? <SevenToeightyears /> : null}
          {state === "NineTotenyears" ? <NineTotenyears /> : null}
          {state === "ElevenTotwelveyears" ? <ElevenTotwelveyears /> : null}
        </div>
      </div>
    </>
  );
}
