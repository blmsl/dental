class CreateBudgetItems < ActiveRecord::Migration[5.0]
  def change
    create_table :budget_items do |t|
      t.integer :budget_id
      t.integer :treatment_id
      t.decimal :item_value
      t.integer :tooth

      t.timestamps
    end
  end
end
