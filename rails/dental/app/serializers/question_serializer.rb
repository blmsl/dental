class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question_text, :question_type
end
