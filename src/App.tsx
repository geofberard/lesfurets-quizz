import React from 'react';
import {Polaroid} from './component/Polaroid';
import {photos} from './data/photos';
import {AssociationsProvider} from './hooks/useAssociations';
import {Photo} from './model/Photo';
import Menu from './component/Menu';
import {createTheme, ThemeProvider} from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#2a3775"
        },
        secondary: {
            main: "#ff623e"
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    color: "#2a3775",
                    backgroundColor: "#fff",
                },
            }
        },
    },
});

const App = () => {
    const [randomisedPhotos] = React.useState<Photo[]>(photos.sort(() => Math.random() - 0.5));
    return (
        <AssociationsProvider>
            <ThemeProvider theme={theme}>
                <Menu/>
                <div className="App">
                    {randomisedPhotos.map(photo => <Polaroid photo={photo}/>)}
                </div>
            </ThemeProvider>
        </AssociationsProvider>
    );
}

export default App;
