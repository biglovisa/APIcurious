class GithubService
  attr_reader :client
  def initialize
    @client = Hurley::Client.new("https://api.github.com")
  end

  def find_commits(user)
    repos = find_user_repos(user)

    commits = repos.inject([]) do |commits, repo|
      commits << parse(client.get("repos/#{user.nickname}/#{repo[:name]}/commits").body)
    end

    # commits returns an array of arrays
    # the repos with the commits nested within
    # SHOULD THIS LOGIC HAPPEN HERE OR IN THE USER MODEL?

    # display: get the calendar view with D3
  end

  def find_followers(user)
    parse(client.get("users/#{user.nickname}/followers").body)
  end

  def find_following(user)
    parse(client.get("users/#{user.nickname}/following").body)
  end

  def find_starred_repos(user)
    parse(client.get("users/#{user.nickname}/starred").body)
  end

  def find_user_repos(user)
    parse(client.get("users/#{user.nickname}/repos").body)
    # display: get all repos and by number of commits, display them in bubble diagram with D3
  end

  def find_user_organizations(user)
    parse(client.get("users/#{user.nickname}/orgs").body)
  end

  private

  def parse(response)
    JSON.parse(response, symbolize_names: true)
  end
end
