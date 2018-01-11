import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class SettingRadio extends React.PureComponent {

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

  renderItem = item => {
    const { settings, settingKey, name } = this.props;

    return (
      <label key={item.value}>
        <input
          className='default-css'
          type='radio'
          name={name}
          value={item.value}
          onChange={this.handleChange}
          defaultChecked={settings.getIn(settingKey) === item.value}
        />
        <span>{ item.text }</span>
      </label>
    );
  }

  render () {
    const { options } = this.props;

    return (
      <div>
        { options.map(item => this.renderItem(item)) }
      </div>
    );
  }

}
