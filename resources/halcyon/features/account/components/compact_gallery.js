import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { refreshAccountMediaTimeline } from '../../../actions/timelines';
import { List as ImmutableList } from 'immutable';
import { makeGetStatus } from '../../../selectors';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const makeMapStateToProps = () => {
  const getStatus = makeGetStatus();

  const mapStateToProps = (state, props) => ({
    status: getStatus(state, props.id),
  });

  return mapStateToProps;
};

@connect(makeMapStateToProps)
class AccountCompactGalleryItem extends React.PureComponent {

  static propTypes = {
    status: ImmutablePropTypes.map,
  }

  render () {
    const { status } = this.props;

    if ( !status ) {
      return null;
    }

    const media = status.get('media_attachments').toJS()[0];

    return (
      <li className='account-compact-gallery__list-item' aria-label={media.description} style={{ backgroundImage: `url("${media.preview_url}")` }} />
    );
  }

}

const mapStateToProps = (state, props) => ({
  statusIds: state.getIn(['timelines', `account:${props.accountId}:media`, 'items'], ImmutableList()),
  isLoading: state.getIn(['timelines', `account:${props.accountId}:media`, 'isLoading']),
});

@connect(mapStateToProps)
export default class AccountCompactGallery extends ImmutablePureComponent {

  static propTypes = {
    accountId: PropTypes.string.isRequired,
    statusIds: ImmutablePropTypes.list,
    isLoading: PropTypes.bool,
    limit: PropTypes.number.isRequired,
  }

  componentWillMount () {
    this.props.dispatch(refreshAccountMediaTimeline(this.props.accountId));
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.accountId !== this.props.accountId && nextProps.accountId) {
      this.props.dispatch(refreshAccountMediaTimeline(nextProps.accountId));
    }
  }

  render () {
    const { accountId, statusIds, limit } = this.props;

    if ( !statusIds.size ) {
      return <div />;
    }

    return (
      <div className='account-compact-gallery'>
        <div className='account-compact-gallery__title'>
          <Link to={`/accounts/${accountId}/media`}>
            <i className='icon-photo' aria-hidden='true' />
            <FormattedMessage id='account.all_media' defaultMessage='Show all media' />
          </Link>
        </div>

        <ul className='account-compact-gallery__list'>
          {
            statusIds.slice(0, limit).map(statusId => <AccountCompactGalleryItem id={statusId} key={statusId} />)
          }
        </ul>
      </div>
    );
  }

}
