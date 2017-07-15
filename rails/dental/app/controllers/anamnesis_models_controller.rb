require "#{Rails.root}/app/services/anamnesis_questions_builder_service.rb"

class AnamnesisModelsController < ApplicationController
  before_action :set_anamnesis_model, only: [:show, :update, :destroy]

  # GET /anamnesis_models
  def index
    @anamnesis_models = AnamnesisModel.all
    render json: @anamnesis_models
  end

  # GET /anamnesis_models/1
  def show
    build_anamnesis_questions
    render json: @anamnesis_model.to_json(:include => {:anamnesis_questions => {:include => :question}})
  end

  # POST /anamnesis_models
  def create
    
    @anamnesis_model = AnamnesisModel.new(anamnesis_model_params)
    @anamnesis_model.anamnesis_questions.each do |q|
      q.anamnesis_model = @anamnesis_model
      print "#{q} \n"
      print "jhon"
    end
    
    if @anamnesis_model.save
      render json: @anamnesis_model, status: :created, location: @anamnesis_model
    else
      @anamnesis_model.errors.each do |e|
        print e;
      end

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
    def build_anamnesis_questions
      (AnamnesisQuestionsBuilderService.new({:anamnesis_model => @anamnesis_model})).build_anamnesis_questions_for(Question.all) 
    end 
      
    # Use callbacks to share common setup or constraints between actions.
    def set_anamnesis_model
      if (params[:id].to_sym == :new)
        @anamnesis_model = AnamnesisModel.new
      else
        @anamnesis_model = AnamnesisModel.find(params[:id])
      end
    end

    # Only allow a trusted parameter "white list" through.
    def anamnesis_model_params
      
      params[:anamnesis_model][:anamnesis_questions_attributes] = params[:anamnesis_model][:anamnesis_questions]
      params[:anamnesis_model].delete(:anamnesis_questions);
      
      print params;
      
      params.require(:anamnesis_model).permit(:description,anamnesis_questions_attributes: [:id,:question_id,:question_active])
      
  end
end
