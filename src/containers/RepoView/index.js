/*
 * RepoView
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import ReposForm from 'components/ReposForm';
import CenteredSection from './CenteredSection';
import Section from './Section';
import connect from './connect';

const RepoViewWrapper = styled.div`
  max-width: calc(768 * 2);
  margin: 0 auto;
  min-height: 100%;
  padding: 16px 0 0 0;
  flex-direction: column;
`;

export class RepoView extends React.PureComponent {
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
      <RepoViewWrapper>
        <CenteredSection>
          <H2>Async Saga Demo</H2>
        </CenteredSection>
        <Section>
          <ReposForm
            onSubmitForm={this.props.onSubmitForm}
            username={this.props.username}
            onChangeUsername={this.props.onChangeUsername}
          />
          <ReposList {...reposListProps} />
        </Section>
      </RepoViewWrapper>
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
