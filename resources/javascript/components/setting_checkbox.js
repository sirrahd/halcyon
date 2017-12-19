import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class SettingInput extends React.PureComponent {

  static propTypes = {
    settings: ImmutablePropTypes.map.isRequired,
    settingKey: PropTypes.array.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  handleChange = e => {
    const checked = !!e.currentTarget.checked;
    this.props.onChange(this.props.settingKey, checked);
  }

  render () {
    const { settings, settingKey, label } = this.props;

    return (
      <label>
        <input type='checkbox' defaultChecked={settings.getIn(settingKey)} onChange={this.handleChange} />
        <span>{label}</span>
      </label>
    );
  }

}
