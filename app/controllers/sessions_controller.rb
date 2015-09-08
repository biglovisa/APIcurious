class SessionsController < ApplicationController
  def create
    user = User.find_or_create_from_auth(data)
    if user
      session[:user_id] = user.id
      redirect_to dashboard_path
    else
      redirect_to root_path
    end
  end

  private

  def data
    request.env['omniauth.auth']
  end
end
