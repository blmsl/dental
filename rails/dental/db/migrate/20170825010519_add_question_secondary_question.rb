class AddQuestionSecondaryQuestion < ActiveRecord::Migration[5.0]
  def change
    change_table :questions do |t|
      t.column :secondary_question_text, :string
      t.column :show_secondary_question_when, :string
    end
  end
end
