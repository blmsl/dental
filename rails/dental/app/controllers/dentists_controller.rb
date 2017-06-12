class DentistsController < ApplicationController
  before_action :set_dentist, only: [:show, :update, :destroy]

  # GET /dentists
  def index
    @dentists = Dentist.all

    render json: @dentists
  end

  # GET /dentists/1
  def show
    render json: @dentist ,include: 'contact'
  end

  # POST /dentists
  def create
    @dentist = Dentist.new(dentist_params)
    @dentist.contact.contactable = @dentist

    if @dentist.save
      render json: @dentist, status: :created, location: @dentist
    else
      render json: @dentist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dentists/1
  def update
    if @dentist.update(dentist_params)
      render json: @dentist
    else
      render json: @dentist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dentists/1
  def destroy
    @dentist.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dentist
      @dentist = Dentist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def dentist_params
      params[:dentist][:contact_attributes] = params[:dentist][:contact]
      params[:dentist][:contactable_type] = "Patient"
      params[:dentist].delete(:contact);

      params.require(:dentist).permit(:name, :cpf, :cro, :gender, :date_of_birth,contact_attributes: [:id,:email, :phone,:contactable_id,:contactable_type])
    end
end
