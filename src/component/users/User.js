import React, { Fragment, useEffect, useContext } from 'react';
import { FaCheckSquare, FaWindowClose } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner';

import GithubContext from '../context/github/githubContext';

const User = ({ match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const githubContext = useContext(GithubContext);
  const { user, repos, getUserRepos, getUser, loading } = githubContext;

  const {
    login,
    company,
    location,
    blog,
    avatar_url,
    html_url,
    name,
    hireable,
    bio,
    public_repos,
    public_gists,
    followers,
    following
  } = user;

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className='user-details'>
          <div className='left-section'>
            <div className='avatar'>
              <img src={avatar_url} alt='avatar' width='300px' />
            </div>
            <div className='profile-info'>
              <h2>Profile info </h2>
              <p>
                <strong>User name: </strong>
                {login}
              </p>
              <p>
                <strong>Company: </strong>
                {company}
              </p>
              <p>
                <strong>Location: </strong>
                {location}
              </p>

              <p>
                <strong>Website: </strong>{' '}
                <a href={blog} target='_blank' rel='noopener noreferrer'>
                  {blog}
                </a>
              </p>
              <p>
                <a
                  href={html_url}
                  className='btn'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                  <strong style={{ margin: '10px' }}>
                    <GoLinkExternal />
                  </strong>
                </a>
              </p>
            </div>
          </div>
          <div className='right-section'>
            <div className='github-info-header'>
              <h1>{name}</h1>
              <h3>
                <strong>Hireable: </strong>
                {hireable ? (
                  <FaCheckSquare color='green' size='20' />
                ) : (
                  <FaWindowClose color='red' size='20' />
                )}
              </h3>
            </div>

            <div className='github-info'>
              <p>
                <strong>Bio</strong>:{bio}
              </p>
              <div className='counter-btn'>
                <p className='followers'>Followers - {followers}</p>
                <p className='following'>Following - {following}</p>
                <p className='repos'>Repos - {public_repos}</p>
                <p className='gists'>Gists - {public_gists}</p>
              </div>
              <div className='github-repos'>
                <div className='repos-header'>
                  {' '}
                  <h1>Repos</h1>
                </div>
                <div className='repo-container'>
                  <Repos repos={repos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default User;
