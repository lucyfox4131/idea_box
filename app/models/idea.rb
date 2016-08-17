class Idea < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true

  default_scope { order('created_at ASC') }
end
