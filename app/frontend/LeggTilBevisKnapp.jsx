import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const LeggTilBevisKnapp = () => {
    const history = useHistory();

    const onClick = () => {
        history.push("/nytt-bevis");
    };

    return (
        <div className='blokk'>
            <div className='legg-til-bevis-knapp knapp' onClick={onClick}>
                <i className='fa fa-plus' aria-hidden='true'></i>
                <span>Legg til nytt bevis</span>
            </div>
        </div>
    );
};

// LeggTilBevisKnapp.propTypes = {
//     history: PropTypes.object.isRequired,
// };

export default LeggTilBevisKnapp;
