var CommitStatsTable = React.createClass ({
  render: function() {
    var NAMES = [
      {
        data: this.props.commitHistory.daily_commits,
        name: "Today's contributions"
      },
      {
        data: this.props.commitHistory.current_streak,
        name: 'Current Streak'
      },
      {
        data: this.props.commitHistory.longest_streak,
        name: 'Longest Streak'
      },
      {
        data: this.props.commitHistory.total_commits,
        name: 'Total contributions'
      }
    ]

    var rows = NAMES.map(function(row, index) {
      return (
        <tr
          key={index}
          className='dataRow'
          >
          <td>
            { row.name } <span className='badge pull-right'>{ row.data }</span>
          </td>
        </tr>
      );
    });

    return (
      <div className='commits-table'>
        <table className='table'>
          <thead>
            <tr>
              <th>commit history</th>
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
