class AddMusics1 < ActiveRecord::Migration[5.1]
  def change

    add_column :musics, :title, :string
    add_column :musics, :rate,  :integer
    add_column :musics, :theme_id, :integer
  end
end
