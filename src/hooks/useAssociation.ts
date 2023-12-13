import {Photo} from "../model/Photo";
import {Name} from "../model/Name";
import {useAssociations} from './useAssociations';

type NameSetter = (name: Name) => void;

export const useAssociation: (person: Photo) => [Name, NameSetter] = (person) => {
    const [associations, associator] = useAssociations();
    return [associations[person.id], (name: Name) => associator(person, name)];
}
