import { useRef } from "react";
//css
import "../../styles/childHistory.css";

export default function AppInfoHospital() {
  const ref = useRef(0);
  const handler = () => {
    const table = document.getElementById("history-table");
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    ref.current = ref.current + 1;

    cell1.innerHTML = ref.current;

    //ajax call for child vaccination history
    cell2.innerHTML = "Vaccination/Monthly";
    cell3.innerHTML = "new cell";
    cell4.innerHTML = "new cell";
    cell5.innerHTML = "new cell";
    cell6.innerHTML = "new cell";
  };

  return (
    <>
      <nav
        className="navbar  fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <h2 className="navbar-heading">Appointments</h2>
      </nav>
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
                <th scope="col">Type</th>
                <th scope="col">Name</th>
                <th scope="col">Children Id</th>
                <th scope="col">Time And Date</th>
                <th scope="col">Mo.no</th>
              </tr>
            </thead>
            <tbody align="center">
              <tr>
                <th scope="row">1</th>
                <th scope="row">Vaccination</th>
                <th scope="col">Anvi</th>
                <th scope="col">3</th>
                <th scope="col">12/12/2024</th>
                <th scope="col">7796226371</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
