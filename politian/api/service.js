import sImgS1 from '/public/images/service-single/img-1.jpg'
import sImgS2 from '/public/images/service-single/img-2.jpg'
import sImgS3 from '/public/images/service-single/img-3.jpg'
import sImgS4 from '/public/images/service-single/img-4.jpg'

import sSingleimg1 from '/public/images/service-single/2.jpg'
import sSingleimg2 from '/public/images/service-single/3.jpg'

import eduS1 from '/public/images/service/education/img-1.jpg'
import eduS2 from '/public/images/service/education/img-2.jpg'
import eduS3 from '/public/images/service/education/img-3.jpg'

import sS1 from '/public/images/service/social/img-1.jpg'
import sS2 from '/public/images/service/social/img-2.jpg'
import sS3 from '/public/images/service/social/img-3.jpg'

import business1 from '/public/images/service/business/img-1.jpg'
import business2 from '/public/images/service/business/img-2.jpg'
import business3 from '/public/images/service/business/img-3.jpg'

import Qlf1 from '/public/images/service/qualification/img-1.jpg'
import Qlf2 from '/public/images/service/qualification/img-2.jpg'
import Qlf3 from '/public/images/service/qualification/img-3.jpg'

import develop1 from '/public/images/service/develop/img-1.jpg'
import develop2 from '/public/images/service/develop/img-2.jpg'
import develop3 from '/public/images/service/develop/img-3.jpg'

