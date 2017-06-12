class CreateDentists < ActiveRecord::Migration[5.0]
  def change
    create_table :dentists do |t|
      t.string :name
      t.string :cpf
      t.string :cro
      t.string :gender
      t.date :date_of_birth

      t.timestamps
    end
  end
end
