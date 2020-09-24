const add = (state = { totalPage: 0, data: [] }, action) => {
    switch (action.type) {
        case 'LOAD_ADD_SUCCESS':
            return {
                totalPage: action.add.totalPage,
                data: [...state.data, ...action.add.data]
            }
        case 'RESET_ADD':
            return { totalPage: 0, data: [] }

        default:
            return state
    }
}

export default add