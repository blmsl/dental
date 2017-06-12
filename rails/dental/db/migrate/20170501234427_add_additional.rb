class AddAdditional < ActiveRecord::Migration[5.0]
  def change
	change_table :patients do |t|
  		t.column :gender, :string, :size => 1
  		t.column :date_of_birth,:date
  		t.column :location_of_birth, :string
	end

  end

end
