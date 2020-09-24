import React, { Component } from 'react'
import TodoItem from './Chat'
import { loadChat } from '../actions'
import { connect } from 'react-redux'

class TodoList extends Component {

    componentDidMount() {
        this.props.loadData();
    }

    render() {
        const todos = this.props.data.map(item =>
            <TodoItem
                key={item.id}
                name={item.name}
                message={item.message}
                sent={item.sent}
                id={item.id} />)

        return (
            <ul> {todos}</ul >
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.chats
})

const mapDispatchToProps = (dispatch) => ({
    loadData: () => dispatch(loadChat())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)