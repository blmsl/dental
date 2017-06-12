class PatientGroupsController < ApplicationController
  before_action :set_patient_group, only: [:show, :update, :destroy]

  # GET /patient_groups
  def index
    @patient_groups = PatientGroup.all

    render json: @patient_groups
  end

  # GET /patient_groups/1
  def show
    render json: @patient_group
  end

  # POST /patient_groups
  def create
    @patient_group = PatientGroup.new(patient_group_params)

    if @patient_group.save
      render json: @patient_group, status: :created, location: @patient_group
    else
      render json: @patient_group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /patient_groups/1
  def update
    if @patient_group.update(patient_group_params)
      render json: @patient_group
    else
      render json: @patient_group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /patient_groups/1
  def destroy
    @patient_group.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_patient_group
      @patient_group = PatientGroup.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def patient_group_params
      params.require(:patient_group).permit(:description)
    end
end
