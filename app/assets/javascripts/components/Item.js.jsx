var Item = React.createClass({

  getInitialState: function() {
    return { edit: false};
  },

  toggleEdit: function() {
    this.setState({ edit: !this.state.edit });
  },

  updateItem: function() {
    var name = ReactDOM.findDOMNode(this.refs.itemName).value;
    var quantity = ReactDOM.findDOMNode(this.refs.itemQuantity).value;
    var price = ReactDOM.findDOMNode(this.refs.itemPrice).value;
    var category = ReactDOM.findDOMNode(this.refs.itemCategory).value;
    var self = this;
    $.ajax({
      url: "/items/" + this.props.id,
      type: "PUT",
      data: { item: { name: name, quantity: quantity, price: price, category: category}},
      success: function() {
        self.props.refreshList();
      },
    });
  },

  edit: function() {
    return(<div className="col s3">
            <div className="card-medium blue">
              <div className="card-content white-text center-align">
                <form onSubmit={this.updateItem}>
                  <input autoFocus={true} type='text' defaultValue={this.props.name} ref='itemName' />
                  <br />
                  <input type='numberfield' defaultValue={this.props.quantity} ref='itemQuantity' />
                  <input type='numberfield' defaultValue={this.props.price} ref='itemPrice' />
                  <input type='text' defaultValue={this.props.category} ref='itemCategory' />
                  <a onClick={this.toggleEdit}>Cancel</a>
                </form>
              </div>
            </div>
          </div>);
  },

  item: function() {
    var id = "item-" + this.props.id;
    return(<div className="col s3">
            <div className="card-medium green">
              <div className="card-content white-text center-align">
                <h5>{this.props.name}</h5>
                <br />
                <p>Quantity: {this.props.quantity}</p>
                <p>Price: $ {this.props.price}</p>
                <p>Category: {this.props.category}</p>
              </div>
            </div>
          </div>);
  },

  render: function() {
    if(this.state.edit)
      return this.edit();
    else
      return this.item();
  }

});
