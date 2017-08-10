class AddColumnToFeatureVector < ActiveRecord::Migration[5.1]
  def change
    add_column :feature_vectors, :v41, :string
    add_column :feature_vectors, :v42, :string
    add_column :feature_vectors, :v43, :string
    add_column :feature_vectors, :v44, :string
    add_column :feature_vectors, :v45, :string
    add_column :feature_vectors, :v46, :string
    add_column :feature_vectors, :v47, :string
    add_column :feature_vectors, :v48, :string
  end
end
