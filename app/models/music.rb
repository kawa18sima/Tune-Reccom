class Music < ApplicationRecord
  belongs_to :theme
  belongs_to :artist
  belongs_to :feature_vector
end
