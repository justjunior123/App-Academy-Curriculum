class Api::BenchesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index

    # @bench = Bench.find_by_credentials(params[:id])
    @bench = Bench.all
    if @bench
      render json: @bench
    else
      render json: ["nope"], status: 401
    end
  end

  def show
    # debugger
    @bench = Bench.find(:id)
  end

  def create

    @bench = Bench.create!(bench_params)
    if @bench.save!
      render json: @bench
    else
      render @bench.errors.full_messages, status: 402
    end

  end

  # The following private methods will be used to setup
  # our params.

  private

  def bench_params
    params.require(:bench).permit(
      :id,
      :lat,
      :lng,
      :description
      # :seating,
      # :photo
    )
  end

end
