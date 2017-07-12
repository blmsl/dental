class AddQuestionIdToAnamnesisQuestion < ActiveRecord::Migration[5.0]
  def change
    change_table :anamnesis_questions do |t|
  		t.column :question_id, :integer
	  end
  end
end
