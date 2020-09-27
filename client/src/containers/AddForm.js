import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
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
        this.props.postAdds(this.state,this.props.history)
        
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark pb-3 mb-5" style={{ backgroundColor: "#ff4c68" }}>
                    <Link to='/' className="navbar-brand ml-5" >Gadget.id.</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#footer">Catalog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">Price</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#cta">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postAdds: (newData, history) => dispatch(postAdd(newData, history))
  })
  
  export default connect(
    null,
    mapDispatchToProps
  )(AddForm)