var express = require('express');
var router = express.Router();
var git= require('../model/reposchema.js');


//end point http://localhost:8085/repo/save
router.post('/save',isLoggedIn,function(req,res)
{
git.findById(req.body.id,function(err,repoid)
{
//console.log(repoid);
if(err)
var userver=new git();
 if(req.body){
 userver.id=req.body.id;
 userver.name=req.body.name;
 userver.full_name=req.body.full_name;
 userver.html_url=req.body.html_url;
userver.avatar_url=req.body.owner.avatar_url;
userver.private=req.body.private;
userver.ssh_url=req.body.ssh_url;
userver.clone_url=req.body.clone_url;
userver.svn_url=req.body.svn_url;
userver.description=req.body.description;
userver.language=req.body.language;
 userver.save(function(err){if(err){

   res.send('Error in database');
 }else{

 //  window.alert("saved in database");
   res.send('saved in database');
 }
});
}
else {
res.send("data already saved");
}
}
)});


//endpoint http://localhost:8085/repo/delete
router.delete('/delete',isLoggedIn,function(req,res,next){

  if(req.body){
    request=req.body.id;
console.log(request);
    git.remove({id:request},function(err){
      if(err){
        res.send("Error in deleting the data");
      }
      else{
        res.send("Data is deleted successfully");
      }
    });
  }
    else{
      res.send("no data found to delete");
    }
});
router.get('/view',isLoggedIn,function(req,res)
{

  git.find({},function(err,repo){
    if(err) {
      res.send(err);
      console.log('error ocuured');
    }
    else {
     var gitobject={};
      repo.forEach(function(gitrepo,ind){
        gitobject[gitrepo.id]=gitrepo;

      });
      res.send(gitobject);
    }
  });
});


//end point http://localhost:8085/repo/update
router.put('/update',isLoggedIn,function(req,res)
{
  if(req.body)
    {
   var  request1=req.body.id;
     var request2=req.body.Comments;
    git.update({id:request1},{$set:{Comments:request2}},function(err){

        if(err) {
          res.send(err);
        }
        else  {
        res.send("comments updated");
        }
      });
    }

});




function isLoggedIn (req, res, next) {
 if(req.isAuthenticated()){
console.log("if of logged in ");
 return next()
 ;}
 else {
console.log("else of logged in ");
   res.json('not authenticated');
 }
};


module.exports = router;
