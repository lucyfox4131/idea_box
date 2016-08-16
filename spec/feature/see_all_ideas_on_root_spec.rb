require 'rails_helper'

RSpec.feature "User goes to root" do
  scenario "can see all ideas" do
    idea1, idea2, idea3 = create_list(:idea, 3)

    visit root_path

    within "nav" do
      expect(page).to have_content("All The Ideas")
    end

    expect(page).to have_content("Ideas")
    expect(page).to have_content("Title")
    expect(page).to have_content("Body")
    expect(page).to have_content("Quality")

    expect(page).to have_content(idea1.title)
    expect(page).to have_content("Swill")
    expect(page).to have_content(idea2.title)
    expect(page).to have_content(idea3.title)
  end
end
