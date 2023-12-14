/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {FC} from 'react';
import {Photo} from "../model/Photo";
import {Name} from "../model/Name";
import {css} from '@emotion/react';
import {Autocomplete, TextField} from '@mui/material';
import {names} from '../data/names';
import {useAssociation} from '../hooks/useAssociation';

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
    marginTop: "10px",
    color: "#2a3775",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "'Satisfy', cursive",
});

interface PolaroidProps {
    photo: Photo,
}

export const Polaroid: FC<PolaroidProps> = ({photo}) => {
    const [focused, setFocused] = React.useState(false);
    const [name, setName] = useAssociation(photo);

    return (
        <div css={polaroidCss}
             className={`Polaroid ${focused ? "focused" : ""}`}
             onClick={() => !focused ? setFocused(true) : ""}>
            <img css={imgCss}
                 alt={photo.id}
                 src={"img/furets/" + photo.url}/>
            <div css={labelCss}>
                {!focused ? (name ? name.label : "Je suis ..." ) : (
                    <Autocomplete
                        id="combo-box-demo"
                        options={names}
                        getOptionLabel={(name: Name) => name.label}
                        value={name}
                        openOnFocus={true}
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
