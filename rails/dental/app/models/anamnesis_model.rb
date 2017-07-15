class AnamnesisModel < ApplicationRecord
	has_many :anamnesis_questions
	accepts_nested_attributes_for :anamnesis_questions

	 
	def addQuestion(pQuestion)
		lAnamnesisQuestion = AnamnesisQuestion.new
        lAnamnesisQuestion.question = pQuestion
        self.anamnesis_questions.push lAnamnesisQuestion
	end
end

