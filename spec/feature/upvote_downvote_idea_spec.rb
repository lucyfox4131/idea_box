# require "rails_helper"
#
# RSpec.feature "Upvote Downvote", js: true do
#   context "user upvotes" do
#     scenario "quality changes from swill to plausible" do
#       idea = create(:idea, title: "Title", body: "This is the body", quality: 0)
#       id = idea.id
#
#       visit root_path
#
#       expect(page).to have_content("Title")
#       expect(page).to have_content("Swill")
#       # page.execute_script("$('body').empty()")
#
#       page.find(".upvote").click
#       expect(page).to have_content("Plausible")
#
#     end
#   end
# end
