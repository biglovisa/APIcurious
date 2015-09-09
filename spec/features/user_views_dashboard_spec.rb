require "rails_helper"

RSpec.describe "User visits the dashboard" do
  context "a logged in user" do
    before(:each) do
      login_user
      visit root_path
      click_link "Sign in with GitHub"
    end

    it "views their nickname in the header" do
      expect(current_path).to eq dashboard_path

      within(".dashboard-main") do
        expect(page).to have_link "latest commit"
      end
    end
  end
end
