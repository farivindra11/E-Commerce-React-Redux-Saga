import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { postAdd } from '../actions'
import { connect } from 'react-redux'


class AddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            rate: "",
            description: "",
            price: "",
            brand: "",
            detailProduct: "",
            image: "",
        }
    }

    handleChange = (e) => {
        if (e.target.name === 'image') {
            this.setState({ [e.target.name]: e.target.files[0] })

        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postAdd(this.state,this.props.history)

    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container" style={{ "marginTop": "40px" }}>
                    <div className="card">
                        <div className="card-header bg-warning" style={{ "fontFamily": "Roboto slab", "textAlign": "center" }}>
                            <h3>Add Ads</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                                <div className="form-group row">
                                    <label for="title" className="col-sm-2 col-form-label" style={{ "fontSize": "20px", "fontFamily": "serif" }}>Title</label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Title"
                                            id="inputEmail"
                                            name="title"
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="rate" className="col-sm-2 col-form-label" style={{ "fontSize": "20px", "fontFamily": "serif" }}>Rate</label>
                                    <div className="col-sm-10">
                                        <select className="form-control form-control-lg" name="rate" id="rate" required onChange={this.handleChange}>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="description" className="col-sm-2 col-form-label" style={{ "fontSize": "20px", "fontFamily": "serif" }}>Description</label>
                                    <div className="col-sm-10">
                                        <textarea
                                            className="form-control form-control-lg"
                                            id="description"
                                            name='description'
                                            placeholder="Description"
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label for="price" className="col-sm-2 col-form-label" style={{ "fontSize": "20px", "fontFamily": "serif" }}>Price</label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control form-control-lg"
                                            type="number"
                                            name="price"
                                            id="price"
                                            placeholder="Price"
                                            onChange={this.handleChange}
                                            required
                                            min="1" step="any"
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="brand" className="col-sm-2 col-form-label" style={{ "fontSize": "20px", "fontFamily": "serif" }}>Brand</label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Brand"
                                            name="brand"
                                            onChange={this.handleChange}
                                            required
                                            id="brand"
                                            min="1" step="any" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="detailProduct" className="col-sm-2 col-form-label" style={{ "fontSize": "20px", "fontFamily": "serif" }}>Detail Product</label>
                                    <div className="col-sm-10">
                                        <textarea
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Detail Product"
                                            name="detailProduct"
                                            onChange={this.handleChange}
                                            required
                                            rows="5"
                                            id="detailProduct"
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="image" className="col-sm-2 col-form-label" style={{ "fontSize": "20px", "fontFamily": "serif" }}>Image</label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control form-control-lg"
                                            type="file"
                                            id="image"
                                            name="image"
                                            placeholder="Image"
                                            onChange={this.handleChange}
                                            required
                                            min="1" step="any" accept="image/*" />
                                    </div>
                                </div>

                                <Link to='/' type="submit" className="btn-primary btn btn-lg p-2 mx-1 mb-2" onClick={this.handleSubmit}>Add Ads</Link>
                                <Link to="/" type="button" className="btn-danger btn btn-lg p-2 mx-1 mb-2">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postAdd: (newData, history) => dispatch(postAdd(newData, history))
})

export default connect(
    null,
    mapDispatchToProps
)(AddForm)