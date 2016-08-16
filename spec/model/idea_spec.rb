require 'rails_helper'

RSpec.describe Idea, type: :model do
  context "validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:body) }
  end

  context "default quality" do
    it "has default quality of 0 for swill" do
      idea = Idea.create(title: "Title", body: "This is the body")
      expect(idea.quality).to eq(0)
    end
  end

  context "update quality" do
    it "can upvote, but won't upvote past 2" do
      idea = Idea.create(title: "Title", body: "This is the body", quality: 0)

      idea.upvote
      expect(idea.quality).to eq(1)

      idea.upvote
      expect(idea.quality).to eq(2)

      idea.upvote
      expect(idea.quality).to eq(2)
    end
  end

  context "downvote quality" do
    it "can downvote, but won't downvote past 0" do
      idea = Idea.create(title: "Title", body: "This is the body", quality: 2)

      idea.downvote
      expect(idea.quality).to eq(1)

      idea.downvote
      expect(idea.quality).to eq(0)

      idea.downvote
      expect(idea.quality).to eq(0)
    end
  end

  context "update quality" do
    it "updates if quality is upvote" do
      idea = Idea.create(title: "Title", body: "This is the body", quality: 0)
      idea.update_quality("upvote")

      expect(idea.quality).to eq(1)
    end

    it "downvotes if quality is downvote" do
      idea = Idea.create(title: "Title", body: "This is the body", quality: 2)
      idea.update_quality("downvote")

      expect(idea.quality).to eq(1)
    end

    it "#update_idea, with quality" do
      idea = Idea.create(title: "Title", body: "This is the body", quality: 0)
      params = {"quality" => "upvote"}
      idea.update_idea(params)
      expect(idea.quality).to eq(1)
    end
  end
end
