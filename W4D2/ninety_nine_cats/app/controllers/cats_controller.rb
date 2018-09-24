class CatsController < ApplicationController

  def index
    @cat = Cat.all
    # render json: @cat
    render :index
  end

  def show
    @cat = Cat.find(params[:id])

    render json: @cat
  end

  def new
    render :new
  end

  def create
    render json: "Making a cat"
  end

end
