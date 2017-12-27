import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { me } from '../../../initial_state';
import { showMessage } from '../../../actions/message';
import AccountsSettings from '../components/accounts_settings';

const mapStateToProps = state => ({
  account: state.getIn(['accounts', me]), //will fix
});

const mapDispatchToProps = dispatch => ({
  onShowMessage(props) {
    dispatch(showMessage(props));
  },
});

export default injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountsSettings));
