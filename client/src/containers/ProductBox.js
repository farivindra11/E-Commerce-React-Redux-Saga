import React, { Component } from 'react';
import ProductItem from '../components/ProductItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';


class ProductBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            hasMore: true,
            limit: 3
        }
    }
    
    componentDidMount() {
        this.props.loadAdd(this.state.page, this.state.limit)
    }

    componentWillMount() {
        this.props.resetAdd()
    }

    fetchData = () => {
        if (this.state.page < this.props.totalPage) {
            this.setState(
                state => ({ page: state.page + 1 }),
                () => {
                    this.props.loadAdd(this.state.page, this.state.limit)
                })
        } else if (this.state.page === this.props.totalPage) {
            this.setState({ hasMore: false })
        }
    }

    render () {
        const add = this.props.add.map((item, index) => {
            return <ProductItem
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                brand={item.brand}
                detailProduct={item.detail_product}
                image={item.image}
                rate={item.rate}
            />

        })

        return (

            <InfiniteScroll
                dataLength={this.props.add.length}
                next={this.fetchData}
                hasMore={this.state.hasMore}
                height={600}
                className='my-5'
                loader={
                    <div className="d-flex justify-content-center">
                        <h4>Loading...</h4>
                    </div>
                }
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }

                scrollThreshold={1}
            >
                <div className="container my-5">

                    <div className='row justify-content-center my-5'>
                        {add}
                    </div>

                </div>
            </InfiniteScroll>



        )
    }
}

const mapStateToProps = (state) => ({
    add: state.add.data,
    totalPage: state.add.totalPage
})

const mapDispatchToProps = (dispatch) => ({
    loadAdd: (page, limit) => dispatch(loadAdd(page, limit)),
    resetAdd: () => dispatch(resetAdd())

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductBox)