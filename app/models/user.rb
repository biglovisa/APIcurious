class User < ActiveRecord::Base
  def self.find_or_create_from_auth(data)
    user = User.find_or_create_by(provider: data['provider'], uid: data['uid'])

    user.email = data['info']['email']
    user.nickname = data['info']['nickname']
    user.image_url = data['info']['image']
    user.token = data['info']['token']
    user.save

    user
  end
end

