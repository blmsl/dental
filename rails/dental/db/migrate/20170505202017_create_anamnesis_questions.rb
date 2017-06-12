class CreateAnamnesisQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :anamnesis_questions do |t|
      t.text :question_text
      t.integer :question_type

      t.timestamps
    end
  end
end
