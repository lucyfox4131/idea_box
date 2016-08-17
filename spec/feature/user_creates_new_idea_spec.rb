require 'rails_helper'

RSpec.feature "New Idea" do
  context "successfully" do
    scenario "created and seen on page", js: true do
      visit root_path

      fill_in "title", with: "A New Idea"
      fill_in "body", with: "This is the idea body"
      click_button "Save"

      expect(page).to have_content("A New Idea")
      expect(page).to have_content("This is the idea body")
    end
  end
end
