//backend logic
var Bio = function (avatarPhoto, fullName, nameArr, bioText, userName, city, state){
  this.avatarPhoto = avatarPhoto;
  this.fullName = fullName;
  this.nameArr = [];
  this.bioText = bioText;
  this.userName = userName;
  this.state = state;
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
  $("#userRegister").submit(function(event){
    event.preventDefault();

    var user = new User();
    user.bio.nameArr[0] = $(".first-name").val();
    user.bio.nameArr[1] = $(".last-name").val();
    user.bio.blogTitle = $(".blogTitle").val();
    user.bio.userName = $(".userName").val();
    user.bio.bioText = $(".bio").val();
    user.bio.avatarPhoto = $(".avatar").val();
    user.bio.city = $(".city").val();
    user.bio.state = $(".state").val();
    user.bio.getFullName();
    console.log(user);
    $("#landingPage").hide();
    $("#mainblog").show();
  })

});
