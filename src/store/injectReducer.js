import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './reducerInjectors';

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */
export default ({key, reducer}) => WrappedComponent => {
  class ReducerInjector extends React.Component {
    static WrappedComponent = WrappedComponent;
    static contextTypes = {
      store: PropTypes.object.isRequired,
    };
    static displayName = `withReducer(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    componentWillMount() {
      const {injectReducer} = this.injectors;

      injectReducer(key, reducer);
    }

    // componentWillUnmount() {
    //   /**
    //    * https://stackoverflow.com/a/33044701 - Dan Abramov
    //    * Note that I'm not throwing away old reducers—I'm just
    //    * adding new ones to the combination list. I see no reason
    //    * to throw away the old reducers—even in the largest app
    //    * you're unlikely to have thousands of dynamic modules,
    //    * which is the point where you might want to disconnect
    //    * some reducers in your application.
    //    */
    // }

    injectors = getInjectors(this.context.store);

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};
