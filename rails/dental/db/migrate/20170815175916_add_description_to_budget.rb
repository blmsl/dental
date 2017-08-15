class AddDescriptionToBudget < ActiveRecord::Migration[5.0]
  def change
    change_table :budgets do |t|
  		t.column :description, :text
		end
  end
end
