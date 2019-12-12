class Product < ApplicationRecord
  belongs_to :department
  belongs_to :department
  has_many :products_promotions
  has_many :promotions, through: :products_promotions


  def self.search(search)
    if search
      find(:all, :conditions => ['name LIKE ?', "%#{search}%"])
    else
      find(:all)
    end
  end
end
