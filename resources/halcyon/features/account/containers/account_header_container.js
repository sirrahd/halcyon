import { connect } from 'react-redux';
import { changeHeader } from '../../../actions/credentials';
import { makeGetAccount } from '../../../selectors';
import AccountHeader from '../components/account_header';

const makeMapStateToProps = () => {
  const getAccount = makeGetAccount();

  const mapStateToProps = (state, { accountId }) => ({
    account: getAccount(state, accountId),
    isEditing: state.getIn(['credentials', 'is_editing']),
  });

  return mapStateToProps;
};

const mapDispatchToProps = dispatch => ({
  onChangeHeader (file) {
    dispatch(changeHeader(file));
  },
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(AccountHeader);
