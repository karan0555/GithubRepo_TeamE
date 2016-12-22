import React from 'react';

export default class Search extends React.Component{

constructor(){
super();
this.userdata=this.userdata.bind(this);
this.starreddata=this.starreddata.bind(this);
}


userdata(){
var userreposearch=document.getElementById('userrepo').value;
console.log("SEarched thing is "+userreposearch);
this.props.repoSearch(userreposearch);
var that = this;
$.ajax({
url: "https://api.github.com/users/"+userreposearch+"/repos",
type: "GET",
dataType:'JSON',
success : function(msg)
{
console.log("Searched Repo Successfully");
var repoArrayGot = msg;
that.props.repoArray(repoArrayGot);
},
error: function(err){
  console.log("error");
  console.log(err);
  alert("Invalid Search");
}
});
}

starreddata(){
var starredreposearch=document.GetElementById('userrepo');
alert("starred seaqrch");

}

    render(){
      console.log("inside Search");
        return(
        <div className="container">
        	<div className="row">
          <div className="jumbotron">
                <div className="col-md-6">
                <div id="custom-search-input">

                  <div className="input-group col-md-12">

                  <input type="text" placeholder="search news here" id="userrepo" className="form-control input-lg"/>
                                      <span className="input-group-btn">
                                          <button className="btn btn-info btn-lg" type="button" onClick={this.userdata}>
                                            Searchuser  <i className="glyphicon glyphicon-search"></i>
                                          </button>
                                      </span>
                                      <span className="input-group-btn">
                                          <button className="btn btn-info btn-lg" type="button" >
                                            Searchrepo  <i className="glyphicon glyphicon-search"></i>
                                          </button>
                                      </span>



</div>
</div>
</div>
            </div>
            </div>

</div>
            )
    }
 }
