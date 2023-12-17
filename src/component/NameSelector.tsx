import * as React from 'react';
import {ChangeEvent, FC, useState} from 'react';
import {Photo} from "../model/Photo";
import {Name} from "../model/Name";
import {Autocomplete, TextField} from '@mui/material';
import {names} from '../data/names';
import {useAssociation} from '../hooks/useAssociation';
import CryptoJS from 'crypto-js';
import {uselessLyrics} from '../data/uselessLyrics';

let key = CryptoJS.MD5(uselessLyrics).toString();

const secretRegex = new RegExp(CryptoJS.AES.decrypt("U2FsdGVkX19uH/EN9zaywO0pU1ouDQbdVL5fbJEjUDY8MI7RrypfzjxAy314COTp", key).toString(CryptoJS.enc.Utf8));
const secretName = {
    id: CryptoJS.AES.decrypt("U2FsdGVkX1/d0+UcFcIiEfWYmd48YipY3VyuBGrFi1Q=", key).toString(CryptoJS.enc.Utf8),
    label: CryptoJS.AES.decrypt("U2FsdGVkX18tktmH2GMlb2OGa60wYa2mPzE/ilZ3b4Y=", key).toString(CryptoJS.enc.Utf8)
};

interface NameSelectorProps {
    photo: Photo,
    focused: boolean,
    setFocused: (focused: boolean) => void
}

export const NameSelector: FC<NameSelectorProps> = ({photo, focused, setFocused}) => {
    const [nameOptions, setNameOptions] = useState(names);
    const [name, setName] = useAssociation(photo);

    return (
        <Autocomplete
            id="combo-box-demo"
            options={nameOptions}
            getOptionLabel={(name: Name) => name.label}
            value={name}
            openOnFocus={true}
            onInput={(event: ChangeEvent<HTMLInputElement>) => {
                const userEntry = event.target.value;

                if (secretRegex.test(userEntry) && nameOptions.length === names.length) {
                    setNameOptions([secretName, ...names].sort((a, b) => a.label > b.label ? 1 : -1));
                } else if (!secretRegex.test(userEntry) && nameOptions.length > names.length) {
                    setNameOptions(names);
                }

            }}
            onChange={(event, newValue) => {
                setName(newValue as Name);
                setFocused(false);
            }}
            renderInput={params => (
                <TextField {...params}
                           onBlur={() => setFocused(false)}
                           fullWidth
                           variant="standard"
                           autoFocus={focused}/>
            )}
        />
    );
}
