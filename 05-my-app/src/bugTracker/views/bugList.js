import React, { Component } from 'react';
import BugItem from './bugItem';


class BugList extends Component{
	render(){
		let { bugs, toggle, removeClosed } = this.props;
		let bugItems = bugs.map((bug,index) => (
			<BugItem bug={bug} toggle={toggle} key={index}/>
		));
		return(
			<React.Fragment>
				<section className="sort">
  				<label htmlFor="">Order By :</label>
  				<select>
  					<option value=""></option>
  					<option value=""></option>
  				</select>
  				<label htmlFor="">Descending ? :</label>
  				<input type="checkbox" />
  			</section>
  			<section className="filter">
  				<label htmlFor="">Search :</label>
  				<input type="text" />
  			</section>
  			
  			<section className="list">
  				<ol>
  					{bugItems}
  				</ol>
  				<input type="button" value="Remove Closed" onClick={() => removeClosed(bugs)}/>
  			</section>
  		</React.Fragment>
		)
	}
}

export default BugList;