require "rails_helper"

RSpec.feature "Filter Ideas" do
  scenario "by name successfully" do
    visit root_path
    
    expect(page).to have_content("Search Ideas")
    expect(page).to have_button("Search")
  end
end
