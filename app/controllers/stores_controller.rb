class StoresController < ApplicationController
  def index
    @items = Item.all
  end
end
