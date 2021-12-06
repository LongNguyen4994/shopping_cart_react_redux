import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index'
import Notification from '../components/Notification';

class NotificationContainer extends Component {

   closeNotification = () => {
      this.props.message_closeNotification();
   }


   render() {
      // ds product lay tu store
      let { notification } = this.props;

      return (
         <Notification
            notification={notification}
            closeNotification={this.closeNotification}
         />
      );
   }
}

// PropTypes
NotificationContainer.propTypes = {
   notification: PropTypes.object.isRequired,
   message_closeNotification: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
   return {
      notification: state.notification,
   }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      message_closeNotification: () => {
         dispatch(actions.message_closeNotification());
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);