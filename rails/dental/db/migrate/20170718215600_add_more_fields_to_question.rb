class AddMoreFieldsToQuestion < ActiveRecord::Migration[5.0]
  def change
    change_table :questions do |t|
      t.column :questions_additional_text, :string
      t.column :is_alert_when, :string, :size => 1
      t.column :alert_text, :string
    end
  end
end
