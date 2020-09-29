import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { loadDetailAdd, upvote, devote, updateVote } from '../actions'
import Navbar from '../components/Navbar'

class DetailAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            voted: false,
        }
    }

    componentDidMount() {
        const detailId = Number(this.props.match.params.id)
        this.props.loadDetailAdd(detailId)
    }

    componentWillUnmount() {
        const detailId = Number(this.props.match.params.id)
        const vote = this.props.data.vote
        const history = this.props.history
        this.props.updateVote(detailId, vote, history)

    }

    handleVote = (e) => {
        e.preventDefault()
        this.setState((state) => ({
            voted: !state.voted
        })
        )
        if (e.target.name === 'vote') {
            this.props.upvote()
        } else {
            this.props.devote()
        }
    }

    handleBackToHome = (e) => {
        e.preventDefault()
        if (e.target.name === 'addCart') {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'iItem added to cart successfully!',
                showConfirmButton: false,
                timer: 1200
            }).then(() => this.props.history.push('/'))
        } else {
            this.props.history.push('/')
        }
    }

    render() {
        const { title, brand, detail_product, price, image, vote } = this.props.data
        return (
            <div>
                <Navbar />

                <div className="container">
        	<div className="row">
               <div className="col-xs-4 item-photo">
                    <img style={{'max-width':'100%'}} src={image} alt={title} />
                </div>
                <div className="col-xs-5" style={{"border":"0px solid gray","margin-left":"20px"}}>
                    
                    <h3 style={{'padding-top': '10px'}}>{title}</h3>    
                    <h5 style={{"color":"#337ab7"}}>{brand} · <small style={{"color":"#337ab7"}}>({vote === null ? 0 : vote} votes)</small>
                    {this.state.voted ? <button type='button' className='btn btn-outline-warning dtl' name='devote'  style={{"margin-left":"40px", "padding":"0px 20px"}}  onClick={this.handleVote}> Devote</button> : <button type='button' className='btn btn-outline-primary dtl' name='vote'  style={{"margin-left":"40px", "padding":"0px 20px"}}  onClick={this.handleVote}>Vote</button>}
                    
                    </h5>
        
                    
                    <h6 className="title-price"><small>Price</small></h6>
                    <h3 style={{"margin-top":"0px;"}}>{price}</h3>
        
                    
                    <div className="section">
                        <h6 className="title-attr" style={{"margin-top":"15px"}}><small>COLOR</small></h6>                    
                        <div>
                            <div className="attr" style={{"width":"25px","background":"#5a5a5a"}}></div>
                            <div className="attr" style={{"width":"25px","background":"white"}}></div>
                        </div>
                    </div>
                    <div className="section" style={{"padding-bottom":"5px"}} >
                        <h6 className="title-attr"><small>Capacities</small></h6>                    
                        <div>
                            <div className="attr2">16 GB</div>
                            <div className="attr2">32 GB</div>
                        </div>
                    </div>          
                   
                    <div className="section" style={{"padding-bottom":"20px"}}>
                    <button type='button' className="btn btn-success dtl" name='addCart' onClick={this.handleBackToHome}><i className="fa fa-cart-plus mr-1" ></i>Add cart</button>  
                    <button type='button' className="btn btn-danger dtl" name='cancel' onClick={this.handleBackToHome} style={{"margin-left":"40px"}}><i className="fa fa-times mr-1"></i>cancel</button>        
                    </div>                                        
                </div>                              
        
                <div className="col-xs-9">
                    <ul className="menu-items">
                        <li className="active">More Detail</li>
                        <li>Guarantee</li>
                        <li>Vendor</li>
                    </ul>
                    <div style={{"width":"100%","border-top":"1px solid silver"}}>
                        <p style={{"padding":"15px"}}>
                            <small>
                            <ReactMarkdown
                                source={detail_product}
                                escapeHtml={false}
                                className='ml-2'
                            />
                            </small>
                        </p>
                        
                    </div>
                </div>		
            </div>
        </div>   
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.detailAdd

})

const mapDispatchToProps = (dispatch) => ({
    loadDetailAdd: (id) => dispatch(loadDetailAdd(id)),
    upvote: () => dispatch(upvote()),
    devote: () => dispatch(devote()),
    updateVote: (id, vote, history) => dispatch(updateVote(id, vote, history))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailAdd)