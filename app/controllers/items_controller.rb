class ItemsController < ApplicationController

  def index
    render json: Item.all
  end

  def create
    item = Item.create(item_params)
    render json: item
  end

  def update
    item = Item.find(params[:id])
    item.update(item_params)
    render json: item
  end
  
  private

    def item_params
      params.require(:item).permit(:name, :quantity, :category, :price)
    end

end
