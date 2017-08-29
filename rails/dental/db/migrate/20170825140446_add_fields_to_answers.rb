class AddFieldsToAnswers < ActiveRecord::Migration[5.0]
  def change
    change_table :question_answers do |t|
      t.column :secondary_answer_text, :string
    end
  end
end
