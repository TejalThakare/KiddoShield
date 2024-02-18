import "../../styles/vaccinesByAge.css";
import OneToTwoMonth from "./one_twoMonth";
import ThreeToFourMonth from "./three_fourMonth";
import FiveToSixMonths from "./five_sixMonth";
import TwelveToTwentyThree from "./twelve_twentyThreeMonth";
import TwoToThreeYear from "./two_threeYear";
import FourToSixYear from "./four_sixYear";
import SevenToTenYear from "./seven_tenYear";
import ElevenToTwelveYear from "./eleven_twelveYear";
import SevenToElevenMonth from "./seven_elevenMonth";
import CareChild from "./careChild";
import "../../styles/vaccinationInfoByAge.css";
import { useState } from "react";
export default function VaccineByAge() {
  const [state, setState] = useState("");
  const ageHandler = (e) => {
    window.scrollTo(0, 0);
    console.log(e.target.id);
    setState(e.target.id);
  };
  return (
    <>
      <nav
        className="navbar  fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <h2 className="navbar-heading">Vaccines For Your Children</h2>
      </nav>
      <div className="container" id="vaccine-container">
        <div className="left ">
          <h2 className="vacc-by-age"> Vaccines By Age</h2>
          <div className="row" id="row--vaccine">
            <div className="col-sm">
              <table className="table table-hover" onClick={ageHandler}>
                <tr scope="col">
                  <th id="parent" className="vaccine-age" scope="col">
                    <i className="fas fa-home"></i>

                    <a href="/">&nbsp;Parents</a>
                  </th>
                </tr>

                <tr scope="col">
                  <td id="one_two" className="vaccine-age" scope="col">
                    1-2 Months
                  </td>
                </tr>
                <tr scope="col">
                  <td id="three_four" className="vaccine-age" scope="col">
                    3-4 Months
                  </td>
                </tr>
                <tr scope="col">
                  <td id="five_six" className="vaccine-age" scope="col">
                    5-6 Months
                  </td>
                </tr>
                <tr scope="col">
                  <td id="seven_eleven" className="vaccine-age" scope="col">
                    7-11 Months
                  </td>
                </tr>
                <tr scope="col">
                  <td
                    id="twelve_twentyThree"
                    className="vaccine-age"
                    scope="col"
                  >
                    12-23 Months
                  </td>
                </tr>
                <tr scope="col">
                  <td id="two_threeYear" className="vaccine-age" scope="col">
                    2-3 Years
                  </td>
                </tr>
                <tr scope="col">
                  <td id="four_sixYear" className="vaccine-age" scope="col">
                    4-6 Years
                  </td>
                </tr>
                <tr scope="col">
                  <td id="seven_tenYear" className="vaccine-age" scope="col">
                    7-10 Years
                  </td>
                </tr>
                <tr scope="col">
                  <td
                    id="eleven_twelveYear"
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
        <div className="right">
          {/* on which the user click the component will appear */}
          {state == "" ? <OneToTwoMonth /> : null}
          {state == "one_two" ? <OneToTwoMonth /> : null}
          {state == "three_four" ? <ThreeToFourMonth /> : null}
          {state == "five_six" ? <FiveToSixMonths /> : null}
          {state == "seven_eleven" ? <SevenToElevenMonth /> : null}
          {state == "twelve_twentyThree" ? <TwelveToTwentyThree /> : null}
          {state == "two_threeYear" ? <TwoToThreeYear /> : null}
          {state == "four_sixYear" ? <FourToSixYear /> : null}
          {state == "seven_tenYear" ? <SevenToTenYear /> : null}
          {state == "eleven_twelveYear" ? <ElevenToTwelveYear /> : null}
          <CareChild></CareChild>
        </div>
      </div>
    </>
  );
}
