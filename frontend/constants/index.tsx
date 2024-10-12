import { FiSettings } from "react-icons/fi";
import { BiMessage, BiSolidDashboard } from "react-icons/bi";
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
        bgColor: "#fbe2f4",
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

export const filterData = [
    "React Developer",
    "Animation",
    "Phyton Developer",
    "Full Stack Developer",
    "Brand / Graphic Design",
    "Illustration",
    "Backend Developer",
    "Flutter Developer",
    "React Native Developer",
    "Golang Developer",
    "UI / Visual Design",
    "UX Design / Research",
    "Web Design",
    "Animation",
]

export type FormValueType = {
    name: string;
    username: string;
    email: string;
    linkedln: string;
    country: string;
};


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

export type ApplicationFormDataItem = {
    id: number;
    name: keyof FormValueType; // It ensures the name corresponds to keys in FormValueType
    text: string;
    label: string;
    type: string;
    required: boolean;
};
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

export const PasswordFormData: ProfilePasswordDataItem[] = [
    {
        id: 4,
        name: "password",
        type: "password",
        text: "Change your Password",
        label: "my passowrd",
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