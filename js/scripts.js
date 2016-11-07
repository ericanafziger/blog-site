//backend logic
var User = function(bio, blogEntries, blogTitle){
  this.bio = bio;
  this.blogEntries = [];
  this.blogTitle = blogTitle;
};
 var Bio = function (avartarPhoto, fullName, nameArr, bioText){
   this.avartarPhoto = avartarPhoto;
   this.fullName = fullName;
   this.nameArr = [];
   this.bioText = bioText;
 };
Bio.prototype={
  constructor: Bio,
  getFullName: function(){
    this.fullName = this.nameArr[0] + " " + this.nameArr[1];
  }
};


var BlogEntry = function() {
  this.entryTitle = entryTitle;
  this.photos = [];
  this.entryText = entryText;
  this.entryTags = entryTags;
};

//frontend logic
$(document).ready(function(){


});
