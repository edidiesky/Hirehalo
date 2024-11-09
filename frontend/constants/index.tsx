import { FiSettings } from "react-icons/fi";
import { BiMessage, BiSolidDashboard, BiStats } from "react-icons/bi";
import { BsLuggage } from "react-icons/bs";
export const userDashboardLinks = [
    {
        id: 1,
        tab: {
            title: "Dashboard",
            path: "/user",
            icon: <BiSolidDashboard fontSize={"24px"} />,
        },
        list: [],
    },
    {
        id: 200,
        tab: {
            icon: <FiSettings fontSize={"20px"} />,
            title: "Candidate Profile",
            path: "/user/profile",
        },
        list: [],
    },
    {
        id: 61,
        tab: {
            icon: <BsLuggage fontSize={"22px"} />,
            title: "Jobs",
            path: "/user/jobs",
        },
        list: [],
    },
    {
        id: 6,
        tab: {
            icon: <BsLuggage fontSize={"22px"} />,
            title: "Applied Jobs",
            path: "/user/applied-jobs",
        },
        list: [],
    },
    {
        id: 6,
        tab: {
            icon: <BiMessage fontSize={"23px"} />,
            title: "Messages",
            path: "/user/message",
        },
        list: [],
    },
]

export const recruiterDashboardLinks = [
    {
        id: 1,
        tab: {
            title: "Dashboard",
            path: "/recruiter",
            icon: <BiSolidDashboard fontSize={"24px"} />,
        },
        list: [],
    },
    {
        id: 250,
        tab: {
            icon: <FiSettings fontSize={"20px"} />,
            title: "Candidates",
            path: "/recruiter/candidates",
        },
        list: [],
    },
    {
        id: 61,
        tab: {
            icon: <BsLuggage fontSize={"22px"} />,
            title: "Jobs",
            path: "/recruiter/jobs",
        },
        list: [],
    },
    {
        id: 200,
        tab: {
            icon: <BsLuggage fontSize={"20px"} />,
            title: "Interviews",
            path: "/recruiter/interviews",
        },
        list: [],
    },
    {
        id: 210,
        tab: {
            icon: <BiStats fontSize={"20px"} />,
            title: "Stats",
            path: "/recruiter/stats",
        },
        list: [],
    },
    {
        id: 6,
        tab: {
            icon: <BiMessage fontSize={"23px"} />,
            title: "Messages",
            path: "/recruiter/message",
        },
        list: [],
    },
    {
        id: 210,
        tab: {
            icon: <FiSettings fontSize={"20px"} />,
            title: "Profile",
            path: "/recruiter/profile",
        },
        list: [],
    },
]

export const widgetData = [
    {
        title: "Applied Jobs",
        subtext: "Browse your applied jobs here and check their respective progress..",
        bgColor: "#cdeed3",
        icon: <BsLuggage fontSize={"24px"} />,
        color: "#347345"
    },
    {
        title: "Messages",
        subtext: "Browse your applied jobs here and check their respective progress..",
        bgColor: "#deddff",
        icon: <BiMessage fontSize={"24px"} />,
        color: "#347345"
    }, {
        title: "Pending Jobs",
        subtext: "Browse your applied jobs here and check their respective progress..",
        bgColor: "#ffeec3",
        icon: <BsLuggage fontSize={"24px"} />,
        color: "#347345"
    }, {
        title: "Reviewed Jobs",
        subtext: "Browse your applied jobs here and check their respective progress..",
        bgColor: "#f3f3f1",
        icon: <BsLuggage fontSize={"24px"} />,
        color: "#347345"
    },
]

export const applicantsData = [
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Javascript Developer",
        joblocation: "onsite",
        company: "Proxify",
        ApplicationStatus: "PENDING",
        bgColor: "#FFE1CC",
        companyImage: "/images/Proxify.png",
        applicantName: "Mary Benjamin",
        applicantLevel: "Senior Developer",
        dateApplied: "21st November 2024",
        applicationStatus: "Hiring",
        applicantImage: "/images/face/avatar_1.jpg"
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Senior Phyton Developer",
        joblocation: "hybrid",
        company: "Zello",
        ApplicationStatus: "ACTIVE",
        bgColor: "#D4F6ED",
        companyImage: "/images/Zello.png",
        applicantName: "Dainne Russel",
        applicantLevel: "Junior Developer",
        dateApplied: "21st November 2024",
        applicationStatus: "Hiring",
        applicantImage: "/images/face/avatar_2.png"
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Senior Full Stack Developer",
        joblocation: "remote",
        company: "alteroffice",
        ApplicationStatus: "HIRED",
        bgColor: "#ffe1cc",
        companyImage: "/images/alteroffice.png",
        applicantName: "Phillip Goodwill",
        applicantLevel: "Junior Developer",
        dateApplied: "21st November 2024",
        applicationStatus: "Rejected",
        applicantImage: "/images/face/avatar_3.png"
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Javascript Developer",
        joblocation: "onsite",
        company: "Proxify",
        ApplicationStatus: "PENDING",
        bgColor: "#FFE1CC",
        companyImage: "/images/Proxify.png",
        applicantName: "Mary Benjamin",
        applicantLevel: "Senior Developer",
        dateApplied: "21st November 2024",
        applicationStatus: "Hiring",
        applicantImage: "/images/face/avatar_1.jpg"
    },

]

