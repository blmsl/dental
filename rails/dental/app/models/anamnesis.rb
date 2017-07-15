class Anamnesis < ApplicationRecord
	belongs_to :anamnesis_model
	belongs_to :patient

	has_many :questions,  -> {where question_active: true}, through: :anamnesis_model, :source => :anamnesis_questions 
	has_many :answers, class_name: :QuestionAnswer
	
	accepts_nested_attributes_for :answers

end
