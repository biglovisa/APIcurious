class Builder
  def self.data(user)
    user            = user
    following       = user.following
    followers       = user.followers
    starred_repos   = user.starred_repos
    organizations   = user.organizations
    repositories    = user.repos
    current_streak  = user.current_streak
    longest_streak  = user.longest_streak
    daily_commits   = user.daily_commits
    total_commits   = user.total_commits
    received_events = user.recent_events

    {
      user:             user,
      users:            { following: following,
                          followers: followers },
      starredRepos:     starred_repos,
      organizations:    organizations,
      repositories:     repositories,
      commit_history:   { current_streak: current_streak,
                          longest_streak: longest_streak,
                          daily_commits: daily_commits,
                          total_commits: total_commits },
      received_events:  received_events
    }
  end
end
