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
end
