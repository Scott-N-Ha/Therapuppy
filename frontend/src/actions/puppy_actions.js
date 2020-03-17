import * as PuppyAPIUtil from '../util/puppy_api_util'

export const RECEIVE_ALL_PUPPIES = "RECEIVE_ALL_PUPPIES"
export const RECEIVE_PUPPY = "RECEIVE_PUPPY"

const receiveAllPuppies = puppies => ({
    type: RECEIVE_ALL_PUPPIES,
    puppies
})

const receivePuppy = puppy => ({
    type: RECEIVE_PUPPY,
    puppy
})

