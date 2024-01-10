/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {FC} from 'react';
import {Polaroid} from "./Polaroid";
import {css} from '@emotion/react';
import {photos} from '../data/photos';

const pictureWallCss = css({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "auto"
});

const labelCss = css({
    textAlign: "center",
    marginTop: "25px",
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
    fontFamily: "'Satisfy', cursive",
});

export const PictureWall: FC = () => {
    const orderedPhotos =  photos.sort((a,b) => a.ratio - b.ratio);
    return (
        <>
            <div css={labelCss}>Qui étaient les plus difficiles à trouver ?</div>
            <div className="PictureWall" css={pictureWallCss}>
                {orderedPhotos.map(photo => <Polaroid photo={photo}/>)}
            </div>
        </>
    );
};
