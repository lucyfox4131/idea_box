require 'rails_helper'

RSpec.feature "New Idea" do
  context "successfully" do
    scenario "created and seen on page" do
      visit root_path

      expect(page).to have_content("New Idea")

    end
  end
end
