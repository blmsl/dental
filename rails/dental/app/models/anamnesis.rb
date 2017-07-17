class Anamnesis < ApplicationRecord
	belongs_to :anamnesis_model
	belongs_to :patient

	has_many :answers, class_name: :QuestionAnswer
	
	accepts_nested_attributes_for :answers

	def questions
		if (self.anamnesis_model_id) 
			return AnamnesisQuestion.includes(:question).where({:anamnesis_model_id => self.anamnesis_model.id,:question_active => true})
		else
			return []
		end
		
	end

end
