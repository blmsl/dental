class Procedure < ApplicationRecord
	belongs_to :category, :class_name => :"ProcedureCategory", foreign_key: "procedure_category_id"
end