export const jobData = [
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Entry-level Javascript Developer",
        joblocation: "onsite",
        company: "Proxify",
        ApplicationStatus: "PENDING",
        bgColor: "#FFE1CC",
        companyImage: "/images/Proxify.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Senior Phyton Developer",
        joblocation: "hybrid",
        company: "Zello",
        ApplicationStatus: "ACTIVE",
        bgColor: "#D4F6ED",
        companyImage: "/images/Zello.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Senior Full Stack Developer",
        joblocation: "remote",
        company: "alteroffice",
        ApplicationStatus: "HIRED",
        bgColor: "#ffe1cc",
        companyImage: "/images/alteroffice.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "A mid-level UI/UX Designer",
        joblocation: "On Site",
        company: "Cuso Agency",
        ApplicationStatus: "PENDING",
        bgColor: "#E8F2FC",
        companyImage: "/images/Cuso.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Junior Backend Developer",
        joblocation: "remote",
        company: "fitz Industry",
        ApplicationStatus: "PENDING",
        bgColor: "#D4F6ED",
        companyImage: "/images/fitz.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Senior Graphics Designer",
        joblocation: "onsite",
        company: "givety",
        ApplicationStatus: "PENDING",
        bgColor: "#eceff4",
        companyImage: "/images/givety.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Senior Frontend Developer",
        joblocation: "onsite",
        company: "justplay",
        ApplicationStatus: "PENDING",
        bgColor: "#e3dbfa",
        companyImage: "/images/justplay.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Javascript Developer",
        joblocation: "hybrid",
        company: "NJGotham",
        ApplicationStatus: "PENDING",
        bgColor: "#F9F6FF",
        companyImage: "/images/NJGotham.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Senior Backend Developer",
        joblocation: "onsite",
        company: "nooro",
        ApplicationStatus: "PENDING",
        bgColor: "#e3dbfa",
        companyImage: "/images/nooro.jpg",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "A mid-level UI/UX Designer",
        joblocation: "On Site",
        company: "one",
        ApplicationStatus: "PENDING",
        bgColor: "#d4f6ed",
        companyImage: "/images/one.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Javascript Developer",
        joblocation: "remote",
        company: "Onefil",
        ApplicationStatus: "PENDING",
        bgColor: "#d4f6ed",
        companyImage: "/images/Onefil.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Enter-level UI/UX Designer",
        joblocation: "remote",
        company: "Productive",
        ApplicationStatus: "PENDING",
        bgColor: "#e3dbfa",
        companyImage: "/images/Productive.jpg",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Junior Full-Stack Developer",
        joblocation: "onsite",
        company: "samelist",
        ApplicationStatus: "PENDING",
        bgColor: "#d4f6ed",
        companyImage: "/images/samelist.png",
    },

    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Junior Backend Developer",
        joblocation: "remote",
        company: "starlight",
        ApplicationStatus: "PENDING",
        bgColor: "#e3dbfa",
        companyImage: "/images/starlight.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Senior Graphics Designer",
        joblocation: "remote",
        company: "tenkara",
        ApplicationStatus: "PENDING",
        bgColor: "#e3dbfa",
        companyImage: "/images/tenkara.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Mid-level Frontend Developer",
        joblocation: "remote",
        company: "vargheese Summeeitt",
        ApplicationStatus: "PENDING",
        bgColor: "#F9F6FF",
        companyImage: "/images/vargheese.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Javascript Developer",
        joblocation: "onsite",
        company: "wills",
        ApplicationStatus: "PENDING",
        bgColor: "#fbe2f4",
        companyImage: "/images/wills.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Senior React Developer",
        joblocation: "hybrid",
        company: "xm",
        ApplicationStatus: "PENDING",
        bgColor: "#ffe1cc",
        companyImage: "/images/xm.png",
    },
    {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Entry Level AI/ML Engineer",
        joblocation: "onsite",
        company: "xs",
        ApplicationStatus: "PENDING",
        bgColor: "#FFE1CC",
        companyImage: "/images/xs.png",
    },
];

