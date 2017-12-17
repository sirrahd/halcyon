import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';

export class ModalRouter extends React.PureComponent {

  static propTypes = {
    path: PropTypes.string,
    exact: PropTypes.bool,
    strict: PropTypes.bool,
    render: PropTypes.func.isRequired,
    defaultComponent: PropTypes.func.isRequired,
    isModal: PropTypes.bool,
  }

  static defaultProps = {
    path: null,
    exact: false,
    strict: false,
    isModal: false,
  }

  renderModalAndComponent = () => {
    const DefaultComponent = this.props.defaultComponent;
    this.props.render();

    return (
      <DefaultComponent />
    );
  }

  renderModal = () => {
    this.props.render();
    return <div />;
  };

  render() {
    const { path, exact, strict, isModal } = this.props;

    if ( isModal ) {
      return <Route path={path} exact={exact} strict={strict} render={this.renderModal} />;
    }

    return <Route path={path} exact={exact} strict={strict} render={this.renderModalAndComponent} />;
  }

}
