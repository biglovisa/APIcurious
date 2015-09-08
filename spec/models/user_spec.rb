require "rails_helper"

RSpec.describe "the User model", type: :model do
  context "a valid user" do
    before do
      login_user
    end

    it "has a provider" do
      expect(user.provider).to eq "github"
    end

    it "has a uid" do
      expect(user.uid).to eq "12345"
    end

    it "has a nickname" do
      expect(user.nickname).to eq "user"
    end

    it "has an email" do
      expect(user.email).to eq "user@email.com"
    end

    it "has an image" do
      expect(user.image_url).to eq "http://36.media.tumblr.com/tumblr_lqeoxdzT3M1r27575o1_500.jpg"
    end

    it "has a token" do
      expect(user.token).to eq "abcdef"
    end
  end
end
