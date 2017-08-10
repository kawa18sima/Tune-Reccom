class CreateFeatureVectors < ActiveRecord::Migration[5.1]
  def change
    create_table :feature_vectors do |t|

      t.string :v1
      t.string :v2
      t.string :v3
      t.string :v4
      t.string :v5
      t.string :v6
      t.string :v7
      t.string :v8
      t.string :v9
      t.string :v10
      t.string :v11
      t.string :v12
      t.string :v13
      t.string :v14
      t.string :v15
      t.string :v16
      t.string :v17
      t.string :v18
      t.string :v19
      t.string :v20
      t.string :v21
      t.string :v22
      t.string :v23
      t.string :v24
      t.string :v25
      t.string :v26
      t.string :v27
      t.string :v28
      t.string :v29
      t.string :v30
      t.string :v31
      t.string :v32
      t.string :v33
      t.string :v34
      t.string :v35
      t.string :v36
      t.string :v37
      t.string :v38
      t.string :v39
      t.string :v40
      t.references :music
    end
  end
end
