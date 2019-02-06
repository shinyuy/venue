import React from 'react'
import Buton from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';
function Button(props) {
    return (
         <Buton
         href={"props.link"}
         variant="contained"
         size="small"
         style={{
             background : props.bck,
             color: props.color
         }}
         >
             <img
                src={TicketIcon}
                className="iconImage"
                alt="icon_button"
             />
             {props.text}
         </Buton>
    )
}

export default Button;
