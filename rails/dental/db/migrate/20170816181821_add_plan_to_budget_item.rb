class AddPlanToBudgetItem < ActiveRecord::Migration[5.0]
  def change
    change_table :budget_items do |t|
      t.column :plan_if, :integer
    end
  end
end
