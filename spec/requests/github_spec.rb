require "rails_helper"

RSpec.describe "the GitHub API", type: :request do
  it "returns all commits by a user" do
    VCR.use_cassette("user_commits") do
      service = GithubService.new.find_commits(user)
      expect(service.count).to eq 80
    end
  end

  it "returns the user's followers" do
    VCR.use_cassette("users_followers") do
      service = GithubService.new.find_followers(user)
      expect(service.count).to eq 6
    end
  end

  it "returns users the user is following" do
    VCR.use_cassette("following") do
      service = GithubService.new.find_following(user)
      expect(service.count).to eq 2
    end
  end

  it "returns the user's starred repos" do
    VCR.use_cassette("starred") do
      service = GithubService.new.find_starred_repos(user)
      expect(service.count).to eq 30
      expect(service.first[:name]).to eq "gohufont"
      expect(service.first[:owner][:login]).to eq "hchargois"
    end
  end

  it "returns the user's repos" do
    VCR.use_cassette("user_repos") do
      service = GithubService.new.find_user_repos(user)
      expect(service.count).to eq 3
      expect(service.first[:name]).to eq "configs"
      expect(service.first[:url]).to eq "https://api.github.com/repos/user/configs"
      expect(service.first[:description]).to eq "My stuff"
    end
  end

  it "returns organizations the user is a part of" do
    VCR.use_cassette("user_organizations") do
      service = GithubService.new.find_user_organizations(user)
      expect(service.count).to eq 0
    end
  end
end
