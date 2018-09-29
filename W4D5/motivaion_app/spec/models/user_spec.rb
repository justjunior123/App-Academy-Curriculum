require 'rails_helper'

RSpec.describe User, type: :model do
  # What is it that I'm going to test in the user model file
    # - validations
    # - associations - none
    # - class methods
    # - error messages - none 

  describe 'Validations and Password Encryption' do
    # good_user = User.new(username: "jr", password: "justjunior")
    subject(:user) do
      User.create!(
        username: "finally_got_it",
        password: "just_get_it"
      )
    end

    it "Does not save passwords to the database" do
      User.create!(username: 'fake', password: 'lalala')
      user = User.find_by(username: "fake")
      expect(user.password).not_to be('lalala')
    end

    it "Does encrypt all the passwords that are given" do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: 'junior', password: 'lalala')
    end

    it { should validate_presence_of(:username) }


  end
end
