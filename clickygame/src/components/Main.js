import React from 'react';
import '../styles/Main.css';
import Cards from './Cards';
import images from '../images.json';
import ImagesCard from './body';



function Main() {
    return (
        <Cards>

            <ImagesCard

                image={images[0].image}

            />
            <ImagesCard

                image={images[1].image}

            />
            <ImagesCard

                image={images[2].image}

            />
            <ImagesCard

                image={images[3].image}

            />
            <ImagesCard

                image={images[4].image}

            />
            <ImagesCard

                image={images[5].image}

            />
            <ImagesCard

                image={images[6].image}

            />
            <ImagesCard

                image={images[7].image}

            />
            <ImagesCard

                image={images[8].image}

            />
            <ImagesCard

                image={images[9].image}

            />
            <ImagesCard

                image={images[10].image}

            />
            <ImagesCard

                image={images[11].image}

            />

        </Cards>
    );
}
export default Main;