export const fetchPuppies = () => (
    axios.get('api/puppies')
)

export const fetchPuppy = puppyId => (
    axios.get(`api/puppies/${puppyId}`)
)