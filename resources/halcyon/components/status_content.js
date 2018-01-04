import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmurablePureComponent from 'react-immutable-pure-component';

export default class StatusContent extends ImmurablePureComponent {

  static propTypes = {
    status: ImmutablePropTypes.map,
  }

  render () {
    const { status } = this.props;

    if ( !status ) {
      return null;
    }

    const contentHtml = { __html: status.get('contentHtml') };

    return (
      <div
        className='status-content'
        dangerouslySetInnerHTML={contentHtml}
      />
    );
  }

}
