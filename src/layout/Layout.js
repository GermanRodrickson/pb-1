import React, { Component } from 'react';
import styled from 'styled-components'

// Components 
import Gnome from '../components/Gnomes'
import Search from '../components/Search'
import NumberOfItems from '../components/NumberOfItems'

// Elements 
import Loader from '../components/elements/Loader'

//Images
import male from '../img/mars-solid.svg'
import female from '../img/venus-solid.svg'

const Wrapper = styled.section`
  padding: 0 3em;
`;

const WrapperItem = styled.div`
  display: inline-block;
`


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      filterText: '',
      numberOfItems: 5,
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoaded: true, items: json, itemsCopy: json });
      })
      .catch(error => console.log("Error -> ", error));
  }

  filterUpdate (value) {
    this.setState({
      filterText: value
    })
  }

  filterNumberOfDisplay (value) {
    this.setState({
      numberOfItems: value
    })
  }




  render() {

    const { isLoaded, items, filterText, numberOfItems } = this.state;
    const data = items.Brastlewark
    
    if (!isLoaded) {
      return <Loader />;
    }

    else {
      return (
        <section>
          <Search 
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
          />
          <NumberOfItems 
          numberOfItems={this.state.numberOfItems}
          filterNumberOfDisplay={this.filterNumberOfDisplay.bind(this)}
          />
          <Wrapper>
              {data
              .filter(item => {
                return item.name.toLowerCase().indexOf(filterText) >= 0;
              })
              .slice(0, numberOfItems)
              .map(item => (
                <WrapperItem key={item.id}>
                  <Gnome
                  name = {item.name} 
                  thumbnail = {item.thumbnail} 
                  weight = {item.weight}
                  height = {item.height}
                  professions = {item.professions}
                  friends = {item.friends}
                  hairColor = {item.hair_color}
                  genre = {item.name.length > 15 ? male : female}
                  />
                </WrapperItem>
              ))}
          </Wrapper>
        </section>
      )
    }
  }
}

export default App;