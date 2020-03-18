import * as PuppyAPIUtil from '../util/puppy_api_util'
import Puppy from '../components/puppy/puppy';

// String Constants
export const RECEIVE_ALL_PUPPIES = "RECEIVE_ALL_PUPPIES"
export const RECEIVE_PUPPY = "RECEIVE_PUPPY"
export const RECEIVE_PUPPY_ERRORS = "RECEIVE_PUPPY_ERRORS"

// Regular Actions
const receiveAllPuppies = payload => ({
    type: RECEIVE_ALL_PUPPIES,
    payload
});

const receivePuppy = payload => ({
    type: RECEIVE_PUPPY,
    payload
});

const receivePuppyErrors = errors => ({
    type: RECEIVE_PUPPY_ERRORS,
    errors
});

// Thunk Actions
export const fetchAllPuppies = () => dispatch => (
    PuppyAPIUtil.fetchPuppies()
        .then(res => dispatch(receiveAllPuppies(res.data)),
            err => dispatch(receivePuppyErrors(err.response.data)))
);

export const fetchPuppy = puppyId => dispatch => (
    PuppyAPIUtil.fetchPuppy(puppyId)
        .then(res => {
            
            return (dispatch(receivePuppy(res.data)))},
        err => dispatch(receivePuppyErrors(err.response.data)))
)

export const createPuppy = puppyData => dispatch => (
    PuppyAPIUtil.createPuppy(puppyData)
        .then(res => dispatch(receivePuppy(res.data)),
        err => dispatch(receivePuppyErrors(err.response.data)))
)

export const editPuppy = puppyData => dispatch => (
    PuppyAPIUtil.editPuppy(puppyData)
        .then(res => dispatch(receivePuppy(res.data)),
        err => dispatch(receivePuppyErrors(err.response.data)))
)
