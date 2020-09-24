


// start load add data
export const loadAddSuccess = (add) => ({
    type: 'LOAD_ADD_SUCCESS',
    add
})

export const loadAddFailure = () => ({
    type: 'LOAD_ADD_FAILURE'
})

export const loadAdd = () => ({
    type: 'LOAD_ADD'
})
export const resetAdd = () => ({
    type: 'RESET_ADD'
})
// end load add data

// start post add data
export const postAddFailure = () => ({
    type: 'POST_NEW_ADD_FAILURE'
})
export const postAdd = (newData, history) => ({
    type: 'POST_NEW_ADD', newData, history
})
//end post adds data


//start load detail add
export const loadDetailAdd = (id) => ({
    type: 'LOAD_DETAIL_ADD',
    id
})

export const loadDetailAddSuccess = (data) => ({
    type: 'LOAD_DETAIL_ADD_SUCCESS',
    data
})

export const resetDetailAdd = () =>({
    type:'RESET_DETAIL_ADD'
})
//end load detail add

// UPVOTE AND DEVOTE

export const upvote = () => ({
    type: 'UPVOTE_ADD',
})

export const devote = () => ({
    type: 'DEVOTE_ADD',
})
export const updateVote = (id,vote,history) => ({
    type: 'UPDATE_VOTE',
    id,
    vote,
    history
})