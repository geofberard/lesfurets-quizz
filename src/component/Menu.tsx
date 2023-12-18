/** @jsxImportSource @emotion/react */
import * as React from "react";
import {FC} from "react";
import {AppBar, Backdrop, Button, CircularProgress, Toolbar, Typography, useTheme} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import NameDialog from './NameDialog';
import ConfirmDialog from './ConfirmDialog';
import {useAssociations} from '../hooks/useAssociations';
import LFLogo from './LFLogo';
import {css} from '@emotion/react';

const API_URL = "https://script.google.com/macros/s/AKfycbyRmtD7qfsSj1UHvZn11UGa0XxiQAcWy6sbHr1XfvDRbTCl2qQaHmt54T2wMuv7JgU/exec";

enum QuizzState {
    PHOTO_ASSOCIATION,
    IDENTIFICATION,
    WAITING,
    DONE,
}

const splashScreenBackdropCss = css({
    zIndex: 2000,
});

const splashScreenProgressCss = css({
    color: "#fff",
});

const Menu: FC = () => {
    const [associations] = useAssociations();
    const [submitState, setSumbitState] = React.useState(QuizzState.PHOTO_ASSOCIATION);
    const theme = useTheme();

    const miniCss = css({
        fontWeight:"bold",
        color: theme.palette.secondary.main
    });

    const furetsCss = css({
        fontWeight:"bold",
        color: theme.palette.primary.main
    });

    const buttonCss = css({
        fontSize: theme.typography.h6.fontSize,
        fontWeight:"bold",
        color: theme.palette.secondary.main
    });

    const handleClose = () => {
        setSumbitState(QuizzState.PHOTO_ASSOCIATION);
    };

    const handleSubmit = (name: String) => {
        setSumbitState(QuizzState.WAITING);
        console.log(associations);
        const associationsParam : String = Object.keys(associations)
            .filter(key => associations[key])
            .map(key => `${key}=${associations[key].id}`)
            .join("&");
        console.log(associationsParam);

        fetch(`${API_URL}?name=${name}&${associationsParam}`,{method: 'GET'})
            .then(() => setSumbitState(QuizzState.DONE));
    };

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <LFLogo/>
                    <Typography variant="h4" flex={1}>
                        <span css={miniCss}>mini</span>
                        <span css={furetsCss}>furets</span>
                    </Typography>
                    <Button css={buttonCss} onClick={() => setSumbitState(QuizzState.IDENTIFICATION)}>
                        Je&nbsp;valide&nbsp;&nbsp;<SendIcon color="secondary"/>
                    </Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <NameDialog open={submitState === QuizzState.IDENTIFICATION}
                        onSubmit={handleSubmit}
                        onClose={handleClose} />
            <Backdrop css={splashScreenBackdropCss} open={submitState === QuizzState.WAITING}>
                <CircularProgress css={splashScreenProgressCss} size={"8rem"}/>
            </Backdrop>
            <ConfirmDialog open={submitState === QuizzState.DONE}
                           onClose={handleClose}/>
        </div>
    );
}

export default Menu;
