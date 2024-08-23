import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Message = ({ variant = 'info', children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
  children: PropTypes.node.isRequired,
};

export default Message;
