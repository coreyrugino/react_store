var Store = React.createClass({
  getInitialState: function() {
    return { items: [] };
  },

  componentDidMount: function() {
    this.refreshStore();
  },

  refreshStore: function() {
    var self = this;
    $.ajax({
      url: '/items',
      type: 'GET',
      success: function(data) {
        self.setState({ items: data });
      }
    });
  },

  showAddForm: function() {
    this.setState({showAdd: !this.state.showAdd});
  },

  addItemName: function(e) {
    this.setState({ itemName: e.currentTarget.value });
  },

  addItemQuantity: function(e) {
    this.setState({ itemQuantity: e.currentTarget.value });
  },

  addItemPrice: function(e) {
    this.setState({ itemPrice: e.currentTarget.value });
  },

  addItemCategory: function(e) {
    this.setState({ itemCategory: e.currentTarget.value });
  },

  submitItem: function(e) {
    e.preventDefault();
    var name = this.state.itemName;
    var quantity = this.state.itemQuantity;
    var price = this.state.itemPrice;
    var category = this.state.itemCategory;
    var self = this;
    $.ajax({
      url: '/items',
      type: 'POST',
      data: { item: { name: name, quantity: quantity, price: price, category: category }},
      success: function(data) {
        var items = self.state.items;
        items.push(data);
        self.setState({ items: items, showAdd: false, itemName: null, itemPrice: null, itemCategory: null, itemQuantity: null });
      }
    });
  },

  addItemForm: function() {
    if(this.state.showAdd){
      return(<div>
              <form onSubmit={this.submitItem}>
                <div className='input-field'>
                  <input autoFocus='true' placeholder='Add Item' type='text' onChange={this.addItemName} />
                  <input placeholder='Quantity' type='numberfield' onChange={this.addItemQuantity} />
                  <br /><br />
                  <input placeholder='Price' type='numberfield' onChange={this.addItemPrice} />
                  <input placeholder='Category' type='text' onChange={this.addItemCategory} />
                  <button className='btn waves-effect' type='submit'>Save</button>
                </div>
              </form>
             </div>)
    }
  },

  displayItems: function() {
    var items = [];
    for(var i = 0; i < this.state.items.length; i++) {
      var item = this.state.items[i];
      var key = "Item-" + item.id;
      items.push(<Item refreshStore={this.refreshStore} key={key} id={item.id} name={item.name} quantity={item.quantity} price={item.price} category={item.category} />);
    }
    return items;
  },

  render: function() {
    return(<div className='container'>
            <a className='waves-effect waves-light btn' onClick={this.showAddForm}>Add Item</a>
            {this.addItemForm()}
            <h1 className='center-align'>WeeFee Corner Store</h1>
            <div className='row'>
              {this.displayItems()}
            </div>
           </div>);
  }
});
