import * as React from 'react';
import {Photo} from "../model/Photo";
import {Name} from "../model/Name";
import {Context, createContext, FunctionComponent, PropsWithChildren} from 'react';
import {getCookie, setCookie} from '../service/CookieService';

type Associations = { [key: string]: Name }
type Associator = (person: Photo, name: Name) => void;

interface AssociationsManager {
    associations: { [key: string]: Name };
    associate: (person: Photo, name: Name) => void;
}

let defaultAssociation: AssociationsManager = {
    associations: {},
    associate: () => {
    }
};

const AssociationsContext: Context<AssociationsManager> = createContext<AssociationsManager>(defaultAssociation);

const ASSOCIATIONS_CNAME = "associations" ;

export const AssociationsProvider: FunctionComponent<PropsWithChildren> = ({children}) => {
    const [associations, setAssociations] = React.useState<Associations>(() => {
        const cookieValue = getCookie(ASSOCIATIONS_CNAME);
        return cookieValue ? JSON.parse(cookieValue) : {};
    });

    const associate = (person: Photo, name: Name) => {
        const names = {...associations, [person.id]: name};
        setAssociations(names);
        setCookie(ASSOCIATIONS_CNAME, JSON.stringify(names), 10);
    }

    return (
            <AssociationsContext.Provider value = {{associations, associate}} >
                {children}
            </AssociationsContext.Provider>
    );
};

export const useAssociations: () => [Associations, Associator] = () => {
    const associationsManager = React.useContext(AssociationsContext);
    return [associationsManager.associations, associationsManager.associate]
}
