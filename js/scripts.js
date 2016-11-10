//backend logic
function time (){
  function getWeekDay(date) {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    return days[date]
  }
  function getMonth(month) {
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    return months[month]
  }

  var convertHourMinutes = function(h, m){
  if (h >= 12) {
    m = m<10?"0"+m:m;
    h = currentHour-12;
    m = m<10?"0"+m:m;
    return h + ":" + m + " PM";
  } else if (h === 0) {
    h = 12;
    m = m<10?"0"+m:m;
    return h + ":" + m + " AM"
  } else if (h < 12) {
    m = m<10?"0"+m:m;
    return h + ":" + m + " AM"
  }

  };

  var currentYear = new Date(Date.now()).getFullYear();
  var currentDayDate = new Date(Date.now()).getDate();
  var currentDay = new Date(Date.now()).getDay();
  var weekDay = getWeekDay(currentDay);
  var currentHour = new Date(Date.now()).getHours();
  var currentMinute = new Date(Date.now()).getMinutes();
  var currentMonth = new Date(Date.now()).getMonth();
  var monthWord = getMonth(currentMonth);
  var convertedHour = convertHourMinutes(currentHour, currentMinute);

  var currentTime = weekDay + ", " + monthWord + " " + currentDayDate + ", " + currentYear + " at " + convertedHour
  return currentTime;
 }

var Bio = function (avatarURL, avatarPhoto, fullName, nameArr, bioText, userName, city, state){
  this.avatarURL = avatarURL;
  this.avatarPhoto = avatarPhoto;
  this.fullName = fullName;
  this.nameArr = [];
  this.bioText = bioText;
  this.userName = userName;
  this.city = city;
  this.state = state;
};
Bio.prototype={
  constructor: Bio,
  getFullName: function(){
    this.fullName = this.nameArr[0] + " " + this.nameArr[1];
  },
  addImgTag: function(){
    this.avatarPhoto = '<img src ="' + this.avatarURL + '" >';
  }
};

var User = function(bio, blogEntries, blogTitle){
  this.bio = new Bio();
  this.blogEntries = [];
  this.blogTitle = blogTitle;
  this.selectedEntries = [];
};

var Video = function(link, start, end){
  this.link = link;
  this.start = start;
  this.end = end;
}

var BlogEntry = function(time, entryTitle, photos, video, entryText, entryTags, blogAsString, tagsAsStr, listItem, entryClass) {
  this.time = time;
  this.entryTitle = entryTitle;
  this.photos = photos;
  this.video = [];
  this.entryText = entryText;
  this.entryTags = [];
  this.asString = blogAsString;
  this.tagsAsStr = "";
  this.videosAsStr = "";
  this.listItem = listItem;
  this.entryClass = entryClass;

};

