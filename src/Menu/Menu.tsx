import { changeBGColor } from '../Util/changeBGColor';
import './Menu.css';

type MenuProps = {
  selectedTeam: string;
  setSelectedTeam: (a: string) => void;
};

export function Menu({ selectedTeam, setSelectedTeam }: MenuProps) {
  return (
    <aside className="top-menu no-print">
        <label htmlFor="selectTeam">Välj vårdlag:&nbsp;  
      <select
        name="selectTeam"
        id="selectTeam"
        value={selectedTeam}
        onChange={(e) => {
          changeBGColor(e.target.value);
          setSelectedTeam(e.target.value);
        }}
      >
        <option value="red">Röd</option>
        <option value="orange">Orange</option>
        <option value="blue">Blå</option>
      </select>
      </label>
      <section>
        <button onClick={print}>Skriv ut</button>
      </section>
    </aside>
  );
}
