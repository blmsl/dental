class AddPatientToTreatment < ActiveRecord::Migration[5.0]
  def change
  	change_table :treatments do |t|
  		t.column :patient_id, :integer
  		t.column :plan_id, :integer
  		t.column :treatment_value, :decimal
	end  
  end
end
