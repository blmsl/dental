class QuestionAnswer < ApplicationRecord
	belongs_to :anamnesis
	belongs_to :question
end
