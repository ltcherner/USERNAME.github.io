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
    projectTitleLabel: "Development of Digital Twin of a Railway Cooridor Using Unity Game Enginer and SUMo ETraffic Simulation",
    projectTitle: "Development of Digital Twin of a Railway Corridor Using Unity Game Engine and SUMO Traffic Simulation",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): raw video → Traffic Simulation → Blender → Unity → Results"
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
          title: "Step 1: Traffic Simulation (SUMO)",
          text: "Model the intersection and compare HDV, AV, and right-turn lane scenarios.",
          image: "assets/img/image2.jpg"
      },
      {
		  title: "Step 2: Digital Asset Development (Meshy AI + Blender)",
          text: "Generate 13 assets with AI and correct their scale in Blender.",
          image: "assets/img/image3.jpg"
      },
      {
		  title: "Step 3: Railway Scene and 360-Degree Video (Unity)",
          text: "Assemble the station, animate the train, and record a 360-degree video.",
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
        title: "Module 1: Traffic Simulation (SUMO)",
        bullets: [
          { text: "Build a 309-edge road network of the intersection in Netedit." },
          { text: "Run a 100% HDV baseline with 600 veh/h per approach and a 90 s signal." },
          { text: "Test a 100% AV fleet and a new right-turn lane on Eglinton Avenue West." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Digital Asset Development (Meshy AI + Blender)",
        bullets: [
          { text: "Generative AI: use Meshy AI to create 13 station and train assets." },
          { text: "From generative AI to Blender: scale each asset against a 1.77 m human model." },
          { text: "Preprocessing in Blender: set origins, apply transforms, and export FBX files." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Railway Scene and 360-Degree Video (Unity)",
        bullets: [
          { text: "Place 33 asset instances around the Oshawa GO platform and track." },
          { text: "Move the locomotive and coupled coach along a 220 m path with MeshPathMover." },
          { text: "Record a 35 s, 4096 x 2048 360-degree video and publish it on YouTube." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results & Communication",
        bullets: [
          { text: "KPI set: speed-density plots, queue length, time loss, and triangle counts." },
          { text: "Scenario story: AVs matched HDV speeds, while the turn lane cut lane density by 28%." },
          { text: "Limitations + next steps: calibrate SUMO with real data and fix asset scale in Unity." }
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

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

       members: [
      { name: "Larry Tcherner", role: "SUMO Road Network Development + Results Analysis and Visualization + 3D Asset Generation and Blender Modelling + Asset Preparation, Materials and FBX Export" },
      { name: "Mahir Abdul Nasar", role: "HDV/CAV Scenario Development + Unity Environment Assembly + Train Animation and Movement + 360-Degree Video Production and Verification" },
      { name: "Aaron Upadhyay", role: "Traffic Demand and Signal Configuration + Intervention Design and Implementation + Rendering Optimization and Performance Evaluation + Report Writing and Referencing" }
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
