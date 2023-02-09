/* eslint-disable default-case */
function ShowName({animalName}) {

        switch(animalName) {
            case 'Racoon': return (
                <i>R-A-C-O-O-N</i>
            );
            case 'Fox': return (
                <u>FoX</u>
            );
            default: return (
                <b>what?</b>
            )
        };
};

export default ShowName