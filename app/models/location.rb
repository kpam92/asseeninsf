# require 'open-uri'
# require 'cgi'
# require 'hpricot'
# require 'urllib2'

class Location < ActiveRecord::Base



  geocoded_by :locations
  after_validation :geocode

  def set_location
    results = self.geocode
    if results
      self.latitude = results[0]
      self.longitude = results[1]
      self.save
    end
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end
end
