class CreateYonseiUnivs < ActiveRecord::Migration
  def change
    create_table :yonsei_univs do |t|
      t.text :feedback

      t.timestamps null: false
    end
  end
end
