class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request

  def authenticate
    print " estou  aqui #{params[:password]}"
    
    command = AuthenticateUser.call(params[:email],params[:password])
    if command.success?
      render json: {auth_token: command.result}
    else
      render json: {errors: command.errors}, status: :unauthorized
    end
    
  end
end
