class LocationsController < ApplicationController
	def index
		@bar_coords = Location.all
		render json: @bar_coords
	end
end