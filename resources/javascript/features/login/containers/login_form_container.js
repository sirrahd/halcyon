import { connect } from 'react-redux';
import LoginForm from '../components/login_form';
import { verifyInstance } from '../../../actions/login';

const mapDispatchToProps = (dispatch) => ({
  onSubmit(acct) {
    dispatch(verifyInstance(acct));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
