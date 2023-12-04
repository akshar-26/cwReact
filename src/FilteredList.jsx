import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all" // Add a new key for the selected type
    };
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  // Sets the state whenever an item in the dropdown is selected
  onTypeSelect = (eventKey) => {
    this.setState({ type: eventKey });
  }

  filterItem = (item) => {
    // Checks if the current search term and type match the item
    const nameMatches = item.name.toLowerCase().search(this.state.search) !== -1;
    const typeMatches = this.state.type === "all" || item.type === this.state.type;

    return nameMatches && typeMatches;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
		<br/>
        <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.onTypeSelect}> 
          <Dropdown.Item eventKey="all" id="Dropdown">All</Dropdown.Item>
		  <br/>
          <Dropdown.Item eventKey="Fruit" id="Dropdown">Fruit</Dropdown.Item>
		  <br/>
          <Dropdown.Item eventKey="Vegetable" id="Dropdown">Vegetable</Dropdown.Item>
        </DropdownButton>
		<br/>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
