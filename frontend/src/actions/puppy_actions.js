import * as PuppyAPIUtil from '../util/puppy_api_util'

// String Constants
export const RECEIVE_ALL_PUPPIES = "RECEIVE_ALL_PUPPIES"
export const RECEIVE_PUPPY = "RECEIVE_PUPPY"
export const RECEIVE_PUPPY_ERRORS = "RECEIVE_PUPPY_ERRORS"

// Regular Actions
const receiveAllPuppies = payload => ({
    type: RECEIVE_ALL_PUPPIES,
    payload
});

const receivePuppy = puppy => ({
    type: RECEIVE_PUPPY,
    puppy
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
