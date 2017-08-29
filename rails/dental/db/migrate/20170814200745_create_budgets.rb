class CreateBudgets < ActiveRecord::Migration[5.0]
  def change
    create_table :budgets do |t|
      t.integer :plan_id
      t.integer :patient_id
      t.decimal :discount
      t.decimal :total
      t.text :observation
      t.integer :status

      t.timestamps
    end
  end
end
