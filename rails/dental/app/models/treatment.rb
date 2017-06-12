class Treatment < ApplicationRecord
	belongs_to :patient
	belongs_to :plan
end
