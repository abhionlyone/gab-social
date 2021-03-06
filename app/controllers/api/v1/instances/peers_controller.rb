# frozen_string_literal: true

class Api::V1::Instances::PeersController < Api::BaseController
  before_action :require_enabled_api!
  skip_before_action :set_cache_headers

  respond_to :json

  def index
    render json: {}, content_type: 'application/json'
  end

  private

  def require_enabled_api!
    head 404 unless Setting.peers_api_enabled
  end
end
