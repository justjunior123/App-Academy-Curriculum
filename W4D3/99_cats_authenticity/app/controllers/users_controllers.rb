class UsersController < ApplicationController

  def new
    @user = User.new()
    render :new

  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
      # 422 is the status code for an unprocessable entity.
      # You can either pass the status code or status symbol.
      # In other words, you can also return:
      # render json: user.errors.full_messages, status: 422
    end

  end

  private

  def user_params
    params.require(:user).permit(:passord,:username)
  end
end
