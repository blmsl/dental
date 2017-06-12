class AnamnesisModelsController < ApplicationController
  before_action :set_anamnesis_model, only: [:show, :update, :destroy]

  # GET /anamnesis_models
  def index
    @anamnesis_models = AnamnesisModel.all

    render json: @anamnesis_models
  end

  # GET /anamnesis_models/1
  def show
    render json: @anamnesis_model
  end

  # POST /anamnesis_models
  def create
    @anamnesis_model = AnamnesisModel.new(anamnesis_model_params)

    if @anamnesis_model.save
      render json: @anamnesis_model, status: :created, location: @anamnesis_model
    else
      render json: @anamnesis_model.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /anamnesis_models/1
  def update
    if @anamnesis_model.update(anamnesis_model_params)
      render json: @anamnesis_model
    else
      render json: @anamnesis_model.errors, status: :unprocessable_entity
    end
  end

  # DELETE /anamnesis_models/1
  def destroy
    @anamnesis_model.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_anamnesis_model
      @anamnesis_model = AnamnesisModel.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def anamnesis_model_params
      params.require(:anamnesis_model).permit(:description)
    end
end
