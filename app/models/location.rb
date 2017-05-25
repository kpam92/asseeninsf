# require 'open-uri'
# require 'cgi'
# require 'hpricot'
# require 'urllib2'

class Location < ActiveRecord::Base

geocoded_by :locations
after_validation :geocode

def set_location
  results = self.geocode
  self.latitude = results[0]
  self.longitude = results[1]
end
end
