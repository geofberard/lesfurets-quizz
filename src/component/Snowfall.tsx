/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {FC} from 'react';
import {css, keyframes} from '@emotion/react';
import {Property} from 'csstype';

const falling = (name: String, offsetX: number, offsetY: number) => keyframes({
    "0%" : {
        transform: `translate3D(${offsetX}%, ${offsetY}%, 0)`,
    },
    "100%" : {
        transform: `translate3D(${-offsetX}%, ${offsetY + 100}%, 0)`,
    }
})

const fallingNearTop = falling("falling-near-top", 0, -100);
const fallingNearBottom = falling("falling-near-bottom", 0, 0);
const fallingMidTop = falling("falling-mid-top", -7.5, -100);
const fallingMidBottom = falling("falling-mid-bottom", -7.5, 0);
const fallingFarTop = falling("falling-back-top", 7.5, -100);
const fallingFarBottom = falling("falling-back-bottom", 7.5, 0);

const snow = (url: String, name: String, duration: Property.AnimationDuration) => css({
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "none",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: "100%",

    backgroundImage: `url(${url})`,
    backgroundSize: "150px",
    backgroundRepeat: "repeat",
    animation: `${name} linear infinite both`,
    animationDuration: duration,
});

const snowfallCss = css({
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    top: "0",
});

export const Snowfall: FC = () => (
    <div css={snowfallCss}>
        <div css={snow("img/snow-large.png", fallingNearTop, "40s")}/>
        <div css={snow("img/snow-large.png", fallingNearBottom, "40s")}/>
        <div css={snow("img/snow-medium.png", fallingMidTop, "50s")}/>
        <div css={snow("img/snow-medium.png", fallingMidBottom, "50s")}/>
        <div css={snow("img/snow-small.png", fallingFarTop, "60s")}/>
        <div css={snow("img/snow-small.png", fallingFarBottom, "60s")}/>
    </div>
);
