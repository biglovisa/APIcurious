var FollowingTableRow = React.createClass ({
  getInitialState: function() {
    return { followLink: 'Unfollow' }
  },
  handleUnfollow: function() {
    unfollowed = "Unfollowed";

    this.setState({ followLink: unfollowed })

    this.props.onUnfollow(this.props.user)
  },

  render: function() {
    return (
      <div
        className='col-lg-4 col-sm-6 text-center'
        key={ 'user-' + this.props.index }
      >
        <img
          className='img-circle img-responsive img-center'
          src={ this.props.user.avatar_url.slice(0, -4) } />

        <h3>
          <a href={ this.props.user.html_url } >{ this.props.user.login }</a><br />
            <small>
            <a
              className="unfollow"
              onClick={ this.handleUnfollow }
            >
            { this.state.followLink }
            </a>
          </small>
        </h3>
      </div>
    );
  }
});
