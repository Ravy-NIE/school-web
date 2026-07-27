// School Data Store

const schoolData = {
    info: {
        name: "វិទ្យាល័យ ព្រះសីហនុ បច្ចេកវិទ្យា និងវិទ្យាសាស្ត្រ",
        shortName: "SPS-TECH",
        tagline: "បណ្ដុះបណ្ដាលចំណេះដឹង បច្ចេកវិទ្យា និងសីលធម៌ ដើម្បីអនាគតដ៏ភ្លឺស្វាង",
        established: "1995",
        studentsCount: 2450,
        staffCount: 120,
        coursesCount: 35,
        libraryDocsCount: 4800,
        address: "មហាវិថីព្រះនរោត្តម សង្កាត់ទន្លេបាសាក់ ខណ្ឌចំការមន រាជធានីភ្នំពេញ",
        phone: "+855 23 888 999 / +855 12 345 678",
        email: "info@spstech.edu.kh",
        website: "www.spstech.edu.kh"
    },

    programs: [
        {
            id: "prog-1",
            title: "វិទ្យាសាស្ត្រកុំព្យូទ័រ និងកូដ",
            category: "បច្ចេកវិទ្យា",
            icon: "fa-laptop-code",
            bgGradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
            description: "សិក្សាអំពីការសរសេរកម្មវិធី Web Development, Python, Mobile App, និងមូលដ្ឋានគ្រឹះ AI សម្រាប់សិស្សវិទ្យាល័យ។",
            duration: "៣ ឆ្នាំ",
            students: "450+ សិស្ស"
        },
        {
            id: "prog-2",
            title: "វិទ្យាសាស្ត្រពិត និងការស្រាវជ្រាវ",
            category: "វិទ្យាសាស្ត្រ",
            icon: "fa-atom",
            bgGradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
            description: "ផ្តោតលើមុខវិជ្ជា រូបវិទ្យា គីមីវិទ្យា ជីវវិទ្យា និងពិសោធន៍ជាក់ស្តែងក្នុងបន្ទប់ពិសោធន៍ទំនើប។",
            duration: "៣ ឆ្នាំ",
            students: "620+ សិស្ស"
        },
        {
            id: "prog-3",
            title: "ភាសាបរទេស និងទំនាក់ទំនង",
            category: "ភាសា",
            icon: "fa-language",
            bgGradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
            description: "ពង្រឹងសមត្ថភាពភាសាអង់គ្លេស និងភាសាចិន ជាមួយគ្រូបរទេស និងការប្រឡងវាស់ស្ទង់សមត្ថភាពអន្តរជាតិ។",
            duration: "៣ ឆ្នាំ",
            students: "580+ សិស្ស"
        },
        {
            id: "prog-4",
            title: "សិល្បៈ ឌីជីថល និងរចនា",
            category: "សិល្បៈ",
            icon: "fa-palette",
            bgGradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
            description: "បណ្តុះបណ្តាលជំនាញ Graphic Design, 3D Animation, និងការថតរូប/វីដេអូកម្រិតប្រជ្ញា។",
            duration: "២ ឆ្នាំ",
            students: "310+ សិស្ស"
        }
    ],

    staff: [
        {
            id: "st-1",
            nameKh: "បណ្ឌិត សុខ ចាន់ថន",
            nameEn: "Dr. Sok Chanthon",
            role: "នាយកសាលា",
            dept: "leadership",
            deptKh: "ថ្នាក់ដឹកនាំ",
            email: "chanthon.sok@spstech.edu.kh",
            phone: "+855 12 111 222",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
            bio: "បណ្ឌិត សុខ ចាន់ថន មានបទពិសោធន៍លើការគ្រប់គ្រងវិស័យអប់រំជាង ២០ ឆ្នាំ។ គាត់បានបញ្ចប់ការសិក្សាថ្នាក់បណ្ឌិតផ្នែក Educational Leadership ពីបរទេស។",
            qualifications: ["Ph.D. in Educational Management", "M.Ed. in School Administration"]
        },
        {
            id: "st-2",
            nameKh: "លោកស្រី កែវ ផល្លា",
            nameEn: "Mrs. Keo Phalla",
            role: "នាយិការង ទទួលបន្ទុកសិក្សាធិការ",
            dept: "leadership",
            deptKh: "ថ្នាក់ដឹកនាំ",
            email: "phalla.keo@spstech.edu.kh",
            phone: "+855 12 222 333",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
            bio: "លោកស្រី កែវ ផល្លា ទទួលខុសត្រូវលើការរៀបចំកម្មវិធីសិក្សា និងធានាគុណភាពអប់រំក្នុងសាលាទាំងមូល។",
            qualifications: ["Master of Science in Curriculum Design", "Bachelor of Pedagogy"]
        },
        {
            id: "st-3",
            nameKh: "លោក ជា វណ្ណៈ",
            nameEn: "Mr. Chea Vannak",
            role: "ប្រធានដេប៉ាតឺម៉ង់ បច្ចេកវិទ្យាព័ត៌មាន",
            dept: "teaching",
            deptKh: "គ្រូបង្រៀន",
            email: "vannak.chea@spstech.edu.kh",
            phone: "+855 17 333 444",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
            bio: "លោក ជា វណ្ណៈ ជាគ្រូបង្រៀនផ្នែក Computer Science និង Web Development ដែលមានបទពិសោធន៍បង្រៀនជាង ១០ ឆ្នាំ។",
            qualifications: ["Master of Computer Science", "AWS Certified Educator"]
        },
        {
            id: "st-4",
            nameKh: "លោកស្រី ម៉េង ស្រីណុច",
            nameEn: "Mrs. Meng Sreynoch",
            role: "គ្រូជំនាញ គីមីវិទ្យា និងជីវវិទ្យា",
            dept: "teaching",
            deptKh: "គ្រូបង្រៀន",
            email: "sreynoch.meng@spstech.edu.kh",
            phone: "+855 92 444 555",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
            bio: "ដឹកនាំការពិសោធន៍វិទ្យាសាស្ត្រ និងរៀបចំសិស្សចូលរួមប្រកួតប្រជែងអូឡាំពិកវិទ្យាសាស្ត្រថ្នាក់ជាតិ។",
            qualifications: ["Master of Chemistry", "Certified STEM Instructor"]
        },
        {
            id: "st-5",
            nameKh: "លោក អ៊ុំ សម្បត្តិ",
            nameEn: "Mr. Oum Sambath",
            role: "ប្រធានផ្នែកបណ្ណាល័យឌីជីថល",
            dept: "library",
            deptKh: "IT & បណ្ណាល័យ",
            email: "sambath.oum@spstech.edu.kh",
            phone: "+855 10 555 666",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
            bio: "អ្នកជំនាញគ្រប់គ្រងប្រព័ន្ធបណ្ណាល័យឌីជីថល ឯកសារ E-book និងប្រព័ន្ធព័ត៌មានវិទ្យាក្នុងសាលា។",
            qualifications: ["Bachelor of Information Technology", "Diploma in Library Science"]
        },
        {
            id: "st-6",
            nameKh: "លោកស្រី ហុង សុភា",
            nameEn: "Mrs. Hong Sophea",
            role: "ប្រធានផ្នែករដ្ឋបាល និងបុគ្គលិក",
            dept: "admin",
            deptKh: "រដ្ឋបាល",
            email: "sophea.hong@spstech.edu.kh",
            phone: "+855 11 666 777",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
            bio: "គ្រប់គ្រងកិច្ចការរដ្ឋបាលទូទៅ ទំនាក់ទំនងសិស្ស-មាតាបិតា និងកិច្ចការបុគ្គលិកសាលា។",
            qualifications: ["Master of Business Administration (MBA)"]
        },
        {
            id: "st-7",
            nameKh: "លោក លី វិចិត្រ",
            nameEn: "Mr. Ly Vichet",
            role: "គ្រូបង្រៀន គណិតវិទ្យា និងរូបវិទ្យា",
            dept: "teaching",
            deptKh: "គ្រូបង្រៀន",
            email: "vichet.ly@spstech.edu.kh",
            phone: "+855 89 777 888",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
            bio: "ជំនាញខាងការបង្រៀនគណិតវិទ្យាកម្រិតខ្ពស់ និងរៀបចំគន្លឹះដោះស្រាយលំហាត់ស្មុគស្មាញ។",
            qualifications: ["Bachelor of Mathematics", "Master of Physics"]
        },
        {
            id: "st-8",
            nameKh: "លោកស្រី ចាន់ សុជាតា",
            nameEn: "Mrs. Chan Socheata",
            role: "អ្នកគ្រប់គ្រងបណ្តាញបច្ចេកវិទ្យា (Network Admin)",
            dept: "library",
            deptKh: "IT & បណ្ណាល័យ",
            email: "socheata.chan@spstech.edu.kh",
            phone: "+855 12 888 999",
            avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
            bio: "ទទួលខុសត្រូវលើហេដ្ឋារចនាសម្ព័ន្ធ IT, Wi-Fi ក្នុងសាលា និងសុវត្ថិភាពទិន្នន័យ (Cybersecurity)។",
            qualifications: ["Cisco Certified Network Associate (CCNA)", "B.Sc in Network Engineering"]
        }
    ],

    libraryDocs: [
        {
            id: "doc-1",
            title: "សៀវភៅមូលដ្ឋានគ្រឹះកូដ HTML5 & CSS3 ទំនើប",
            category: "technology",
            categoryKh: "បច្ចេកវិទ្យា",
            author: "លោក ជា វណ្ណៈ",
            year: "2024",
            fileSize: "14.5 MB",
            pages: 280,
            type: "PDF",
            views: 1420,
            downloads: 890,
            cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400",
            description: "មគ្គុទ្ទេសក៍សិក្សាអំពីការរចនាគេហទំព័រទំនើប ការប្រើប្រាស់ CSS Flexbox, Grid, CSS Variables, Responsive Design និង JavaScript ES6+។",
            previewContent: `
                <h3>ជំពូកទី ១: មូលដ្ឋានគ្រឹះគេហទំព័រទំនើប</h3>
                <p>ការអភិវឌ្ឍគេហទំព័រក្នុងយុគសម័យបច្ចុប្បន្ន ត្រូវការការយល់ដឹងច្បាស់អំពី Structure របស់ HTML5 និង Style របស់ CSS3...</p>
                <ul>
                    <li>ការប្រើប្រាស់ Semantic Elements (header, nav, main, section, footer)</li>
                    <li>ការគ្រប់គ្រង Responsive Layout ជាមួយ CSS Grid និង Flexbox</li>
                    <li>ការបង្កើត Theme Dark/Light ដោយប្រើ CSS Custom Properties</li>
                </ul>
            `
        },
        {
            id: "doc-2",
            title: "សៀវភៅគណិតវិទ្យាជាន់ខ្ពស់ និងគណនាក្បួនដោះស្រាយ",
            category: "science",
            categoryKh: "វិទ្យាសាស្ត្រ",
            author: "លោក លី វិចិត្រ",
            year: "2023",
            fileSize: "18.2 MB",
            pages: 350,
            type: "PDF",
            views: 2150,
            downloads: 1320,
            cover: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400",
            description: "ការចងក្រងរូបមន្ត លំហាត់គំរូ និងវិធីសាស្ត្រដោះស្រាយលំហាត់គណិតវិទ្យាសម្រាប់ថ្នាក់ទី១២ និងការប្រឡងអាហារូបករណ៍។",
            previewContent: `
                <h3>ជំពូកទី ៣: អាំងតេក្រាល និងឌីផេរ៉ង់ស្យែល</h3>
                <p>រូបមន្តគ្រឹះនៃការគណនាអាំងតេក្រាល និងការអនុវត្តក្នុងការរកផ្ទៃក្រឡា និងឌីផេរ៉ង់ស្យែលលំដាប់ទី១...</p>
                <div style="background: rgba(255,255,255,0.05); padding: 15px; border-left: 4px solid #3b82f6; margin: 10px 0;">
                    <strong>រូបមន្តសំខាន់:</strong> ∫ f(x)dx = F(x) + C <br>
                    ដែល F'(x) = f(x)
                </div>
            `
        },
        {
            id: "doc-3",
            title: "ប្រវត្តិសាស្ត្រខ្មែរ និងអារ្យធម៌អង្គរ",
            category: "history",
            categoryKh: "ប្រវត្តិវិទ្យា",
            author: "បណ្ឌិត សុខ ចាន់ថន",
            year: "2023",
            fileSize: "22.0 MB",
            pages: 410,
            type: "PDF",
            views: 3100,
            downloads: 2050,
            cover: "https://images.unsplash.com/photo-1608488454765-b471456a68d0?auto=format&fit=crop&q=80&w=400",
            description: "ការសិក្សាស្រាវជ្រាវអំពីសិលាចារឹក ស្ថាបត្យកម្មប្រាសាទ និងការវិវត្តនៃសង្គមខ្មែរក្នុងសម័យមហានគរ។",
            previewContent: `
                <h3>ផ្នែកទី ២: សម័យកាលមហានគរ និងរជ្ជកាលព្រះបាទជ័យវរ្ម័នទី ៧</h3>
                <p>ព្រះបាទជ័យវរ្ម័នទី ៧ ជាមហាក្សត្រដ៏មានព្រះចេស្ដាក្នុងការកសាងក្រុងអង្គរធំ ប្រាសាទបាយ័ន និងមន្ទីរពេទ្យបុរាណចំនួន ១០២...</p>
            `
        },
        {
            id: "doc-4",
            title: "មគ្គុទ្ទេសក៍ភាសាអង់គ្លេសពាណិជ្ជកម្ម & IELTS",
            category: "language",
            categoryKh: "ភាសាបរទេស",
            author: "ដេប៉ាតឺម៉ង់ភាសាបរទេស",
            year: "2024",
            fileSize: "9.8 MB",
            pages: 195,
            type: "PDF",
            views: 1890,
            downloads: 1140,
            cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=400",
            description: "ប្រមូលផ្តុំពាក្យគន្លឹះ វេយ្យាករណ៍ និងលំហាត់ស្តាប់/សរសេរ សម្រាប់រៀបចំប្រឡង IELTS score 6.5+។",
            previewContent: `
                <h3>Module 1: Advanced Academic Writing & Task 2 Essays</h3>
                <p>Key structures for presenting argumentations, contrasting views, and summarizing statistical data effectively...</p>
            `
        },
        {
            id: "doc-5",
            title: "ពិសោធន៍គីមីវិទ្យា និងសុវត្ថិភាពបន្ទប់ពិសោធន៍",
            category: "science",
            categoryKh: "វិទ្យាសាស្ត្រ",
            author: "លោកស្រី ម៉េង ស្រីណុច",
            year: "2024",
            fileSize: "11.4 MB",
            pages: 160,
            type: "PDF",
            views: 980,
            downloads: 540,
            cover: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400",
            description: "ក្បួនច្បាប់សុវត្ថិភាព ការប្រើប្រាស់សារធាតុគីមី និងកិច្ចការពិសោធន៍ជាក់ស្តែងសម្រាប់សិស្សវិទ្យាល័យ។",
            previewContent: `
                <h3>កិច្ចការពិសោធន៍ទី ៤: ប្រតិកម្មអាស៊ីត-បាស (Titration)</h3>
                <p>របៀបប្រើប្រាស់ Barette, Pipette និងការប្រើប្រាស់សូចនាករ Phenolphthalein ដើម្បីវាស់កំហាប់...</p>
            `
        },
        {
            id: "doc-6",
            title: "គោលការណ៍គ្រឹះនៃសេដ្ឋកិច្ច និងអាជីវកម្មឌីជីថល",
            category: "economics",
            categoryKh: "សេដ្ឋកិច្ច",
            author: "លោកស្រី ហុង សុភា",
            year: "2023",
            fileSize: "16.0 MB",
            pages: 290,
            type: "PDF",
            views: 1250,
            downloads: 710,
            cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
            description: "ការយល់ដឹងអំពីតម្រូវការនិងការផ្គត់ផ្គង់ ទីផ្សារសេរី និងរូបិយវត្ថុឌីជីថល (FinTech & E-commerce)។",
            previewContent: `
                <h3>ជំពូកទី ១: មូលដ្ឋានគ្រឹះមីក្រូសេដ្ឋកិច្ច</h3>
                <p>ការសិក្សាអំពីចំណាយឱកាស (Opportunity Cost) និងការកើនឡើងនៃពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក...</p>
            `
        }
    ],

    news: [
        {
            id: "news-1",
            title: "សាលាបើកទទួលពាក្យចុះឈ្មោះចូលរៀន ឆ្នាំសិក្សា ២០២៤-២០២៥",
            date: "១៥ កក្កដា ២០២៤",
            category: "ការចុះឈ្មោះ",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
            summary: "វិទ្យាល័យ ព្រះសីហនុ បច្ចេកវិទ្យា និងវិទ្យាសាស្ត្រ ប្រកាសទទួលពាក្យសុំចូលរៀនថ្នាក់ទី១០ ទី១១ និងទី១២ ព្រមទាំងផ្តល់អាហារូបករណ៍ ៥០% សម្រាប់សិស្សពូកែ។"
        },
        {
            id: "news-2",
            title: "ជ័យលាភីមេដាយមាសក្នុងការប្រកួតប្រជែង Robot & Coding ថ្នាក់ជាតិ",
            date: "០២ កក្កដា ២០២៤",
            category: "ជ័យលាភី",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
            summary: "ក្រុមសិស្សតំណាងសាលាបានឈ្នះពានរង្វាន់លេខ១ ក្នុងព្រឹត្តិការណ៍ Cambodia STEM Festival ជាមួយនឹងគម្រោងស្វ័យប្រវត្តិកម្មកសិកម្ម។"
        },
        {
            id: "news-3",
            title: "ពិធីសម្ពោធបន្ទប់ពិសោធន៍ AI និងបណ្ណាល័យឌីជីថលថ្មី",
            date: "២០ មិថុនា ២០២៤",
            category: "ព្រឹត្តិការណ៍",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
            summary: "សាលាបានបំពាក់កុំព្យូទ័រ និងប្រព័ន្ធអុបទិកល្បឿនលឿន ដើម្បីគាំទ្រដល់ការស្រាវជ្រាវរបស់សិស្សានុសិស្ស និងគ្រូបង្រៀន។"
        }
    ]
};

// Export to global scope
window.schoolData = schoolData;
