class User < ActiveRecord::Base
  def self.find_or_create_from_auth(data)
    user = User.find_or_create_by(provider: data.provider, uid: data.uid)

    user.email = data.info.email,
    user.nickname = data.info.nickname,
    user.image_url = data.info.image,
    user.token = data.info.token
    user.save

    user
  end

  def self.service
    @service ||= GithubService.new
  end

  def service
    self.class.service
  end

  def repos(user)
    service.find_user_repos(user)
  end

  def starred_repos(user)
    service.find_starred_repos(user)
  end

  def followers(user)
    service.find_followers(user)
  end

  def following(user)
    service.find_following(user)
  end

  def organizations(user)
    service.find_user_organizations(user)
  end
end
