import { connect } from 'react-redux';
import Acct from '../components/acct';

const mapStateToProps = state => ({
  acctDisplay: state.getIn(['settings', 'halcyon', 'acctDisplay']),
});

export default connect(mapStateToProps)(Acct);
