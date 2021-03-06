import axios from 'axios';

export const fetchPuppies = () => (
    axios.get('api/puppies')
)

export const fetchPuppy = puppyId => (
    axios.get(`api/puppies/${puppyId}`)
)

export const createPuppy = puppyData => {
    return(
    axios.post('api/puppies', puppyData)
)}

export const editPuppy = puppyData => (
    axios.patch(`api/puppies/${puppyData._id}`. puppyData)
)