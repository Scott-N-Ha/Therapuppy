import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookingPending from './booking_pending.jsx';

const mapStateToProps = ({ entities: { users, puppies, bookings } }, { ownerId } ) => {
  let ownedPuppiesWithBookings = [];
  
  Object.values(puppies).forEach(puppy => {
    if( puppy.owner === ownerId ){
      let pendingBookings = Object.values(bookings).filter(booking => booking.puppy === puppy._id && booking.status === "5e717ae318716c8dc9bd5bf5");

      if (pendingBookings.length > 0){
        ownedPuppiesWithBookings.push({
          puppy: puppy,
          pendingBookings: pendingBookings,
        });
      }
    }
  });

  return {
    bookings: ownedPuppiesWithBookings,
  };
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingPending));
