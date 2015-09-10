class GithubService
  attr_reader :client
  def initialize(user)
    @client = Hurley::Client.new("https://api.github.com")
    client.query[:access_token] = user.token
  end

  def find_commits(user)
    repos = find_user_repos(user)

    repo_commits = repos.inject([]) do |commits, repo|
      commits << parse(client.get("repos/#{user.nickname}/#{repo[:name]}/commits").body)
    end

    format_commits(repo_commits)
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
  end

  def find_user_organizations(user)
    parse(client.get("users/#{user.nickname}/orgs").body)
  end

  private

  def parse(response)
    JSON.parse(response, symbolize_names: true)
  end

  def format_commits(repos)
    repos.map do |repo|
      repo.map do |c|
        c[:commit]
      end
    end.flatten
  end
end
