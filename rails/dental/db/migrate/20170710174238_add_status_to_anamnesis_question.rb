class AddStatusToAnamnesisQuestion < ActiveRecord::Migration[5.0]
  def change
    change_table :anamnesis_questions do |t|
  		t.column :status, :integer
	  end
  end
end
