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
            className='dataRow'
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
      <div className='orgs-table'>
        <table className='table'>
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
