import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class SettingText extends React.PureComponent {

  static propTypes = {
    settings: ImmutablePropTypes.map.isRequired,
    settingKey: PropTypes.array.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  handleChange = e => {
    const value = e.currentTarget.value;
    this.props.onChange(this.props.settingKey, value);
  }

  render () {
    const { settings, settingKey, label } = this.props;

    return (
      <label>
        <input type='text' defaultValue={settings.getIn(settingKey)} onChange={this.handleChange} />
        <span>{label}</span>
      </label>
    );
  }

}
