# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170518193919) do

  create_table "addresses", force: :cascade do |t|
    t.string   "postal_code"
    t.string   "street"
    t.string   "address_number"
    t.string   "complement"
    t.string   "neighborhood"
    t.integer  "addressable_id"
    t.string   "addressable_type"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "anamneses", force: :cascade do |t|
    t.text     "observation"
    t.integer  "anamnesis_model_id"
    t.integer  "patient_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "anamnesis_models", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "anamnesis_questions", force: :cascade do |t|
    t.text     "question_text"
    t.integer  "question_type"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "anamnesis_model_id"
  end

  create_table "chairs", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string   "email"
    t.string   "phone"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "contactable_id"
    t.string   "contactable_type"
  end

  create_table "dentists", force: :cascade do |t|
    t.string   "name"
    t.string   "cpf"
    t.string   "cro"
    t.string   "gender"
    t.date     "date_of_birth"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "patient_groups", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "patients", force: :cascade do |t|
    t.string   "name"
    t.string   "photo"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "gender"
    t.date     "date_of_birth"
    t.string   "location_of_birth"
    t.integer  "patient_group_id"
    t.integer  "material_status"
    t.string   "cpf"
    t.string   "rg"
    t.text     "observation"
  end

  create_table "plans", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "procedure_categories", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "procedures", force: :cascade do |t|
    t.string   "description"
    t.integer  "procedure_category_id"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.index ["procedure_category_id"], name: "index_procedures_on_procedure_category_id"
  end

  create_table "question_answers", force: :cascade do |t|
    t.text     "answer_text"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "question_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.integer  "dentist_id"
    t.integer  "patient_id"
    t.text     "observation"
    t.integer  "estimated_time"
    t.datetime "schedule_time"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "treatments", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "patient_id"
    t.integer  "plan_id"
    t.decimal  "treatment_value"
  end

end
