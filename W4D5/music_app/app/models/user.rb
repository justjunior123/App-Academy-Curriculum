class User < ApplicationRecord
  attr_reader :password

  validates :email, presence: true
  validates :password_digest, presence: { message: 'Password cant be blank' }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimun: 6, allow_nil: true  }

  def self.find_by_credentials(email,password)
    user = User.find_by(email: email)
    return nil if user.nil?
    return user if user && BCrypt::Password.new(password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    return true if BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
