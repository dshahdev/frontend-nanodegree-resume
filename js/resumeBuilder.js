

    /* Bio Section ------------------------------ */

     var bio = {
        "name": "Darshana Shah",
        "role": "Front-end Developer",
        "contacts": {
            "mobile": "973-978-2936",
            "email": "dshahnj@gmail.com",
            "github": "dshahdev.github.io",
            "location": "Parsippany, NJ"
        },

        "welcomeMessage": "Welcome to Darshana's Resume Page!",

        "pro_summery": [
                "Strong experience in AngularJS, JavaScript, HTML/HTML5, CSS/CSS3, RequireJS,SASS",
                "Created Single Page Application(SPA) using DOM, jQuery, JavaScript, AngularJS, Bootstrap library, and RESTful Service",
                "Created E-commerce websites using PHP, Java, MySQL and SQL Server",
                "Completed MS in Computer Science from FDU, Teaneck, NJ — Summer 2016 (GPA: 3.8 / 4.0)"

            ],

        "Skills": {
            "WebTechnologies": "HTML/HTML5, CSS/CSS3, JavaScript, AJAX, MediaQuery, SASS",
            "Database": "MYSQL, SQL SERVER, Oracle",
            "Languages": "JavaScript, Java, PHP",
            "LibrariesFrameworks": "AngularJS, RequireJS, Grunt, Karma/Jasmine, Grunt",
            "DevelopmentEnvironments": "Sublime Text2, Visual Studio, Eclipse, jBoss, Squirrel, Git",
            "ProfessionalCertification": "SCJP, MIT certification on Tackling Challenges of Big Data"
        },

        "related_courses": ["Sofware Engineering","Mobile Application Development","Building E-Commerce Systems","Database Design","Web Application Development","Big Data"
        ],


        "displayBio": function(){

            var formattedName = HTMLheaderName.replace("%data%", bio.name);
            var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
            $("#header").prepend(formattedRole);
            $("#header").prepend(formattedName);


        },
        "displayBioContacts": function(){


            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            $("#topContacts").append(formattedMobile);

            var formattedEmail = HTMLemail.replace("%data%",  bio.contacts.email);
            $("#topContacts:last").append(formattedEmail);

            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            $("#topContacts:last").append(formattedGithub);

            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            $("#topContacts:last").append(formattedLocation);
        },

        "displayBioPro_summery": function() {
            if(bio.pro_summery.length > 0){
                $("#header").append(HTMLProskillsStart);

                // var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
                var formattedSkill = HTMLProskills.replace("%data%", bio.pro_summery[0]);
                $("#skills").append(formattedSkill);

                // var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

                formattedSkill = HTMLProskills.replace("%data%",bio.pro_summery[1]);
                $("#skills").append(formattedSkill);
                formattedSkill = HTMLProskills.replace("%data%",bio.pro_summery[2]);
                $("#skills").append(formattedSkill);
                formattedSkill = HTMLProskills.replace("%data%",bio.pro_summery[3]);
                $("#skills").append(formattedSkill);

            }
        },

        "displaySkills": function(){
            $("#header").append(HTMLskillsStart);

            var formattedWeb = HTMLWeb.replace("%data%", bio.Skills.WebTechnologies);
            $("#my_skills").append(formattedWeb);

            var formattedDatabase = HTMLdatbase.replace("%data%", bio.Skills.Database);
             $("#my_skills").append(formattedDatabase);

             var formattedLang = HTMLlang.replace("%data%", bio.Skills.Languages);
             $("#my_skills").append(formattedLang);

             var formattedLibs = HTMLLibs.replace("%data%", bio.Skills.LibrariesFrameworks);
             $("#my_skills").append(formattedLibs);

             var formattedDev = HTMLDevlopment.replace("%data%", bio.Skills.DevelopmentEnvironments);
             $("#my_skills").append(formattedDev);

             var formattedProC = HTMLProCertificate.replace("%data%", bio.Skills.ProfessionalCertification);
             $("#my_skills").append(formattedProC);

        }


     };


    /* Education Section ------------------------------ */

     var education = {
        "schools": [

            {
                "name": "Fairleigh Dickinson University",
                "location": "Teaneck, NJ, US",
                "degree": "Masters",
                "major": "Computer Science"
            },
            {
                "name": "Gujarat University",
                "location": "Ahmedabad, Gujarat, India",
                "degree": "Bachelor in Commerce.",
                "major": "Accountancy and Business Manangement"

            }
        ],
        "onlinecourses" :[
            {
                "title": "Front-End Web Developer Nanodegree",
                "school": "Udacity",
                "date"  : "Feb 2017 - current",
                "url"   : "https://www.udacity.com/"
            },
            {
                "title": "SCJP Certification",
                "school": "Oracle",
                "date"  : "Feb 2013",
                "url"   : "http://www.oracle.com/"
            },

        ],

        "relatedcourses": [
                    "Software Engineering",
                    "Mobile Application Developmen",
                    "Building E-Commerce Systems",
                    "Database Design / Database Systems",
                    "Web Application Development",
                    "BigData"
        ],


        "displayEduction": function(){

            $("#education").append(HTMLschoolStart);

            education.schools.forEach(function(element) {
                var formatedSchoolName = HTMLschoolName.replace("%data%",element.name);
                $(".education-entry").append(formatedSchoolName);

                var formattedLocation = HTMLschoolLocation.replace("%data%",element.location);
                $(".education-entry:last").append(formattedLocation);

                var formattedDegree = HTMLschoolDegree.replace("%data%",element.degree);
                $(".education-entry:last").append(formattedDegree);

                var formattedMajor = HTMLschoolMajor.replace("%data%", element.major);
                $(".education-entry:last").append(formattedMajor);


            });

        },

         "displayOnlinecourses": function(){
            $("#online_courses").append(HTMLonlineClasses);

            education.onlinecourses.forEach(function(element) {
                var formattedTitle =  HTMLonlineTitle.replace("%data%",element.title);
                $('.online-entry').append(formattedTitle);

                var formattedSchool = HTMLonlineSchool.replace("%data%", element.school);
                 $('.online-entry').append(formattedSchool);

                var foramttedDates = HTMLonlineDates.replace("%data%", element.date);
                $('.online-entry').append(foramttedDates);

                var formattedUrl = HTMLonlineURL.replace("%data%", element.url);
                $('.online-entry').append(formattedUrl);
            })
        },


        "displayRelatedCourses": function(){
            $('#courses').append(HTMLrelCourceStart);

            education.relatedcourses.forEach(function(element){
                var formattedCourList = HTMLcourseList.replace("%data%",element);
                $('.course-list').append(formattedCourList);
            });


        }


    };

    /* Work Section ------------------------------ */

    var work = {
        "jobs": [
            {
            "employer": "J.K. TRADING ASSO.",
            "title": "JR. Front-end Developer",
            "dates": "June 2016 - current",
            "location":  "New York city, NY",
            "description": [
                        "EXCALIBUR- INVENTORY AND OUTSOURCE PRODUCTION MANAGEMENT",
                        "Developed Front-end web pages with AngularJS - a JavaScript Framework using DOM, HTML5, CSS3, and JavaScrip",
                        "Used RequireJS library to speed up the dependency navigation and modularization of the application into smaller manageable parts",
                        "Worked with Business Analyst and Back-end development team during requirement analysis, implementation and production incidents",
                        "Assisted back-end team in finalizing the RESTful interface and initial database design",
                        "Contributed in performance improvements through module redesign and MySQL optimization exercises"
                        ]
            },

            {
            "employer": "INDEPENDENT PROJECT",
            "title": "JR. Front-end Developer",
            "dates": "Jan 2016 - Current",
            "location":  "Parsippany, NJ",
             "description": [
                        "DIGI-NERVE-DEVICE DATA AUTOMATION PROJECT",
                        "Working on a website of a startup project for device monitoring system where clients can monitor and control their devices remotely",
                        "Designed the workflow of the website using manual sketches and free wire framing tool like wireframe.cc",
                        "Used ui-router /ng-router, Dependency Injection, built-in directives, promises and deferred via asynchronous processing in NodeJS in AngularJS",
                        "Developed prototype in AngularJS with a RESTFul interface in NodeJS connecting to MySQL database",
                        "Used git repository to manage development, fixes and production release branches",
                        "Used AmgularJS and Restful services; Used SASS, RequireJS and other components for robust user experience"
                        ]
            },

            {
            "employer": "COMPUTER SCIENCE DEPATRMENT at FDU",
            "title": "Teaching Assistant",
            "dates": "Jan 2015 - May 2015",
            "location":  "Teaneck, NJ",
            "description": [
                        "Assisted Professors in classes such as “Java and the Internet applications” and “Database Systems",
                        "Guided students in their labs by helping them in debugging their applications as well as understanding and fixing their SQL queries"
                        ]
            },
            {
            "employer": "INFOWIZION TECHNOLOGIES",
            "title": "Web Developer and Consultant",
            "dates": "Jan 2001 - May 2005",
            "location":  "Ahemdabad, India",
            "description": [
                "Visited client sites (show-rooms, production units) to understand their business.",
                "Developed semi-automated web site platforms for Wood Veneer manufacturer, Paper product company and Food products company",
                ]
            }

        ],

        "displayWork": function() {

            work.jobs.forEach(function(element){
                $("#workExperience").append(HTMLworkStart);

                var formattedEmployer = HTMLworkEmployer.replace(
                    "%data%", element.employer);
                var formattedTitle = HTMLworkTitle.replace(
                    "%data%", element.title);
                var formattedEmployerTitle = formattedEmployer +
                                    formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);

                var formattedDates = HTMLworkDates.replace(
                    "%data%",element.dates);
                $(".work-entry:last").append(formattedDates);

                var formattedLocation = HTMLworkLocation.replace("%data%", element.location);
                $(".work-entry:last").append(formattedLocation);


                $(".work-entry:last").append(HTMLworkDescription);

                element.description.forEach(function(elem) {
                    // var formattedDes = HTMLprojectDesList.replace("%data%", elem);
                    var formattedDes = HTMLworkDesList.replace("%data%", elem);
                    $(".work_description:last").append(formattedDes);
                });

            });


        },

        "displayWorkLocation": function(){
            $('#mapDiv').append(googleMap);


        }


    };

    /* Projects Section ------------------------------ */

    var projects = {

        "collegeProjects": [
            {
                "title": "ONLINE SHOPPING APPLICATION, FDU, NJ",
                "dates": "JAN 2016 - MAY 2016",
                "description": [

                    "Developed Online Shopping Application as part of ‘Building E-Commerce System’ class with weekly reviewed by Professor",
                    "Developed web application using AngularJS framework- and related skills like DOM, HTML5, CSS3, SASS, Javascript, Ajax and Java",
                    "Used data-binding with the use of Controllers, Factories, Services and integrated with RESTful Java backend services",
                    "Accomplished responsive design using bootstrap, Promises and Deferred via asynchronous processing in NodeJS",
                    "Built RESTful interface for the application using Java J2EE (JBoss EAP 6) connecting to MySQL database"

                    ]
            },
            {
                "title": "BIG DATA and DATABASE design, FDU, NJ",
                "dates": "JUN 2015 - DEC 2015",
                "description": [
                    "Successfully completed MIT online certification course on Tackling the Challenges of Big Data",
                    "Also, as part of ‘Big Data Analytics with Hadoop and R’ class, worked on Hive, HDFS, Pig, R and Ambari Interface",
                    "Worked on Entity-relationship model involving logical (conceptual) design, relationships and physical tables for Casino Management System"
                    ]
            },

            {
                "title": "PHP ONLINE SHOPPING WEBSITE, FDU, NJ",
                "dates": "AUG 2014 - DEC 2014",
                "description": [

                        "Developed FoodMart Application as part of ‘Programing for Internet’ class with weekly review by Professor using MySQL and PHP",
                        "Developed web application using PHP Server-side script- and related skills like DOM, HTML5, CSS3, Javascript, Ajax"
                        ]
            },
            {
                "title": "BANK CREDIT ACCOUNT MANAGEMENT SYSTEM - JAVA BASED APPLICATION, FDU, NJ",
                "dates": "JAN 2014 - MAY 2014",
                "description": [
                        "Developed multi-tier Bank account application based on Java, JSP and SQL Server with both stand-alone and web-based interface",
                        "Database project involving table design and sample data population for a Bank loan department using Oracle SQL commands via SqlPlus"
                        ]
            }

        ],

        displayCollProj: function() {

            projects.collegeProjects.forEach(function(element){
                $("#coll_projects").append(HTMLcollprojectStart);


                var formattedTitle = HTMLcollprojectTitle.replace("%data%",element.title);
                $(".coll-project-entry:last").append(formattedTitle);

                var formattedDates = HTMLcollprojectDates.replace("%data%",element.dates);
                $(".coll-project-entry:last").append(formattedDates);

                $(".coll-project-entry:last").append(HTMLcollprojectDescription);


                element.description.forEach(function(elem) {
                    var formattedDes = HTMLcollprojectDesList.replace("%data%", elem);
                    $(".coll_description:last").append(formattedDes);
                });
                // var formattedDescription = HTMLcollprojectDescription.replace("%data%", element.description);


            });
        }
    }

    function letConnect() {
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            $("#footerContacts").append(formattedMobile);

            var formattedEmail = HTMLemail.replace("%data%",  bio.contacts.email);
            $("#footerContacts:last").append(formattedEmail);

            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            $("#footerContacts:last").append(formattedGithub);

            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            $("#footerContacts:last").append(formattedLocation);
    }

    $("#workExperience").on("click", function(){
        $('.description_div').slideToggle(0, function(){
            $('.collapseExp').text(function(){
                return $('.description_div').is(":visible")? "Collapse" : "Expand";
            });
        });

    });

    $("#coll_projects").on("click", function(){
        $('.coll_description_div').slideToggle(0, function(){
            $('.collapseExp1').text(function(){
                return $('.coll_description_div').is(":visible")? "Collapse" : "Expand";
            });
        });
    });

    $("#education").on("click", function(){
        $(".education-entry").slideToggle(0, function(){
            $('.collapseExp2').text(function(){
                return $('.education-entry').is(":visible")? "Collapse" : "Expand";
            });
        });;
    });

    $("#courses").on("click", function(){
        $('.course-entry').slideToggle(0, function(){
            $('.collapseExp3').text(function(){
                return $('.course-entry').is(":visible")? "Collapse" : "Expand";
            });
        });;
    });

    $("#online_courses").on("click", function(){
        console.log("I am clicked");
        $('.online-entry').slideToggle(0, function() {
            console.log("I am clicked too");
            $('.collapseExp4').text(function(){
                return $('.online-entry').is(":visible")? "Collapse" : "Expand"
            })
        })
    });


    bio.displayBio();
    bio.displayBioContacts();
    bio.displayBioPro_summery();
    bio.displaySkills();

    education.displayEduction();
    education.displayOnlinecourses();
    education.displayRelatedCourses();

    work.displayWork();
    work.displayWorkLocation();
    projects.displayCollProj();

    letConnect();



