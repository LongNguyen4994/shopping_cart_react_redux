import React, { Component } from 'react';
import { Toast, ToastHeader } from 'react-bootstrap';

class Notification extends Component {
   constructor(props) {
      super(props);
      this.state = {
         show: false,
         message: '',
         product: {
            name: '',
         },
      }
   }

   static getDerivedStateFromProps = (nextProps, prevState) => {
      if (nextProps.notification !== prevState.notification) {
         return {
            show: nextProps.notification.show,
            message: nextProps.notification.message,
            product: nextProps.notification.product,
         }
      } else return null;
   }

   closeNotification = () => {
      this.props.closeNotification();
   }


   render() {
      let { show } = this.state;
      let { message } = this.state;
      let { product } = this.state;

      return (
         <div>
            <Toast
               onClose={this.closeNotification}
               show={show}
               delay={2000}
               autohide
               style={{
                  position: 'fixed',
                  top: '70px',
                  right: '10px',
               }}
            >
               <ToastHeader
                  closeButton={false}
                  style={{ backgroundColor: '#28a745', color: '#fff', fontWeight: '500' }}
               >
                  <strong className="mr-auto">{message}</strong>
               </ToastHeader>
               <Toast.Body
                  style={{ textAlign: 'left', backgroundColor: 'rgba(255,255,255,1)' }}
               >
                  {product.name}
               </Toast.Body>
            </Toast>
            {/* <Button onClick={this.setShow}>Show Toast</Button> */}

         </div>
      );
   }
}


export default Notification;