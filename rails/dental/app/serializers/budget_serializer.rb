class BudgetSerializer < ActiveModel::Serializer
  attributes :id,:description, :patient_id, :discount, :total, :observation, :status
end
