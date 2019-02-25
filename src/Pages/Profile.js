import React from 'react';
import { connect } from 'react-redux';
import { loadDataProfile } from '../Actions/githubAction';

import Layout from './Layout';

class Profile extends React.Component {
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  render() {
    const { profile } = this.props;
    return (
      <Layout>
        <div className="text-center">
          <h1>Profile GITHUB</h1>
          {!profile.is_loading ? (
            <React.Fragment>
              <img
                title={profile.data.name}
                alt={profile.data.login}
                src={profile.data.avatar_url}
                className="img-thumb"
                width="200"
              />
              <br />
              <br />
              <p>
                Hi, my name is
                <span
                  style={{
                    margin: '0px 5px',
                    fontWeight: 'bold',
                  }}
                >
                  {profile.data.name}
                </span>
              </p>
              <p>
                My Blog :
                {' '}
                <a target="_blank" href={profile.data.blog}>
                  github page
                </a>
              </p>
            </React.Fragment>
          ) : (
            <p className="form-control-static">Please wait...</p>
          )}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profileGithubReducer,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadDataProfile()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
