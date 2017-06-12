class ChairsController < ApplicationController
  before_action :set_chair, only: [:show, :update, :destroy]

  # GET /chairs
  def index
    @chairs = Chair.all

    render json: @chairs
  end

  # GET /chairs/1
  def show
    render json: @chair
  end

  # POST /chairs
  def create
    @chair = Chair.new(chair_params)

    if @chair.save
      render json: @chair, status: :created, location: @chair
    else
      render json: @chair.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chairs/1
  def update
    if @chair.update(chair_params)
      render json: @chair
    else
      render json: @chair.errors, status: :unprocessable_entity
    end
  end

  # DELETE /chairs/1
  def destroy
    print "jhon"
    @chair.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chair
      @chair = Chair.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def chair_params
      params.require(:chair).permit(:description)
    end
end
