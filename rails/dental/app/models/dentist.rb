class Dentist < ApplicationRecord
	has_one :contact, :as => :contactable
	accepts_nested_attributes_for :contact ,  allow_destroy: true
end
