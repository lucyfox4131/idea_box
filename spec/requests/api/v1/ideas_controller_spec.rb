require 'rails_helper'

describe "Ideas Controller" do
  it "gets all ideas in chronological order by created_at" do
    idea_1, idea_2, idea_3 = create_list(:idea, 3)

    get '/api/v1/ideas'

    expect(response).to be_success

    expect(json.first["title"]).to eq(idea_3.title)
    expect(json.second["title"]).to eq(idea_2.title)
    expect(json.second["body"]).to eq(idea_2.body)
  end

  it "creates a new idea" do
    params = {idea: {title: "New Idea", body: "This is the body"}}

    post '/api/v1/ideas', params: params

    expect(response).to be_success

    idea = Idea.first

    expect(idea.title).to eq("New Idea")
    expect(idea.body).to eq("This is the body")
  end

  it 'wont create a new idea without a title' do
    params = {idea: {body: "This is the body"}}

    post '/api/v1/ideas', params: params

    expect(response).to_not be_success
    expect(json["errors"]).to eq({"title" => ["can't be blank"]})
  end

  it "updates an existing idea" do
    idea = create(:idea, title: "Old title", body: "This is the idea body", quality: 0)
    id = idea.id
    put "/api/v1/ideas/#{id}", params: {idea: {title: "New Title"}}

    expect(response).to be_success
    updated_idea = Idea.find(id)

    expect(updated_idea.title).to eq("New Title")

    put "/api/v1/ideas/#{id}", params: {idea: {quality: "1"}}

    expect(response).to be_success
    updated_idea = Idea.find(id)

    expect(updated_idea.quality).to eq(1)
  end

  it "can't update with invalid titles" do
    idea = create(:idea, title: "Old title", body: "This is the idea body", quality: 0)
    id = idea.id
    put "/api/v1/ideas/#{id}", params: {idea: {title: "", quality: 1}}
  end

  it "deletes an idea from the database" do
    idea_1, idea_2 = create_list(:idea, 2)

    delete "/api/v1/ideas/#{idea_1.id}"

    expect(response).to be_success
  end
end
