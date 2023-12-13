import React from 'react';
import {Polaroid} from './component/Polaroid';
import {photos} from './data/photos';
import {AssociationsProvider} from './hooks/useAssociations';
import {Photo} from './model/Photo';

function App() {
    const [randomisedPhotos] = React.useState<Photo[]>(photos.sort(() => Math.random() - 0.5));
    return (
        <AssociationsProvider>
            <div className="App">
                {randomisedPhotos.map(photo => <Polaroid photo={photo}/>)}
            </div>
        </AssociationsProvider>
    );
}

export default App;
