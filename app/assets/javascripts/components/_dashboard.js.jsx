// Dashboard

  // statsbar
      // starred
      // user repos
      // organizations
      // commit history
            // user repos, starred and organizations can be same table

  // users bar
    // followers
    // following
    // find?
    // recent activities?
            // status is either "follows/doesn't follow you" or "unfollow"

    // priority:
        // recent activities from followers
        // get if user is following or not. probably easiest in the model
        // unfollow a user
        // search user and follow

var Dashboard = React.createClass ({
  getDefaultProps: function() {
    return { data: {} }
  },
  render: function() {
    return (
      <div>
        <div className="col-lg-6">
          <StatsBar starredRepos={ this.props.data.starredRepos }
                    organizations={this.props.data.organizations}
                    repositories={this.props.data.repositories}
                    commitHistory={this.props.data.commit_history} />
        </div>
        <div className="col-lg-6">
          <UsersBar following={ this.props.data.users }
                    followers={ this.props.data.users.followers } />
        </div>
      </div>
    );
  }
});

var StatsBar = React.createClass ({
  getInitialState: function() {
    return { activeButton: 'commits' };
  },
  handleButtonClick: function(clicked) {
    this.setState({activeButton: clicked});
  },
  render: function() {
    var Content;

    switch (this.state.activeButton) {
      case 'starredRepos':
        Content = <StarredReposTable key='starred' starredRepos={this.props.starredRepos} />
        break;
      case 'organizations':
        Content = <OrganizationsTable key='organizations' organizations={this.props.organizations} />
        break;
      case 'repositories':
        Content = <RepositoriesTable key='repositories' repositories={this.props.repositories} />
        break;
      case 'commits':
        Content = <CommitStatsTable key='commits' commitHistory={this.props.commitHistory} />
        break;
    }

    var BUTTONS = [
      {
        key: 'starredRepos',
        name: 'Starred Repos'
      },
      {
        key: 'repositories',
        name: 'Repositories'
      },
      {
        key: 'commits',
        name: 'Commit History'
      },
      {
        key: 'organizations',
        name: 'Organizations'
      }
    ];

    var buttons = BUTTONS.map(function(button, index) {
      return (
        <div
          className="btn-group"
          role="group"
        >
          <button
            type="button"
            className="btn btn-primary"
            key={ index }
            onClick={ this.handleButtonClick.bind(this, button.key) }>{button.name}</button>
        </div>
      );
    }.bind(this));

    return (
      <div className="top-column">
        <div className="btn-group btn-group-justified stats-bar" role="group" aria-label="...">
          { buttons }
        </div>

        <div className="content">
          { Content }
        </div>
      </div>
    );
  }
});

var UsersBar = React.createClass ({
  getInitialState: function() {
    return { activeButton: 'following'}
  },
  handleButtonClick: function(clicked) {
    this.setState({activeButton: clicked});
  },
  render: function() {
    var Content;

    switch (this.state.activeButton) {
      case 'followers':
        Content = <UserDisplay key='followers' users={this.props.followers} />
        break;
      case 'following':
        Content = <UserDisplayFollowing key='following' users={this.props.following} />
        break;
    }

    var BUTTONS = [
      {
        key: 'followers',
        name: 'Followers'
      },
      {
        key: 'following',
        name: 'Following'
      }
    ]

    var buttons = BUTTONS.map(function(button, index) {
      return (
        <div
          className="btn-group"
          role="group"
        >
          <button
            type="button"
            className="btn btn-primary"
            key={ button.name }
            onClick={ this.handleButtonClick.bind(this, button.key) }>{button.name}</button>
        </div>
      );
    }.bind(this));

    return (
      <div className="top-column">
        <div className="btn-group btn-group-justified stats-bar" role="group" aria-label="...">
          { buttons }
        </div>

        <div className="content">
          { Content }
        </div>
      </div>
    );
  }
});

var StarredReposTable = React.createClass ({
  getDefaultProps: function() {
    return { starredRepos: [] };
  },
  render: function() {
    var repos = this.props.starredRepos.map(function(repo, index) {
      return (
        <tr>
          <td
            key={ index }
            className="dataRow"
          >
            <a href={ repo.html_url } >{ repo.full_name }</a>
          </td>
        </tr>
      )
    });

    return (
      <div className="starredRepos">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>starred repositories</th>
            </tr>
          </thead>
          <tbody>
            { repos }
          </tbody>
        </table>
      </div>
    );
  }
});

UserDisplay = React.createClass ({
  getDefaultProps: function() {
    return { users: [] }
  },
  render: function() {
    var users = this.props.users.map(function(user, index) {
      return (
        <div
          className="col-lg-4 col-sm-6 text-center"
          key={ index }
        >
          <img
            className="img-circle img-responsive img-center"
            src={user.avatar_url.slice(0, -4)}
          />

          <h3>
            <a href={ user.html_url } >{ user.login }</a>
          </h3>
        </div>
      );
    });
    return (
      <div className="follow-table">
        { users }
      </div>
    );
  }
});

var UserDisplayFollowing = React.createClass ({
 getDefaultProps: function() {
    return { users: [] }
  },
  render: function() {
    var following = this.props.users.following
    var followers = this.props.users.followers

    var users = following.map(function(user, index) {
      return (
        <div
          className="col-lg-4 col-sm-6 text-center"
          key={ index }
        >
          <img
            className="img-circle img-responsive img-center"
            src={user.avatar_url.slice(0, -4)} />

          <h3>
            <a href={ user.html_url } >{ user.login }</a><br />
            <small>
              Placeholder
            </small>
          </h3>
        </div>
      );
    });
    return (
      <div className="follow-table">
        { users }
      </div>
    );
  }
});

var OrganizationsTable = React.createClass ({
  getDefaultProps: function() {
    return { organizations: [] }
  },
  render: function() {
    var orgs = this.props.organizations.map(function(org, index) {
      console.log(org);
      return (
        <tr>
          <td
            key={ index }
            className="dataRow"
          >
            <a
              href={ org.url }
            >
              { org.login }
            </a>
          </td>
        </tr>
      );
    });
    return (
      <div className="orgs-table">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>organizations</th>
            </tr>
          </thead>
          <tbody>
            { orgs }
          </tbody>
        </table>
      </div>
    );
  }
});


var RepositoriesTable = React.createClass ({
  getDefaultProps: function() {
    return { repositories: [] }
  },
  render: function() {
    var repos = this.props.repositories.map(function(repo, index) {
      return (
        <tr>
          <td
            key={ index }
            className="dataRow"
          >
            <a href={ repo.html_url } >{ repo.full_name }</a>
          </td>
        </tr>
      );
    });
    return (
      <div className="repos-table">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>repositories</th>
            </tr>
          </thead>
          <tbody>
            { repos }
          </tbody>
        </table>
      </div>
    );
  }
});

var CommitStatsTable = React.createClass ({
  render: function() {
    var NAMES = [
      {
        data: this.props.commitHistory.daily_commits,
        name: "Today's contributions"
      },
      {
        data: this.props.commitHistory.current_streak,
        name: "Current Streak"
      },
      {
        data: this.props.commitHistory.longest_streak,
        name: "Longest Streak"
      },
      {
        data: this.props.commitHistory.total_commits,
        name: "Total contributions"
      }
    ]

    var rows = NAMES.map(function(row, index) {
      return (
        <tr>
          <td
            key={ index }
            className="dataRow"
          >
            {row.name} <span className="badge pull-right">{row.data}</span>
          </td>
        </tr>
      );
    });

    return (
      <div className="commits-table">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>commit history</th>
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
      </div>
    );
  }
});
