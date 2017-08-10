class Artist < ApplicationRecord
  belongs_to :music, optional: true

end
