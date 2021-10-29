//import './style.css';
import React from 'react';


const Image_meteo = ({meteoNow, tempNow, meteoH3, tempH3, meteoH6, tempH6 , ville}) => {
    return (
      <div>
        <table>
          <tbody>
          <tr>
              <td>{tempNow}°C</td>
              <td><p>{ville}</p></td>
              
          </tr>
          <tr>
              <td><img src={meteoNow} height="75" width="75"></img></td>
          </tr>
          <tr>
              <td><p>18h</p></td>
                <td>{tempH3}°C</td>
                <td><img src={meteoH3} height="35" width="35"></img></td>
          </tr>
          <tr>
              <td><p>21H</p></td>
                <td>{tempH6}°C</td>
                <td><img src={meteoH6} height="35" width="35"></img></td>
          </tr>
          </tbody>
        </table>


      </div>

    );
  }
export default Image_meteo;
