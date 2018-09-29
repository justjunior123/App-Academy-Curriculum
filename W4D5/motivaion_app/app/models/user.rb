class User < ApplicationRecord

  attr_reader :password
  before_validation :ensure_session_token

  validates :username, presence: true
  validates :password_digest, presence: { message: 'Password can\'t be blank'}
  validates :password, length: { minimum: 6 }
  validates :session_token, presence: true, uniqueness: true

  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    return user if BCrypt::Password.new(user.password_digest).is_password?(password)
    nil    
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