export const whyChooseUs = [
    {
        text: "Time Saving Efficiency",
        subtext: "Hirehalo heps you to Stop wasting time scouting for multiple openings on job board ans company websites. Our comprehensive search enggine can cater for your dream job search listings from a variety of network sources",
        icon: ""
    },
    {
        text: "Personalized Results",
        subtext: "We can Tailor your job search based on your unique goals. Save your search filters and receive instant alerts whenever your new job opportunites matching your criteria are being posted",
        icon: ""
    }, {
        text: "Uncover Hidden Gems",
        subtext: "HireHalo Go beyond basic job boards and access a wider pool of job postings from diverse sources",
        icon: ""
    }, {
        text: "UnMatched Accuracy",
        subtext: "We know you need advanced search and filter system, so we provide you the ability to target and search for the exact type you need for your job search",
        icon: ""
    }, {
        text: "Save Valuable Time",
        subtext: "We know you need advanced search and filter system, so we provide you the ability to target and search for the exact type you need for your job search",
        icon: ""
    }, {
        text: "Laser Focus Your  Search",
        subtext: "We know you need advanced search and filter system, so we provide you the ability to target and search for the exact type you need for your job search",
        icon: ""
    },
]
// candidate Mock Data
export const ApplicantDataList = [
    {
        "hired": [
            {
                ApplicantName: "Hans Christain",
                ApplicantImage: "/images/face/avatar_1.jpg",
                jobtitle: "Entry-level Javascript Developer",
                company: "Proxify",
                bgColor: "#FFE1CC",
            },
            {
                ApplicantName: "Vicentius Raggia",
                ApplicantImage: "/images/face/avatar_2.png",
                jobtitle: "UI / UX Developer",
                company: "Proxify",
                bgColor: "#FFE1CC",
            },

        ]
    },
    {
        "pending": [
            {
                ApplicantName: "Herola Francis",
                ApplicantImage: "/images/face/avatar_3.png",
                jobtitle: "Entry-level Javascript Developer",
                company: "Proxify",
                bgColor: "#FFE1CC",
            },
            {
                ApplicantName: "Promise Raggia",
                ApplicantImage: "/images/face/avatar_1.jpg",
                jobtitle: "UI / UX Developer",
                company: "Proxify",
                bgColor: "#FFE1CC",
            },
            {
                ApplicantName: "Lisa Havrley",
                ApplicantImage: "/images/face/avatar_3.png",
                jobtitle: "Frontend Developer",
                company: "Proxify",
                bgColor: "#FFE1CC",
            },
            {
                ApplicantName: "Caroline Ziconni",
                ApplicantImage: "/images/face/avatar_4.png",
                jobtitle: "UI / UX Developer",
                company: "Proxify",
                bgColor: "#FFE1CC",
            },
        ]
    },
    {
        "outsourced": [
            {
                ApplicantName: "Hans Christain",
                ApplicantImage: "/images/face/avatar_1.jpg",
                jobtitle: "Entry-level Javascript Developer",
                company: "Proxify",
                bgColor: "#FFE1CC",
            },
            {
                ApplicantName: "Vicentius Raggia",
                ApplicantImage: "/images/face/avatar_2.png",
                jobtitle: "UI / UX Developer",
                company: "Proxify",
                bgColor: "#FFE1CC",
            },
            {
                ApplicantName: "Lisa Havrley",
                ApplicantImage: "/images/face/avatar_3.png",
                jobtitle: "Frontend Developer",
                company: "Proxify",
                bgColor: "#FFE1CC",
            }
        ]
    },
    {
        "internal interview": [
            {
                ApplicantName: "Hans Christain",
                ApplicantImage: "/images/face/avatar_1.jpg",
                jobtitle: "Entry-level Javascript Developer",
                company: "Proxify",
                bgColor: "#FFE1CC",
            },
        ]
    }
]

// job filter type data
export const JobfilterData = [
    "Full Time",
    "Internship",
    "Freelance",
    "Volunteer",
]

export const LocationfilterData = [
    "Remote",
    "On-site",
    "Hybrid",
]


// application form data type
export type ApplicationFormDataType = {
    candidatename: string;
    username: string;
    email: string;
    linkedln: string;
    country: string;
    salary: string;
    employmentScholarship: boolean;
    authorizationToWork: boolean;
    englishFluency: boolean;
    noticePeriod: boolean;
};

