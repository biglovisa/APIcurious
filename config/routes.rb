Rails.application.routes.draw do
  root to: "site#index"

  get "auth/github/", as: "/login", to: "site#index"
  get "auth/github/callback", to: "sessions#create"

  get "dashboard", to: "users#show"

  get "/logout", to: "sessions#destroy"
end
