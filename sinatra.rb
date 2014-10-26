require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/json'
require 'rubygems'
require 'json'


set :bind, '0.0.0.0'



get '/' do

  erb :index

end

get '/#exactPoint' do

	erb :index

end

get '/map' do

  erb :map

end






#arr = []

#get "/" do

#	json = File.read('losers.json')
#	arr = JSON.parse(json)

#end


