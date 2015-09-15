// TODO:
  // on click "follow" or "unfollow", refresh the list of following
  // on click "unfollow", user can re follow
  // on click "follow", user can unfollow
  // on search, users that are already followed, show the "unfollow" button
  // build out the feed more, add recent commits
  // show list of user's recent commit messages and repos
  // repos bubble chart

var Dashboard = React.createClass ({
  getInitialState: function() {
    data = window.data
    data.following = data.users.following
    data.followers = data.users.followers

    return data
  },
  render: function() {
    return (
      <div>
        <div className='col-lg-6'>
          <StatsBar key='statsbar'
                    starredRepos= { this.state.starredRepos }
                    organizations={ this.state.organizations }
                    repositories= { this.state.repositories }
                    commitHistory={ this.state.commit_history } />
        </div>
        <div className='col-lg-6'>
          <UsersBar key='usersbar'
                    following=  { this.state.following }
                    followers=  { this.state.followers }
                    feed=       { this.state.received_events }
                    currentUser={ this.state.user } />
        </div>
      </div>
    );
  }
});
