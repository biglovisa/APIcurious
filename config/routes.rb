Rails.application.routes.draw do
  root to: "site#index"

  get 'auth/github/callback', to: "sessions#create"
  get 'dashboard', to: 'users#show'
end
