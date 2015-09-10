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
  render: function() {
    return (
      <div className="btn-group btn-group-justified stats-bar" role="group" aria-label="...">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary">Starred Repos  <span className="glyphicon glyphicon-star"></span></button>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary">Followers</button>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary">Following</button>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary">Repositories</button>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary">Commit History</button>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary">Organizations</button>
        </div>
      </div>
    );
  }
});

