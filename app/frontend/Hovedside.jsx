import React, { useEffect, useState } from "react";
import BevisOversikt from "./BevisOversikt.jsx";
import LeggTilBevisKnapp from "./LeggTilBevisKnapp.jsx";
// import useBevis from "./useBevis.jsx";

const Hovedside = ({ props }) => {
    const alleBevis = [];
    // const alleBevis = useBevis();
    const [state, setState] = useState({ bevis: {} });
    console.log(props, state);

    useEffect(() => {
        console.log(props, state);
    }, []);

    // const oppdater = (event, felt) => {
    //     const feltverdi = event.target.value;
    //     const bevis = Object.assign({}, state.bevis, {
    //         [`${felt}`]: feltverdi,
    //     });
    //     setState({ bevis: bevis });
    // };

    return (
        <div className='blokk'>
            <h1>Registeret</h1>
            <LeggTilBevisKnapp />
            <BevisOversikt bevisliste={alleBevis} />
        </div>
    );
};

export default Hovedside;

// Hovedside.propTypes = {
//     history: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => {
//     console.log(state);
//     return {
//         alleBevis: state.alleBevis,
//         bevis: state.bevis,
//     };
// };

// export default connect(mapStateToProps)(Hovedside);
