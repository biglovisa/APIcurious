var Search = React.createClass ({
  getInitialState: function() {
    return { userRendering: "" }
  },
  handleSearch: function(e) {
    e.preventDefault();
    var component = this;
    var searchValue = (React.findDOMNode(this.refs.searchValue).value.trim());

    var response = $.ajax({
      url: 'https://api.github.com/users/' + searchValue,
      type: "GET",
      headers: {"Authorization": "token " + this.props.currentUser.token},
      success: function(response) {
        this.renderUser(response);
      }.bind(this), error: function(xhr) {
        console.log("You messed up.");
      }
    });
  },
  renderUser: function(value) {
    var userBox = <UserBox user={value} onFollow={ this.props.onFollow } />
    this.setState({ userRendering: userBox })
  },
  render: function() {
    return (
      <div>
        <form>
          <div className="form-group dropdown-toggle">
            <input type="text" ref="searchValue" placeholder="Search for a user..." id="searchfield" />
            <button name="button" onClick={ this.handleSearch } className="btn btn-primary">Search</button>
          </div>
        </form>

        <div className="user">
          { this.state.userRendering }
        </div>
      </div>
    );
  }
});
