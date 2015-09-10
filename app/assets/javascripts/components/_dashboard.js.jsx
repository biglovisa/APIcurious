var Dashboard = React.createClass ({
  getDefaultProps: function() {
    return { data: {} }
  },
  render: function() {
    return (
      <StatsBar following={ this.props.data.following } followers={ this.props.data.followers } starredRepos={ this.props.data.starredRepos } organizations={this.props.data.organizations} repositories={this.props.data.repositories} />
    );
  }
});

var StatsBar = React.createClass ({
  getInitialState: function() {
    return { activeButton: 'starred' };
  },
  handleButtonClick: function(clicked) {
    this.setState({activeButton: clicked});
  },
  render: function() {
    var Content;

    switch (this.state.activeButton) {
      case 'starredRepos':
        Content = <StarredReposTable key='dashboard-content-starred' starredRepos={this.props.starredRepos} />
        break;
      case 'followers':
        Content = <UserDisplay key='dashboard-content-followers' users={this.props.followers} />
        break;
      case 'following':
        Content = <UserDisplay key='dashboard-content-following' users={this.props.following} />
        break;
      case 'organizations':
        Content = <OrganizationsTable key='dashboard-content-organizations' organizations={this.props.organizations} />
        break;
      case 'repositories':
        Content = <RepositoriesTable key='dashboard-content-repositories' repositories={this.props.repositories} />
        break;
    }

    return (

      <div className="top-column">
        <div className="btn-group btn-group-justified stats-bar" role="group" aria-label="...">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" key="starredRepos" onClick={ this.handleButtonClick.bind(this, "starredRepos") }>Starred Repos</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" key="followers" onClick={ this.handleButtonClick.bind(this, "followers") }>Followers</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" key="following" onClick={ this.handleButtonClick.bind(this, "following") }>Following</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" key="repositories" onClick={ this.handleButtonClick.bind(this, "repositories") }>Repositories</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" key="commits" onClick={ this.handleButtonClick.bind(this, "commits") }>Commit History</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" key="organizations" onClick={ this.handleButtonClick.bind(this, "organizations") }>Organizations</button>
          </div>
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
            { repo.full_name }
          </td>
        </tr>
      )
    });

    return (
      <div className="starredRepos">
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
            src="{user.image_url}"
          />

          <h3>
            {user.login}
            <small>
              Follows you
            </small>
          </h3>

          <p>
            What does this team member to? Keep it short! This is also a great spot for social links!
          </p>
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
      return (
        <tr>
          <td
            key={ index }
            className="dataRow"
          >
            { org.login }
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
            { repo.full_name }
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
