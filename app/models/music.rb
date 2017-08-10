class Music < ApplicationRecord
  belongs_to :theme
  belongs_to :artist
end
