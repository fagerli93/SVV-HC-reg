import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BevisOversikt from "./BevisOversikt.jsx";
import LeggTilBevisKnapp from "./LeggTilBevisKnapp.jsx";

const Hovedside = ({ props }) => {
    const [state, setState] = useState({ bevis: {} });

    const oppdater = (event, felt) => {
        const feltverdi = event.target.value;
        const bevis = Object.assign({}, state.bevis, {
            [`${felt}`]: feltverdi,
        });
        setState({ bevis: bevis });
    };

    return (
        <div className='blokk'>
            <h1>Registeret</h1>
            <LeggTilBevisKnapp history={props.history} />
            <BevisOversikt
                bevisliste={props.alleBevis}
                dispatch={props.dispatch}
            />
        </div>
    );
};

Hovedside.propTypes = {
    history: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        alleBevis: state.alleBevis,
        bevis: state.bevis,
    };
};

export default connect(mapStateToProps)(Hovedside);
