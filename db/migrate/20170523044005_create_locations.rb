class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :title, null: false
      t.string :actor_1, null: false
      t.string :actor_2, null: false
      t.string :director, null: false
      t.string :fun_facts
      t.string :locations, null: false
      t.integer :release_year, null: false
      t.timestamps null: false
    end
  end
end
