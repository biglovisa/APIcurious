var Feed = React.createClass ({
  render: function() {
    rows = this.props.feed.map(function(activity, index) {
      return (
        <tr
          key={ index }
        >
          <td
            className='dataRow'
          >

            { activity[1] } created <a href={ activity[0] }>{ activity[2] }
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
              <th>recent acitivites</th>
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
      </div>
    );
  }
});
