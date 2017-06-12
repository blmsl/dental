class AddQuestionIdToAnswer < ActiveRecord::Migration[5.0]
  def change
  	change_table :question_answers do |t|
  		t.column :question_id, :integer
	end  
  end
end
