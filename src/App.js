import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/serach-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString:''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users,
            filteredMonsters:users };
          },
          () => {
            
          }
        )
      );
  }
onSearchChange=(event)=>{
    const searchString=event.target.value
      this.setState(()=>{return {searchString}});
    }
  

  render() {
    const {monsters,searchString}=this.state;
    const{onSearchChange}=this
    const filteredMonsters=monsters.filter((item)=> item.name.toLocaleLowerCase().includes(searchString))
    return (
      <div className="App">
        <div>
       <SearchBox onChangeHandler={onSearchChange} className={'search-box'} placeholder={'search text here'}/>
       <CardList monsters={filteredMonsters}/>
    </div>

</div>  
    )
}
}
export default App;
