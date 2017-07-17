require "#{Rails.root}/app/services/answers_builder_service.rb"

class AnamnesesController < ApplicationController
  before_action :set_patient, only: [:show, :update]

  # GET /anamneses/1
  def show
    
    (AnswersBuilderService.new({:anamnesis => @anamnesis})).build_answers 
    render json: @anamnesis.to_json(:include => {:answers => {:include => :question}})
  end

  # POST /anamneses
  def create
    @anamnesis = Anamnesis.new(anamnesis_params)
    @anamnesis.patient = @patient;
   
    @patient.anamnesis = @anamnesis


    if @anamnesis.save
      render json: @anamnesis
    else
      render json: @anamnesis.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /anamneses/1
  def update
    if @anamnesis.update(anamnesis_params)
      render json: @anamnesis
    else
      render json: @anamnesis.errors, status: :unprocessable_entity
    end
  end

  private

    def set_patient
      @patient = Patient.find(params[:patient_id])
      if @patient.anamnesis
        @anamnesis = Anamnesis.includes(answers: :question).where({:patient_id => @patient.id}).first
      else
        @anamnesis = Anamnesis.new
        @anamnesis.patient = @patient
        @anamnesis.anamnesis_model = AnamnesisModel.first
      end

    end

    # Only allow a trusted parameter "white list" through.
    def anamnesis_params
      params.require(:anamnesis).permit(:observation, :anamnesis_model_id,:patient_id)
    end
    
end
