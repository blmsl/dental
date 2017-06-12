class AddFieldsToContact < ActiveRecord::Migration[5.0]

  def change
	change_table :contacts do |t|
  		t.column :contactable_id, :integer
  		t.column :contactable_type, :string
	end
  end
end
