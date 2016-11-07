//backend logic
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

var User = function(bio, blogEntries, blogTitle){
  this.bio = new Bio();
  this.blogEntries = [];
  this.blogTitle = blogTitle;
};

var BlogEntry = function(entryTitle, photos, entryText, entryTags) {
  this.entryTitle = entryTitle;
  this.photos = [];
  this.entryText = entryText;
  this.entryTags = entryTags;
};

//frontend logic
$(document).ready(function(){
  $("#userRegister button").submit(function(event){
    event.preventDefault();

    var user = new User();
    user.bio.nameArr[0] = $(".first-name").val();
    user.bio.nameArr[1] = $(".last-name").val();
    getFullName();

    $("").hide();
  })

});
