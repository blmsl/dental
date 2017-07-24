class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question_text, :question_type,:question_additional_text,:is_alert_when,:alert_text
end
