require 'test_helper'

class ProductsPromotionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @products_promotion = products_promotions(:one)
  end

  test "should get index" do
    get products_promotions_url, as: :json
    assert_response :success
  end

  test "should create products_promotion" do
    assert_difference('ProductsPromotion.count') do
      post products_promotions_url, params: { products_promotion: { product_id: @products_promotion.product_id, promotion_id: @products_promotion.promotion_id } }, as: :json
    end

    assert_response 201
  end

  test "should show products_promotion" do
    get products_promotion_url(@products_promotion), as: :json
    assert_response :success
  end

  test "should update products_promotion" do
    patch products_promotion_url(@products_promotion), params: { products_promotion: { product_id: @products_promotion.product_id, promotion_id: @products_promotion.promotion_id } }, as: :json
    assert_response 200
  end

  test "should destroy products_promotion" do
    assert_difference('ProductsPromotion.count', -1) do
      delete products_promotion_url(@products_promotion), as: :json
    end

    assert_response 204
  end
end
