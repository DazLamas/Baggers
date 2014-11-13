class UsersController < ApplicationController
	#@@points = File.read("points.json")

	def index
		#render :json => @@points
		@user_coords = User.all.to_json
	end
	def create
		# binding.pry
		@user_coords = User.create(
			lat: params[:lat], long: params[:long]
			)

		if	@user_coords.save	

			# flash.now[:notice] = "Entrada guardada!!"
			user_coords_fromdb = User.all
			render json: user_coords_fromdb
			# redirect_to	action: 'index', controller: 'users'
		else	
			# flash.now[:error] = "Fata Error. Vuelve a introducir los datos"
			render	'index'	
		end	
			
	end
end
