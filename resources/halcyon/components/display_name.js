import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class DisplayName extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
  };

  render () {
    const { account } = this.props;
    let displayNameHtml = { __html: this.props.account.get('display_name_html') };

    if ( account.get('locked') ) {
      displayNameHtml.__html += '<i class="icon-locked-hasp-bold" aria-hidden="true"></i>';
    }

    return <strong className='account__display-name' dangerouslySetInnerHTML={displayNameHtml} />;
  }

}
