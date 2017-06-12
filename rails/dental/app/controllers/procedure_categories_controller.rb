class ProcedureCategoriesController < ApplicationController
  before_action :set_procedure_category, only: [:show, :update, :destroy]

  # GET /procedure_categories
  def index
    @procedure_categories = ProcedureCategory.all

    render json: @procedure_categories
  end

  # GET /procedure_categories/1
  def show
    render json: @procedure_category
  end

  # POST /procedure_categories
  def create
    @procedure_category = ProcedureCategory.new(procedure_category_params)

    if @procedure_category.save
      render json: @procedure_category, status: :created, location: @procedure_category
    else
      render json: @procedure_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /procedure_categories/1
  def update
    if @procedure_category.update(procedure_category_params)
      render json: @procedure_category
    else
      render json: @procedure_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /procedure_categories/1
  def destroy
    @procedure_category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_procedure_category
      @procedure_category = ProcedureCategory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def procedure_category_params
      params.require(:procedure_category).permit(:description)
    end
end
