import React, { Component } from "react";
import "../styles/body.css";
import images from '../images.json';
// import Cards from './Cards';


class ImagesCard extends Component {
    constructor(props) {
        super(props);
        //Array of images
        this.ImagePieces = images;

        this.tempCheckArr = [];
        this.state = {
            showImg: Array(this.ImagePieces.length).fill('show'),
            divClick: true,
            compareImgArr: [],
            counter: 0
        }
        console.log(images)
    }

    //Shuffle memory game images
    componentWillMount() {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        shuffleArray(this.ImagePieces);
    }


    render() {

        return (
            <div className='box'>
                <div className="card">
                    <div className="img-container">
                        <button className='btn'><img alt={images.id} src={images.image} /></button>
                    </div>

                </div>

            </div>


        );
    }
}


export default ImagesCard;
