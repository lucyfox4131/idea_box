class Idea < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true

  default_scope { order('created_at DESC') }

  def quality_word
    case self.quality
    when 0
      "Swill"
    when 1
      "Plausible"
    when 2
      "Genius"
    end
  end
end
