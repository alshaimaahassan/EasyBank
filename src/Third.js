import React from 'react'
import img5 from "./images/image-currency.jpg"
import img6 from "./images/image-restaurant.jpg"
import img7 from "./images/image-plane.jpg"
import img8 from "./images/image-confetti.jpg"
function Third() {
    return (
        <article className='card2'>
            <div className='size'>
                <h1 className='title2'>Latest Articles</h1>

                <div className='cardContainer'>
                    <div className='frCard-sc'>
                        <img src={img5} class="cardImg2" alt="Card" />
                        <p>By class i03jdki</p><div class="card-body">
                            <h5>Online Banking</h5>
                            <p>our modern web and mobile applications allow you to keep track of your finances wherever you are in the world </p>
                        </div>
                    </div>

                    <div className='frCard-sc'>
                        <img src={img6} class="cardImg2" alt="Card" />
                        <p>By class i03jdki</p><div class="card-body">
                            <h5>Online Banking</h5>
                            <p>our modern web and mobile applications allow you to keep track of your finances wherever you are in the world </p>
                        </div>
                    </div>

                    <div className='frCard-sc'>
                        <img src={img7} class="cardImg2" alt="Card" />
                        <p>By class i03jdki</p><div class="card-body">
                            <h5>Online Banking</h5>
                            <p>our modern web and mobile applications allow you to keep track of your finances wherever you are in the world </p>
                        </div>
                    </div>
                    <div className='frCard-sc'>
                        <img src={img8} class="cardImg2" alt="Card" />
                        <p>By class i03jdki</p><div class="card-body">
                            <h5>Online Banking</h5>
                            <p>our modern web and mobile applications allow you to keep track of your finances wherever you are in the world </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Third