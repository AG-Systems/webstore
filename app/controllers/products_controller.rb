class ProductsController < ApplicationController
  def index
    @products = Product.all
    #render json: @products
  end

  def show
    @product = Product.find(params[:id])
    session[:product_id] = @product.id
  end
end
