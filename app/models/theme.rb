class Theme < ApplicationRecord
  has_many :musics, optional: true
end
