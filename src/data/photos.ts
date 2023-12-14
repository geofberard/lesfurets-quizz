import {Photo} from "../model/Photo";

export const photos: Photo[] =
    Array.from(Array(49).keys())
        .map(i => i + 1)
        .map(i => ({id: `furet${i}`, url: `Furet${i}.jpg`}));

