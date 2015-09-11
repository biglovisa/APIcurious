require "rails_helper"

RSpec.describe "User logs in", type: :feature do
  xcontext "A user with a github account" do
    it "logs in" do
      visit root_path
      login_user

      click_link "Sign in with GitHub"
      expect(current_path).to eq dashboard_path
    end

    it "logs out" do
      visit root_path
      login_user

      click_link "Sign in with GitHub"
      within(".dashboard-main") do
        click_link "Sign Out"
      end

      expect(current_path).to eq root_path
    end
  end
end