BlogEntry.prototype={
  constructor: BlogEntry,

  getEntryTags: function(){

    for (i=0; i<this.entryTags.length; i++){
      if(i===this.entryTags.length-1){
      this.tagsAsStr += '<span class="blogTagID ' + this.entryTags[i] + '">#' + this.entryTags[i] + '</span>';
      }
      else {
      this.tagsAsStr += '<span class="blogTagID ' + this.entryTags[i] + '">#' + this.entryTags[i] + '</span>' + ', ';
      };
    };
  },
  getVideoStr: function(){
    for(var i = 0; i < this.video.length; i++){
      this.videosAsStr += '<span class="postVideo">' + this.video[i].link + '</span>' +
      '<p class="center">Start and end time: <span class="timeCodes">' + this.video[i].start + ' - ' + this.video[i].end + '</span></p>'
    }
  },
  toString: function(){
    if (this.photos === "" ) {
    this.asString = '<div id="' + this.entryClass + '">' +
                      '<h2><span class="postTitle">' + this.entryTitle + '</span></h2>' +
                      '<h5><span class="date">' + this.time + '</span></h5>' +
                      '<span class="postBodyCopy"><p>' + this.entryText + '</p></span>' +
                      '<span class="postImage"><img src = "' + this.photos + '"</span>'+
                      '<br>' + this.videosAsStr +
                      '<div class="blogTags">' +
                      '<br>' + this.tagsAsStr + '<br><br></div><br><br></div>';
    } else if (this.photos === "" && this.video.start === "" && this.video.end === "") {
      this.asString = '<div id="' + this.entryClass + '">' +
                        '<h2><span class="postTitle">' + this.entryTitle + '</span></h2>' +
                        '<h5><span class="date">' + this.time + '</span></h5>' +
                        '<span class="postBodyCopy"><p>' + this.entryText + '</p></span>' +
                        '<br>' +
                        '<span class="postVideo">' + this.video.link + '</span>' +
                        '<div class="blogTags">' +
                        '<br>' + this.tagsAsStr + '<br><br></div><br><br></div>';
    } else if (this.photos === "" && this.video.start !== "" && this.video.end !== "") {
      this.asString = '<div id="' + this.entryClass + '">' +
                        '<h2><span class="postTitle">' + this.entryTitle + '</span></h2>' +
                        '<h5><span class="date">' + this.time + '</span></h5>' +
                        '<span class="postBodyCopy"><p>' + this.entryText + '</p></span>' +
                        '<br>' +
                        '<span class="postVideo">' + this.video.link + '</span>' +
                        '<p class="center">Start and end time: <span class="timeCodes">' + this.video.start + ' - ' + this.video.end + '</span></p>' +
                        '<div class="blogTags">' +
                        '<br>' + this.tagsAsStr + '<br><br></div><br><br></div>';
    } else if (this.photos === "" && this.video.start !== "" && this.video.end === "") {
      this.asString = '<div id="' + this.entryClass + '">' +
                        '<h2><span class="postTitle">' + this.entryTitle + '</span></h2>' +
                        '<h5><span class="date">' + this.time + '</span></h5>' +
                        '<span class="postBodyCopy"><p>' + this.entryText + '</p></span>' +
                        '<br>' +
                        '<span class="postVideo">' + this.video.link + '</span>' +
                        '<p class="center">Start time: <span class="timeCodes">' + this.video.start +
                        '</span></p>' +
                        '<div class="blogTags">' +
                        '<br>' + this.tagsAsStr + '<br><br></div><br><br></div>';
    } else if (this.photos === "" && this.video.start === "" && this.video.end !== "") {
      this.asString = '<div id="' + this.entryClass + '">' +
                        '<h2><span class="postTitle">' + this.entryTitle + '</span></h2>' +
                        '<h5><span class="date">' + this.time + '</span></h5>' +
                        '<span class="postBodyCopy"><p>' + this.entryText + '</p></span>' +
                        '<br>' +
                        '<span class="postVideo">' + this.video.link + '</span>' +
                        '<p class="center">End time: <span class="timeCodes">' + this.video.end +
                        '</span></p>' +
                        '<div class="blogTags">' +
                        '<br>' + this.tagsAsStr + '<br><br></div><br><br></div>';
    } else if (this.video.start === "" && this.video.end === "") {
      this.asString = '<div id="' + this.entryClass + '">' +
                        '<h2><span class="postTitle">' + this.entryTitle + '</span></h2>' +
                        '<h5><span class="date">' + this.time + '</span></h5>' +
                        '<span class="postBodyCopy"><p>' + this.entryText + '</p></span>' +
                        '<span class="postImage"><img src = "' + this.photos + '">' + '</span>'+
                        '<br>' +
                        '<span class="postVideo">' + this.video.link + '</span>' +
                        '<div class="blogTags">' +
                        '<br>' + this.tagsAsStr + '<br><br></div><br><br></div>';
    } else if (this.video.start !== "" && this.video.end === "") {
      this.asString = '<div id="' + this.entryClass + '">' +
                        '<h2><span class="postTitle">' + this.entryTitle + '</span></h2>' +
                        '<h5><span class="date">' + this.time + '</span></h5>' +
                        '<span class="postBodyCopy"><p>' + this.entryText + '</p></span>' +
                        '<span class="postImage"><img src = "' + this.photos + '">' +'</span>'+
                        '<br>' +
                        '<span class="postVideo">' + this.video.link + '</span>' +
                        '<p class="center">Start time: <span class="timeCodes">' + this.video.start + '</span></p>' +
                        '<div class="blogTags">' +
                        '<br>' + this.tagsAsStr + '<br><br></div><br><br></div>';
    } else if (this.video.end !== "" && this.video.start === "") {
      this.asString = '<div id="' + this.entryClass + '">' +
                        '<h2><span class="postTitle">' + this.entryTitle + '</span></h2>' +
                        '<h5><span class="date">' + this.time + '</span></h5>' +
                        '<span class="postBodyCopy"><p>' + this.entryText + '</p></span>' +
                        '<span class="postImage"><img src = "' + this.photos + '">' + '</span>'+
                        '<br>' +
                        '<span class="postVideo">' + this.video.link + '</span>' +
                        '<p class="center">End time: <span class="timeCodes">' + this.video.end + '</span></p>' +
                        '<div class="blogTags">' +
                        '<br>' + this.tagsAsStr + '<br><br></div><br><br></div>';
    }
  },
  toListItem: function() {
    this.listItem = '<li id = "sidebarListItem'+ this.entryClass + '"><a href="#' + this.entryClass + '">' +  this.entryTitle + '</a><span id= "X' + this.entryClass + '" class="xIcon"><img src="img/redX.png" alt= "X"></span></li>';
  }

};
var addTags = function(tags) {
  this.blogEntry.extraTags = tags;
}

