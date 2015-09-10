class UsersController < ApplicationController
  before_action :authorize!


  def show
    @user ||= current_user
    @following ||= current_user.following
    @followers ||= current_user.followers
    @starred_repos ||= current_user.starred_repos
    @organizations ||= current_user.organizations
    @repositories ||= current_user.repos
    @current_streak ||= current_user.current_streak
    @longest_streak ||= current_user.longest_streak
    @daily_commits ||= current_user.daily_commits
    @total_commits ||= current_user.total_commits

    @data = {
      user: @user,
      following: @following,
      followers: @followers,
      starredRepos: @starred_repos,
      organizations: @organizations,
      repositories: @repositories,
      commit_history: { current_streak: @current_streak,
                        longest_streak: @longest_streak,
                        daily_commits: @daily_commits,
                        total_commits: @total_commits }
    }
  end
end
