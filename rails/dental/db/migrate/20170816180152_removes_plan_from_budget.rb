class RemovesPlanFromBudget < ActiveRecord::Migration[5.0]
  def change
     remove_column :budgets, :plan_id
  end
end
