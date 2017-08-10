class AddMusics2 < ActiveRecord::Migration[5.1]
  def change
    add_column :musics, :path, :string
    add_column :musics, :artist_id, :integer
    remove_column :musics , :created_at ,:datetime
    remove_column :musics , :updated_at , :datetime
  end
end
