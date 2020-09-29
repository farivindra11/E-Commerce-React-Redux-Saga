import React from 'react'
import '../style/carousel.css'

export default function Carousel() {

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://s0.bukalapak.com/promo-catalog/promo_banner/33873/Voucherku_-_Diskon_s.d._300rb.jpg" className="tall" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Dijamin Ori</h5>
                            <p>Belanja sepuasnya tanpa pikir panjang</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://giladiskon-uploads.s3-ap-southeast-1.amazonaws.com/images/deals/gadget%20gd.id-637126692865635504.PNG" className="tall" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://katalogpromosi.com/wp-content/uploads/2020/04/bukaalaapak.png" className="tall" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )

}