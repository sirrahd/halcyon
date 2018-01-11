import { connect } from 'react-redux';
import { makeGetAccount } from '../../../selectors';
import AccountLetterhead from '../components/letterhead';

const makeMapStateToProps = () => {
  const getAccount = makeGetAccount();

  const mapStateToProps = (state, { accountId }) => ({
    account: getAccount(state, accountId),
    isEditing: state.getIn(['credentials', 'is_editing']),
  });

  return mapStateToProps;
};

export default connect(makeMapStateToProps)(AccountLetterhead);
