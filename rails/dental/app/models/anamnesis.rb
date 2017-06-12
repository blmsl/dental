class Anamnesis < ApplicationRecord
	belongs_to :anamnesis_model
	belongs_to :patient
end
