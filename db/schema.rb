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

ActiveRecord::Schema.define(version: 20170810021312) do

  create_table "artists", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name"
  end

  create_table "feature_vectors", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "v1"
    t.string "v2"
    t.string "v3"
    t.string "v4"
    t.string "v5"
    t.string "v6"
    t.string "v7"
    t.string "v8"
    t.string "v9"
    t.string "v10"
    t.string "v11"
    t.string "v12"
    t.string "v13"
    t.string "v14"
    t.string "v15"
    t.string "v16"
    t.string "v17"
    t.string "v18"
    t.string "v19"
    t.string "v20"
    t.string "v21"
    t.string "v22"
    t.string "v23"
    t.string "v24"
    t.string "v25"
    t.string "v26"
    t.string "v27"
    t.string "v28"
    t.string "v29"
    t.string "v30"
    t.string "v31"
    t.string "v32"
    t.string "v33"
    t.string "v34"
    t.string "v35"
    t.string "v36"
    t.string "v37"
    t.string "v38"
    t.string "v39"
    t.string "v40"
    t.bigint "music_id"
    t.index ["music_id"], name: "index_feature_vectors_on_music_id"
  end

  create_table "musics", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "title"
    t.integer "rate"
    t.integer "theme_id"
    t.string "path"
    t.integer "artist_id"
  end

  create_table "themes", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
  end

end
