import { Component } from "react";
import "./App.css";

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

  <input name="searchMonsters" type="search" placeholder="search here" onChange={onSearchChange} />
        </div>
        {
        
       filteredMonsters.map((item) => {
          return <h1 key={item.id}>{item.name}</h1>;
        })}
      </div>
    );
  }
}
export default App;
