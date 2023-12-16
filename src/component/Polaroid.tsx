/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {ChangeEvent, FC, useState} from 'react';
import {Photo} from "../model/Photo";
import {Name} from "../model/Name";
import {css} from '@emotion/react';
import {Autocomplete, TextField} from '@mui/material';
import {names} from '../data/names';
import {useAssociation} from '../hooks/useAssociation';
import CryptoJS from 'crypto-js';
import {uselessLyrics} from '../data/uselessLyrics';

const polaroidCss = css({
    background: "white",
    padding: "10px 10px 20px 10px",
    margin: "20px",
    display: "inline-block",
    boxShadow: "0 1px 5px 0 #656565",
    transform: "rotate(1deg)",
    transition: "all .2s ease-in-out",
    opacity: 0.85,
    '&:nth-child(1)': {
        transform: "rotate(-1deg)"
    },
    '&:hover, &.focused': {
        transform: 'rotate(0)',
        opacity: 1
    }
});

const imgCss = css({
    width: "200px",
    height: "200px",
    objectFit: "cover",
    objectPosition: "0 0",
    border: "1px solid #C9C9C9",
});

const labelCss = css({
    textAlign: "center",
    marginTop: "10px",
    color: "#2a3775",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "'Satisfy', cursive",
});

interface PolaroidProps {
    photo: Photo,
}

let key = CryptoJS.MD5(uselessLyrics).toString();

const secretRegex = new RegExp(CryptoJS.AES.decrypt("U2FsdGVkX18DI/7Qg0jGhC2u9rkaVjXAVmxhGrhrYk4=", key).toString(CryptoJS.enc.Utf8));
const secretName = {
    id: CryptoJS.AES.decrypt("U2FsdGVkX1/d0+UcFcIiEfWYmd48YipY3VyuBGrFi1Q=", key).toString(CryptoJS.enc.Utf8),
    label: CryptoJS.AES.decrypt("U2FsdGVkX18tktmH2GMlb2OGa60wYa2mPzE/ilZ3b4Y=", key).toString(CryptoJS.enc.Utf8)
};

export const Polaroid: FC<PolaroidProps> = ({photo}) => {
    const [nameOptions, setNameOptions] = useState(names);
    const [focused, setFocused] = useState(false);
    const [name, setName] = useAssociation(photo);

    return (
        <div css={polaroidCss}
             className={`Polaroid ${focused ? "focused" : ""}`}
             onClick={() => !focused ? setFocused(true) : ""}>
            <img css={imgCss}
                 alt={photo.id}
                 src={"img/furets/" + photo.url}/>
            <div css={labelCss}>
                {!focused ? (name ? name.label : "Je suis ...") : (
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
                )}
            </div>
        </div>
    );
}
