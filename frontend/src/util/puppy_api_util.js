export const fetchPuppies = () => (
    axios.get('api/puppies')
)

export const fetchPuppy = puppyId => (
    axios.get(`api/puppies/${puppyId}`)
)

export const createPuppy = puppyData => (
    axios.post('api/puppies', puppyData)
)