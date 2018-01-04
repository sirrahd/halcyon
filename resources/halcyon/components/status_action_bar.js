import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';

export default class StatusActionBar extends ImmutablePureComponent {

  static propTypes = {
    status: ImmutablePropTypes.map,
  }

  render () {
    return (
      <div className='status-action-bar'>

        <div className='statuc-action-bar__item'>
          <button className='statuc-action-bar__button'>
            <i className='statuc-action-bar__icon icon-bubble' />
          </button>
        </div>


        <div className='statuc-action-bar__item'>
          <button className='statuc-action-bar__button'>
            <i className='statuc-action-bar__icon icon-reblog' />
          </button>
        </div>

        <div className='statuc-action-bar__item'>
          <button className='statuc-action-bar__button'>
            <i className='statuc-action-bar__icon icon-star' />
          </button>
        </div>

        <div className='statuc-action-bar__item'>
          <button className='statuc-action-bar__button'>
            <i className='statuc-action-bar__icon icon-ellipsis' />
          </button>
        </div>

      </div>
    );
  }

}
