import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class SettingCheckbox extends React.PureComponent {

  static propTypes = {
    settings: ImmutablePropTypes.map.isRequired,
    settingKey: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  handleChange = e => {
    const value = e.currentTarget.value;
    this.props.onChange(this.props.settingKey, value);
  }

  renderItem = item => (
    <option value={item.value} key={item.value}>
      { item.text }
    </option>
  )

  render () {
    const { settings, settingKey, options, name } = this.props;

    return (
      <select name={name} defaultValue={settings.getIn(settingKey)} className='default-css' onBlur={this.handleChange}>
        { options.map(item => this.renderItem(item)) }
      </select>
    );
  }

}
