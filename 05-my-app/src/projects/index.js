import React, { Component } from 'react';


export let projectActionCreators = {
	addNew(newProjectData){
		let action = { type : 'ADD_NEW_PROJECT', payload : newProjectData };
		return action;
	}
}

export function projectsReducer(currentState = [], action){
	console.log('projectsReducer triggered');
	if (action.type === 'ADD_NEW_PROJECT')
		return [...currentState, action.payload];
	return currentState;
}

export class ProjectTracker extends Component{
	state : {
		newProjectName : '',
		newProjectDesc : ''
	};

	onAddNewClick = () =>{
		let {newProjectName : name, newProjectDesc : desc } = this.state;
		let newProject = { name , desc };
		this.props.addNew(newProject);
	}

	render(){
		let projectItems = this.props.projects.map((project, index) => {
			return (
				<li key={index}>{project.name}</li>
			)
		});

		return(
			<div>
				<h3>Projects</h3>
				<hr/>
				<h4>Create New</h4>
				<section className="field">
					<label htmlFor="" style={{display:'block'}}>Name :</label>
					<input type="text" onChange={evt=> this.setState({newProjectName : evt.target.value})}/>
				</section>
				<section className="field">
					<label htmlFor="" style={{display:'block'}}>Description :</label>
					<input type="text" onChange={evt=> this.setState({newProjectDesc : evt.target.value})}/>
				</section>
				<section className="field">
					<input type="button" value="Add New" onClick={this.onAddNewClick}/>
				</section>
				<hr/>
				<ol>
					{projectItems}
				</ol>
			</div>
		)

	}
}