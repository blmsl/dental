class CreatePatientGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :patient_groups do |t|
      t.string :description

      t.timestamps
    end
  end
end
