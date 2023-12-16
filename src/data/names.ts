import {Photo} from "../model/Photo";
import {Name} from "../model/Name";

export const photos: Photo[] =
    Array.from(Array(49).keys())
        .map(i => i + 1)
        .map(i => ({id: "furet" + i, url: "Furet" + i + ".jpg"}));

export const names: Name[] = [
    {id: "agathe", label: "Agathe"},
    {id: "alain", label: "Alain"},
    {id: "ambre", label: "Ambre"},
    {id: "amelie-r", label: "Amelie R."},
    {id: "anne", label: "Anne"},
    {id: "anthony", label: "Anthony"},
    {id: "arthur-b", label: "Arthur B."},
    {id: "aurélie-b", label: "Aurélie B."},
    {id: "aurelie-m", label: "Aurelie M."},
    {id: "aurelien", label: "Aurelien"},
    {id: "barbara", label: "Barbara"},
    {id: "camille-c", label: "Camille C."},
    {id: "cedric-me", label: "Cedric Me."},
    {id: "céline", label: "Céline"},
    {id: "claire-g", label: "Claire G."},
    {id: "claire-s", label: "Claire S."},
    {id: "damien-t", label: "Damien T."},
    {id: "damien-v", label: "Damien V."},
    {id: "delphine", label: "Delphine"},
    {id: "dominique", label: "Dominique"},
    {id: "fabien", label: "Fabien"},
    {id: "geoffrey", label: "Geoffrey"},
    {id: "gregory", label: "Gregory"},
    {id: "helene", label: "Helene"},
    {id: "hugo-e", label: "Hugo E."},
    {id: "jeremie", label: "Jeremie"},
    {id: "jérome", label: "Jérome"},
    {id: "justine", label: "Justine"},
    {id: "laura-w", label: "Laura W."},
    {id: "lila", label: "Lila"},
    {id: "loïc-c", label: "Loïc C."},
    {id: "lucie", label: "Lucie"},
    {id: "marion-z", label: "Marion Z."},
    {id: "maxence", label: "Maxence"},
    {id: "mehdi", label: "Mehdi"},
    {id: "micael", label: "Micaël"},
    {id: "olivia", label: "Olivia"},
    {id: "olympe", label: "Olympe"},
    {id: "patty", label: "Patty"},
    {id: "quentin-g", label: "Quentin G."},
    {id: "quentin-j", label: "Quentin J."},
    {id: "sandra", label: "Sandra"},
    {id: "sarah-h", label: "Sarah H."},
    {id: "shashank", label: "Shashank"},
    {id: "sylvain-b", label: "Sylvain B."},
    {id: "sylvain-c", label: "Sylvain C."},
    {id: "sylvain-v", label: "Sylvain V."},
    {id: "tatiana", label: "Tatiana"},
    {id: "thibault-c", label: "Thibault C."},
];


