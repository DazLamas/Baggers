require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/json'
require 'rubygems'
require 'json'
require 'pry'



set :bind, '0.0.0.0'

coord = []

get '/' do

  erb :index

end


get '/map' do

  erb :map

end

post '/map' do

	coord << params['points']['0']

	json coord

end






#arr = []

#get "/" do

#	json = File.read('losers.json')
#	arr = JSON.parse(json)

#end


