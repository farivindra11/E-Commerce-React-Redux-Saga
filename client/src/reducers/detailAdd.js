import numToRupiah from '../helpers/rupiah';

const detailAdd = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_DETAIL_ADD' :
        const data = action.data
        return {
            ...data,
            price:numToRupiah(data.price)
        }
        case 'RESET_DETAIL_ADD' :
            return {}
        case 'UPVOTE_ADD':
            return {
                ...state,
                vote: state.vote + 1
            }
        case 'DEVOTE_ADD':
            return {
                ...state,
                vote: state.vote - 1
            }
        default:
            return state
    }
} 
export default detailAdd