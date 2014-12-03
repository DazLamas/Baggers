class MessagesController < ApplicationController
	def index

		@messages = Message.all.order(created_at: :asc)

	end

	def create

		# binding.pry

		@user_name_new = User.create(
			user_name: params[:user_name]
		)

		@message_name_new = Message.create(
			text: params[:message], user_id: @user_name_new.id
		)

		# @message = @user_name_new.messages.create( text: params[:message])

		if	@message_name_new.save

			# flash.now[:notice] = "Entrada guardada!!"
			redirect_to	action: 'index', controller: 'messages'
		else
			# flash.now[:error] = "Fata Error. Vuelve a introducir los datos"
			render	'index', layout: :home
		end

	end

	def destroy

		Message.find(params[:id]).delete

		redirect_to	action: 'index', controller: 'messages'

	end


end
