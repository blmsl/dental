class CreateSchedules < ActiveRecord::Migration[5.0]
  def change
    create_table :schedules do |t|
      t.integer :dentist_id
      t.integer :patient_id
      t.text :observation
      t.integer :estimated_time
      t.datetime :schedule_time

      t.timestamps
    end
  end
end
