class ChangeLocationsTable < ActiveRecord::Migration
  def change
    add_column :locations, :latitude, :integer
    add_column :locations, :longitude, :integer
  end
end
