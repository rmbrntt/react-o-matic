/*
 * RepoView
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import PropTypes from 'prop-types';
import AtPrefix from './AtPrefix';
import Form from './Form';
import Input from './Input';

export class ReposForm extends React.PureComponent {
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.onSubmitForm}>
        <label htmlFor="username">
          Show Github repositories by
          <AtPrefix>@</AtPrefix>
          <Input
            id="username"
            type="text"
            placeholder="rmbrntt"
            value={this.props.username}
            onChange={this.props.onChangeUsername}
          />
        </label>
      </Form>
    );
  }
}

ReposForm.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export default ReposForm;
