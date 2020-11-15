import React, { Component } from 'react';

export default class IfOffline extends Component {
  constructor(props) {
    super(props);
    this.state = { online: navigator ? navigator.onLine : true };
  }

  componentDidMount() {
    if (!window) return;
    window.addEventListener('online', this.goOnline);
    window.addEventListener('offline', this.goOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.goOnline);
    window.removeEventListener('offline', this.goOffline);
  }

  goOnline = () => this.setState({online: true});
  goOffline = () => this.setState({online: false});

  render() {
    const { children } = this.props;
    const { online } = this.state;

    if (online)
      return null; 
    return (
      <span>{children}</span>
    );
  }
}
