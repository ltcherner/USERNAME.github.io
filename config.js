// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Larry Tcherner",
    program: "Automation Systems Technology | BTech",
    university: "McMaster University, Canada",
    email: "tchernl@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Development of a Digital Model of Kipling Avenue and Eglinton Avenue West, Toronto, Using SUMO Traffic Simulation",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "SUMO network → HDV baseline → AV scenario → right-turn lane → results"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
      "Most urban traffic delays and conflicts occur at signalized intersections.",
      "Kipling Avenue and Eglinton Avenue West is a major intersection in Etobicoke, Toronto.",
      "Testing road changes in the real world is costly and disruptive.",
      "SUMO lets engineers test changes on a digital model before building them."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
      "A digital baseline of the intersection is needed.",
      "The effect of AVs on Eglinton Avenue West is unknown.",
      "The proposed right-turn lane has not been tested.",
      "Simulation results are hard to communicate."
    ],

   objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Build a SUMO road network and 100% HDV baseline.",
      "Compare AV and HDV speed-density results on Eglinton Avenue West.",
      "Test a dedicated right-turn lane on eastbound Eglinton Avenue West.",
      "Present results in different styles through KPIs, figures, and a showcase website."
    ]
  },

    overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Road Network and HDV Baseline (SUMO Netedit)",
        text: "Build the intersection network and run a 100% human-driven baseline.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 2: 100% AV Scenario (SUMO CACC Model)",
        text: "Switch all vehicles to AVs and compare speed-density results on Eglinton.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 3: Right-Turn Lane Intervention (SUMO)",
        text: "Add a dedicated right-turn lane and compare results before and after.",
        image: "assets/img/image4.jpg"
      },
      {
        title: "Step 4: Results & Communication (Figures + Showcase Website)",
        text: "Summarize results using figures, KPIs, and the showcase website.",
        image: "assets/img/image5.jpg"
      }
    ]
  },
  
	implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Road Network and HDV Baseline (SUMO Netedit)",
        bullets: [
          { text: "Trace a 309-edge road network of the study area in Netedit." },
          { text: "Assign 600 veh/h to each major-road approach with a 90 s fixed signal." },
          { text: "Run a 100% HDV baseline and record speed-density data on Eglinton Avenue West." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: 100% AV Scenario (SUMO CACC Model)",
        bullets: [
          { text: "Switch all 16 traffic flows from human drivers to CACC-controlled AVs." },
          { text: "Keep the network, demand, routes, and signal timing the same as the baseline." },
          { text: "Rerun with a 0.1 s time step to remove collisions and compare results." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Right-Turn Lane Intervention (SUMO)",
        bullets: [
          { text: "Diagnose the overloaded shared kerb lane on eastbound Eglinton Avenue West." },
          { text: "Add a dedicated right-turn lane and keep the 90 s signal plan unchanged." },
          { text: "Compare speed-density, queue length, and time loss before and after the change." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results & Communication",
        bullets: [
          { text: "KPI set: speed-density plots, mean speed, lane density, queue length, and time loss." },
          { text: "Scenario story: AVs matched HDV speeds, while the turn lane cut lane density by 28%." },
          { text: "Limitations + next steps: calibrate SUMO with real counts and test higher demand." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },
	
	    results: {
    title: "Results & Potential Improvements",
    subtitle:
      "Speed-density results on eastbound Eglinton Avenue West (E160) for the base scenario (100% HDV) and Scenario 1 (100% AV). Results are for educational purposes only.",

    charts: {
      left: {
        title: "Base Scenario - 100% HDV: Speed-Density on E160",
        src: "assets/img/image6.jpg",
        alt: "Base scenario speed-density diagram for eastbound Eglinton Avenue West (E160)"
      },
      right: {
        title: "Scenario 1 - 100% AV: Speed-Density on E160",
        src: "assets/img/image7.jpg",
        alt: "Scenario 1 speed-density diagram for eastbound Eglinton Avenue West (E160)"
      }
    },

    discussionTitle: "Discussion",
    discussionBullets: [
      "The base scenario (100% HDV) shows congested flow on E160, with speeds of 13-20 km/h.",
      "Speed falls steadily as density rises, with a strong linear fit (r = -0.96).",
      "Scenario 1 (100% AV) overlaps the baseline almost completely, averaging 17.1 km/h over five seeds.",
      "The 90 s signal, not vehicle following, controls speed because E160 runs at only 36% of capacity.",
      "AVs cut network time loss by about 5%, and larger gains are expected as demand nears capacity."
    ]
  },

    discussionTitle: "Discussion",
    discussionBullets: [
      "The base scenario (100% HDV) shows congested flow on E160, with speeds of 13-20 km/h.",
      "Speed falls steadily as density rises, with a strong linear fit (r = -0.96).",
      "Scenario 1 (100% AV) overlaps the baseline almost completely, averaging 17.1 km/h over five seeds.",
      "The 90 s signal, not vehicle following, controls speed because E160 runs at only 36% of capacity.",
      "AVs cut network time loss by about 5%, and larger gains are expected as demand nears capacity."
    ]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

         members: [
      { name: "Larry Tcherner", role: "SUMO Road Network Development + Results Analysis and Visualization" },
      { name: "Mahir Nasar", role: "Traffic Demand and Signal Configuration + HDV/CAV Scenario Development" },
      { name: "Aaron Upadhyay", role: "Intervention Design and Implementation + Report Writing and Referencing" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/REPO"
  }
};
