class AuthorizeApiRequest
	prepend SimpleCommand

	def initialize(headers = {})
		print "este é o header #{headers}"
			@headers = headers
	end

	def call
		user 
	end

	private

	attr_reader :headers

	def user
		@user ||= User.find(decoded_auth_token[:user_id]) if decoded_auth_token
	end

	def decoded_auth_token
		@decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
	end

	def http_auth_header
		if headers['Authorization'].present?
			headers['Authorization'].split(' ').last
		else
			errors.add(:token, 'Missing Token')
		end
		nil
	end
end