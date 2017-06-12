require "#{Rails.root}/app/serializers/schedule_serializer"

class SchedulesController < ApplicationController

  before_action :set_schedule, only: [:show, :update, :destroy]
  
  # GET /schedules
  def index    
    lPeriodIni = params[:period_ini] ? Date.iso8601(params[:period_ini]):Date.today
    lPeriodEnd = params[:period_end] ? Date.iso8601(params[:period_end]):Date.today

	
	
    #@schedules = ScheduleDecorator.decorate_collection(Schedule.where(:schedule_time => lPeriodIni.beginning_of_day..lPeriodEnd.end_of_day)) 
    @schedules = ScheduleDecorator.decorate_collection(Schedule.includes(:patient,:dentist).all) 
    
    render json: @schedules, include: 'patient',each_serializer: ScheduleSerializer    
  end

  # GET /schedules/1
  def show
    render json: ScheduleDecorator.decorate(@schedule), serializer: ScheduleSerializer
  end

  # POST /schedules
  def create
    @schedule = Schedule.new(schedule_params)

    if @schedule.save
      @schedule = ScheduleDecorator.decorate(@schedule)
      print "#{@schedule}"
      render json: @schedule, status: :created, location: @schedule, serializer: ScheduleSerializer

    else
      render json: @schedule.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /schedules/1
  def update
    if @schedule.update(schedule_params)
      render json: ScheduleDecorator.decorate(@schedule), serializer: ScheduleSerializer
    else
      render json: @schedule.errors, status: :unprocessable_entity
    end
  end

  # DELETE /schedules/1
  def destroy
    @schedule.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_schedule
      @schedule = ScheduleDecorator.includes(:patient,:dentist).find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def schedule_params
      params.require(:schedule).permit(:dentist_id, :patient_id, :observation, :estimated_time, :schedule_time)
    end
end
