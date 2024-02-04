import img1 from "./images/icon-online.svg"
import img2 from "./images/icon-budgeting.svg"
import img3 from "./images/icon-onboarding.svg"
import img4 from "./images/icon-api.svg"
function Sec(){
    return(
<div>
<div>
    <div>
        <article className='card1'>
            <div className='size'>
                <div className='title1'>
                    <h1>Why choose Easybank?</h1>
                    <p>We leverage Open banking to turn your bank account hub. control your financial like never before.</p>
                </div>

                <div className='cardContainer'>
                    <div className='frCard'>
                        <img src={img1} class="cardImg" alt="Card" />
                        <div class="card-body">
                            <h5>Online Banking</h5>
                            <p>our modern web and mobile applications allow you to keep track of your finances wherever you are in the world </p>
                        </div>
                    </div>
                    <div className='frCard'>
                        <img src={img2} class="cardImg" alt="Card" />
                        <div class="card-body">
                            <h5>Online Banking</h5>
                            <p>our modern web and mobile applications allow you to keep track of your finances wherever you are in the world </p>
                        </div>
                    </div>
                    <div className='frCard'>
                        <img src={img3} class="cardImg" alt="Card" />
                        <div class="card-body">
                            <h5>Online Banking</h5>
                            <p>our modern web and mobile applications allow you to keep track of your finances wherever you are in the world </p>
                        </div>
                    </div>
                    <div className='frCard'>
                        <img src={img4} class="cardImg" alt="Card" />
                        <div class="card-body">
                            <h5>Online Banking</h5>
                            <p>our modern web and mobile applications allow you to keep track of your finances wherever you are in the world </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
    </div>
</div>
    )
}
export default Sec