import { CareBed } from '../types';
import './Table.css';

type Props = {
    bed: CareBed
}
export function Table({bed}: Props) {
  return (
    <table>
      <tbody>
        <tr> 
          <td className="first-cell" rowSpan={6}>{bed.team}</td>
          <td className="second-cell" rowSpan={6}>{bed.bedno}</td>
          <td className='header-cell'>GER</td>
          <td className='header-cell' rowSpan={2}>Sökorsak:</td>
          <td className='data-cell' rowSpan={2}></td>
          <td className='header-cell'>Lifecare PUD:</td>
          <td className='data-cell'></td>
          <td className='header-cell'>Andning:</td>
          <td className='data-cell'></td>
          <td className='header-cell'>Aktivitet:</td>
          <td className='data-cell'></td>
        </tr>
        <tr>
          <td className='data-cell'></td>
          <td className='header-cell'>Socialt:</td>
          <td className='data-cell'></td>
          <td className='header-cell'>Cirkulation:</td>
          <td className='data-cell'></td>
          <td className='header-cell'>Hud:</td>
          <td className='data-cell'></td>
        </tr>
        <tr>
          <td className='header-cell'>Smitta:</td>
          <td className='header-cell' rowSpan={2}>Hälsohistorik:</td>
          <td className='data-cell' rowSpan={4}></td>
          <td className='header-cell'>CAVE:</td>
          <td className='data-cell'></td>
          <td className='header-cell'>Kommunikation</td>
          <td className='data-cell'></td>
          <td className='header-cell'>Nutrition:</td>
          <td className='data-cell'></td>
        </tr>
        <tr>
          <td className='data-cell'></td>
          <td className='header-cell'>Undersökningar / Provsvar:</td>
          <td className='data-cell'></td>
          <td className='header-cell'>Smärta</td>
          <td className='data-cell'></td>
          <td className='header-cell' rowSpan={3}>Övrigt:</td>
          <td className='data-cell' rowSpan={3}></td>
        </tr>
        <tr>
          <td className='header-cell'>Behandlings-begränsningar:</td>
          <td className='header-cell'>Infarter:</td>
          <td className='header-cell' rowSpan={2}>Pågående behandling: </td>
          <td className='data-cell' rowSpan={2}></td>
          <td className='header-cell' rowSpan={2}>Eliminiation:</td>
          <td className='data-cell' rowSpan={2}></td>
          {/* <td className='data-cell' rowSpan={2}></td> */}
        </tr>
        <tr>
          <td className='data-cell'></td>
          <td className='data-cell'></td>
        </tr>
      </tbody>
    </table>
  );
}
