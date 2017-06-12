class CreateAnamneses < ActiveRecord::Migration[5.0]
  def change
    create_table :anamneses do |t|
      t.text :observation
      t.integer :anamnesis_model_id
      t.integer :patient_id

      t.timestamps
    end
  end
end
