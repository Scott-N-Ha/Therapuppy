import {connect} from 'react-redux';
import UserBookings from './user_bookings'

const msp = (state, ownProps) => {
    const currentUser = Object.values(state.entities.users).filter(user => user._id === state.session.user._id)[0]
    // debugger
    return({
    type: "pending",
    bookings: Object.values(state.entities.bookings).filter(booking => booking.renter._id === currentUser._id && booking.status === "5e717ae318716c8dc9bd5bf5"),
    puppies: Object.values(state.entities.puppies)

})}

const mdp = dispatch => ({

})

export default connect(msp, mdp)(UserBookings)