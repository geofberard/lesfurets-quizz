import {Photo} from "../model/Photo";

export const photos: Photo[] =
    Array.from(Array(50).keys())
        .map(i => i + 1)
        .map(i => ({id: `furet${i}`, url: `Furet${i}.jpg`}));

