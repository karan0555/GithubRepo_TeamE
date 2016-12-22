var React = require('react');

export default class NewsDisplay extends  React.Component{

render()
{
console.log("NEWS DISPLAY");
console.log(this.props.item);
var repoItem = this.props.item;

 return(
   <span className="news-display">
    <section>
      <section className = "row">
        <article className = "col-sm-4">
          <img src={this.props.item.owner.avatar_url} height = "200" width = "300" />
        </article>
        <article className = "col-sm-8">
          <h2>{this.props.item.full_name} </h2>
          <h6>Published At : {this.props.item.name} </h6>
          <p>{this.props.item.ssh_url}</p>
        </article>
      </section>
      
    </section>
  </span>
 );
}
}