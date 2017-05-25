class Api::LocationsController < ApplicationController

  def index
    @locations = Location.where(['latitude IS NOT NULL'])
  end

  def create
    @locations = seed_params.values.map{|location|
      parse_params(location)
    }
    @locations_array = @locations.map {|location|
      @location = Location.new(location)
      if @location.save
        true
      else
        next
      end
    }

    respond_to do |format|
      format.json { render :json => @locations_array }
    end
  end

  private

  def location_params
    params.require(:location).permit(:actor_1, :actor_2, :director, :title, :release_year, :locations, :fun_facts)
  end

  def seed_params
    keys = params[:locations].keys
    properties = [:actor_1, :actor_2, :director, :title, :release_year, :locations, :fun_facts]
    all_permitted = keys.map{|key| {key => properties}}
    params.require(:locations).permit(*all_permitted)
  end

  def parse_params(foreign)
    {
      actor_1: foreign[:actor_1],
      actor_2: foreign[:actor_2],
      director: foreign[:director],
      title: foreign[:title],
      release_year: foreign[:release_year],
      locations: foreign[:locations] + ',San Francisco, CA',
      fun_facts: foreign[:fun_facts]
    }
  end
end
