import React from 'react';
import {closeModal} from '../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from '../components/session/login_form_container';
import SignUpFormContainer from '../components/session/signup_form_container';
import PuppyFormContainer from '../components/puppy/puppy_form_container';
import BookingFormContainer from '../components/booking/booking_form_container'
import BookingIndexContainer from './booking/booking_index_container';
import UserApprovedBookings from './user_bookings/user_approved_container';
import UserDeniedBookings from './user_bookings/user_denied_booking_container';
import UserPendingBookings from './user_bookings/user_pending_container';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;


    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignUpFormContainer />
            break;
        case 'createPuppy':
            component = <PuppyFormContainer />
            break;
        case 'requestDogter':
            component = <BookingFormContainer />
            break;
        case 'yourBookings':
            component = <BookingIndexContainer />
            break;
        case 'yourPendingBookings':
            component = <UserPendingBookings />
            break;
        case 'yourApprovedBookings':
            component = <UserApprovedBookings />
            break;
        case 'yourDeniedBookings':
            component = <UserDeniedBookings />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const msp = state => ({
    modal: state.modal
})

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(Modal)