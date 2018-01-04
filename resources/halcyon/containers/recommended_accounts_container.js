import { connect } from 'react-redux';
import { fetchMatchAccounts } from '../actions/match_accounts';
import RecommendedAccounts from '../components/recommended_accounts';

const mapStateToProps = state => ({
  accounts: state.getIn(['match_accounts', 'accounts']),
  is_fetching: state.getIn(['match_accounts', 'is_fetching']),
});

const mapDispatchToProps = dispatch => ({
  onFetch() {
    dispatch(fetchMatchAccounts());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecommendedAccounts);
