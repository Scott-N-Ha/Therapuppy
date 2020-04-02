import {connect} from 'react-redux';
import UserBookings from './user_bookings'

const msp = (state, ownProps) => {
    // debugger
    const currentUser = Object.values(state.entities.users).filter(user => user._id === state.session.user._id)[0]
    return({
    type: "approved",
    bookings: currentUser.bookings.filter(booking => booking.status === "5e717c615a67b08eeeb91719"),
    currentUser: currentUser
})}

const mdp = dispatch => ({

})

export default connect(msp, mdp)(UserBookings)