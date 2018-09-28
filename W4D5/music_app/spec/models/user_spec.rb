require 'rails_helper'

RSpec.describe User, type: :model do
  # What do you need to test?
  # Validations? Yes
  # Associations? No.. there are none currently
  # Class Methods? Yes
  # Error Messages? No.. none currently

  describe 'Validations' do

    subject(:user) do
    FactoryBot.build(:user,
      email: "jonathan@fakesite.com",
      password: "good_password")
    end

    # good_user = User.new(email: 'j@gmail.com', password: 'good_password')
    # bad_user = User.new(password: 'carrrrr')

    # it 'Should validate the presence of email' do
    #   expect(bad_user.valid?).to be false
    # end

    # it 'Should validate the presence of password_digest' do
    #   expect(good_user.valid?).to be true
    # end

    # it 'Should validate the presence of session_token'
    # it 'Should validate the uniqueness of session_token'

    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
  end

  #describe 'Associations'

  # describe 'Class Methods'

  # describe 'Error Messages'
end
