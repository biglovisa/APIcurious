class User < ActiveRecord::Base
  def self.find_or_create_from_auth(data)
    user = User.find_or_create_by(provider: data.provider, uid: data.uid)

    user.email = data.info.email,
    user.nickname = data.info.nickname,
    user.image_url = data.info.image,
    user.token = data.credentials.token
    user.save

    user
  end

  def self.service(user)
    @service ||= GithubService.new(user)
  end

  def service
    self.class.service(self)
  end

  def stats
    @stats ||= GithubStats.new(self.nickname)
  end

  def current_streak
    stats.streak.count
  end

  def longest_streak
    stats.longest_streak.count
  end

  def total_commits
    stats.data.scores.reduce(:+)
  end

  def daily_commits
    stats.data.today
  end

  def commits
    service.find_commits(self)
  end

  def repos
    service.find_user_repos(self)
  end

  def starred_repos
    service.find_starred_repos(self)
  end

  def followers
    service.find_followers(self)
  end

  def following
    service.find_following(self)
  end

  def organizations
    service.find_user_organizations(self)
  end
end
