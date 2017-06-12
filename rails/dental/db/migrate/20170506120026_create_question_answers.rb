class CreateQuestionAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :question_answers do |t|
      t.text :answer_text

      t.timestamps
    end
  end
end
