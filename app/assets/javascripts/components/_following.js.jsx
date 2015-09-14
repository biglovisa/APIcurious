var Following = React.createClass ({
 getDefaultProps: function() {
    return { users: [] }
  },
  render: function() {
    var following = this.props.following

    var users = following.map(function(user, index) {
      return (<FollowingTableRow user={user} key={index} onUnfollow={ this.props.onUnfollow } />);
    }.bind(this));
    return (
      <div className='follow-table'>
        { users }
      </div>
    );
  }
});
