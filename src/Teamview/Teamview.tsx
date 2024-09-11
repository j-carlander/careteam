import { useEffect, useState } from "react";
import { Table } from "../Table/Table";
import { CareBed } from "../types";
import "./Teamview.css";
import { Menu } from "../Menu/Menu";

export function Teamview() {
  const [selectedTeam, setSelectedTeam] = useState("blue");
  const [beds, setBeds] = useState<CareBed[]>([]);

  useEffect(() => {
    (async () => {
      const reply = await fetch(`/api/getteambeds?team=${selectedTeam}`);
      const result = await reply.json();

      setBeds(result)

    })()
  }, [selectedTeam])
  return (
    <>
    <Menu {...{setSelectedTeam, selectedTeam}} />
      <table>
        <thead>
          <tr>
            <td className="first-col"><span className="no-print">Vård-</span>lag</td>
            <td className="first-col">Sal</td>
            <td>
              Välkommen till jobbet. Det enda sättet att göra ett bra jobb är
              att älska det man gör
            </td>
          </tr>
        </thead>
        <tbody>
          {beds.length > 0 ? beds.map((bed) => (
            <tr key={bed.bedno}>
              <td colSpan={3}>
                <Table bed={bed} />
              </td>
            </tr>
          )) : <tr><td>Hämtar lista...</td></tr>}
        </tbody>
      </table>
    </>
  );
}
