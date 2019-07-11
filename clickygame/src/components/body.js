import React from "react";
import "../styles/body.css";


function ImagesCard(props) {
    return (
        <div className='box'>
            <div className="card">
                <div className="img-container">
                    <button className='btn'><img alt={props.id} src={props.image} /></button>
                </div>

            </div>

        </div>


    );
}

export default ImagesCard;
