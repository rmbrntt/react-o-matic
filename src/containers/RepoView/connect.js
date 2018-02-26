// components/NotificationView/connect.js

import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {
  makeSelectUsername,
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'store/reposReducer/selectors';
import {changeUsername, loadRepos} from 'store/reposReducer/actions';
import reducer from 'store/reposReducer';
import saga from 'store/reposReducer/saga';

import injectReducer from 'store/injectReducer';
import injectSaga from 'store/injectSaga';

const mapDispatchToProps = dispatch => ({
  onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  },
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// export default connect(mapStateToProps, mapDispatchToProps);
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'repos', reducer});
const withSaga = injectSaga({key: 'repos', saga});

export default compose(withReducer, withSaga, withConnect);