export type ProfileFormDataItem = {
    id: number;
    name: keyof FormValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};
export type FormValueType = {
    name: string;
    username: string;
    email: string;
    linkedln: string;
    country: string;
    password: string;
    salary?: string
};

// -------- Login form Data Type Start ----------------------
export type LoginValueType = {
    email: string;
    password: string;
};
export type LoginFormDataItem = {
    id: number;
    name: keyof LoginValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};
// -------- Login form Data Type End ----------------------

// -------- Register form Data Type Start ----------------------
export type RegisterValueType = {
    email: string;
    password: string;
    name: string;
    username: string;
};
export type RegisterFormDataItem = {
    id: number;
    name: keyof RegisterValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};
// -------- Login form Data Type End ----------------------

export type ApplicationFormDataItem = {
    id: number;
    name: keyof FormValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};

export type PasswordFormValueType = {
    password: string;
    confirmpassword: string;
};

export type ProfilePasswordDataItem = {
    id: number;
    name: keyof PasswordFormValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};



// --------------------------- form Data List Start --------------------
export const ApplicationFormData: ApplicationFormDataItem[] = [
    {
        id: 4,
        name: "name",
        type: "text",
        text: "Please enter your Name",
        label: "Please enter your Name",
        required: true,
    },
    {
        id: 43,
        name: "username",
        type: "text",
        text: "Please enter your preferred Name",
        label: "Please enter your preferred Name",
        required: true,
    },
    {
        id: 1,
        name: "email",
        type: "email",
        text: "Please enter your Email",
        label: "Please enter your Email",
        required: true,
    },
    {
        id: 42,
        name: "linkedln",
        type: "text",
        text: "Please enter your Linkedin Profile",
        label: "Please enter your Linkedin Profile",
        required: true,
    },
    {
        id: 44,
        name: "salary",
        type: "text",
        text: "Please enter your Annual Expectation in USD?",
        label: "Please enter your Annual Expectation in USD?",
        required: true,
    },
];

export const ProfileFormData: ProfileFormDataItem[] = [
    {
        id: 4,
        name: "name",
        type: "text",
        text: "Change your Name",
        label: "Alfred Dow",
        required: true,
    },
    {
        id: 43,
        name: "username",
        type: "text",
        text: "Change your preferred Name",
        label: "JohnDoe123",
        required: true,
    },
    {
        id: 1,
        name: "email",
        type: "email",
        text: "Change your Email",
        label: "hello@example.com",
        required: true,
    },
    {
        id: 42,
        name: "linkedln",
        type: "text",
        text: "Change your Linkedin Profile",
        label: "linkedin.com/in/johndoe3",
        required: true,
    },
];
export const LoginFormData: LoginFormDataItem[] = [
    {
        id: 1,
        name: "email",
        type: "email",
        text: "Email",
        label: "hello@example.com",
        required: true,
    },
    {
        id: 4,
        name: "password",
        type: "password",
        text: "Password",
        label: "my password",
        required: true,
    },
  
];
export const RegisterFormData: RegisterFormDataItem[] = [
    {
        id: 12,
        name: "name",
        type: "text",
        text: "Name",
        label: "Jane Doe",
        required: true,
    },
    {
        id: 12,
        name: "username",
        type: "text",
        text: "UserName",
        label: "JaneDoe@",
        required: true,
    },
    {
        id: 1,
        name: "email",
        type: "email",
        text: "Email",
        label: "hello@example.com",
        required: true,
    },
    {
        id: 4,
        name: "password",
        type: "password",
        text: "Password",
        label: "my password",
        required: true,
    },

];
export const PasswordFormData: ProfilePasswordDataItem[] = [
    {
        id: 4,
        name: "password",
        type: "password",
        text: "Change your Password",
        label: "my password",
        required: true,
    },
    {
        id: 43,
        name: "confirmpassword",
        type: "password",
        text: "Change your preferred Password",
        label: "Confirm your password",
        required: true,
    },
];

// --------------------------- form Data List End --------------------


// ------------- API REQUEST ROUTE -----------------
export const BASE_URL =
    process.env.NODE_ENV === "development" ? "http://localhost:4000" : "";

export const JOB_URL = "/api/v1/job";
export const USERS_URL = "/api/v1/users";
export const AUTH_URL = "/api/v1/auth";
export const UPLOAD_URL = "/api/v1/upload";
export const APPLICATION_URL = "/api/v1/application";

// ------------- API REQUEST ROUTE END -----------------





