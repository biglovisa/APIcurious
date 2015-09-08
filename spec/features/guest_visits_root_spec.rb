require "rails_helper"

RSpec.describe "Guest visits root page", type: :feature do
  context "a guest user" do
    it "visits the root" do
      visit root_path

      expect(current_path).to eq root_path

      within(".main") do
        expect(page).to have_content "Other Hub"
        expect(page).to have_link "Sign in with GitHub"
      end
    end
  end
end
