include ActiveModel::Serialization

class Schedule < ApplicationRecord

	belongs_to :patient
	belongs_to :dentist
end
