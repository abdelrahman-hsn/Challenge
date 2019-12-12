class ProductsPromotionsController < ApplicationController
  before_action :set_products_promotion, only: [:show, :update, :destroy]

  # GET /products_promotions
  def index
    @products_promotions = ProductsPromotion.all

    render json: @products_promotions
  end

  # GET /products_promotions/1
  def show
    render json: @products_promotion
  end

  # POST /products_promotions
  def create
    @products_promotion = ProductsPromotion.new(products_promotion_params)

    if @products_promotion.save
      render json: @products_promotion, status: :created, location: @products_promotion
    else
      render json: @products_promotion.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products_promotions/1
  def update
    if @products_promotion.update(products_promotion_params)
      render json: @products_promotion
    else
      render json: @products_promotion.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products_promotions/1
  def destroy
    @products_promotion.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_products_promotion
      @products_promotion = ProductsPromotion.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def products_promotion_params
      params.require(:products_promotion).permit(:promotion_id, :product_id)
    end
end
