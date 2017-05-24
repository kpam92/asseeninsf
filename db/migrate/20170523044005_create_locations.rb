class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :title, null: false
      t.string :actor_1
      t.string :actor_2
      t.string :director
      t.string :fun_facts
      t.string :locations
      t.integer :release_year, null: false
      t.timestamps null: false
    end
  end
end
