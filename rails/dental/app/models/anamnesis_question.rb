class AnamnesisQuestion < ApplicationRecord
	belongs_to :anamnesis_model
	belongs_to :question
	has_many :answers, foreign_key: "question_id", class_name: "QuestionAnswer"

end