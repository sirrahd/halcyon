import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class UISettings extends React.PureComponent {

  static propTypes = {
    roundAvatar: PropTypes.bool,
    showNavigationLabels: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  state = {
    defaultRoundAvatar: false,
    defaultshowNavigationLabels: false,
  }

  componentDidMount () {
    if ( this.props.roundAvatar ) {
      this.setState({ defaultRoundAvatar: true });
    }

    if ( this.props.showNavigationLabels ) {
      this.setState({ defaultshowNavigationLabels: true });
    }
  }

  handleChangeRoundAvatar = e => {
    console.log(e.currentTarget.getAttribute('checked'));
    const value = e.currentTarget.getAttribute('checked');
    this.props.onChange(['halcyon', 'roundAvatar'], value);
  }

  render () {
    const {
      defaultRoundAvatar,
      defaultShowNavigationLabels,
    } = this.state;

    return(
      <div className='settings__section'>
        <h3><FormattedMessage id='settings.ui' defaultMessage='User interface' /></h3>

        <div>
          Theme
          <select className='default-css'>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>

        <div>
          <label>
            <input type='checkbox' checked='checked' onChange={this.handleChangeRoundAvatar} />
            Round avatar
          </label>
        </div>

        <div>
          <label>
            <input type='checkbox' onChange={this.handleChange} />
            Show labels in the navigation bar
          </label>
        </div>

      </div>
    );
  }

}
