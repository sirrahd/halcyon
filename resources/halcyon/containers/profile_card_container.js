import { connect } from 'react-redux';
import { makeGetAccount } from '../selectors';
import ProfileCard from '../components/profile_card';

const makeMapStateToProps = () => {
  const getAccount = makeGetAccount();

  const mapStateToProps = (state, { accountId }) => ({
    account: getAccount(state, accountId),
  });

  return mapStateToProps;
};

export default connect(
  makeMapStateToProps,
)(ProfileCard);
