import { useRef } from "react";
import "../../styles/childHistory.css";

export default function ChildHistory() {
  const ref = useRef(0);
  const handler = () => {
    const table = document.getElementById("history-table");
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    ref.current = ref.current + 1;

    cell1.innerHTML = ref.current;

    //ajax call for child vaccination history
    cell2.innerHTML = "new cell";
    cell3.innerHTML = "new cell";
    cell4.innerHTML = "new cell";
  };
  return (
    <>
      <nav
        className="navbar  fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <h2 className="navbar-heading">Vaccination history</h2>
      </nav>
      <div id=""></div>
      <div className="tbl-container-outer">
        <div className="tbl-container-inner">
          <table
            style={{ fontSize: "15px" }}
            id="history-table"
            className="table table-striped"
            onClick={handler}
          >
            <thead align="center">
              <tr>
                <th scope="col">S.R. no.</th>
                <th scope="col">Vaccine Name</th>
                <th scope="col">Date</th>
                <th scope="col">Dose number</th>
              </tr>
            </thead>
            <tbody align="center">
              <tr>
                <th scope="row">1</th>
                <th scope="col">Vaccine Name</th>
                <th scope="col">Date</th>
                <th scope="col">Dose number</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
