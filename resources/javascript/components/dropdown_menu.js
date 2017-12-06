import React from 'react';
import PropTypes from 'prop-types';

export default class DropdownMenu extends React.PureComponent {

  static propTypes = {
    items: PropTypes.array.isRequired,
    children: PropTypes.node,
  }

  renderItem(items) {
    return (
      <ul>
        { items.map(item => (
          <li>
            { item }
          </li>
        )) }
      </ul>
    );
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        { this.renderItem(items) }
      </div>
    );
  }

}
