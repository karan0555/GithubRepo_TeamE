var React = require('react');

export default class SavedRepoComponent extends  React.Component{
constructor(){
  super();
  this.state = {repo:[]};
  this.getRepoArray = this.getRepoArray.bind(this);
  this.changeRepoArray = this.changeRepoArray.bind(this);
}

changeRepoArray(item){
  var arr = this.state.news;
  var index = arr.findIndex(x => x._id==item._id)
  console.log("index of item deleted is "+index);
  arr.splice(index,1);
  this.setState({news:arr});
}
   getRepoArray(){
    var that = this;
    $.ajax({
       url: "http://localhost:8080/repos/view",
       type: "GET",
       dataType: 'JSON',
    
       success : function(msg){
       /*msg reprewsents JSON data of news headlines sent back by external API*/
       console.log("get Repo success");
       console.log(msg);
       that.setState({repo:msg});
       },

       error: function(err){
       console.log("get Repo error");
       console.log(err);
      }
    });
  }

componentDidMount(){
  this.getRepoArray();
}

render()
{
console.log("inside favourite");
 return(
   <div className="container-fluid" id="fav">
      <h1>View 
      repo Saved Before</h1>
      <ViewRepoManager newsArray={this.state.news} newsArrUpdate = {this.changeNewsArray}/>
   </div>
 );
}
}