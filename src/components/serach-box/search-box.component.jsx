import { Component } from "react";
import './search-box.styles.css'
class SearchBox extends Component{

    render(){
        const {placeholder,className,onChangeHandler}=this.props
        return(  <input className={`sarch-box ${className}`} name="searchMonsters" type="search" placeholder={placeholder} onChange={onChangeHandler} />
        )
    }
}
export default SearchBox