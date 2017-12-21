import { connect } from 'react-redux';
import { makeGetAccount } from '../../../selectors';
import AccountHeader from '../components/account_header';

const makeMapStateToProps = () => {
  const getAccount = makeGetAccount();

  const mapStateToProps = (state, { accountId }) => ({
    account: getAccount(state, accountId),
  });

  return mapStateToProps;
};

export default connect(makeMapStateToProps)(AccountHeader);
