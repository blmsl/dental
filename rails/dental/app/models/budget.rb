class Budget < ApplicationRecord
  has_many :budget_items
  belongs_to :patient
  accepts_nested_attributes_for :budget_items ,  allow_destroy: true
  
end
