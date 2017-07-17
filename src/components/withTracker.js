import React from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-100251861-1');

const withTracker = (WrappedComponent) => {
  const trackPage = (page) => {
    GoogleAnalytics.set({ page });
    GoogleAnalytics.pageview(page);
  };

  const HOC = (props) => {
    if (process.env.NODE_ENV === 'production') {
      const page = props.location.pathname;
      trackPage(page);
    }

    return (
      <WrappedComponent {...props} />
    );
  };

  return HOC;
};

export default withTracker;
