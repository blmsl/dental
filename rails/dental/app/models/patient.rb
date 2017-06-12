class Patient < ApplicationRecord
	has_one :address, :as => :addressable
	accepts_nested_attributes_for :address ,  allow_destroy: true

	has_one :contact, :as => :contactable
	accepts_nested_attributes_for :contact ,  allow_destroy: true
	
	belongs_to :patient_group, :optional => :true
	has_one :anamnesis
	has_many :treatments
	enum material_status: [:married, :single]
end
