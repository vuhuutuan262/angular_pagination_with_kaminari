# frozen_string_literal: true

class Api::V1::SamplesSerializerController < Api::V1::BaseController
  def index
    users = User.all
    render json: {
      success: true,
      data: ActiveModel::Serializer::CollectionSerializer.new(
        users, serializer: UserSerializer
      )
    }
  end

  def show
    user = User.find params[:id]
    render json: {
      success: true,
      data: UserSerializer.new(user)
    }
  end
end
