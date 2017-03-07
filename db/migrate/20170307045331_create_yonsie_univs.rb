class CreateYonsieUnivs < ActiveRecord::Migration
  def change
    create_table :yonsie_univs do |t|

      t.timestamps null: false
    end
  end
end
