class CreateProcedures < ActiveRecord::Migration[5.0]
  def change
    create_table :procedures do |t|
      t.string :description
      t.belongs_to :procedure_category
      t.timestamps
    end
  end
end
