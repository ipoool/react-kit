import React from 'react';
import { connect } from 'react-redux';
import { loadDataProfile } from '../Actions/githubAction';

import Layout from './Layout';
import { logout } from '../Actions/auth';

class Profile extends React.Component {
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
    this.handlerLogout = this.handlerLogout.bind(this);
  }

  handlerLogout() {
    const { logoutAction } = this.props;
    logoutAction();
  }

  render() {
    const { profile } = this.props;
    return (
      <Layout>
        <div className="text-center">
          <h1 className="my-3">Profile GITHUB</h1>
          {!profile.is_loading ? (
            <React.Fragment>
              <img
                title={profile.data.name}
                alt={profile.data.login}
                src={profile.data.avatar_url}
                className="img-thumbnail"
                width="200"
              />
              <br />
              <br />
              <p>
                <span
                  style={{
                    margin: '0px 5px',
                    fontWeight: 'bold',
                  }}
                >
                  {profile.data.name}
                </span>
                <br />
                <small>{profile.data.bio}</small>
              </p>
              <p>
                Work at
                <span
                  style={{
                    margin: '0px 5px',
                    fontWeight: 'bold',
                  }}
                >
                  {profile.data.company}
                </span>
              </p>
              <p>
                <i className="fab fa-3x fa-angellist" />
              </p>
              <p>
                Blog :
                {' '}
                <a
                  target="_blank"
                  className="text-success"
                  rel="noopener noreferrer"
                  href={profile.data.blog}
                >
                  github page
                </a>
              </p>
            </React.Fragment>
          ) : (
            <p className="form-control-static">Please wait...</p>
          )}
          <p>
            <button onClick={this.handlerLogout} className="btn btn-danger">
              Logout
            </button>
          </p>
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
  logoutAction: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
