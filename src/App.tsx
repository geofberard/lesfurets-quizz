/** @jsxImportSource @emotion/react */
import React from 'react';
import {AssociationsProvider} from './hooks/useAssociations';
import Menu from './component/Menu';
import {createTheme, ThemeProvider} from '@mui/material';
import {PictureWall} from './component/PictureWall';
import {Snowfall} from './component/Snowfall';
import {css} from '@emotion/react';

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

const mainCss = css({
    position: "relative",
    //background: "linear-gradient(to top,#b72424 0%,#492727 100%)",
    background: "linear-gradient(to top,#df2d2d 0%,#942121 100%)",
    minHeight: "100vh"
})

    //background: linear-gradient(to top,#2427b7 0%,#272949 100%);
    //background: linear-gradient(to top,#616161 0%,#000000 100%);
    //background: linear-gradient(to top,#01018e 0%,#01014c 100%);
    //background: linear-gradient(to top,#b72424 0%,#492727 100%);
    //background: radial-gradient(#b72424,#492727);

const App = () => (
    <div css={mainCss}>
        <AssociationsProvider>
            <ThemeProvider theme={theme}>
                <Menu/>
                <Snowfall/>
                <PictureWall/>
            </ThemeProvider>
        </AssociationsProvider>
    </div>
);

export default App;
