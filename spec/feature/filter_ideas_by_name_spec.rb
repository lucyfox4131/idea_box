require "rails_helper"

RSpec.feature "Filter Ideas", js: true do
  scenario "by name successfully" do
    idea1 = create(:idea, title: "New Idea")
    idea2 = create(:idea, title: "asfkdj", body: "asdjhg")
    visit root_path

    expect(page).to have_content("Search Ideas")
    expect(page).to have_button("Search")

    fill_in "search[filter]", with: "Ne"
    expect(page).to have_content(idea1.title)
    expect(page).to_not have_content(idea2.title)
  end
end
