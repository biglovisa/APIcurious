var StatsBar = React.createClass ({
  getInitialState: function() {
    return { activeButton: 'commits' };
  },
  handleButtonClick: function(clicked) {
    this.setState({ activeButton: clicked });
  },
  render: function() {
    var Content;

    switch (this.state.activeButton) {
      case 'starredRepos':
        Content = <StarredReposTable key='starred' starredRepos={ this.props.starredRepos } />
        break;
      case 'organizations':
        Content = <OrganizationsTable key='organizations' organizations={ this.props.organizations } />
        break;
      case 'repositories':
        Content = <RepositoriesTable key='repositories' repositories={ this.props.repositories } />
        break;
      case 'commits':
        Content = <CommitStatsTable key='commits' commitHistory={ this.props.commitHistory } />
        break;
    }

    var BUTTONS = [
      {
        identifier: 'starredRepos',
        name: 'Starred Repos'
      },
      {
        identifier: 'repositories',
        name: 'Repositories'
      },
      {
        identifier: 'commits',
        name: 'Commit History'
      },
      {
        identifier: 'organizations',
        name: 'Organizations'
      }
    ];

    var buttons = BUTTONS.map(function(button, index) {
      return (
        <div
          className='btn-group'
          role='group'
          key={ index }
        >
          <button
            type='button'
            className='btn btn-primary'
            onClick={ this.handleButtonClick.bind(this, button.identifier) }>{ button.name }</button>
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
