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
    self.where("latitude < ?", bounds[:northEast][:lat])
        .where("latitude > ?", bounds[:southWest][:lat])
        .where("longitude > ?", bounds[:southWest][:lng])
        .where("longitude < ?", bounds[:northEast][:lng])
  end
end
