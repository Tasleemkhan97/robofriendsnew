import React,{Component} from 'react';
import './App.css';
import 'tachyons';
import CardList from '../containers/CardList';
import SearchBox from '../containers/SearchBox';
import Scroll from '../containers/Scroll';
import ErrorBoundary from './ErrorBoundary';
import {setSearchField,requestRobots} from '../Actions';
import {connect} from 'react-redux'; 

const mapStateToProps = (state) => {
	return {
		searchfield:state.searchRobots.searchField,
		robots:state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error
		   }
}



const mapDispatchToProps = (dispatch) => {
	
return {	
	onSearchChange:(event) => dispatch(setSearchField(event.target.value)),
	onSearchRobots :(event) => dispatch(requestRobots())
       }
}


class App  extends Component   {

// constructor()
// {
// 	super()
// 	this.state = {
// 		robots:[]
// 		// searchfield :''
// 	}
// }

// onSearchChange =(event) => {
// 	this.setState({searchfield:event.target.value})
	
// }

componentDidMount(){
// 	console.log(this.props.store);
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response =>  response.json())
// .then(users => this.setState({robots:users}))
this.props.onSearchRobots();
}

render()
 {
 	const {searchField,onSearchChange,robots,isPending}=this.props;
		const filteredrobots = this.props.robots.filter(robots => {
			return(robots.name.toLowerCase().includes(this.props.searchfield));
		})


   if(isPending)
  {
	return( <div className='tc'><h1>Loading</h1></div>);
  }
  else
  {
    return(
	<div className='tc ' background='https://www.gstatic.com/webp/gallery/1.jpgs'>
	<h1 className='f1'>Robofriends</h1>
	<SearchBox searchchange={this.props.onSearchChange}/>
	<Scroll>
		 <ErrorBoundary>
		   <CardList robots ={filteredrobots}/>
		 </ErrorBoundary>
	</Scroll>
	</div>
	);
   }
  
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
