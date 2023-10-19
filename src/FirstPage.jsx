import React, { useState } from 'react'
import "./AlarmClock.css"
import './FirstPage.css'
import { Howl, Howler } from 'howler';
import alarm from './sound.ogg'
import ReactHowler from 'react-howler'
import { NavLink } from 'react-router-dom';
const FirstPage = () => {





  return (<>
  <ReactHowler
        src={alarm}
        playing={true}
        loop
      />
  
  <div className='bordergive' >
    <div id="lampadario" >
   
    <input type="radio" name="switch" value="on"  className='bordergive'/>
    <input type="radio" name="switch" value="off" checked="checked"/>
    <label for="switch"></label>
    <div id="filo" ></div>
    <div id="lampadina">             
      <div id="sorpresa" >

        <div className="shadow" >
       
        <div class="ac-animated-svg-icon ac-svg-animated ac-svg-shadow">
				<div class="ac-animated-svg-icon-contents">
					<div class="ac-animated-svg-alarmclock">
						<div class="svg-alarmclock-in">
							<img src="https://preview.animatedcreativity.com/svg/alarmclock/alarmclock.svg" class="svg-alarmclock"/>
							<img src="https://preview.animatedcreativity.com/svg/alarmclock/leftbell.svg" class="svg-left-bell"/>
							<img src="https://preview.animatedcreativity.com/svg/alarmclock/rightbell.svg" class="svg-right-bell"/>
							<img src="https://preview.animatedcreativity.com/svg/alarmclock/hour.svg" class="svg-hour"/>
							<img src="https://preview.animatedcreativity.com/svg/alarmclock/minute.svg" class="svg-minute"/>
						</div>
						<img src="https://preview.animatedcreativity.com/svg/alarmclock/shadow.svg" class="svg-shadow"/>
					</div>
				</div>
			</div>
            <div className='arrow'>
            <div class="wrapper">
      
      <svg width="18px" height="17px" viewBox="-1 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink
="http://www.w3.org/1999/xlink">
          <g>
              <polygon class="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
              <polygon class="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
              <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
          </g>
      </svg>
    </div>
            </div>
      <div className='shadow'>
<NavLink to="HappyBirthday" className="first">	<div class="bikediv">
    <svg class="bike" viewBox="0 0 48 30" width="48px" height="30px">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
            <g transform="translate(9.5,19)">
                <circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
                <g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
                    <circle class="bike__spokes" r="5" />
                    <circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
                </g>
            </g>
            <g transform="translate(24,19)">
                <g class="bike__pedals-spin" stroke-dasharray="25.133 25.133" stroke-dashoffset="-21.991" transform="rotate(67.5,0,0)">
                    <circle class="bike__pedals" r="4" />
                    <circle class="bike__pedals" r="4" transform="rotate(180,0,0)" />
                </g>
            </g>
            <g transform="translate(38.5,19)">
                <circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
                <g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
                    <circle class="bike__spokes" r="5" />
                    <circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
                </g>
            </g>
            <polyline class="bike__seat" points="14 3,18 3" stroke-dasharray="5 5" />
            <polyline class="bike__body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" stroke-dasharray="79 79" />
            <path class="bike__handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" stroke-dasharray="10 10" />
            <polyline class="bike__front" points="32.5 2,38.5 19" stroke-dasharray="19 19" />
        </g>
    </svg>
</div>
    </NavLink>
</div>
        </div>
      </div>
    </div>
</div>

</div>
</>
  )
}

export default FirstPage