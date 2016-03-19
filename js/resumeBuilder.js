//bio object, including contact and location information
var bio = {
    'name' : 'Jessica Miles',
    'role' : 'Programmer, Technical Communicator, and Web Developer',
    'contacts' : {
        'mobile' : '407-701-5342',
        'email' : 'jess.c.miles@gmail.com',
        'github' : 'thetriggestcove',
        'twitter' : '',
        'location' : 'New York City, NY'
        },
    'welcomeMessage' : 'I have worked in the field of electronic discovery and litigation support ' +
                       'for over 7 years, during which time I have not only learned to use many different ' +
                       'software platforms, but also to create my own scripts and utilities in various ' +
                       'programming and scripting languages.<br><br>' + 
                       'Originally an English major, I have excellent oral and written communication skills ' +
                       'and can speak on technical topics to make these topics accessible to people with little ' +
                       'technical knowledge. I have worked to create and document technical processes in several ' +
                       'of my roles, both for use internally and as deliverables for clients. I enjoy the ' +
                       'challenge of writing about technical topics, creating useful tools for my team using ' +
                       'programming and scripting, and engaging in creative problem solving.' +
                       'In my next role, I hope to combine my technical knowledge and development skills ' +
                       'with my passion for writing.',
    'skills' : ['SQL','VB.NET', 'VBA','HTML','JavaScript','documentation','training'],
    'biopic' : 'images/losing-spiders-09.jpg',
    'display' : function () {
    
        $('#header').prepend(
            HTMLheaderName.replace('%data%', bio.name) +
            HTMLheaderRole.replace('%data%', bio.role)
        );
        
        $('#topContacts').append(
            HTMLmobile.replace('%data%', bio.contact.mobile) +
            HTMLemail.replace('%data%', bio.contact.email) +
            HTMLgithub.replace('%data%', bio.contact.github) +
            HTMLlocation.replace('%data%', bio.contact.location)
        );
        
        $('#footerContacts').append(
            HTMLmobile.replace('%data%', bio.contact.mobile) +
            HTMLemail.replace('%data%', bio.contact.email) +
            HTMLgithub.replace('%data%', bio.contact.github) +
            HTMLlocation.replace('%data%', bio.contact.location)
        );
        
        $('#header').append(
            HTMLbioPic.replace('%data%', bio.biopic) +
            HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage)
        );
    
        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            bio.skills.forEach (function(skill) {
                $('#header').append(HTMLskills.replace('%data%', skill));
            });
        }
    }
};
    
//education object, includes degrees and online classes I've taken

var education = {
    'schools' : [
        {
           'name' : 'Sarah Lawrence College',
           'location' : 'Bronxville, NY',
           'degree' : 'n/a',
           'majors' : ['n/a'],
           'dates' : '2003-2004',
           'url' : 'www.sarahlawrence.edu'
        },
        {
           'name' : 'Rollins College',
           'location' : 'Winter Park, FL',
           'degree' : 'B.A.',
           'majors' : ['English'],
           'dates' : '2004-2007',
           'url' : 'www.rollins.edu'
        },
        {
           'name' : 'Udacity',
           'location' : 'Online',
           'degree' : 'Nanodegree',
           'majors' : ['Front-End Web Development'],
           'dates' : '2015-present',
           'url' : 'www.udacity.com'
        }
    ],
    'onlineCourses' : [
        {
            'title' : 'Python',
            'school' : 'NYU School of Continuing and Professional Studies',
            'date' : 'Summer 2014',
            'url' : 'http://www.scps.nyu.edu/'
        },
        {
            'title' : 'Technical Communication 101',
            'school' : 'Society for Technical Communication',
            'date' : 'Summer 2015',
            'url' : 'www.stc.org'
        },
        {
            'title' : 'Technical Communication 201',
            'school' : 'Society for Technical Communication',
            'date' : 'Fall 2015',
            'url' : 'www.stc.org'
        }
    ],
    'display' : function () {
    
        //append schools    
        for (var school_obj in education.schools) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(
                HTMLschoolName.replace('%data%',education.schools[school_obj].name) +
                HTMLschoolDegree.replace('%data%',education.schools[school_obj].degree) +
                HTMLschoolDates.replace('%data%',education.schools[school_obj].dates) +
                HTMLschoolLocation.replace('%data%',education.schools[school_obj].location));
            
            if (education.schools[school_obj].majors.length > 0) {
                $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[school_obj].majors.join(', ')));
            }
        }
        
        //append online classes
        $('#education').append(HTMLonlineClasses);
        
        for (var class_obj in education.onlineCourses) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(
                HTMLonlineTitle.replace('%data%',education.onlineCourses[class_obj].title) +
                HTMLonlineSchool.replace('%data%',education.onlineCourses[class_obj].school) +
                HTMLonlineDates.replace('%data%',education.onlineCourses[class_obj].date) +
                HTMLonlineURL.replace('%data%',education.onlineCourses[class_obj].url)
            );
        }
    }
};

