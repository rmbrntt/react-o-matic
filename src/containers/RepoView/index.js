/*
 * RepoView
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import PropTypes from 'prop-types';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import connect from './connect';

export class RepoView extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const {loading, error, repos} = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <div>
        <CenteredSection>
          <H2>create-react-app with batteries included</H2>
          <p>Add some sugar to your CRA experience</p>
        </CenteredSection>
        <Section>
          <H2>Try me!</H2>
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
          <ReposList {...reposListProps} />
        </Section>
      </div>
    );
  }
}

RepoView.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export default connect(RepoView);
