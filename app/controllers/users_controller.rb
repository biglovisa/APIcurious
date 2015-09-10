class UsersController < ApplicationController
  before_action :authorize!


  def show
    @user ||= current_user
    @following ||= current_user.following
    @followers ||= current_user.followers
    @starred_repos ||= current_user.starred_repos

    @data = {
      user: @user,
      following: @following,
      followers: @followers,
      starredRepos: @starred_repos
    }
  end
end
