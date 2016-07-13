"use strict";angular.module("yuens1002githubioApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/kitchen-sink",{templateUrl:"views/kitchen-sink.html",controller:"KitchenSinkCtrl",controllerAs:"kitchenSink"}).when("/work",{templateUrl:"views/work.html",controller:"WorkCtrl",controllerAs:"work"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).otherwise({redirectTo:"/"})}]),angular.module("yuens1002githubioApp").directive("particles",["$window",function(a){return{restrict:"A",replace:!0,template:'<div class="particles-js" id="particles-js"></div>',link:function(b,c,d,e){a.particlesJS("particlesJs",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}}]),angular.module("yuens1002githubioApp").controller("MainCtrl",["$scope",function(a){}]),angular.module("yuens1002githubioApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yuens1002githubioApp").controller("KitchenSinkCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yuens1002githubioApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yuens1002githubioApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container"> <div class="row"> <div class="col-xs-12"> <div class="main-leading">ABOUT</div> <div class="main">I\'M SUNNY YUEN</div> </div> <div class="col-sm-6"> <p>a Seattleite, an entrepreneur and a technologist. I’ve worked as a web designer the past 10 years and I’m now specializing in front-end development leveraging open source technologies. I’m interested in seeking fulltime employment as a front-end developer building web applications.</p> </div> </div> <div class="row"> <div class="col-sm-6"> <div class="main"><p>SKILLS</p></div> <strong>accusantium</strong> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> EXPERT LEVEL </div> </div> <strong>undeomnis</strong> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> VERY EXPERIENCED LEVEL </div> </div> <strong>undeomnis</strong> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> EXPERT LEVEL </div> </div> <strong>undeomnis</strong> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 70%"> PROFESSIONAL LEVEL </div> </div> <strong>TECHNOLOGIES</strong><p>veritatis et quasi architecto beatas</p> </div> </div> <div class="row"> <div class="col-sm-6"> <div class="main"><p>EXPERIENCES</p></div> <p><strong>2016 - 2013</strong> - omnis iste natus error<br>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</p><p><strong>2013-2011</strong> - omnis iste natus error<br>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</p><p><strong>2011-2009</strong> - omnis iste natus error<br>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</p> </div> </div> <div class="row"> <div class="col-sm-6"> <div class="main"><p>EDUCATION</p></div> <p><strong>1994-2000</strong> - <em>rspiciatis undeomnis iste</em>, natus error<br><strong>2016</strong> - <em>eaque ipsa quae,</em> totam rem aperiam</p><br><br><br><br><br><br> </div> </div> </div>'),a.put("views/contact.html",'<div class="container"> <div class="row"> <div class="col-xs-12"> <div class="main-leading">CONTACT</div> <div class="main">FEEL FREE TO<br>DROP ME A<br>LINE or TWO</div> </div> </div> <div class="row"> <div class="col-sm-6"> <hr> <h4>Get a Hold of Me via</h4> <strong>Email</strong> yuens1002@gmail.com<br> <strong>Socail Media</strong> Github Twitter LinkedIn<br><br> </div> <div class="col-sm-6"> <form> <div class="form-group"> <label for="email">Your Name</label> <input type="name" class="form-control" placeholder="Your Name"> </div> <div class="form-group"> <label for="email address">Your Email</label> <input type="email" class="form-control" placeholder="Your Email"> </div> <div class="form-group"> <label for="comment">Message</label> <textarea class="form-control" rows="5" placeholder="Your Message"></textarea> </div> <button type="submit" class="btn btn-default">Submit</button> </form><br><br><br><br><br> </div> </div> </div>'),a.put("views/kitchen-sink.html",'<h1>Style Guide</h1> <hr> <br> <h4>Typography</h4> <br><br> <h3>H3. {Scope One} Heading</h3> <p> <u>{Roboto:300}, 1 rem (18px) body text size @ 1.6 line height</u>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis vestibulum vehicula. Pellentesque viverra augue sit amet enim ullamcorper eleifend. Phasellus egestas purus id enim aliquet ornare at vel erat. Fusce malesuada orci ligula, nec pharetra risus vulputate at. <i>Cras mollis molestie velit</i>, id semper dolor pulvinar nec. Donec a lectus dolor. <span class="small">Maecenas quis eros sollicitudin</span>, finibus massa quis, vestibulum ipsum. <b>Cras aliquam fringilla massa</b>, sed laoreet mauris consequat in. Fusce ac libero tortor. Vivamus sed lacus eu turpis luctus consectetur eget ut elit. <a href="#">Phasellus ac orci</a> eget dui hendrerit dignissim. Ut et risus ipsum. Integer sagittis eros diam, ut rutrum libero pulvinar fringilla. Donec aliquam congue mi, fringilla convallis lectus aliquet ut. </p> <h1>h1. Heading Text Sample</h1> <h2>h2. Heading Text Sample</h2> <h3>h3. Heading Text Sample</h3> <h4>h4. Heading Text Sample</h4> <h5>h5. Heading Text Sample</h5> <h6>h6. Heading Text Sample</h6> <hr> <br> <h4>Button Styles</h4> <br><br> <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> <button type="button" class="btn btn-primary">Primary</button> <!-- Secondary, outline button --> <button type="button" class="btn btn-secondary">Secondary</button> <!-- Indicates a successful or positive action --> <button type="button" class="btn btn-success">Success</button> <!-- Contextual button for informational alert messages --> <button type="button" class="btn btn-info">Info</button> <!-- Indicates caution should be taken with this action --> <button type="button" class="btn btn-warning">Warning</button> <!-- Indicates a dangerous or potentially negative action --> <button type="button" class="btn btn-danger">Danger</button> <!-- Deemphasize a button by making it look like a link while maintaining button behavior --> <button type="button" class="btn btn-link">Link</button>'),a.put("views/main.html",'<div class="container"> <div class="row"> <div class="col-xs-12"> <div class="main-leading">I AM</div> <div class="main">A CREATIVE<br>FRONT END<br>DEVELOPER</div> </div> </div></div>'),a.put("views/work.html",'<div class="container"> <div class="row"> <div class="col-xs-12"> <div class="main-leading">WORK</div> <div class="main"></div> </div> </div> <div class="row" id="feature"> <div class="col-sm-4"><p><h3>COOKESLY</h3><strong>SU WATS 2000 Final Project</strong><br>A complete working web application to search, browse, and save 1000\'s of cooking recipe ideas.</p><a class="btn btn-default" href="#" role="button">Launch Live App</a></div> <div class="col-sm-7 col-sm-offset-1"><img src="images/ckly_home.edc627be.png" class="img-responsive"><figcaption class="text-muted small">search snapshot</figcaption></div> </div> <div class="row" id="feature"> <div class="col-sm-6"><img src="http://placehold.it/1200x900" class="img-responsive"><figcaption class="text-muted small">concept - search</figcaption> <img src="http://placehold.it/1200x900" class="img-responsive"><figcaption class="text-muted small">concept - browse</figcaption><img src="http://placehold.it/1200x900" class="img-responsive"><figcaption class="text-muted small">concept - host an event</figcaption></div> <div class="col-sm-5 col-sm-offset-1"><p><h3>Purpose</h3>The goal of the course project was to build a polished application utilizing a web API with AngularJS framework. The application took 4 weeks from concept to build. I had originally spec for <em>Eventbrite</em> API integration so that a user can host an <em>Eventbrite</em> event by selecting a recipe within the application. I scrapped that idea 2 weeks in the build and opted for the save/delete recipe function due to time constraints. The name <strong>COOKESLY</strong> for the application meant cook easily which I thought suited the purpose of the application.</p><img src="http://placehold.it/900x1200" class="img-responsive"><figcaption class="text-muted small">recipe screen</figcaption></div> </div> <div class="row" id="feature"> <div class="col-sm-6"><p><h3>Process</h3>Etiam quam urna, suscipit sit amet ligula eget, condimentum molestie magna. Suspendisse a augue non orci facilisis ornare. Nunc in fringilla mauris, sit amet lacinia dui. Vivamus vel lacus quis mi interdum fringilla. Vestibulum lectus nulla, congue sed augue a, volutpat tempor elit. In arcu enim, tincidunt ultrices lacus a, ultrices viverra mauris. Donec rhoncus mattis tortor, in dictum urna aliquet non.<h3>Tools Used</h3>Congue sed augue a, volutpat tempor elit. In arcu enim, tincidunt ultrices lacus a, ultrices viverra mauris. Donec rhoncus mattis tortor, in dictum urna aliquet non.<h3>Outcome / After Thoughts</h3>Suspendisse a augue non orci facilisis ornare. Nunc in fringilla mauris, sit amet lacinia dui. Vivamus vel lacus quis mi interdum fringilla. Vestibulum lectus nulla, congue sed augue a, volutpat tempor elit. In arcu enim, tincidunt. Congue sed augue a, volutpat tempor elit. In arcu enim, tincidunt ultrices lacus a, ultrices viverra mauris. Donec rhoncus mattis tortor, in dictum urna aliquet non.</p></div> <div class="col-sm-5 col-sm-offset-1"><img src="http://placehold.it/1200x900" class="img-responsive"><figcaption class="text-muted small">concept - search</figcaption> <img src="http://placehold.it/1200x900" class="img-responsive"><figcaption class="text-muted small">concept - browse</figcaption><img src="http://placehold.it/1200x900" class="img-responsive"><figcaption class="text-muted small">concept - host an event</figcaption></div> </div> </div> <div class="container"> <!-- lines of text must match to avoid breaking the layout --> <div class="row" id="subfeature"> <div class="col-xs-6 col-sm-4 col-lg-3"><img src="http://placehold.it/800x800" class="img-responsive"><br><p><strong>STORY</strong><br>Veniam quis nostrum exercitationem, consectetur, adipisci</p></div> <div class="col-xs-6 col-sm-4 col-lg-3"><img src="http://placehold.it/800x800" class="img-responsive"><br><p><strong>Numquam eius modi</strong><br>Tempora incidunt ut labore et dolore magnam aliquam quaerat qui</p></div> <div class="col-xs-6 col-sm-4 col-lg-3"><img src="http://placehold.it/800x800" class="img-responsive"><br><p><strong>Blanditiis praesentium</strong><br>Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p></div> <div class="col-xs-6 col-sm-4 col-lg-3"><img src="http://placehold.it/800x800" class="img-responsive"><br><p><strong>Ut enim ad minima</strong><br>Veniam quis nostrum exercitationem, consectetur, adipisci velit</p></div> <div class="col-xs-6 col-sm-4 col-lg-3"><img src="http://placehold.it/800x800" class="img-responsive"><br><p><strong>Labore et dolore</strong><br>Tempora incidunt ut labore et dolore magnam aliquam quaerat</p></div> <div class="col-xs-6 col-sm-4 col-lg-3"><img src="http://placehold.it/800x800" class="img-responsive"><br><p><strong>Qui blanditiis</strong><br>Dignissimos ducimus qui blanditiis praesentium voluptatum</p></div> </div> </div>')}]);