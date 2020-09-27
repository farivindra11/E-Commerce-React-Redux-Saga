import React from 'react';
import { Link } from 'react-router-dom';
import samsung from '../assets/samsung.jpeg'

export default function Navbar() {
    return (
        <div>
            <section className="colored-section " id="title">

<div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="/#">Gadget.id</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/#">Catalog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Price</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    <div className="row">

        <div className="col-lg-6">
            <h1 className="big-heading">Belanja hape baru hanya di Gadget.id, Dijamin Ori.</h1>
            <Link to='/add' className="mt-5 btn btn-dark btn-lg c"><i className="fa fa-cart-plus"></i> Add Item</Link>

        </div>

        <div class="col-lg-6">

            <img class="title-image" src={samsung} alt="iphone-mockup" />
        </div>

    </div>

</div>
</section>
        </div>
    )
}