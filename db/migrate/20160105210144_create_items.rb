class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.integer :quantity
      t.float :price
      t.string :category

      t.timestamps null: false
    end
  end
end
