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
            className='dataRow'
          >
            <a href={ repo.html_url } >{ repo.full_name }</a>
          </td>
        </tr>
      )
    });

    return (
      <div className='starredRepos'>
        <table className='table'>
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
