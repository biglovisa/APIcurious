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
        Content = <StarredReposTable key='starred' starredRepos={this.props.starredRepos} />
        break;
      case 'followers':
        Content = <UserDisplay key='followers' users={this.props.followers} />
        break;
      case 'following':
        Content = <UserDisplay key='following' users={this.props.following} />
        break;
      case 'organizations':
        Content = <OrganizationsTable key='organizations' organizations={this.props.organizations} />
        break;
      case 'repositories':
        Content = <RepositoriesTable key='repositories' repositories={this.props.repositories} />
        break;
    }

    var BUTTONS = [
      {
        key: 'starredRepos',
        name: 'Starred Repos'
      },
      {
        key: 'followers',
        name: 'Followers'
      },
      {
        key: 'following',
        name: 'Following'
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
            className="btn btn-default"
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

        <div className="content accordion">
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
            src={user.avatar_url.slice(0, -4)}
          />

          <h3>
            <a href={ user.html_url } >{ user.login }</a>
          </h3>
          <h4 className="follow-status">
            Follows you
          </h4>
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
