class UsersController < ApplicationController
  before_action :authorize!

  def show
    @data = Builder.data(current_user)
  end
end
