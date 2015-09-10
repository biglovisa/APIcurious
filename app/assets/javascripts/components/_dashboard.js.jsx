var Dashboard = React.createClass ({
  getDefaultProps: function() {
    return { data: {} }
  },
  render: function() {
    return (
      <StatsBar following={ this.props.data.following } followers={ this.props.data.followers } starredRepos={ this.props.data.starredRepos }  />
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
    return (
      <div className="top-column">
        <div className="btn-group btn-group-justified stats-bar" role="group" aria-label="...">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" onClick={ this.handleButtonClick.bind(this, "starredRepos") }>Starred Repos  <span className="glyphicon glyphicon-star"></span></button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" onClick={ this.handleButtonClick.bind(this, "followers") }>Followers</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" onClick={ this.handleButtonClick.bind(this, "following") }>Following</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" onClick={ this.handleButtonClick.bind(this, "repositories") }>Repositories</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" onClick={ this.handleButtonClick.bind(this, "commits") }>Commit History</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" onClick={ this.handleButtonClick.bind(this, "organizations") }>Organizations</button>
          </div>
        </div>

        <div className="content">
          <StarredRepos starredRepos={this.props.starredRepos} />
        </div>
      </div>
    );
  }
});
