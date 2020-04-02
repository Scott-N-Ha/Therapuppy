import {connect} from 'react-redux';
import UserBookings from './user_bookings'

const msp = (state, ownProps) => {
    // debugger
    const currentUser = Object.values(state.entities.users).filter(user => user._id === state.session.user._id)[0]
    return({
    type: "approved",
    bookings: Object.values(state.entities.bookings).filter(booking => booking.renter._id === currentUser._id && booking.status === "5e717c615a67b08eeeb91719"),
    puppies: Object.values(state.entities.puppies)
})}

const mdp = dispatch => ({

})

export default connect(msp, mdp)(UserBookings)