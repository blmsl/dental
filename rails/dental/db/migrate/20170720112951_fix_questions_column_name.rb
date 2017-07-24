class FixQuestionsColumnName < ActiveRecord::Migration[5.0]
  def change
    remove_column :questions,:questions_additional_text
    change_table :questions do |t|
      t.column :question_additional_text, :string
    end
  end
end
