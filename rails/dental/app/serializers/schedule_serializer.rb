class ScheduleSerializer < ActiveModel::Serializer
  attributes :id,:start,:title,:end, :patient_id,:dentist_id,:estimated_time,:schedule_time,:observation

end
