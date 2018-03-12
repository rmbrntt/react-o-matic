// components/NotificationView/connect.js

import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import injectReducer from 'store/injectReducer';
import injectSaga from 'store/injectSaga';
import {
  makeSelectUsername,
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import {changeUsername, loadRepos} from './actions';
import reducer from './reducer';
import saga from './saga';

export const mapDispatchToProps = dispatch => ({
  onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  },
});

export const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'repos', reducer});
const withSaga = injectSaga({key: 'repos', saga});

export default compose(withReducer, withSaga, withConnect);
