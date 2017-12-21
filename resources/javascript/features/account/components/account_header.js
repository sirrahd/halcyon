import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';

export default class AccountHeader extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
  }

  render () {
    const { account } = this.props;

    if ( account === null ) {
      return <p>Missing information... :3</p>;
    }

    const src = account.get('header');
    // const staticSrc = account.get('static_header')

    return(
      <header className='account-header' style={{ backgroundImage: `url(${src})` }} />
    );
  }

}
