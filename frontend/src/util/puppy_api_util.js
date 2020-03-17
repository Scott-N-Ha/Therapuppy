export const getPuppies = () => (
    axios.get('api/puppies')
)

export const getPuppy = puppyId => (
    axios.get(`api/puppies/${puppyId}`)
)