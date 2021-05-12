import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type State = {
  error: Error | null;
};

type Props = RouteComponentProps & {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

const parseError = (error: Error) => {
  switch (error.name) {
    case 'ScriptExternalLoadError':
      const matches = error.message.match(/"(.*?)"/);
      const component = matches ? matches[1] : error.message;
      return `Fail to dynamically load "${component}" component.`;
    default:
      return null;
  }
};

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ error: null });
    }
  }

  render() {
    const { error } = this.state;
    if (error) {
      const reason = parseError(error);

      return (
        <div>
          <h1>Something went wrong</h1>
          <p>{reason}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
