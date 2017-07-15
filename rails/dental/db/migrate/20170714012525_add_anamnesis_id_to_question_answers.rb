class AddAnamnesisIdToQuestionAnswers < ActiveRecord::Migration[5.0]
  def change
    change_table :question_answers do |t|
      t.column :anamnesis_id, :integer
    end
  end
end
