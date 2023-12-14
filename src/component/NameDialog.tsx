import * as React from "react";
import {FC} from "react";
import {photos} from '../data/names';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@mui/material';

interface NameDialogProps {
    open: boolean;
    onSubmit:  (name:string) => void;
    onClose:  () => void;
}

const NameDialog: FC<NameDialogProps> = ({open, onSubmit, onClose}) => {
    const [name, setName] = React.useState("");
    const identified = 10;
    let complete = identified < photos.length;

    return (
            <Dialog
                open={open}
                keepMounted
                onClose={onClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="alert-dialog-slide-title">{complete ? "Attends un peu ..." : "Une dernière chose ..."}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Tu es sûr de ton choix ?</DialogContentText>
                    <DialogContentText>
                        Tu peux encore changer d’avis. Sinon il ne manque plus que ton prénom. :)
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Je suis"
                        type="email"
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
