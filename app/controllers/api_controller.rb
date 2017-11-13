class ApiController < ApplicationController
    def index
        @products = Product.all
        render json: @products
    end
end
