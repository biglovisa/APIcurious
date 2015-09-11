require "rails_helper"

RSpec.describe "Guest visits root page", type: :feature do
  xcontext "a guest user" do
    it "visits the root" do
      visit root_path

      expect(current_path).to eq root_path

      within(".main") do
        expect(page).to have_content "Otherhub"
        expect(page).to have_link "Sign in with GitHub"
      end

      within(".contact") do
        expect(page).to have_link "Repository"
        expect(page).to have_link "Contact"
      end
    end
  end
end
