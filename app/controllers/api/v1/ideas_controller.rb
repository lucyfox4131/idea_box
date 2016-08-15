class Api::V1::IdeasController < ApiBaseController
  respond_to :json

  def index
    ideas = { ideas: Idea.all}
    respond_with ideas
  end
end
