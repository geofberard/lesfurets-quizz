/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {FC} from 'react';
import {Polaroid} from "./Polaroid";
import {css} from '@emotion/react';
import {Photo} from '../model/Photo';
import {photos} from '../data/photos';

const pictureWallCss = css({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "auto"
});

export const PictureWall: FC = () => {
    const [randomisedPhotos] = React.useState<Photo[]>(photos.sort(() => Math.random() - 0.5));
    return (
        <div className="PictureWall" css={pictureWallCss}>
            {randomisedPhotos.map(photo => <Polaroid photo={photo}/>)}
        </div>
    );
};
