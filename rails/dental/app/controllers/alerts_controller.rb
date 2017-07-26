class AlertsController < ApplicationController
  before_action :set_patient

  def index  
    render json: Anamnesis
      .joins(answers: :question)
      .where("length(questions.is_alert_when) > 0  and patient_id = #{@patient.id}")
      .pluck("questions.alert_text")
  end

  private

    def set_patient
      @patient = Patient.find(params[:patient_id])
    end

end
