class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question_text, :question_type,:question_additional_text,:is_alert_when,:alert_text, :show_secondary_question_when, :secondary_question_text
end
