class AddMaterialStatusToPatient < ActiveRecord::Migration[5.0]
  def change
	change_table :patients do |t|
  		t.column :material_status, :integer
	end
  end
end
