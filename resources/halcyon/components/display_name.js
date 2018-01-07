import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class DisplayName extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
  };

  render () {
    const displayNameHtml = { __html: this.props.account.get('display_name_html') };

    return <strong className='display-name' dangerouslySetInnerHTML={displayNameHtml} />;
  }

}
