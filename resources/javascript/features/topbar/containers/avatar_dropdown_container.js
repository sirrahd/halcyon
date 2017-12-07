import { connect } from 'react-redux';
import { me } from '../../../initial_state';
import { injectIntl } from 'react-intl';
import AvatarDropdown from '../components/avatar_dropdown';

const mapStateToProps = state => ({
  account: state.getIn(['accounts', me]),
});

export default injectIntl(connect(
  mapStateToProps,
)(AvatarDropdown));
