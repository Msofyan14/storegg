import { Overview1, Overview2, Overview3, Overview4 } from "@/public/img";
import Image from "next/image";
import Categori from "./Categori";
import TableRow from "./TableRow";

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Categori nominal={1800500} icon="ic-desktop">
                Game <br /> Desktop
              </Categori>
              <Categori nominal={8455000} icon="ic-mobile">
                Game <br /> Mobile
              </Categori>
              <Categori nominal={8455000} icon="ic-desktop">
                Other <br /> Categories
              </Categori>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  image="overview-1"
                  title="Mobile Legends"
                  categori="Mobile"
                  item={550}
                  price={500000}
                  status="Pending"
                />
                <TableRow
                  image="overview-2"
                  title="Call of Duty"
                  categori="Desktop"
                  item={550}
                  price={500000}
                  status="Success"
                />
                <TableRow
                  image="overview-3"
                  title="Clash Of Clan"
                  categori="Mobile"
                  item={550}
                  price={500000}
                  status="Failed"
                />
                <TableRow
                  image="overview-4"
                  title="The Royal Game"
                  categori="Mobile"
                  item={550}
                  price={500000}
                  status="Pending"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
