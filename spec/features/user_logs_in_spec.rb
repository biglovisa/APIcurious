require "rails_helper"

RSpec.describe "User logs in", type: :feature do
  context "A user with a github account" do
    it "logs in" do
      visit root_path
      login_user

      click_link "Sign in with GitHub"
      expect(current_path).to eq dashboard_path
    end
  end
end
