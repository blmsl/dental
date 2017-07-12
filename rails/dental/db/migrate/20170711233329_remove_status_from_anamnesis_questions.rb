class RemoveStatusFromAnamnesisQuestions < ActiveRecord::Migration[5.0]
  def change
    remove_column :anamnesis_questions, :status
  end
end