//frontend logic
$(document).ready(function(){

  $("#whiteCSS").click(function(){
    $("body:first").removeClass("dark")
    $("body:first").addClass("light");
    $("#titleImage2").show();
    $("#titleImage1").hide();
  });

  $("#darkCSS").click(function(){
    $("body:first").removeClass("light")
    $("body:first").addClass("dark");
    $("#titleImage2").hide();
    $("#titleImage1").show();
  });

  $("#goToRegister").click(function(){
    var video = $(".playerid").attr("src");
    $(".playerid").attr("src","");
    $(".playerid").attr("src",video);
    $("#aboutPage").fadeOut();
    $("#landingPage").delay(700).fadeIn(1000);
  })


  $("#samplePostIcon").click(function(){
      $("#samplePost").hide();
      $("#samplePostListItem").hide();
  });

  $("#samplePostIcon1").click(function(){
      $("#samplePost1").hide();
      $("#samplePostListItem1").hide();
  });


  //character counter for profile bio
  var text_max = 250;
  $('#count_message').html(text_max + ' remaining');
  $('#text').keyup(function() {
    var text_length = $('#text').val().length;
    var text_remaining = text_max - text_length;

    $('#count_message').html(text_remaining + ' remaining');
  });

  var user = new User();

  //add info to sidebar
  var showSidebarInput = function(){
    $(".userName").text(user.bio.userName);
    $(".avatarImg").html(user.bio.avatarPhoto);
    $(".fullName").text(user.bio.fullName);
    $(".location").text(user.bio.city + ", " + user.bio.state);
    $(".bio").text(user.bio.bioText);
  };


  //initial submit that gathers main info about user
  $("#userRegister").submit(function(event){
    event.preventDefault();
    user.bio.nameArr[0] = $(".first-name").val();
    user.bio.nameArr[1] = $(".last-name").val();
    user.bio.blogTitle = $(".blogTitle").val();
    user.bio.userName = $(".userName").val();
    user.bio.bioText = $(".bio").val();
    user.bio.avatarURL = $(".avatar").val();
    user.bio.city = $(".city").val();
    user.bio.state = $(".state").val();
    user.bio.getFullName();
    user.bio.addImgTag();

    if(user.bio.nameArr[0] === ""){
      return alert("Please enter your first name");
    } else if(user.bio.nameArr[1] === ""){
      return alert("Please enter your last name");
    } else if(user.bio.blogTitle === ""){
      return alert("Please enter a blog title");
    } else if(user.bio.userName === ""){
      return alert("Please enter a username");
    } else if(user.bio.bioText === ""){
      return alert("Please enter a short bio");
    } else if(user.bio.avatarURL === ""){
      return alert("Please enter an avatar image");
    } else if(user.bio.city === ""){
      return alert("Please enter your city");
    } else if(user.bio.state === ""){
      return alert("Please enter your state");
    };

    $("#landingPage").hide("slide", { direction: "left" }, 1000);
    $("#mainblog").delay(1000).fadeIn(1000);
    $("#userSidebar").delay(1000).fadeIn(1000);
    showSidebarInput();
    console.log(user);
  });

  //adds another input box for another tag
  $("#add-blogTag").click(function() {
    $(".justTags").append('<input type="text" class="form-control blogEntryTags">' +
                             '<br>');
  });

  // adds another video input form
  $("#insertVideoButton").click(function(){
    $("#insertVideoDiv").append('<div class="getVideo">' +
                                '<div class="form-group">' +
                                '<label for="blogEntryVid">Upload Another YouTube Video</label>' +
                                '<input type="text" class="form-control blogEntryVid">' +
                                '</div>' +
                                '<div class="row">' +
                                '<div class="form-group col-md-4">' +
                                '<label for="vidStartTime">Start time for video playback:</label>' +
                                '<input type="text" class="form-control vidStartTime" placeholder="0:45">' +
                                '</div>' +
                                '<div class="form-group col-md-4">' +
                                '<label for="vidEndTime">End time for video playback:</label>' +
                                '<input type="text" class="form-control vidEndTime" placeholder="1:30">' +
                                '</div>' +
                                '</div>' +
                                '</div>');
  });

  //makes new entry form appear
  $("#newEntryButton").click(function() {
    $("#insertVideoDiv").text("");

    var video = $(".playerid").attr("src");
    $(".playerid").attr("src","");
    $(".playerid").attr("src",video);

    $(".justTags").html('<label for="blogEntryTags">Blog Entry Tags</label><input type="text" class="form-control blogEntryTags" placeholder="yourtag"> <br>');

    $("#landingPage").hide();
    $(".allBlogEntries").hide();
    $("#newBlogEntry").show();
  });

  $(".returnButton").click(function(){
    $("#newBlogEntry").fadeOut();
    $(".allBlogEntries").delay(700).fadeIn();
    $(".tagSearchResult").hide();
  });

  $(".clickable").click(function(){
    alert('1. Go to http://www.youtube.com \n2. Search and open your desired video \n3. Below the video, click the share button (look for the right-pointing arrow) \n4. Click the embed button that appears. \n5. Copy the embed URL to be pasted into your blog form.');
  });

  //submit for new blog entry
  $(".blogEntryForm").submit(function(event){
    event.preventDefault();
    var entryTitle = $(".blogEntryTitle").val();
    var photos = $(".blogEntryImage").val();
    var entryText = $(".blogEntryContent").val();
    var submitTime = time();

    var blogEntry = new BlogEntry(submitTime, entryTitle, photos, [], entryText);

    //runs through each video for current blog entry and adds them to the object videoEntry
    $(".getVideo").each(function() {
      var entryVideo = $(this).find("input.blogEntryVid").val();
      var startTime = $(this).find("input.vidStartTime").val();
      var endTime = $(this).find("input.vidEndTime").val();
      var videoEntry = new Video(entryVideo, startTime, endTime);

      blogEntry.video.push(videoEntry);
    });

    //runs through each tag for current blog entry and adds them to the object blogEntry
    $(".blogEntryTags").each(function() {
      var entryTag = $(this).val();

      blogEntry.entryTags.push(entryTag);
    });

    blogEntry.getEntryTags();
    blogEntry.entryClass = "blogEntry" + user.blogEntries.length;
    blogEntry.getVideoStr();
    blogEntry.toString();


    var XentryClassStr = '#X' + blogEntry.entryClass + ' img';
    var entryClassStr = '#' + blogEntry.entryClass;
    var sidebarListItemClassStr = '#sidebarListItem' + blogEntry.entryClass;
    blogEntry.toListItem();
    user.blogEntries.push(blogEntry);
    $("#sidebarBlogList").prepend(blogEntry.listItem);
    $(".allBlogEntries").prepend(blogEntry.asString);

    $(XentryClassStr).click(function(){
        $(sidebarListItemClassStr).hide();
        $(entryClassStr).hide();
    });

    $(".allBlogEntries").delay(700).fadeIn();
    $("#newBlogEntry").fadeOut();
    $(".blogEntryTitle").val("");
    $(".blogEntryImage").val("");
    $(".blogEntryContent").val("");
    $(".blogEntryVid").val("");
    $(".vidStartTime").val("");
    $(".vidEndTime").val("");
    $(".blogEntryTags").each(function() {
      $(this).val("");
    });

    $(".blogTagID").click(function(){
      var tagClasses = $(this).attr('class').split(' ');
      for(var i = 0; i < user.blogEntries.length; i++){
        for(var j = 0; j < user.blogEntries[i].entryTags.length; j++){
          if(tagClasses[1] === user.blogEntries[i].entryTags[j]){
            user.selectedEntries.push(user.blogEntries[i]);
          }
        }
      }
      $(".printTagSearch").text("");

      for(var i = 0; i < user.selectedEntries.length; i++){
        $(".printTagSearch").prepend(user.selectedEntries[i].asString);
      }
      $(".allBlogEntries").hide();
      $(".tagSearchResult").show();
      user.selectedEntries = [];
    });
});

  $("#deleteEntryButton").click(function(){
    $(".xIcon img").show();
    $("#doneEntryButton").show();
    $("#deleteEntryButton").hide();
  });
  $("#doneEntryButton").click(function(){
    $(".xIcon img").hide();
    $("#doneEntryButton").hide();
    $("#deleteEntryButton").show();
  });
});
