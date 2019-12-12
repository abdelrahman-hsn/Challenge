Department.create(name: "Shoes")
Department.create(name: "Clothing")
Department.create(name: "Glasses")
Department.create(name: "Software")

Product.create(name: "Addidas", price: 49.95, department_id: 1)
Product.create(name: "Nike", price: 100.95, department_id: 2)
Product.create(name: "Abo Hamada", price: 200.95, department_id: 3)
Product.create(name: "BlaBla", price: 469.95, department_id: 4)
Product.create(name: "Nikeddd", price: 100.95, department_id: 1)

Promotion.create(code: "123456", active: true, discount: 169.95)
Promotion.create(code: "654123", active: false, discount: 169.95)
Promotion.create(code: "Bl5aBla", active: false, discount: 169.95)
Promotion.create(code: "963Bla", active: true, discount: 169.95)


ProductsPromotion.create(promotion_id: 1, product_id: 1)
ProductsPromotion.create(promotion_id: 2, product_id: 3)
ProductsPromotion.create(promotion_id: 3, product_id: 2)
ProductsPromotion.create(promotion_id: 4, product_id: 4)