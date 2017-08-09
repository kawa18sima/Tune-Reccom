class AddTheme1 < ActiveRecord::Migration[5.1]
  def change
    add_column :themes, :name, :string
  end
end
