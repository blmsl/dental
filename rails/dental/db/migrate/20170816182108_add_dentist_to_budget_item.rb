class AddDentistToBudgetItem < ActiveRecord::Migration[5.0]
  def change
    change_table :budget_items do |t|
      t.column :dentist_id, :integer
    end
  end
end
