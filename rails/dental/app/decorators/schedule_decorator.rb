require "#{Rails.root}/app/decorators/application_decorator"

class ScheduleDecorator < ApplicationDecorator
  	delegate_all

	def start
    	self.schedule_time
  	end

  	def title
      lResult = "";
      if not self.observation.nil?
        lResult += self.observation 
      end
  		lResult += " (#{self.patient.name})";

  	end

  	def end
  		self.schedule_time + ( self.estimated_time * 60)
  	end
  	

end
