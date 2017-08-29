class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :update, :destroy]

  # GET /questions
  def index
    @questions = Question.all

    render json: @questions
  end

  # GET /questions/1
  def show
    render json: @question
  end

  # POST /questions
  def create
    @question = Question.new(question_params)
    Question.transaction do
      if @question.save
        # AnamnesisModel.all.each do |lAnamnesisModel|
        #   lAnamnesisModel.addQuestion @question
        # end
        render json: @question, status: :created, location: @question
      else
        render json: @question.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /questions/1
  def update
    if @question.update(question_params)
      render json: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /questions/1
  def destroy
    @question.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def question_params
      params.require(:question).permit(:question_text, :question_type,:question_additional_text,:is_alert_when,:alert_text,:show_secondary_question_when,:secondary_question_text)
    end
end
