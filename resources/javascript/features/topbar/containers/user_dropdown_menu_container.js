import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { me } from '../../../initial_state';
import UserDropdownMenu from '../components/user_dropdown_menu';

const mapStateToProps = state => ({
  account: state.getIn(['accounts', me]),
});

export default injectIntl(connect(
  mapStateToProps,
)(UserDropdownMenu));
