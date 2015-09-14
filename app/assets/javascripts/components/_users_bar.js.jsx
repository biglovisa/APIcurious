var UsersBar = React.createClass ({
  getInitialState: function() {
    return { activeButton: 'following', following: this.props.following }
  },
  handleButtonClick: function(clicked) {
    this.setState({ activeButton: clicked });
  },
  handleUnfollow: function(userToUnfollow) {
    var following = this.state.following;

    $.ajax({
      url: 'https://api.github.com/user/following/' + userToUnfollow.login,
      type: "DELETE",
      headers: {"Authorization": "token " + this.props.currentUser.token},
      success: function(response) {
        // TODO: refresh child with updated list of following

      }, error: function(xhr) {
        console.log("You messed up.");
      }
    });
  },
  handleFollow: function(userToFollow) {
    $.ajax({
      url: 'https://api.github.com/user/following/' + userToFollow.login,
      type: "PUT",
      headers: {"Authorization": "token " + this.props.currentUser.token},
      success: function(response) {
        // TODO: refresh child with updatedlist
        var updatedlist = this.state.following.push(userToFollow);
        this.setState({ following: updatedlist })

      }.bind(this), error: function(xhr) {
        console.log("You messed up")
      }
    });
  },
  render: function() {
    var Content;

    switch (this.state.activeButton) {
      case 'followers':
        Content = <Followers key='followers' users={ this.props.followers } />
        break;
      case 'following':
        Content = <Following following={ this.state.following } onUnfollow={ this.handleUnfollow } />
        break;
      case 'feed':
        Content = <Feed feed={ this.props.feed } />
        break;
      case 'search':
        Content = <Search searchValue={ this.props.searchValue } currentUser={ this.props.currentUser } onFollow={ this.handleFollow } />
        break;
    }

    var BUTTONS = [
      {
        identifier: 'followers',
        name: 'Followers'
      },
      {
        identifier: 'following',
        name: 'Following'
      },
      {
        identifier: 'feed',
        name: 'Feed'
      },
      {
        identifier: 'search',
        name: 'Search'
      }
    ]

    var buttons = BUTTONS.map(function(button, index) {
      return (
        <div
          className='btn-group'
          role='group'
          key={ button.name }
        >
          <button
            type='button'
            className='btn btn-primary'
            onClick={ this.handleButtonClick.bind(this, button.identifier) }>{ button.name }
          </button>
        </div>
      );
    }.bind(this));

    return (
      <div className='top-column'>
        <div className='btn-group btn-group-justified stats-bar' role='group' aria-label='...'>
          { buttons }
        </div>

        <div className='content'>
          { Content }
        </div>
      </div>
    );
  }
});
