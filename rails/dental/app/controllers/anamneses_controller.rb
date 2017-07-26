require "#{Rails.root}/app/services/answers_builder_service.rb"

class AnamnesesController < ApplicationController
  before_action :set_patient, only: [:show, :create, :update]
  before_action :set_anamnesis_id_on_answers, only: [:create,:update]

  # GET /anamneses/1
  def show
    
    @anamnesis = (AnswersBuilderService.new({:anamnesis => @anamnesis})).build_answers 
    render json: @anamnesis.to_json(:include => {:answers => {:include => :question}})
    #render json: @anamnesis.to_json(:include => :answers)
  end

  # POST /anamneses
  def create
    print @anamnesis.to_json
    @anamnesis = Anamnesis.new(anamnesis_params)
    set_anamnesis_id_on_answers
    print "passei por aqui 1/n"
    @anamnesis.patient_id = @patient.id;
    print "passei por aqui 2/n"
   
    #@patient.anamnesis = @anamnesis
    print "passei por aqui 3/n"

    if @anamnesis.save
      self.show
    else
      print @anamnesis.errors.each { |e| print e}
      render json: @anamnesis.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /anamneses/1
  def update
    if @anamnesis.update(anamnesis_params)
      self.show
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
      params[:anamnesis][:answers_attributes] = params[:anamnesis][:answers]
      #params[:anamnesis].delete(:answers);
    
      params.require(:anamnesis).permit(:observation, :anamnesis_model_id,:patient_id, answers_attributes:[:id,:answer_text,:anamnesis_id,:question_id,:answer_additional_text])
    end

    def set_anamnesis_id_on_answers
      @anamnesis.answers.each do |a|
        print "jhon \n"
        a.anamnesis = @anamnesis
      end
    end

    
end
