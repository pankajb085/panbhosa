import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

class SmartSearch extends PureComponent {

  state = {
    inputValue : ''
  }

  render() {
    const {countryList, noOfItems, privilege, addAndSelectHandler} = this.props;

    const filteredList = countryList.slice(0, noOfItems)

    return (
      <Autocomplete
        id="combo-box-demo"
        options={filteredList}
        inputValue={this.state.inputValue}
        onInputChange={(event, newInputValue) => {
         this.setState({inputValue: newInputValue});
        }}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select a location" variant="outlined" />}
      />
    );
  }
}
export default SmartSearch;
