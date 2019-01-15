class Tagging < ApplicationRecord
  validates :tag_id, :todo_id, presence: true

  belongs_to :tag
  belongs_to :todo
end