class RemovesUnusedFieldsFromAnamnesisQuestions < ActiveRecord::Migration[5.0]
  def change
     remove_column :anamnesis_questions, :question_text
     remove_column :anamnesis_questions, :question_type
  end
end
