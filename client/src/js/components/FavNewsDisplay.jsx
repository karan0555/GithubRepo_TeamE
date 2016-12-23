var React = require('react');
import DeleteButton from './DeleteButton.jsx';
import UpdateComponent from './UpdateComponent.jsx';
export default class FavNewsDisplay extends  React.Component{
constructor(){
  super(); 
  this.updateNewsArray = this.updateNewsArray.bind(this); 
}

updateNewsArray(item){
  this.props.fxn(item);
}

render() 
{
console.log("FavNEWS DISPLAY");
console.log(this.props.item);
var newsItem = this.props.item;
 return(
   <div className="news-display jumbotron">
    <section>
      <section className = "row">
        <article className = "col-sm-4">
          <img src={this.props.item.owner.avatar_url} height = "200" width = "300" />
        </article>
        <article className = "col-sm-8">
          <h1>{this.props.item.name} </h1>
          <h2>Full Name : {this.props.item.full_name} </h2>
          <h4>html_url : {this.props.item.html_url}</h4>
          <h4>ssh : {this.props.item.ssh_url}</h4>
          <h5>Clone Url : {this.props.item.clone_url}</h5>
          <h2><b>Language {this.props.item.language}</b></h2>
          <SaveButton item={repoItem}/>
        </article>
      </section>      
    </section>
  </div>
      
   </div>
 );
}
}