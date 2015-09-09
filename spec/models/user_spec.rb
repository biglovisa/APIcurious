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

  context "a valid user's GitHub data" do
    it "returns the user's repos" do
      VCR.use_cassette("user_repos") do
        repos = user.repos(user)
        expect(repos.count).to eq 3
      end
    end

    it "returns a user's starred repos" do
      VCR.use_cassette("starred") do
        starred = user.starred_repos(user)
        expect(starred.count).to eq 30
      end
    end

    it "returns a user's followers" do
      VCR.use_cassette("user_followers") do
        followers = user.followers(user)
        expect(followers.count).to eq 6
      end
    end

    it "returns the users the user is following" do
      VCR.use_cassette("following") do
        following = user.following(user)
        expect(following.count).to eq 2
      end
    end

    it "returns the organizations the user is a part of" do
      VCR.use_cassette("user_organizations") do
        organizations = user.organizations(user)
        expect(organizations).to eq []
      end
    end
  end
end
