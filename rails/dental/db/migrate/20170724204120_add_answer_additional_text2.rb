class AddAnswerAdditionalText2 < ActiveRecord::Migration[5.0]
  def change
    change_table :question_answers do |t|
      t.column :answer_additional_text, :string
    end
  end
end
