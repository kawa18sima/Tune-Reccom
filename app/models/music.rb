class Music < ApplicationRecord
  belongs_to :theme , optional: true
  belongs_to :artist, optional: true
  belongs_to :feature_vector, optional: true
end
