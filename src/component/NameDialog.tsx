/** @jsxImportSource @emotion/react */
import * as React from "react";
import {FC} from "react";
import {photos} from '../data/names';
import {Button, css, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@mui/material';
import {useAssociations} from '../hooks/useAssociations';

interface NameDialogProps {
    open: boolean;
    onSubmit: (name: string) => void;
    onClose: () => void;
}

const remainingsCss = css({
    marginBottom: "15px"
})

const NameDialog: FC<NameDialogProps> = ({open, onSubmit, onClose}) => {
    const [name, setName] = React.useState("");
    const [associations] = useAssociations();
    const remaining = photos.length + 1 - Object.keys(associations).length;
    let complete = remaining === 0;

    console.log(remaining, complete)

    return (
        <Dialog
            open={open}
            keepMounted
            onClose={onClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle id="alert-dialog-slide-title">{!complete ? "Attends un peu ..." : "Une dernière chose ..."}</DialogTitle>
            <DialogContent>
                {!complete &&
                    <DialogContentText css={remainingsCss}>Il te reste {remaining} furet{remaining === 1 ? "" : "s"} a identifier</DialogContentText>}
                <DialogContentText>Tu es sûr(e) de tes choix ?</DialogContentText>
                <DialogContentText>Tu peux encore changer d’avis.</DialogContentText>
                <DialogContentText>Sinon il ne manque plus que ton prénom. :)</DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Je suis"
                    type="email"
                    variant="standard"
                    onChange={(event) => setName(event.target.value)}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Changer
                </Button>
                <Button onClick={() => onSubmit(name)} color="primary" disabled={name === ""}>
                    Envoyer
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NameDialog;
