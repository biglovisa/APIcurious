Followers = React.createClass ({
  getDefaultProps: function() {
    return { users: [] }
  },
  render: function() {
    var users = this.props.users.map(function(user, index) {
      return (
        <div
          className='col-lg-4 col-sm-6 text-center'
          key={ index }
        >
          <img
            className='img-circle img-responsive img-center'
            src={user.avatar_url.slice(0, -4)}
          />

          <h3>
            <a href={ user.html_url } >{ user.login }</a>
          </h3>
        </div>
      );
    });
    return (
      <div className='follow-table'>
        { users }
      </div>
    );
  }
});
