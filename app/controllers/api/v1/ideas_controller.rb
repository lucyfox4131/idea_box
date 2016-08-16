class Api::V1::IdeasController < ApiBaseController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def create
    idea = Idea.new(idea_params)
    if idea.save
      respond_with(idea, status: 201, location: api_v1_ideas_path)
    else
      respond_with({ errors: idea.errors }, status: 422, location: api_v1_ideas_path)
    end
  end

  def update
    idea = Idea.find(params[:id])
    if idea.update_idea(idea_params)
      respond_with( idea, status: 200, location: api_v1_ideas_path)
    else
      respond_with({ errors: idea.errors }, status: 422, location: api_v1_ideas_path)
    end
  end

  def destroy
    Idea.find(params[:id]).destroy
  end

  private
    def idea_params
      params.require(:idea).permit(:title, :body, :quality)
    end
end
