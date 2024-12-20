package data

import (
	"log"
	"time"

	"github.com/edidiesky/hirehalo/backend/models"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func getAuthorId(id string) primitive.ObjectID {
	objid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		log.Fatalf("Invalid ObjectID: %v", err)
	}
	return objid
}

var JobData = []models.Job{
	// CodeWave Solutions start (3)
	{
		ID:          primitive.NewObjectID(),
		Salary:      400,
		Experience:  4,
		Title:       "Full Stack Developer",
		Description: "We’re looking for a Full Stack Developer with expertise in both front-end and back-end technologies to develop dynamic web applications. Your role will include building RESTful APIs, designing front-end features, and managing databases. Ideal candidates have experience with JavaScript, Node.js, and PostgreSQL and are passionate about learning new frameworks and tech stacks.",
		Responsibility: []string{
			"Develop and maintain web applications from scratch.",
			"Collaborate with cross-functional teams to integrate various software systems.",
			"Manage deployments and monitor application performance.",
		},
		Company:        "CodeWave Solutions",
		JobLocation:    "Remote",
		EmploymentType: "Full Time",
		Location:       "San-Fransico, United States of America",
		// Remote:          false,
		CompanyLogo: "/images/Zello.png",

		ExperienceLevel: "Entry-level",
		Skills:          []string{"JavaScript", "Graphql", "MongoDB", "React", "Node.JS", "HTML", "CSS"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#FFE1CC",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:          primitive.NewObjectID(),
		Salary:      100,
		Experience:  8,
		Title:       "Senior Backend Developer (Ruby on Rails)",
		Description: "Join our team as a Senior Backend Developer specializing in Ruby on Rails. This role involves developing and maintaining our eCommerce platform, including payment systems and user accounts",
		Responsibility: []string{
			"Proficiency in Ruby and Ruby on Rails",
			"Knowledge of PostgreSQL and Redis",
			"Familiarity with TDD/BDD",
		},
		Company:        "Fitz",
		JobLocation:    "Hybrid",
		EmploymentType: "Full Time",
		Location:       "Lagos, Nigeria",
		CompanyLogo:    "/images/fitz.png",
		ExperienceLevel: "Senior-level",
		Skills:          []string{"Ruby", "Rails", "Sidekiw", "Redis", "Docker", "CI/CD"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#D4F6ED",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:          primitive.NewObjectID(),
		Salary:      200,
		Experience:  4,
		Title:       "React Developer (Healthcare)",
		Description: "Develop user interfaces for RapidTech Solutions, a government based applications, focusing on user-friendly design and robust data handling for sensitive information.",
		Company:     "RapidTech Solutions",
		Responsibility: []string{
			"Develop and maintain web applications from scratch.",
			"Collaborate with cross-functional teams to integrate various software systems.",
			"Manage deployments and monitor application performance.",
		},
		JobLocation:    "Remote",
		EmploymentType: "Contract",
		Location:       "New York, United States of America",
		// Remote:          false,
		CompanyLogo: "/images/justplay.png",

		ExperienceLevel: "Entry-level",
		Skills:          []string{"JavaScript", "HTML", "CSS"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#ffe1cc",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:          primitive.NewObjectID(),
		Salary:      400,
		Experience:  8,
		Title:       "Senior React Developer",
		Description: "Lead the development of large-scale applications. This position involves mentoring junior developers and ensuring adherence to industry standards.",
		Responsibility: []string{
			"Develop and maintain web applications from scratch.",
			"Collaborate with cross-functional teams to integrate various software systems.",
			"Manage deployments and monitor application performance.",
		},
		Company:        "CodeWave Solutions",
		JobLocation:    "On-site",
		EmploymentType: "Internship",
		Location:       "London, United Kingdom",
		// Remote:          false,
		CompanyLogo: "/images/Zello.png",

		ExperienceLevel: "Entry-level",
		Skills:          []string{"JavaScript", "Graphql", "MongoDB", "React", "Node.JS", "HTML", "CSS"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#E8F2FC",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	// CodeWave Solutions end(3)
	// Insight Analytics (4)
	{
		ID:          primitive.NewObjectID(),
		Salary:      40,
		Experience:  8,
		Title:       "Senior React Developer",
		Description: "Insight Analytics is seeking a Data Scientist to analyze vast amounts of data, deriving actionable insights that drive decision-making. Applicants should have expertise in Python, SQL, and machine learning frameworks like TensorFlow or PyTorch. This role involves data mining, predictive modeling, and presenting findings to stakeholders.",
		Responsibility: []string{
			"Analyze data and identify trends for optimization and growth",
			"Develop and implement machine learning algorithms.",
			"Collaborate with data engineers to build scalable data solutions.",
		},
		Company:        "Insight Analytics",
		JobLocation:    "On-site",
		EmploymentType: "Internship",
		Location:       "San Francisco, United States of America York, NY",
		// Remote:          false,
		CompanyLogo: "/images/Zello.png",

		ExperienceLevel: "Entry-level",
		Skills:          []string{"PyTorch", "Phyton", "TensorFlow", "SQL"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#D4F6ED",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:          primitive.NewObjectID(),
		Salary:      30,
		Experience:  4,
		Title:       "Backend Developer (Go)",
		Description: "ScaleOps is looking for a Backend Developer with expertise in Go to build and scale APIs. This role requires a strong grasp of microservices and distributed systems and familiarity with gRPC.",
		Responsibility: []string{
			"Familiarity with NoSQL databases like Cassandra or DynamoDB",
			"Experience with gRPC and REST APIs",
			"Strong Go programming skills",
		},
		Company:        "ScaleOps",
		JobLocation:    "On-site",
		EmploymentType: "Internship",
		Location:       "San Francisco, United States of America",
		// On-site:          true,
		CompanyLogo: "/images/fitz.png",

		ExperienceLevel: "Senior-level",
		Skills:          []string{"Go", "Dynamodb", "Cassandra", "Redis", "Docker", "CI/CD"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#eceff4",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:          primitive.NewObjectID(),
		Salary:      200,
		Experience:  4,
		Title:       "Full Stack Developer",
		Description: "We’re looking for a Full Stack Developer with expertise in both front-end and back-end technologies to develop dynamic web applications. Your role will include building RESTful APIs, designing front-end features, and managing databases. Ideal candidates have experience with JavaScript, Node.js, and PostgreSQL and are passionate about learning new frameworks and tech stacks.",
		Responsibility: []string{
			"Develop and maintain web applications from scratch.",
			"Collaborate with cross-functional teams to integrate various software systems.",
			"Manage deployments and monitor application performance.",
		},
		Company:        "Insight Analytics",
		JobLocation:    "On-site",
		EmploymentType: "Internship",
		Location:       "Lagos, Nigeria",
		// On-site:          false,
		CompanyLogo: "/images/Zello.png",

		ExperienceLevel: "Entry-level",
		Skills:          []string{"JavaScript", "Graphql", "MongoDB", "React", "Node.JS", "HTML", "CSS"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#e3dbfa",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:          primitive.NewObjectID(),
		Salary:      50,
		Experience:  4,
		Title:       "Backend Developer",
		Description: "We’re looking for a Backend Developer with expertise in back-end technologies to develop dynamic web applications. Your role will include building RESTful APIs, designing front-end features, and managing databases. Ideal candidates have experience with JavaScript, Node.js, and PostgreSQL and are passionate about learning new frameworks and tech stacks.",
		Responsibility: []string{
			"Develop and maintain web applications from scratch.",
			"Collaborate with cross-functional teams to integrate various software systems.",
			"Manage deployments and monitor application performance.",
		},
		Company:        "Insight Analytics",
		JobLocation:    "Hybrid",
		EmploymentType: "Full Time",
		Location:       "Lagos, Nigeria",
		// On-site:          true,
		CompanyLogo: "/images/Zello.png",

		ExperienceLevel: "Entry-level",
		Skills:          []string{"Phyton", "Graphql", "MongoDB", "Jest"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#F9F6FF",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:          primitive.NewObjectID(),
		Salary:      60,
		Experience:  8,
		Title:       "Senior Backend Developer",
		Description: "We’re looking for a Senior Backend Developer with expertise in back-end technologies to develop dynamic web applications. Your role will include building RESTful APIs, designing front-end features, and managing databases. Ideal candidates have experience with JavaScript, Node.js, and PostgreSQL and are passionate about learning new frameworks and tech stacks.",
		Responsibility: []string{
			"Develop and maintain web applications from scratch.",
			"Collaborate with cross-functional teams to integrate various software systems.",
			"Manage deployments and monitor application performance.",
		},
		Company:        "Insight Analytics",
		JobLocation:    "On-site",
		EmploymentType: "Internship",
		Location:       "Lagos, Nigeria",
		// On-site:          true,
		CompanyLogo: "/images/Zello.png",

		ExperienceLevel: "Entry-level",
		Skills:          []string{"Phyton", "Graphql", "MongoDB", "Jest"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#e3dbfa",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	// Insight Analytics end (4)
	// CloudVentures start(2)
	{
		ID:          primitive.NewObjectID(),
		Salary:      120,
		Experience:  4,
		Title:       "DevOps Engineer",
		Description: "Join CloudVentures as a DevOps Engineer to help streamline our CI/CD processes and enhance system reliability. You’ll work with cloud platforms like AWS, Docker, and Kubernetes, improving automation and incident management. Candidates should have a strong scripting background in Bash or Python and experience with Jenkins or GitLab CI/CD.",
		Responsibility: []string{
			"Optimize and automate the deployment pipeline",
			"Monitor, troubleshoot, and maintain cloud-based infrastructure.",
			"Implement best practices in system security and data protection.",
		},
		Company:        "CloudVentures start",
		JobLocation:    "Hybrid",
		EmploymentType: "Full Time",
		Location:       "San Francisco, United States of America",
		// On-site:          false,
		CompanyLogo: "/images/Cuso.png",

		ExperienceLevel: "Entry-level",
		Skills:          []string{"Phyton", "GitLab CI/CD", "Jenkins", "Bash", "Kubernetes", "Docker", "AWS"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#d4f6ed",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:          primitive.NewObjectID(),
		Salary:      80,
		Experience:  8,
		Title:       "Senior Backend Engineer",
		Description: "Join CloudVentures as a Senior Backend Engineer to help streamline our CI/CD processes and enhance system reliability. You’ll work with cloud platforms like AWS, Docker, and Kubernetes, improving automation and incident management. Candidates should have a strong scripting background in Bash or Python and experience with Jenkins or GitLab CI/CD.",
		Responsibility: []string{
			"Optimize and automate the deployment pipeline",
			"Monitor, troubleshoot, and maintain cloud-based infrastructure.",
			"Implement best practices in system security and data protection.",
		},
		Company:        "CloudVentures start",
		JobLocation:    "On-site",
		EmploymentType: "Internship",
		Location:       "San Francisco, United States of America, TX",
		// Remote:          false,
		CompanyLogo: "/images/Cuso.png",

		ExperienceLevel: "Senior-level",
		Skills:          []string{"Phyton", "GitLab CI/CD", "Jenkins", "Bash", "Kubernetes", "Docker", "AWS"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#d4f6ed",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	// CloudVentures end(2)
	// TrendyTech start(2)
	{
		ID:          primitive.NewObjectID(),
		Salary:      40,
		Experience:  4,
		Title:       "Mobile App Developer (iOS)",
		Description: "TrendyTech is seeking an iOS Developer to create user-friendly, engaging applications that will shape the future of mobile shopping. This role is perfect for someone with experience in Swift, UIKit, and REST APIs. As a team member, you’ll work closely with designers to ensure a seamless user experience.",
		Company:     "TrendyTech",
		Responsibility: []string{
			"Develop high-quality iOS applications.",
			"Troubleshoot and debug to optimize performance.",
			"Collaborate with cross-functional teams on new features and improvements.",
		},
		JobLocation:    "Remote",
		EmploymentType: "Contract",
		Location:       "San Francisco, United States of America - Los Angeles",
		// Remote:          false,
		CompanyLogo: "/images/tenkara.png",

		ExperienceLevel: "Entry-level",
		Skills:          []string{"Swift", "REST API'S", "UIKit"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#e3dbfa",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:          primitive.NewObjectID(),
		Company:     "TrendyTech",
		Salary:      90,
		Experience:  8,
		Title:       "Senior Backend Engineer",
		Description: "Join TrendyTech as a Senior Backend Engineer to help streamline our CI/CD processes and enhance system reliability. You’ll work with cloud platforms like AWS, Docker, and Kubernetes, improving automation and incident management. Candidates should have a strong scripting background in Bash or Python and experience with Jenkins or GitLab CI/CD.",
		Responsibility: []string{
			"Optimize and automate the deployment pipeline",
			"Monitor, troubleshoot, and maintain cloud-based infrastructure.",
			"Implement best practices in system security and data protection.",
		},
		JobLocation:    "Remote",
		EmploymentType: "Contract",
		Location:       "San Francisco, United States of America",
		CompanyLogo:    "/images/Cuso.png",

		ExperienceLevel: "Senior-level",
		Skills:          []string{"Nodejs", "GitLab CI/CD", "Jenkins", "Bash", "Kubernetes", "Docker", "AWS"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#d4f6ed",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	// TrendyTech end(2)
	// Creative Innovations start (3)
	{
		ID:          primitive.NewObjectID(),
		Salary:      50,
		Experience:  4,
		Title:       "UX/UI Designer",
		Description: "We’re looking for a UX/UI Designer to craft beautiful and intuitive user interfaces for our clients’ products. This position requires proficiency in design tools such as Figma, Adobe XD, and experience conducting user research to inform design decisions.",
		Company:     "Creative Innovations",
		Responsibility: []string{
			"Design wireframes, prototypes, and high-fidelity mockups.",
			"Conduct user testing and iterate on feedback.",
			"Collaborate with developers to ensure design consistency.",
		},
		JobLocation:    "Remote",
		EmploymentType: "Volunteer",
		Location:       "San Francisco, United States of America Angeles",
		CompanyLogo:    "/images/justplay.png",

		ExperienceLevel: "Entry-level",
		Skills:          []string{"Figma", "Webflow", "UIKit"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#e3dbfa",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:          primitive.NewObjectID(),
		Salary:      60,
		Experience:  4,
		Title:       "Database Administrator (DBA)",
		Description: "Creative Innovations is searching for a DBA to manage and optimize our database systems, ensuring high performance and availability. Knowledge of MySQL, PostgreSQL, and backup solutions is crucial. The role involves database tuning, data integrity maintenance, and security management.",
		Company:     "Creative Innovations",
		Responsibility: []string{
			"Implement data replication and backup procedures.",
			"Troubleshoot issues with queries and indexing..",
			"Perform regular system health checks and optimizations.",
		},
		JobLocation:    "On-site",
		EmploymentType: "Internship",
		Location:       "San Francisco, United States of America Angeles",
		// On-site:          true,
		CompanyLogo: "/images/justplay.png",

		ExperienceLevel: "Mid-level",
		Skills:          []string{"MySQL", "PostgreSQL", "Database"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#e3dbfa",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:          primitive.NewObjectID(),
		Salary:      70,
		Experience:  4,
		Title:       "Cybersecurity Analyst",
		Description: "Creative Innovation is hiring a Cybersecurity Analyst to protect digital assets and safeguard sensitive data. The ideal candidate has experience in threat analysis, vulnerability management, and knowledge of compliance frameworks (e.g., ISO, NIST). Strong analytical and problem-solving skills are essential.",
		Company:     "Creative Innovations",
		Responsibility: []string{
			"Monitor and respond to security incidents.",
			"Perform vulnerability assessments and mitigate risks.",
			"Develop security policies and practices across the organization.",
		},
		JobLocation:    "On-site",
		EmploymentType: "Internship",
		Location:       "Los-Angeles, United States of America",
		CompanyLogo:    "/images/justplay.png",

		ExperienceLevel: "Mid-level",
		Skills:          []string{"MySQL", "PostgreSQL", "Database"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#e3dbfa",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	// Creative Innovations end (3)
	// NJGotham Systems start (4)
	{
		ID:          primitive.NewObjectID(),
		Salary:      90,
		Experience:  4,
		Title:       "Backend Developer (Node.js)",
		Description: "We’re looking for a Node.js Backend Developer to create APIs and backend services for our data processing platform. The ideal candidate should be proficient in Node.js and have experience with MongoDB and Redis.",
		Responsibility: []string{
			"Proficiency in Node.js and Express.js",
			"Knowledge of RESTful API design",
			"Familiarity with Docker and CI/CD pipelines",
		},
		Company:        "NJGotham",
		JobLocation:    "Remote",
		EmploymentType: "Contract",
		Location:       "San Francisco, United States of America",
		CompanyLogo:    "/images/NJGotham.png",

		ExperienceLevel: "Entry-level",
		Skills:          []string{"JavaScript", "Graphql", "MongoDB", "Redis", "Node.JS", "Docker", "CI/CD"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#F9F6FF",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:          primitive.NewObjectID(),
		Salary:      30,
		Experience:  4,
		Title:       "UI/Frontend Developer (React + Typescript)",
		Description: "NJGotham seeking a skilled UI/Frontend Developer who can build highly responsive UIs in React and TypeScript. This role involves translating UI/UX designs into code and ensuring the technical feasibility of UI designs.",
		Responsibility: []string{
			"Strong expertise in React, TypeScript, and Redux",
			"Proficiency in CSS Modules or styled-components",
			"Familiarity with Webpack and Babel",
		},
		Company:        "NJGotham",
		JobLocation:    "Remote",
		EmploymentType: "Volunteer",
		Location:       "San Francisco, United States of America",
		CompanyLogo:    "/images/NJGotham.png",

		ExperienceLevel: "Entry-level",
		Skills:          []string{"JavaScript", "Typescript", "MongoDB", "React", "Node.JS", "HTML", "CSS"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#F9F6FF",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
	{
		ID:         primitive.NewObjectID(),
		Salary:     200,
		Experience: 8,
		Title:      "Senior Frontend Developer ",

		Description: "As a Senior Frontend Developer, you’ll lead the development of healthcare applications using Angular. You will work closely with product teams to create intuitive, user-friendly interfaces. Experience in building large-scale, data-driven apps is a must.",
		Responsibility: []string{
			"Proficiency in Angular (2+), RxJS, and NgRx",
			"Strong understanding of TypeScript and SCSS",
			"Knowledge of testing frameworks like Jasmine and Karma Experience with RESTful APIs and GraphQL",
		},
		Company:        "NJGotham",
		JobLocation:    "Remote",
		EmploymentType: "Contract",
		Location:       "San Francisco, United States of America",
		CompanyLogo:    "/images/NJGotham.png",
		ExperienceLevel: "Entry-level",
		Skills:          []string{"JavaScript", "SCSS", "RxJS", "TypeScript", "Angular", "Node.JS", "HTML", "CSS"},
		Application:     []models.Application{}, // Assuming Application is defined in the models package
		PostedAt:        time.Now(),
		UpdatedAt:       time.Now(),
		BgColor:         "#fbe2f4",
		AuthorId:        getAuthorId("66fc4acccb98ee6f5c2203b6"),
	},
}