const Services = [
    {
        Id: '1',
        sImgS: sImgS1,
        sTitle: 'Economic Establishment',
        slug: 'Economic-Establishment',
        description: 'We will build a resilient local economy by supporting small and medium enterprises, encoura...',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-credit',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        // new fields for single-page content
        description1: 'We will build a resilient local economy by supporting small and medium enterprises, encouraging local investment, and simplifying regulatory processes so entrepreneurs can create stable jobs for communities.',
        description2: 'Programs include micro-grants for startups, business advisory clinics, and tax incentives for local hiring. Our goal is to ensure economic opportunity reaches neighbourhoods that need it most.',
        capabilities: [
            'Small business grants and coaching',
            'Local procurement policies',
            'Microfinance and loan assistance',
            'Business incubation partnerships'
        ],
        approach: 'We focus on grassroots economic growth: listen to local entrepreneurs, work together to create practical support solutions, and track real results so we can expand what truly helps communities thrive.',
        workProcess: [
            'Assess local market needs',
            'Design grant & training programs',
            'Implement pilot projects',
            'Monitor outcomes and expand'
        ]
    },
    {
        Id: '2',
        sImgS: sImgS2,
        sTitle: 'Jobs and Unemployment',
        slug: 'Jobs-and-Unemployment',
        description: 'We will launch targeted job-creation programs that connect unemployed residents...',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We will launch targeted job-creation programs that connect unemployed residents with training, apprenticeships, and guaranteed placement services with partnering employers.',
        description2: 'By coordinating with local businesses, vocational schools and NGOs we reduce friction between training and real jobs, focusing on sectors with growth potential.',
        capabilities: [
            'Skills training and certification',
            'Apprenticeship and internship placements',
            'Employer matchmaking and incentives',
            'Job fairs and resume support'
        ],
        approach: 'Work closely with business and education partners to design short, effective training pathways that prepare people for real vacancies.',
        workProcess: [
            'Map local labour demand',
            'Develop short courses',
            'Connect trainees with employers',
            'Track employment outcomes'
        ]
    },
    {
        Id: '3',
        sImgS: sImgS3,
        sTitle: 'Business and Industry',
        slug: 'Business-and-Industry',
        description: 'Our policies aim to modernise factories, improve supply chains and incentivise quality-focused...',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-team-work',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We support competitive business growth by backing industrial clusters, promoting export-ready SMEs, and investing in productive infrastructure that reduces costs for local industry.',
        description2: 'Our policies aim to modernise factories, improve supply chains and incentivise quality-focused production so that local businesses can compete regionally and globally.',
        capabilities: [
            'Cluster development and support',
            'Export readiness programs',
            'Industry-education partnerships',
            'Access to equipment financing'
        ],
        approach: 'Partner with industry leaders and technical institutions to align skills, investment and infrastructure with market opportunities.',
        workProcess: [
            'Identify strategic sectors',
            'Facilitate partnerships',
            'Provide targeted incentives',
            'Monitor competitiveness metrics'
        ]
    },
    {
        Id: '4',
        sImgS: sImgS4,
        sTitle: 'Roads and Transport Service',
        slug: 'Roads-and-Transport-Service',
        description: 'By prioritising critical routes and community access roads, we unlock markets and services for rural...',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-bus',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We will upgrade and maintain roads, expand reliable public transport, and ensure safe pathways for pedestrians and cyclists to make travel faster, safer and cheaper for everyone.',
        description2: 'By prioritising critical routes and community access roads, we unlock markets and services for rural and urban residents alike.',
        capabilities: [
            'Road maintenance and upgrades',
            'Public transport expansion',
            'Traffic safety programs',
            'Rural access road projects'
        ],
        approach: 'Prioritise high-impact projects with transparent bidding, local employment clauses, and regular public reporting.',
        workProcess: [
            'Assess critical routes',
            'Plan phased upgrades',
            'Pilot transit improvements',
            'Measure travel time and safety'
        ]
    },
    {
        Id: '5',
        sImgS: sImgS2,
        sTitle: 'Jobs and Unemployment',
        slug: 'Jobs-and-Unemployment',
        description: 'We will support career centres, business incubators and targeted subsidies that lower the risk for.....',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'This program focuses on youth employment through entrepreneurship support, local hiring initiatives and partnerships with private sector employers to create sustainable placements.',
        description2: 'We will support career centres, business incubators and targeted subsidies that lower the risk for new hires.',
        capabilities: [
            'Youth entrepreneurship funds',
            'Local hiring incentives',
            'Career counseling centres',
            'Short-term job placement schemes'
        ],
        approach: 'Combine immediate placement services with medium-term business support so individuals can move into stable employment quickly.',
        workProcess: [
            'Run community outreach',
            'Match candidates with employers',
            'Provide on-the-job mentoring',
            'Follow up and retention support'
        ]
    },
    {
        Id: '6',
        sImgS: eduS1,
        sTitle: 'Graduated From Cambridge University in Education policy',
        slug: 'Graduated-From-Cambridge',
        description: 'Education policy involves researching and analyzing education systems, laws and governance regulations.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'Our education policy reforms aim to improve school quality, teacher training, and curriculum relevance so that every child receives a modern and equitable education.',
        description2: 'We aim to reduce classroom overcrowding, expand teacher support, and invest in learning materials and digital tools for schools in underserved areas.',
        capabilities: [
            'Teacher professional development',
            'Curriculum modernization',
            'School infrastructure improvements',
            'Edtech integration'
        ],
        approach: 'Work with educators, parents and experts to craft policies that are evidence-based, practical and locally adaptable.',
        workProcess: [
            'Consult stakeholders',
            'Pilot curriculum updates',
            'Train teachers',
            'Scale proven interventions'
        ]
    },
    {
        Id: '7',
        sImgS: eduS2,
        sTitle: 'Finished Educational leadership From Cambridge University.',
        slug: 'Educational-leadership',
        description: 'This field involves learning about leadership styles, effective communication, decision-making, strategic planning.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We deliver leadership development for school leaders and education managers so they can drive improvement at the school and district level.',
        description2: 'Stronger leadership translates into better teacher support, stronger school culture, and higher student outcomes.',
        capabilities: [
            'Leadership training workshops',
            'Mentorship for principals',
            'Performance management systems',
            'Strategic planning support'
        ],
        approach: 'Blend practical coaching with a results-focused framework so school leaders can translate strategy into classroom impact.',
        workProcess: [
            'Identify leadership gaps',
            'Design tailored training',
            'Provide coaching',
            'Measure school performance gains'
        ]
    },
    {
        Id: '8',
        sImgS: eduS3,
        sTitle: 'Graduated from Oxford in Educational psychology',
        slug: 'Educational-psychology',
        description: 'Educational psychology is understanding how students learn, develop, and behave in educational settings.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We support student mental health and learning through counselling programs, learning support services, and teacher training on inclusive practices.',
        description2: 'Early identification and support for learning differences ensures more students can succeed in mainstream classrooms.',
        capabilities: [
            'School counselling services',
            'Learning support interventions',
            'Teacher training on inclusion',
            'Parent engagement programs'
        ],
        approach: 'Focus on evidence-based interventions that integrate psychological support into everyday school life.',
        workProcess: [
            'Assess student needs',
            'Deliver targeted support',
            'Train teachers',
            'Monitor progress'
        ]
    },
    {
        Id: '9',
        sImgS: sS1,
        sTitle: 'New York: Support for Womans April 2023',
        slug: 'Support',
        description: 'Education policy involves researching and analyzing education systems, laws and governance regulations.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We champion women’s empowerment programs that protect rights, promote entrepreneurship, and increase access to healthcare and education for women and girls.',
        description2: 'From legal support to economic inclusion, our programs are designed to remove barriers and create opportunities for women across communities.',
        capabilities: [
            'Women’s entrepreneurship training',
            'Legal support services',
            'Health and reproductive services access',
            'Safe spaces and shelters'
        ],
        approach: 'Partner with women-led organisations and stakeholders to design culturally appropriate and sustainable interventions.',
        workProcess: [
            'Engage women’s groups',
            'Co-design programs',
            'Implement pilots',
            'Scale successful models'
        ]
    },
    {
        Id: '10',
        sImgS: sS2,
        sTitle: 'The Best Strategically Build Your Business Earning',
        slug: 'Strategically',
        description: 'This field involves learning about leadership styles, effective communication, decision-making, strategic planning.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'Our business strategy support helps small enterprises increase revenue through market access, product development and digital sales channels.',
        description2: 'We combine training, mentorship and small grants to help businesses become sustainable and job-creating institutions.',
        capabilities: [
            'Market research & guidance',
            'Digital marketing training',
            'Product development support',
            'Access to micro-grants'
        ],
        approach: 'Use real market data and close mentoring to help firms adopt practical strategies that grow revenue.',
        workProcess: [
            'Diagnose business potential',
            'Create growth plan',
            'Implement marketing & sales',
            'Measure growth metrics'
        ]
    },
    {
        Id: '11',
        sImgS: sS3,
        sTitle: 'Political Commitment for Your Deportation Issue',
        slug: 'Commitment',
        description: 'Educational psychology is understanding how students learn, develop, and behave in educational settings.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We provide legal assistance and advocacy for people facing deportation, ensuring due process and exploring legal pathways to protection and regularisation.',
        description2: 'Working with legal clinics and human rights organisations, we ensure affected families receive timely advice and representation.',
        capabilities: [
            'Legal counselling and referrals',
            'Representation and advocacy',
            'Case documentation support',
            'Coordination with civil society'
        ],
        approach: 'Provide person-centred legal assistance combined with strategic advocacy to influence policy and protect vulnerable people.',
        workProcess: [
            'Intake and case assessment',
            'Legal advice and documentation',
            'Representation where needed',
            'Follow-up and support'
        ]
    },
    {
        Id: '12',
        sImgS: business1,
        sTitle: 'We provide advanced solution growin your online',
        slug: 'provide-advanced-solution',
        description: 'Education policy involves researching and analyzing education systems, laws and governance regulations.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We support digital transformation for small businesses by giving them tools, training and platform support to sell online and reach new customers.',
        description2: 'From website setup to digital payment solutions and online marketing, we help micro and small businesses take advantage of growing e-commerce opportunities.',
        capabilities: [
            'E-commerce setup',
            'Digital payments integration',
            'Online marketing support',
            'Basic cyber hygiene training'
        ],
        approach: 'Combine hands-on workshops with one-to-one coaching so business owners can use digital tools with confidence.',
        workProcess: [
            'Assess digital readiness',
            'Set up online shop',
            'Train owners on tools',
            'Monitor sales and adapt'
        ]
    },
    {
        Id: '13',
        sImgS: business2,
        sTitle: 'We provide advanced solutions growin your online business',
        slug: 'advanced-solutions-growin',
        description: 'This field involves learning about leadership styles, effective communication, decision-making, strategic planning.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'Targeted programs for online business growth: search engine visibility, customer acquisition strategies, and efficient fulfilment so businesses convert traffic into profit.',
        description2: 'We prioritise measurable improvements: more customers, better margins and repeat business through improved service and logistics.',
        capabilities: [
            'SEO & content strategy',
            'Customer acquisition funnels',
            'Fulfilment & logistics advice',
            'Analytics and performance tracking'
        ],
        approach: 'Use quick experiments (growth sprints) to test what brings customers and then double down on winning channels.',
        workProcess: [
            'Audit online presence',
            'Run growth experiments',
            'Scale successful tactics',
            'Measure ROI'
        ]
    },
    {
        Id: '14',
        sImgS: business3,
        sTitle: 'Many desktop publishing packag and web page editors use.',
        slug: 'Many-desktop-publishing',
        description: 'Educational psychology is understanding how students learn, develop, and behave in educational settings.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We support local media and communications projects so communities can tell their stories, improve civic awareness and hold institutions accountable.',
        description2: 'This includes training for local journalists, support for community radio and digital storytelling initiatives.',
        capabilities: [
            'Journalism training',
            'Community broadcasting support',
            'Digital storytelling workshops',
            'Media literacy campaigns'
        ],
        approach: 'Invest in trusted local voices and platforms that increase transparency and civic participation.',
        workProcess: [
            'Identify local media needs',
            'Train local journalists',
            'Support content production',
            'Promote community engagement'
        ]
    },
    {
        Id: '15',
        sImgS: Qlf1,
        sTitle: 'We have put together a list of our favorite art blogs that you',
        slug: 'favorite-art-blogs',
        description: 'Education policy involves researching and analyzing education systems, laws and governance regulations.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We promote arts and culture by funding local artists, creating performance spaces and integrating creative programs into schools and community centres.',
        description2: 'The arts strengthen community identity and create economic opportunities through festivals, markets and creative enterprises.',
        capabilities: [
            'Artist grants and residencies',
            'Community arts events',
            'Arts-in-schools programs',
            'Creative enterprise support'
        ],
        approach: 'Support artists with funding and spaces, while building partnerships so culture contributes to social and economic life.',
        workProcess: [
            'Map local creative talent',
            'Provide seed grants',
            'Organise public events',
            'Support monetisation'
        ]
    },
    {
        Id: '16',
        sImgS: Qlf2,
        sTitle: 'A blog that inspires singers to sing right from their heart.',
        slug: 'inspires-singers',
        description: 'This field involves learning about leadership styles, effective communication, decision-making, strategic planning.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We support music and performing arts programmes that develop talent, create jobs and provide platforms for youth to perform locally and beyond.',
        description2: 'Programs include music education in schools, performance showcases and partnerships with local venues.',
        capabilities: [
            'Music education programs',
            'Performance opportunities',
            'Mentorship for artists',
            'Event production support'
        ],
        approach: 'Invest in early talent development and connect artists to audiences and markets for sustainable careers.',
        workProcess: [
            'Identify emerging talent',
            'Offer training & mentoring',
            'Organise showcases',
            'Help with career pathways'
        ]
    },
    {
        Id: '17',
        sImgS: Qlf3,
        sTitle: 'We stand behind the belief that students will perform better',
        slug: 'behind-the-belief',
        description: 'Educational psychology is understanding how students learn, develop, and behave in educational settings.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We back evidence-based learning interventions that improve student outcomes, including targeted tutoring, remedial programs and teacher coaching.',
        description2: 'We also prioritise early childhood development, ensuring children start school ready to learn and supported by their families and communities.',
        capabilities: [
            'Tutoring & remedial programs',
            'Early childhood support',
            'Teacher coaching',
            'Assessment & monitoring'
        ],
        approach: 'Combine early interventions with ongoing classroom support to raise learning outcomes across the system.',
        workProcess: [
            'Identify under-performing schools',
            'Deploy tutoring resources',
            'Train teachers',
            'Measure improvement'
        ]
    },
    {
        Id: '18',
        sImgS: develop1,
        sTitle: 'People living in rural areas are the most neglected',
        slug: 'People-living-in-rural',
        description: 'Education policy involves researching and analyzing education systems, laws and governance regulations.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'Our rural development agenda focuses on improving access to services, boosting agricultural productivity and investing in rural roads and markets.',
        description2: 'We empower rural communities through co-operatives, extension services and small-scale infrastructure to increase incomes and reduce migration pressure.',
        capabilities: [
            'Agricultural extension programs',
            'Rural market development',
            'Small infrastructure grants',
            'Cooperative support'
        ],
        approach: 'Combine infrastructure investments with capacity-building so rural people can capture more value from their work.',
        workProcess: [
            'Assess rural needs',
            'Pilot agri-interventions',
            'Build market links',
            'Scale successful models'
        ]
    },
    {
        Id: '19',
        sImgS: develop2,
        sTitle: 'Roads are the arteries through which the economy',
        slug: 'Roads-are',
        description: 'This field involves learning about leadership styles, effective communication, decision-making, strategic planning.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We invest in strategic transport corridors and local feeder roads to connect producers with markets and reduce the cost of doing business.',
        description2: 'Improvements include road maintenance, bridge rehabilitation and support for reliable logistics services.',
        capabilities: [
            'Corridor upgrades',
            'Bridge and drainage works',
            'Local feeder road programs',
            'Logistics partnerships'
        ],
        approach: 'Target projects that unlock economic opportunities and include local employment and maintenance plans for sustainability.',
        workProcess: [
            'Identify priority corridors',
            'Design resilient works',
            'Engage local contractors',
            'Ensure maintenance financing'
        ]
    },
    {
        Id: '20',
        sImgS: develop3,
        sTitle: 'Our Scientists, Students and River Defenders come',
        slug: 'Our-Scientists',
        description: 'Educational psychology is understanding how students learn, develop, and behave in educational settings.',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret .',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        icon: 'flaticon-job',
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,

        description1: 'We champion environmental protection through science-based river restoration, community stewardship and youth-led conservation projects.',
        description2: 'By supporting researchers and local defenders we protect water resources that communities rely on for food, health and livelihoods.',
        capabilities: [
            'River restoration programs',
            'Community conservation',
            'Scientific research funding',
            'Youth environmental education'
        ],
        approach: 'Integrate scientific data with local knowledge and create community-driven stewardship models for long-term protection.',
        workProcess: [
            'Conduct ecological assessments',
            'Engage communities',
            'Implement restoration',
            'Monitor ecological recovery'
        ]
    }
]

export default Services
