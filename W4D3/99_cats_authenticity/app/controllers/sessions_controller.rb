class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user.nil?
      render json: "Credentials were wrong"
    else
      render json: "Welcome back #{user.username}!"
    end
  end

  def destroy
    
  end

end
