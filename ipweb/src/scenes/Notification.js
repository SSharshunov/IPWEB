import React from 'react';
import Notifications from 'react-notification-system-redux';
import { connect } from 'react-redux'

const success = {
    rgb: '0,128,128',
    hex: '#008080'
}

const defaultShadowOpacity = '0.9';

const style = {
    NotificationItem: {
        success: {
            borderTop: '2px solid' + success.hex,
            backgroundColor: '#f0f5ea',
            color: success.hex,
            WebkitBoxShadow: '0 0 1px rgba(' + success.rgb + ',' + defaultShadowOpacity + ')',
            MozBoxShadow: '0 0 1px rgba(' + success.rgb + ',' + defaultShadowOpacity + ')',
            boxShadow: '0 0 1px rgba(' + success.rgb + ',' + defaultShadowOpacity + ')'
        },
        Title: {
            success: {
              color: success.hex,
            },
        },
        Dismiss: {
            success: {
                color: success.hex,
                backgroundColor: success.hex,
            },
        }
    }
}

const Notification = (props) => (
    <Notifications
        notifications={props.notifications} style={style}
      />
);

export default connect(
    state => ({ notifications: state.notifications }),
)(Notification);