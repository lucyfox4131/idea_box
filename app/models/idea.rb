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

  def update_idea(params)
    if params["quality"]
      update_quality(params["quality"])
    else
      self.update(params)
    end
  end

  def update_quality(quality)
    if quality == "upvote"
      upvote
    else
      downvote
    end
  end

  def upvote
    self.quality += 1 unless self.quality == 2
  end

  def downvote
    self.quality -= 1 unless self.quality == 0
  end
end
