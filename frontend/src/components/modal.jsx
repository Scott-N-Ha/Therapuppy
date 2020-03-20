import React from 'react';
import {closeModal} from '../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from '../components/session/login_form_container';
import SignUpFormContainer from '../components/session/signup_form_container';
import PuppyFormContainer from '../components/puppy/puppy_form_container';
import BookingFormContainer from '../components/booking/booking_form_container'

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