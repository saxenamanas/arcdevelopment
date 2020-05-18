import {createMuiTheme} from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686"

export default createMuiTheme({
    palette:{
        common: {
            blue: `${arcBlue}`,
            orange : `${arcOrange}`
        },
        primary: {
            main : `${arcBlue}`
        },
        secondary: {
            main : `${arcOrange}`
        }
    },
    typography : {
        tab:{
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize : '1rem',
        },
        estimate:{
            fontFamily : 'Pacifico',
            textTransform: 'none',
            color: "white",
        },
        h2:{
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color : `${arcBlue}`,
            lineHeight : 1.5
        },
        h3:{
            fontFamily: 'Pacifico',
            color: `${arcBlue}`,
            fontSize: "2.5em"
        },
        h4:{
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: arcBlue,

        },
        h5:{
            fontFamily:"Raleway",
            fontSize: "1.75rem",
            color: arcBlue,
            fontWeight: 700
        },
        subtitle1:{
            color: arcGrey,
            fontSize : "1.25rem",
            fontWeight: 300
        },
        body1:{
            color: arcGrey,
            fontSize: "1.25rem",
            fontWeight: 300
        },
        learnButton:{
            color: arcBlue,
            borderColor: arcBlue,
            borderWidth: 2,
            textTransform: 'none',
            borderRadius: 50,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
        }
    }
});
