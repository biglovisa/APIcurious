require "rails_helper"

RSpec.describe "the GitHub API", type: :request do
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
end