//work object includes employment history
var work = {
    'jobs' : [
        {
            'employer' : 'EY',
            'title' : 'Senior Associate',
            'location' : 'New York City, NY',
            'dates' : '2014-present',
            'description' : 'E-Discovery consulting and technical services.'
        },
        {
            'employer' : 'Epiq Systems',
            'title' : 'Litigation Support Manager',
            'location' : 'New York City, NY',
            'dates' : '2012-2014',
            'description' : 'E-Discovery technical services; later managed Litigation Support Team.'
        },
        {
            'employer' : 'De Novo Legal',
            'title' : 'Input Team Lead',
            'location' : 'New York City, NY',
            'dates' : '2010-2012',
            'description' : 'E-Discovery processing; also led Input Team.'
        },
        {
            'employer' : 'IKON',
            'title' : 'Technical Operations Specialist',
            'location' : 'Orlando, FL',
            'dates' : '2004-2009',
            'description' : 'Technical support related to document scanning and E-Discovery services.'
        }
    ],
    'display' : function() {
        for (var job in work.jobs) {
            
            $('#workExperience').append(HTMLworkStart);
            
            $('.work-entry:last').append(
                HTMLworkEmployer.replace('%data%', work.jobs[job].employer) + 
                HTMLworkTitle.replace('%data%', work.jobs[job].title) +
                HTMLworkLocation.replace('%data%', work.jobs[job].location) +
                HTMLworkDates.replace('%data%', work.jobs[job].dates) +
                HTMLworkDescription.replace('%data%', work.jobs[job].description)
            );
        }
    }
};


//project object contains projects I have completed. Populated with sample data for now.

var projects = {
    'projects' : [
        {
            'title' : 'Sample1',
            'dates' : '2016',
            'description' : 'Sample project 1',
            'images' : ['http://placehold.it/150x150','http://placehold.it/150x150','http://placehold.it/150x150']
        },
        {
            'title' : 'Sample2',
            'dates' : '2016',
            'description' : 'Sample project 2',
            'images' : ['http://placehold.it/150x150','http://placehold.it/150x150','http://placehold.it/150x150']
        }
    ],
    'display' : function () {
        
        for (var proj in projects.projects) {
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(
                HTMLprojectTitle.replace('%data%', projects.projects[proj].title) +
                HTMLprojectDates.replace('%data%', projects.projects[proj].dates) +
                HTMLprojectDescription.replace('%data%', projects.projects[proj].description));
                
            for (var im in projects.projects[proj].images) {
                $('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects.projects[proj].images[im]));
            }
        }
    }
};

//display formatted information in each of the objects, in order
bio.display();
work.display();
projects.display();
education.display();

//Append map to page

$('#mapDiv').append(googleMap);

//function that gets the locations from each object
function locationizer(work_obj) {
    var locations = [];
    for (var jobloc in work_obj.jobs) {
        locations.push(work_obj.jobs[jobloc].location);
    }
    return locations;
}






