class AddPatientGroupToPatient < ActiveRecord::Migration[5.0]
  def change
  	change_table :patients do |t|
  		t.column :patient_group_id, :integer
	end
  end
end
