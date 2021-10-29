import './style.css';
import React from 'react';


const Image_meteo = ({meteoNow, tempNow, meteoH3, tempH3, meteoH6, tempH6 , ville}) => {
    return (
      <div>
        <div className="divTable">
          <div className="divTableBody">

            <div className="divTableRow">
                {/* Température et ville  */}
                <div className="divTableCell">
                  <div className="divTableRow">
                    <div className="divTableCell">{tempNow}°C</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">{ville}</div>
                  </div>
                
                </div>

                {/* Illustration météo  */}
                <div className="divTableCell"><img src={meteoNow} height="75" width="75"></img></div>

                {/* Température et illustration H+3  */}
                <div className="divTableCell">
                  <div className="divTableRow">
                    <div className="divTableCell">H+3</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">{tempH3}°C</div>
                    <div className="divTableCell"><img src={meteoH3} height="35" width="35"></img></div>
                  </div>
                </div>

                {/* Température et illustration H+6  */}

                <div className="divTableCell">
                  <div className="divTableRow">
                    <div className="divTableCell">H+6</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">{tempH6}°C</div>
                    <div className="divTableCell"><img src={meteoH6} height="35" width="35"></img></div>
                  </div>
                </div>
                
            </div>  

             
          </div>
        </div>
        

      </div>

    );
  }
export default Image_meteo;
