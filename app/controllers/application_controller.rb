class ApplicationController < ActionController::Base
  layout Rails.application.config_for(:settings)[:brand][:name].downcase

  before_action :set_view_path

  private

  def set_view_path
    prepend_view_path "app/views/#{Rails.application.config_for(:settings)[:brand][:name].downcase}"
  end
end
