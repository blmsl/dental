class Budget < ApplicationRecord
  has_many :budget_items
  accepts_nested_attributes_for :budget_items ,  allow_destroy: true
  
end
