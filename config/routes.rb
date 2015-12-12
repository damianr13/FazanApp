Rails.application.routes.draw do
  get '/' => 'application#mainpage'
  get '/onlineuserslist' => 'application#onlineusers'
  get '/fazan-game' => 'application#game'

  post '/play/:option' => 'application#play'
end
