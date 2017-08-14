class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :plan_id, :patient_id, :discount, :total, :observation, :status
end
