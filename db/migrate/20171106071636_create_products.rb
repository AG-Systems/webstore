class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :desc
      t.boolean :available
      t.decimal :price, precision: 10, scale: 2
      t.string :picture

      t.timestamps
    end
  end
end
