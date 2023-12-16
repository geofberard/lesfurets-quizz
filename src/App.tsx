import React from 'react';
import {AssociationsProvider} from './hooks/useAssociations';
import Menu from './component/Menu';
import {createTheme, ThemeProvider} from '@mui/material';
import {PictureWall} from './component/PictureWall';

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

const App = () => (
    <AssociationsProvider>
        <ThemeProvider theme={theme}>
            <Menu/>
            <PictureWall />
        </ThemeProvider>
    </AssociationsProvider>
);

export default App;
