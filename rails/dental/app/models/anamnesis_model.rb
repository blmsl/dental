class AnamnesisModel < ApplicationRecord
	has_many :questions, foreign_key: "anamnesis_model_id", class_name: "AnamnesisQuestion"
end

