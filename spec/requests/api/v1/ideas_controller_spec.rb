require 'rails_helper'

describe "Ideas Controller" do
  it "gets all ideas in chronological order by created_at" do
    idea_1, idea_2, idea_3 = create_list(:idea, 3)

    get '/api/v1/ideas'

    expect(response).to be_success

    expect(json["ideas"].first["title"]).to eq(idea_3.title)
    expect(json["ideas"].second["title"]).to eq(idea_2.title)
    expect(json["ideas"].second["body"]).to eq(idea_2.body)
  end
end
