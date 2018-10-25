class Api::SessionsController < ApplicationController

  def create
    @user = find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      render 'api/users/show'
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    
  end

end
