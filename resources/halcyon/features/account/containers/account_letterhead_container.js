import { connect } from 'react-redux';
import { makeGetAccount } from '../../../selectors';
import AccountLetterhead from '../components/account_letterhead';

const makeMapStateToProps = () => {
  const getAccount = makeGetAccount();

  const mapStateToProps = (state, { accountId }) => ({
    account: getAccount(state, accountId),
  });

  return mapStateToProps;
};

export default connect(makeMapStateToProps)(AccountLetterhead);
