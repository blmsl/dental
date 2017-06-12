class AddCpfAndRgToPatient < ActiveRecord::Migration[5.0]
  def change
	change_table :patients do |t|
  		t.column :cpf, :string
  		t.column :rg, :string
  		t.column :observation, :text
	end
  end
end
