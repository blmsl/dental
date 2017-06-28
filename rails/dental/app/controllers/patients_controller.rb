class PatientsController < ApplicationController
  before_action :set_patient, only: [:show, :update, :destroy]
  #attr_accessor :address

  # GET /patients
  def index
    @patients = Patient.joins(:address).all

    render json: @patients,include: ['address','patient_group']
  end

  # GET /patients/1
  def show
    render json: @patient ,include: ['address','patient_group','contact']
  end

  # POST /patients
  def create
    @patient = Patient.new(patient_params)
    @patient.address.addressable = @patient 
    @patient.contact.contactable = @patient 

    if @patient.save
      render json: @patient, status: :created, location: @patient
    else      
      render json: @patient.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /patients/1
  def update
    if @patient.update(patient_params)
      render json: @patient
    else
      render json: @patient.errors, status: :unprocessable_entity
    end
  end

  # DELETE /patients/1
  def destroy
    @patient.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_patient
      @patient = Patient.joins(:address,:patient_group).find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def patient_params
      
      # NOTE :grid_size removed!  
      params[:patient][:address_attributes] = params[:patient][:address]
      params[:patient][:addressable_type] = "Patient"
      params[:patient].delete(:address);

      params[:patient][:contact_attributes] = params[:patient][:contact]
      params[:patient][:contactable_type] = "Patient"
      params[:patient].delete(:contact);
      

      params.require(:patient).permit(:name,:cpf, :rg, :photo,:gender,:date_of_birth,:material_status,:location_of_birth,:observation,:patient_group_id,address_attributes: [:id, :street, :postal_code, :address_number, :complement, :neighborhood,:addressable_id,:addressable_type],contact_attributes: [:id,:email, :phone,:contactable_id,:contactable_type])
      
      #print "jhon #{params[:patient][:address_attributes]}"
    end
end
