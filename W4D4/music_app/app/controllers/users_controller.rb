class UsersController < ApplicationController
  def new
    @user = User.new
    render json: :new

  end

  def create
    @user = User.new(user_params)
    if @user.save!
      render json: :create
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
