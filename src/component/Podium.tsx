/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {FC} from 'react';
import {Polaroid} from "./Polaroid";
import {css} from '@emotion/react';
import {winner} from '../data/platforms';

const podiumContainerCss = css({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
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

const pilarContainerCss = (index: number) => css({
    "@media (max-width: 786px)": {
        order: index,
    }
});

const pilarCss = css({
    width: "150px",
    height: "200px",
    backgroundColor: 'white',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    fontSize: "40px",
    fontWeight: "bold",
    color: "#df2d2d",
    "@media (max-width: 786px)": {
        display: 'none',
    }
});



export const Podium: FC = () => {
    return (
        <>
            <div css={labelCss}>Meilleurs scores</div>
            <div className="PictureWall" css={podiumContainerCss}>
                {winner.map(platform => (
                    <div css={pilarContainerCss(platform.rank)}>
                        <Polaroid photo={platform.photo}/>
                        <div css={pilarCss} style={{height: platform.height}}>{platform.rank}</div>
                    </div>
                ))}
            </div>
        </>
    );
};
