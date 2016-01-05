var Store = React.createClass({
  getInitialState: function() {
    return { items: this.props.items }
  },

  getDefaultState: function() {
    return { items: [] };
  },

  showAddForm: function() {
    this.setState({showAdd: !this.state.showAdd});
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

  },

  render: function() {
    return(<div className='container'>
            <a className='waves-effect waves-light btn' onClick={this.showAddForm}>Add Item</a>
            {this.addItemForm()}
            <h1 className='center-align'>WeeFee Corner Store</h1>
            <div>
              <div className='row'>
                {this.displayItems()}
              </div>
            </div>
           </div>);
  }
});
