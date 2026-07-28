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
                address: "ភូមិក្រាំងពន្លៃ សង្កាតយវាំងចាស់ ក្រុងឧដុង្គម៉ែជ័យ ខេត្តកំពង់ស្ពឺ",
                //phone: "+855 23 888 999 / +855 12 345 678",
                //email: "info@spstech.edu.kh",
                // website: "www.spstech.edu.kh"
        },

        slides: [
                {
                        "id": "slide-1",
                        "image": "images/Slide/1 (1).jpg",
                        "badge": "វិទ្យាល័យ ឧដុង្គ",
                        "icon": "fa-school",
                        "title": "បរិស្ថានសាលារៀនទំនើប និងបណ្ណាល័យឌីជីថល",
                        "caption": "បំពាក់ដោយឧបករណ៍បច្ចេកវិទ្យា និងធនធានសិក្សាស្រាវជ្រាវសំបូរបែប"
                },
                {
                        "id": "slide-2",
                        "image": "images/Slide/1 (2).jpg",
                        "badge": "វិទ្យាសាស្ត្រកុំព្យូទ័រ",
                        "icon": "fa-laptop-code",
                        "title": "បន្ទប់ពិសោធន៍បច្ចេកវិទ្យាកុំព្យូទ័រ និង AI",
                        "caption": "រៀនសរសេរកូដ អភិវឌ្ឍន៍កម្មវិធី និងស្វែងយល់ពីបច្ចេកវិទ្យាបញ្ញាសិប្បនិម្មិត"
                },
                {
                        "id": "slide-3",
                        "image": "images/Slide/1 (3).jpg",
                        "badge": "ពិសោធន៍វិទ្យាសាស្ត្រ",
                        "icon": "fa-flask-vial",
                        "title": "ការសិក្សាពិសោធន៍វិទ្យាសាស្ត្រ និង STEM",
                        "caption": "អនុវត្តន៍ការពិសោធន៍ជាក់ស្តែងក្នុងបន្ទប់ពិសោធន៍គីមី រូបវិទ្យា និងជីវវិទ្យា"
                },
                {
                        "id": "slide-4",
                        "image": "images/Slide/1 (4).jpg",
                        "badge": "ការអប់រំគុណភាព",
                        "icon": "fa-user-graduate",
                        "title": "ការបណ្តុះបណ្តាលសិស្សានុសិស្សប្រកបដោយគុណភាព",
                        "caption": "បង្កើតអនាគតដ៏ភ្លឺស្វាងសម្រាប់សិស្សានុសិស្សគ្រប់រូប"
                },
                {
                        "id": "slide-5",
                        "image": "images/Slide/1 (5).jpg",
                        "badge": "សកម្មភាពក្រៅម៉ោង",
                        "icon": "fa-volleyball",
                        "title": "សកម្មភាពកីឡា និងការអភិវឌ្ឍសមត្ថភាពចម្រុះ",
                        "caption": "លើកកម្ពស់សុខភាពមាំមួន និងស្មារតីសាមគ្គីភាពក្នុងចំណោមសិស្សានុសិស្ស"
                },
                {
                        "id": "slide-6",
                        "image": "images/Slide/1 (6).jpg",
                        "badge": "បច្ចេកវិទ្យាឌីជីថល",
                        "icon": "fa-microchip",
                        "title": "ការសិក្សាស្រាវជ្រាវ និងការច្នៃប្រឌិតបច្ចេកវិទ្យា",
                        "caption": "លើកកម្ពស់ការយល់ដឹងអំពីបច្ចេកវិទ្យាទំនើបសម្រាប់យុគសម័យ 4.0"
                },
                {
                        "id": "slide-7",
                        "image": "images/Slide/1 (7).jpg",
                        "badge": "សិល្បៈ និងវប្បធម៌",
                        "icon": "fa-palette",
                        "title": "ការលើកកម្ពស់សិល្បៈ វប្បធម៌ និងការច្នៃប្រឌិត",
                        "caption": "បណ្តុះបណ្តាលជំនាញច្នៃប្រឌិត និងការថែរក្សាអត្តសញ្ញាណជាតិ"
                },
                {
                        "id": "slide-8",
                        "image": "images/Slide/1 (8).jpg",
                        "badge": "ភាសាបរទេស",
                        "icon": "fa-language",
                        "title": "ការអភិវឌ្ឍជំនាញភាសាអង់គ្លេស និងភាសាចិន",
                        "caption": "ពង្រឹងសមត្ថភាពទំនាក់ទំនងអន្តរជាតិសម្រាប់សិស្សានុសិស្ស"
                },
                {
                        "id": "slide-9",
                        "image": "images/Slide/1 (9).jpg",
                        "badge": "សមត្ថភាព និងភាពជោគជ័យ",
                        "icon": "fa-trophy",
                        "title": "ការប្រកួតប្រជែងសមត្ថភាព និងអាហារូបករណ៍",
                        "caption": "គាំទ្រសិស្សានុសិស្សក្នុងការប្រកួតថ្នាក់ជាតិ និងអន្តរជាតិ"
                },
                {
                        "id": "slide-10",
                        "image": "images/Slide/1 (10).jpg",
                        "badge": "កិច្ចសហប្រតិបត្តិការ",
                        "icon": "fa-handshake",
                        "title": "ទំនាក់ទំនងជិតស្និទ្ធរវាងសាលា និងសហគមន៍",
                        "caption": "សហការជាមួយមាតាបិតាសិស្សដើម្បីអនាគតកុមារគ្រប់រូប"
                },
                {
                        "id": "slide-11",
                        "image": "images/Slide/1 (11).jpg",
                        "badge": "បណ្ណាល័យទំនើប",
                        "icon": "fa-book-open-reader",
                        "title": "ការស្រាវជ្រាវតាមប្រព័ន្ធបណ្ណាល័យឌីជីថល",
                        "caption": "ផ្តល់ជូននូវសៀវភៅអេឡិចត្រូនិច និងឯកសារសិក្សារាប់ពាន់ក្បាល"
                },
                {
                        "id": "slide-12",
                        "image": "images/Slide/1 (12).jpg",
                        "badge": "ស្វ័យប្រវត្តិកម្ម & AI",
                        "icon": "fa-robot",
                        "title": "ការសិក្សាអំពី Robotics និងការបង្កើត Robot",
                        "caption": "អនុវត្តន៍ការសរសេរកូដបញ្ជា Robot ជាក់ស្តែងក្នុងបន្ទប់ពិសោធន៍"
                },
                {
                        "id": "slide-13",
                        "image": "images/Slide/1 (13).jpg",
                        "badge": "បរិស្ថានបៃតង",
                        "icon": "fa-leaf",
                        "title": "បរិស្ថានសាលារៀនបៃតង និងខ្យល់អាកាសបរិសុទ្ធ",
                        "caption": "ផ្តល់នូវបរិយាកាសសិក្សាស្រស់ស្រាយ និងមានអនាម័យខ្ពស់"
                },
                {
                        "id": "slide-14",
                        "image": "images/Slide/1 (14).jpg",
                        "badge": "ការងារក្រុម",
                        "icon": "fa-people-group",
                        "title": "ការសិក្សាជាក្រុម និងការដោះស្រាយបញ្ហា",
                        "caption": "ពង្រឹងស្មារតីសាមគ្គីភាព និងការងារជាក្រុមរបស់សិស្ស"
                },
                {
                        "id": "slide-15",
                        "image": "images/Slide/1 (15).jpg",
                        "badge": "វិន័យ និងសីលធម៌",
                        "icon": "fa-heart",
                        "title": "ការអប់រំវិន័យ សីលធម៌ និងគុណធម៌រស់នៅ",
                        "caption": "បណ្តុះបណ្តាលសិស្សឱ្យក្លាយជាពលរដ្ឋល្អក្នុងសង្គម"
                },
                {
                        "id": "slide-16",
                        "image": "images/Slide/1 (16).jpg",
                        "badge": "កម្មវិធី STEM",
                        "icon": "fa-atom",
                        "title": "ការអប់រំតាមបែប STEM Education",
                        "caption": "រួមបញ្ចូលវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា"
                },
                {
                        "id": "slide-17",
                        "image": "images/Slide/1 (17).jpg",
                        "badge": "ការច្នៃប្រឌិត",
                        "icon": "fa-lightbulb",
                        "title": "ការបង្កើតគំនិតច្នៃប្រឌិត និងរបកគំហើញថ្មីៗ",
                        "caption": "លើកទឹកចិត្តសិស្សក្នុងការបង្កើតគម្រោងច្នៃប្រឌិតផ្ទាល់ខ្លួន"
                },
                {
                        "id": "slide-18",
                        "image": "images/Slide/1 (18).jpg",
                        "badge": "សុវត្ថិភាពសាលា",
                        "icon": "fa-shield-halved",
                        "title": "ប្រព័ន្ធសុវត្ថិភាព និងការមើលថែទាំសិស្ស",
                        "caption": "ធានាសុវត្ថិភាពខ្ពស់បំផុតជូនសិស្សានុសិស្សគ្រប់ពេលវេលា"
                },
                {
                        "id": "slide-19",
                        "image": "images/Slide/1 (19).jpg",
                        "badge": "បច្ចេកវិទ្យាព័ត៌មាន",
                        "icon": "fa-network-wired",
                        "title": "បណ្តាញអ៊ីនធឺណិតល្បឿនលឿន និង Wi-Fi សាលា",
                        "caption": "គាំទ្រការសិក្សាស្រាវជ្រាវតាមអនឡាញយ៉ាងរហ័សទាន់ចិត្ត"
                },
                {
                        "id": "slide-20",
                        "image": "images/Slide/1 (20).jpg",
                        "badge": "ព្រឹត្តិការណ៍សាលា",
                        "icon": "fa-calendar-check",
                        "title": "ពិព័រណ៍វិទ្យាសាស្ត្រ និងសកម្មភាពប្រចាំឆ្នាំ",
                        "caption": "បង្កើតឱកាសបង្ហាញសមត្ថភាព និងស្នាដៃរបស់សិស្ស"
                },
                {
                        "id": "slide-21",
                        "image": "images/Slide/1 (21).jpg",
                        "badge": "ការតំរង់ទិសអាជីព",
                        "icon": "fa-compass",
                        "title": "ការតំរង់ទិសការសិក្សា និងអាជីពការងារ",
                        "caption": "រៀបចំផ្លូវជីវិតសិក្សា និងជ្រើសរើសជំនាញសម្រាប់មហាវិទ្យាល័យ"
                },
                {
                        "id": "slide-22",
                        "image": "images/Slide/1 (22).jpg",
                        "badge": "អនាគតភ្លឺស្វាង",
                        "icon": "fa-star",
                        "title": "ឆ្ពោះទៅកាន់អនាគតដ៏រុងរឿង និងជោគជ័យ",
                        "caption": "វិទ្យាល័យ ឧដុង្គ ជាគ្រឹះយ៉ាងរឹងមាំសម្រាប់ជោគជ័យរបស់អ្នក"
                }
        ],

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
                        "id": "st-1",
                        "nameKh": "លោក ឡៃ គួង",
                        "nameEn": "Mr. Lay Kuong",
                        "role": "នាយកសាលា",
                        "dept": "leadership",
                        "deptKh": "ថ្នាក់ដឹកនាំ",
                        "email": "lay.kuong@spstech.edu.kh",
                        "phone": "+855 16 937 986",
                        "avatar": "images/CEO/Mr Lay Koung.jpg",
                        "bio": "លោក ឡៃ គួង មានបទពិសោធន៍លើការគ្រប់គ្រងវិស័យអប់រំជាង ១២ ឆ្នាំ។ គាត់បានបញ្ចប់ការសិក្សាថ្នាក់បរិញ្ញាបត្រផ្នែក គរុកោសល្យ និងអប់រំ ពីសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ។",
                        "qualifications": [
                                "B.Ed. in Pedagogy and Education"
                        ]
                },
                {
                        "id": "st-2",
                        "nameKh": "លោក ទត សំណាង",
                        "nameEn": "Mr. Tort Samnang",
                        "role": "នាយករង ទទួលបន្ទុកបច្ចេកទេស",
                        "dept": "leadership",
                        "deptKh": "ថ្នាក់ដឹកនាំ",
                        "email": "tort.samnang@spstech.edu.kh",
                        "phone": "+855 17 610 488",
                        "avatar": "images/CEO/Mr Tort Somnang.jpg",
                        "bio": "លោក ទត សំណាង ទទួលខុសត្រូវលើការរៀបចំកម្មវិធីសិក្សា និងធានាគុណភាពអប់រំផ្នែកបច្ចេកទេសក្នុងសាលាទាំងមូល។",
                        "qualifications": [
                                "Master of Science in Curriculum Design",
                                "Bachelor of Pedagogy"
                        ]
                },
                {
                        "id": "st-3",
                        "nameKh": "លោក សុន ពិសិដ្ឋ",
                        "nameEn": "Mr. Sun Piseth",
                        "role": "នាយករង ទទួលបន្ទុក បុគ្គលិកអប់រំ និង យុវជន",
                        "dept": "leadership",
                        "deptKh": "ថ្នាក់ដឹកនាំ",
                        "email": "sun.piseth@spstech.edu.kh",
                        "phone": "+855 17 333 444",
                        "avatar": "images/CEO/Mr Son Piseth.jpg",
                        "bio": "លោក សុន ពិសិដ្ឋ ទទួលខុសត្រូវលើការដឹកនាំបុគ្គលិកអប់រំ កិច្ចការយុវជន និងវិន័យសិស្ស។",
                        "qualifications": [
                                "Bachelor of Geography",
                                "Master of Education in Curriculum and Instruction"
                        ]
                },
                {
                        "id": "st-admin-1",
                        "nameKh": "លោកស្រី ហុង សុភា",
                        "nameEn": "Mrs. Hong Sophea",
                        "role": "ប្រធានផ្នែករដ្ឋបាល និងបុគ្គលិក",
                        "dept": "admin",
                        "deptKh": "រដ្ឋបាល",
                        "email": "sophea.hong@spstech.edu.kh",
                        "phone": "+855 11 666 777",
                        "avatar": "images/HR/Mrs Hong Sophea.jpg",
                        "bio": "គ្រប់គ្រងកិច្ចការរដ្ឋបាលទូទៅ ទំនាក់ទំនងសិស្ស-មាតាបិតា និងកិច្ចការបុគ្គលិកសាលា។",
                        "qualifications": [
                                "Master of Business Administration (MBA)"
                        ]
                },
                {
                        "id": "st-lib-1",
                        "nameKh": "លោក ទូច ណារ័ត្ន",
                        "nameEn": "Mr. Touch Narath",
                        "role": "អ្នកគ្រប់គ្រង បណ្ណាល័យ និង បច្ចេកវិទ្យា",
                        "dept": "library",
                        "deptKh": "IT & បណ្ណាល័យ",
                        "email": "touch.narath@spstech.edu.kh",
                        "phone": "+855 17 799 508",
                        "avatar": "images/library/Mr Touch Narath.jpg",
                        "bio": "ទទួលខុសត្រូវលើហេដ្ឋារចនាសម្ព័ន្ធ IT, Wi-Fi ក្នុងសាលា សុវត្ថិភាពទិន្នន័យ (Cybersecurity) និងប្រព័ន្ធបណ្ណាល័យ។",
                        "qualifications": [
                                "Bachelor of Computer Science and Information Technology"
                        ]
                },
                {
                        "id": "st-lib-2",
                        "nameKh": "លោកស្រី គង់ សុធារី",
                        "nameEn": "Mrs. Kong Sotheary",
                        "role": "មន្ត្រីគ្រប់គ្រង បណ្ណាល័យឌីជីថល",
                        "dept": "library",
                        "deptKh": "IT & បណ្ណាល័យ",
                        "email": "kong.sotheary@spstech.edu.kh",
                        "phone": "+855 12 456 789",
                        "avatar": "images/library/Mrs Kong Sotheary.jpg",
                        "bio": "ទទួលខុសត្រូវលើការរៀបចំឯកសារ E-book សៀវភៅអេឡិចត្រូនិច និងសម្រួលការស្រាវជ្រាវរបស់សិស្ស។",
                        "qualifications": [
                                "Bachelor of Library Science",
                                "Diploma in Digital Archiving"
                        ]
                },
                {
                        "id": "st-lib-3",
                        "nameKh": "លោក ចាន់ វណ្ណា",
                        "nameEn": "Mr. Chan Vanna",
                        "role": "មន្ត្រីបច្ចេកទេស បណ្ណាល័យ និងឯកសារ",
                        "dept": "library",
                        "deptKh": "IT & បណ្ណាល័យ",
                        "email": "chan.vanna@spstech.edu.kh",
                        "phone": "+855 98 654 321",
                        "avatar": "images/library/Mr Chan Vanna.jpg",
                        "bio": "គ្រប់គ្រងការចុះបញ្ជីសៀវភៅ ផ្ទៀងផ្ទាត់ឯកសារ និងថែរក្សាកាតាឡុកសៀវភៅក្នុងបណ្ណាល័យសាលា។",
                        "qualifications": [
                                "Bachelor of Information Management"
                        ]
                },
                {
                        "id": "st-teach-1",
                        "nameKh": "លោក គង់ ទិត្យដារ៉ាវី",
                        "nameEn": "Mr. Kong Tetdaravy",
                        "role": "គ្រូបង្រៀន ព័ត៌មានវិទ្យា & កូដ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "kong.tetdaravy@gmail.com",
                        "phone": "+855 92 444 555",
                        "avatar": "images/Teacher/Mr Kong Tetdaravy.jpg",
                        "bio": "ដឹកនាំ ក្លឹបសិក្សាកុំព្យូទ័រ និងអភិវឌ្ឍន៍កម្មវិធី",
                        "qualifications": [
                                "Master of Education",
                                "Bachelor of Computer Science"
                        ]
                },
                {
                        "id": "st-teach-2",
                        "nameKh": "លោក ព្រុយ ចាន់ដេត",
                        "nameEn": "Mr. Pruy Chandeth",
                        "role": "គ្រូជំនាញ អក្សរសាស្ត្រខ្មែរ និងពលរដ្ឋវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "pruy.chandeth@spstech.edu.kh",
                        "phone": "+855 11 361 362",
                        "avatar": "images/Teacher/Mr Pruy Chandeth.jpg",
                        "bio": "បង្រៀនមុខវិជ្ជាអក្សរសាស្ត្រខ្មែរ ពង្រឹងការសរសេរអត្ថបទ និងការយល់ដឹងអំពីសីលធម៌រស់នៅក្នុងសង្គម។",
                        "qualifications": [
                                "Bachelor of Khmer Literature",
                                "Bachelor of Civics"
                        ]
                },
                {
                        "id": "st-teach-3",
                        "nameKh": "លោក ហៀន ភាស់",
                        "nameEn": "Mr. Hien Pheas",
                        "role": "គ្រូបង្រៀន ព័ត៌មានវិទ្យា & កូដ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "pheas.hien@spstech.edu.kh",
                        "phone": "+855 89 777 888",
                        "avatar": "images/Teacher/Mr Ly Vichet.jpg",
                        "bio": "ជំនាញខាងការបង្រៀនព័ត៌មានវិទ្យា និងបច្ចេកវិទ្យា។",
                        "qualifications": [
                                "Bachelor of Information Technology"
                        ]
                },
                {
                        "id": "st-teach-4",
                        "nameKh": "លោកស្រី ទូច ស្រីណែត",
                        "nameEn": "Mrs. ទូច ស្រីណែត",
                        "role": "គ្រូបង្រៀន អក្សរសាស្ត្រខ្មែរ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher4@spstech.edu.kh",
                        "phone": "+855 14 128 244",
                        "avatar": "images/Teacher/Teacher_4.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា អក្សរសាស្ត្រខ្មែរ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Khmer Literature",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-5",
                        "nameKh": "លោក សេក សុផល",
                        "nameEn": "Mr. សេក សុផល",
                        "role": "គ្រូបង្រៀន ភាសាអង់គ្លេស",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher5@spstech.edu.kh",
                        "phone": "+855 15 135 255",
                        "avatar": "images/Teacher/Teacher_5.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ភាសាអង់គ្លេស មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Arts in English",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-6",
                        "nameKh": "លោកស្រី សោម សុភ័ក្ត្រ",
                        "nameEn": "Mrs. សោម សុភ័ក្ត្រ",
                        "role": "គ្រូបង្រៀន ព័ត៌មានវិទ្យា & កូដ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher6@spstech.edu.kh",
                        "phone": "+855 16 142 266",
                        "avatar": "images/Teacher/Teacher_6.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ព័ត៌មានវិទ្យា & កូដ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Computer Science",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-7",
                        "nameKh": "លោក ង៉ែត វ៉ាន់ដា",
                        "nameEn": "Mr. ង៉ែត វ៉ាន់ដា",
                        "role": "គ្រូបង្រៀន ប្រវត្តិវិទ្យា & ភូមិវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher7@spstech.edu.kh",
                        "phone": "+855 17 149 277",
                        "avatar": "images/Teacher/Teacher_7.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ប្រវត្តិវិទ្យា & ភូមិវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of History & Geography",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-8",
                        "nameKh": "លោកស្រី ស៊ូ សុខា",
                        "nameEn": "Mrs. ស៊ូ សុខា",
                        "role": "គ្រូបង្រៀន ពលរដ្ឋវិទ្យា & សីលធម៌",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher8@spstech.edu.kh",
                        "phone": "+855 18 156 288",
                        "avatar": "images/Teacher/Teacher_8.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ពលរដ្ឋវិទ្យា & សីលធម៌ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Civics Education",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-9",
                        "nameKh": "លោក យិន សុជាតិ",
                        "nameEn": "Mr. យិន សុជាតិ",
                        "role": "គ្រូបង្រៀន គណិតវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher9@spstech.edu.kh",
                        "phone": "+855 19 163 299",
                        "avatar": "images/Teacher/Teacher_9.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គណិតវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Mathematics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-10",
                        "nameKh": "លោកស្រី សាន ស្រីឡែន",
                        "nameEn": "Mrs. សាន ស្រីឡែន",
                        "role": "គ្រូបង្រៀន រូបវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher10@spstech.edu.kh",
                        "phone": "+855 20 170 310",
                        "avatar": "images/Teacher/Teacher_10.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា រូបវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Physics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-11",
                        "nameKh": "លោក ឈិន ពិសិដ្ឋ",
                        "nameEn": "Mr. ឈិន ពិសិដ្ឋ",
                        "role": "គ្រូបង្រៀន គីមីវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher11@spstech.edu.kh",
                        "phone": "+855 21 177 321",
                        "avatar": "images/Teacher/Teacher_11.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គីមីវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Chemistry",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-12",
                        "nameKh": "លោកស្រី ឆាយ ស្រីពៅ",
                        "nameEn": "Mrs. ឆាយ ស្រីពៅ",
                        "role": "គ្រូបង្រៀន ជីវវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher12@spstech.edu.kh",
                        "phone": "+855 22 184 332",
                        "avatar": "images/Teacher/Teacher_12.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ជីវវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Biology",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-13",
                        "nameKh": "លោក ស៊ុន សុខា",
                        "nameEn": "Mr. ស៊ុន សុខា",
                        "role": "គ្រូបង្រៀន អក្សរសាស្ត្រខ្មែរ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher13@spstech.edu.kh",
                        "phone": "+855 23 191 343",
                        "avatar": "images/Teacher/Teacher_13.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា អក្សរសាស្ត្រខ្មែរ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Khmer Literature",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-14",
                        "nameKh": "លោកស្រី ផាត សុវណ្ណី",
                        "nameEn": "Mrs. ផាត សុវណ្ណី",
                        "role": "គ្រូបង្រៀន ភាសាអង់គ្លេស",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher14@spstech.edu.kh",
                        "phone": "+855 24 198 354",
                        "avatar": "images/Teacher/Teacher_14.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ភាសាអង់គ្លេស មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Arts in English",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-15",
                        "nameKh": "លោក ផាន វណ្ណា",
                        "nameEn": "Mr. ផាន វណ្ណា",
                        "role": "គ្រូបង្រៀន ព័ត៌មានវិទ្យា & កូដ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher15@spstech.edu.kh",
                        "phone": "+855 25 205 365",
                        "avatar": "images/Teacher/Teacher_15.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ព័ត៌មានវិទ្យា & កូដ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Computer Science",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-16",
                        "nameKh": "លោកស្រី ចាន់ សុធារី",
                        "nameEn": "Mrs. ចាន់ សុធារី",
                        "role": "គ្រូបង្រៀន ប្រវត្តិវិទ្យា & ភូមិវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher16@spstech.edu.kh",
                        "phone": "+855 26 212 376",
                        "avatar": "images/Teacher/Teacher_16.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ប្រវត្តិវិទ្យា & ភូមិវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of History & Geography",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-17",
                        "nameKh": "លោក គឹម វិចិត្រ",
                        "nameEn": "Mr. គឹម វិចិត្រ",
                        "role": "គ្រូបង្រៀន ពលរដ្ឋវិទ្យា & សីលធម៌",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher17@spstech.edu.kh",
                        "phone": "+855 27 219 387",
                        "avatar": "images/Teacher/Teacher_17.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ពលរដ្ឋវិទ្យា & សីលធម៌ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Civics Education",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-18",
                        "nameKh": "លោកស្រី មាស សុខុម",
                        "nameEn": "Mrs. មាស សុខុម",
                        "role": "គ្រូបង្រៀន គណិតវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher18@spstech.edu.kh",
                        "phone": "+855 28 226 398",
                        "avatar": "images/Teacher/Teacher_18.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គណិតវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Mathematics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-19",
                        "nameKh": "លោក ស៊ិន រតនៈ",
                        "nameEn": "Mr. ស៊ិន រតនៈ",
                        "role": "គ្រូបង្រៀន រូបវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher19@spstech.edu.kh",
                        "phone": "+855 29 233 409",
                        "avatar": "images/Teacher/Teacher_19.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា រូបវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Physics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-20",
                        "nameKh": "លោកស្រី អ៊ុក ស្រីណុច",
                        "nameEn": "Mrs. អ៊ុក ស្រីណុច",
                        "role": "គ្រូបង្រៀន គីមីវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher20@spstech.edu.kh",
                        "phone": "+855 30 240 420",
                        "avatar": "images/Teacher/Teacher_20.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គីមីវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Chemistry",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-21",
                        "nameKh": "លោក ថង ពិសិដ្ឋ",
                        "nameEn": "Mr. ថង ពិសិដ្ឋ",
                        "role": "គ្រូបង្រៀន ជីវវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher21@spstech.edu.kh",
                        "phone": "+855 31 247 431",
                        "avatar": "images/Teacher/Teacher_21.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ជីវវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Biology",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-22",
                        "nameKh": "លោកស្រី កែវ សុធារី",
                        "nameEn": "Mrs. កែវ សុធារី",
                        "role": "គ្រូបង្រៀន អក្សរសាស្ត្រខ្មែរ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher22@spstech.edu.kh",
                        "phone": "+855 32 254 442",
                        "avatar": "images/Teacher/Teacher_22.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា អក្សរសាស្ត្រខ្មែរ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Khmer Literature",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-23",
                        "nameKh": "លោក ផុន វណ្ណារ៉ា",
                        "nameEn": "Mr. ផុន វណ្ណារ៉ា",
                        "role": "គ្រូបង្រៀន ភាសាអង់គ្លេស",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher23@spstech.edu.kh",
                        "phone": "+855 33 261 453",
                        "avatar": "images/Teacher/Teacher_23.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ភាសាអង់គ្លេស មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Arts in English",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-24",
                        "nameKh": "លោកស្រី ប្រាក់ សុភ័ក្ត្រ",
                        "nameEn": "Mrs. ប្រាក់ សុភ័ក្ត្រ",
                        "role": "គ្រូបង្រៀន ព័ត៌មានវិទ្យា & កូដ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher24@spstech.edu.kh",
                        "phone": "+855 34 268 464",
                        "avatar": "images/Teacher/Teacher_24.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ព័ត៌មានវិទ្យា & កូដ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Computer Science",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-25",
                        "nameKh": "លោក គង់ វិចិត្រ",
                        "nameEn": "Mr. គង់ វិចិត្រ",
                        "role": "គ្រូបង្រៀន ប្រវត្តិវិទ្យា & ភូមិវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher25@spstech.edu.kh",
                        "phone": "+855 35 275 475",
                        "avatar": "images/Teacher/Teacher_25.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ប្រវត្តិវិទ្យា & ភូមិវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of History & Geography",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-26",
                        "nameKh": "លោកស្រី តាំង កល្យាណ",
                        "nameEn": "Mrs. តាំង កល្យាណ",
                        "role": "គ្រូបង្រៀន ពលរដ្ឋវិទ្យា & សីលធម៌",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher26@spstech.edu.kh",
                        "phone": "+855 36 282 486",
                        "avatar": "images/Teacher/Teacher_26.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ពលរដ្ឋវិទ្យា & សីលធម៌ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Civics Education",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-27",
                        "nameKh": "លោក អ៊ឹម វណ្ណាត",
                        "nameEn": "Mr. អ៊ឹម វណ្ណាត",
                        "role": "គ្រូបង្រៀន គណិតវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher27@spstech.edu.kh",
                        "phone": "+855 37 289 497",
                        "avatar": "images/Teacher/Teacher_27.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គណិតវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Mathematics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-28",
                        "nameKh": "លោកស្រី សួស ស្រីនិច",
                        "nameEn": "Mrs. សួស ស្រីនិច",
                        "role": "គ្រូបង្រៀន រូបវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher28@spstech.edu.kh",
                        "phone": "+855 38 296 508",
                        "avatar": "images/Teacher/Teacher_28.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា រូបវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Physics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-29",
                        "nameKh": "លោក សឹង ចាន់ថន",
                        "nameEn": "Mr. សឹង ចាន់ថន",
                        "role": "គ្រូបង្រៀន គីមីវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher29@spstech.edu.kh",
                        "phone": "+855 39 303 519",
                        "avatar": "images/Teacher/Teacher_29.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គីមីវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Chemistry",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-30",
                        "nameKh": "លោកស្រី មាស សុវណ្ណារី",
                        "nameEn": "Mrs. មាស សុវណ្ណារី",
                        "role": "គ្រូបង្រៀន ជីវវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher30@spstech.edu.kh",
                        "phone": "+855 40 310 530",
                        "avatar": "images/Teacher/Teacher_30.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ជីវវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Biology",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-31",
                        "nameKh": "លោក រស់ សុភ័ណ្ឌ",
                        "nameEn": "Mr. រស់ សុភ័ណ្ឌ",
                        "role": "គ្រូបង្រៀន អក្សរសាស្ត្រខ្មែរ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher31@spstech.edu.kh",
                        "phone": "+855 41 317 541",
                        "avatar": "images/Teacher/Teacher_31.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា អក្សរសាស្ត្រខ្មែរ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Khmer Literature",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-32",
                        "nameKh": "លោកស្រី ជា សុខុម",
                        "nameEn": "Mrs. ជា សុខុម",
                        "role": "គ្រូបង្រៀន ភាសាអង់គ្លេស",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher32@spstech.edu.kh",
                        "phone": "+855 42 324 552",
                        "avatar": "images/Teacher/Teacher_32.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ភាសាអង់គ្លេស មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Arts in English",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-33",
                        "nameKh": "លោក អ៊ុំ វិសាល",
                        "nameEn": "Mr. អ៊ុំ វិសាល",
                        "role": "គ្រូបង្រៀន ព័ត៌មានវិទ្យា & កូដ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher33@spstech.edu.kh",
                        "phone": "+855 43 331 563",
                        "avatar": "images/Teacher/Teacher_33.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ព័ត៌មានវិទ្យា & កូដ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Computer Science",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-34",
                        "nameKh": "លោកស្រី ប៊ុន ពិសី",
                        "nameEn": "Mrs. ប៊ុន ពិសី",
                        "role": "គ្រូបង្រៀន ប្រវត្តិវិទ្យា & ភូមិវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher34@spstech.edu.kh",
                        "phone": "+855 44 338 574",
                        "avatar": "images/Teacher/Teacher_34.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ប្រវត្តិវិទ្យា & ភូមិវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of History & Geography",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-35",
                        "nameKh": "លោក ពេជ្រ វុទ្ធី",
                        "nameEn": "Mr. ពេជ្រ វុទ្ធី",
                        "role": "គ្រូបង្រៀន ពលរដ្ឋវិទ្យា & សីលធម៌",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher35@spstech.edu.kh",
                        "phone": "+855 45 345 585",
                        "avatar": "images/Teacher/Teacher_35.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ពលរដ្ឋវិទ្យា & សីលធម៌ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Civics Education",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-36",
                        "nameKh": "លោកស្រី ឡៃ សុធារី",
                        "nameEn": "Mrs. ឡៃ សុធារី",
                        "role": "គ្រូបង្រៀន គណិតវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher36@spstech.edu.kh",
                        "phone": "+855 46 352 596",
                        "avatar": "images/Teacher/Teacher_36.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គណិតវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Mathematics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-37",
                        "nameKh": "លោក អ៊ុង ធារ៉ា",
                        "nameEn": "Mr. អ៊ុង ធារ៉ា",
                        "role": "គ្រូបង្រៀន រូបវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher37@spstech.edu.kh",
                        "phone": "+855 47 359 607",
                        "avatar": "images/Teacher/Teacher_37.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា រូបវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Physics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-38",
                        "nameKh": "លោកស្រី ម៉ៅ ស្រីណែត",
                        "nameEn": "Mrs. ម៉ៅ ស្រីណែត",
                        "role": "គ្រូបង្រៀន គីមីវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher38@spstech.edu.kh",
                        "phone": "+855 48 366 618",
                        "avatar": "images/Teacher/Teacher_38.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គីមីវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Chemistry",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-39",
                        "nameKh": "លោក វ៉ាន់ ពិសិដ្ឋ",
                        "nameEn": "Mr. វ៉ាន់ ពិសិដ្ឋ",
                        "role": "គ្រូបង្រៀន ជីវវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher39@spstech.edu.kh",
                        "phone": "+855 49 373 629",
                        "avatar": "images/Teacher/Teacher_39.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ជីវវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Biology",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-40",
                        "nameKh": "លោកស្រី ឡេង ស្រីមុំ",
                        "nameEn": "Mrs. ឡេង ស្រីមុំ",
                        "role": "គ្រូបង្រៀន អក្សរសាស្ត្រខ្មែរ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher40@spstech.edu.kh",
                        "phone": "+855 50 380 640",
                        "avatar": "images/Teacher/Teacher_40.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា អក្សរសាស្ត្រខ្មែរ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Khmer Literature",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-41",
                        "nameKh": "លោក នួន វណ្ណៈ",
                        "nameEn": "Mr. នួន វណ្ណៈ",
                        "role": "គ្រូបង្រៀន ភាសាអង់គ្លេស",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher41@spstech.edu.kh",
                        "phone": "+855 51 387 651",
                        "avatar": "images/Teacher/Teacher_41.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ភាសាអង់គ្លេស មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Arts in English",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-42",
                        "nameKh": "លោកស្រី ហ៊ុន សុភាព",
                        "nameEn": "Mrs. ហ៊ុន សុភាព",
                        "role": "គ្រូបង្រៀន ព័ត៌មានវិទ្យា & កូដ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher42@spstech.edu.kh",
                        "phone": "+855 52 394 662",
                        "avatar": "images/Teacher/Teacher_42.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ព័ត៌មានវិទ្យា & កូដ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Computer Science",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-43",
                        "nameKh": "លោក ម៉េង វណ្ណឌី",
                        "nameEn": "Mr. ម៉េង វណ្ណឌី",
                        "role": "គ្រូបង្រៀន ប្រវត្តិវិទ្យា & ភូមិវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher43@spstech.edu.kh",
                        "phone": "+855 53 401 673",
                        "avatar": "images/Teacher/Teacher_43.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ប្រវត្តិវិទ្យា & ភូមិវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of History & Geography",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-44",
                        "nameKh": "លោកស្រី ខៀវ សុខា",
                        "nameEn": "Mrs. ខៀវ សុខា",
                        "role": "គ្រូបង្រៀន ពលរដ្ឋវិទ្យា & សីលធម៌",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher44@spstech.edu.kh",
                        "phone": "+855 54 408 684",
                        "avatar": "images/Teacher/Teacher_44.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ពលរដ្ឋវិទ្យា & សីលធម៌ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Civics Education",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-45",
                        "nameKh": "លោក ជុំ វណ្ណារ៉ា",
                        "nameEn": "Mr. ជុំ វណ្ណារ៉ា",
                        "role": "គ្រូបង្រៀន គណិតវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher45@spstech.edu.kh",
                        "phone": "+855 55 415 695",
                        "avatar": "images/Teacher/Teacher_45.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គណិតវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Mathematics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-46",
                        "nameKh": "លោកស្រី ម៉ក់ ធារី",
                        "nameEn": "Mrs. ម៉ក់ ធារី",
                        "role": "គ្រូបង្រៀន រូបវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher46@spstech.edu.kh",
                        "phone": "+855 56 422 706",
                        "avatar": "images/Teacher/Teacher_46.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា រូបវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Physics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-47",
                        "nameKh": "លោក សុខ សម្បត្តិ",
                        "nameEn": "Mr. សុខ សម្បត្តិ",
                        "role": "គ្រូបង្រៀន គីមីវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher47@spstech.edu.kh",
                        "phone": "+855 57 429 717",
                        "avatar": "images/Teacher/Teacher_47.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គីមីវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Chemistry",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-48",
                        "nameKh": "លោកស្រី ហេង សុវណ្ណារ៉ា",
                        "nameEn": "Mrs. ហេង សុវណ្ណារ៉ា",
                        "role": "គ្រូបង្រៀន ជីវវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher48@spstech.edu.kh",
                        "phone": "+855 58 436 728",
                        "avatar": "images/Teacher/Teacher_48.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ជីវវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Biology",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-49",
                        "nameKh": "លោក ឡុង សុខេមរ៉ា",
                        "nameEn": "Mr. ឡុង សុខេមរ៉ា",
                        "role": "គ្រូបង្រៀន អក្សរសាស្ត្រខ្មែរ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher49@spstech.edu.kh",
                        "phone": "+855 59 443 739",
                        "avatar": "images/Teacher/Teacher_49.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា អក្សរសាស្ត្រខ្មែរ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Khmer Literature",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-50",
                        "nameKh": "លោកស្រី រ៉ស់ ស្រីមុំ",
                        "nameEn": "Mrs. រ៉ស់ ស្រីមុំ",
                        "role": "គ្រូបង្រៀន ភាសាអង់គ្លេស",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher50@spstech.edu.kh",
                        "phone": "+855 60 450 750",
                        "avatar": "images/Teacher/Teacher_50.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ភាសាអង់គ្លេស មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Arts in English",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-51",
                        "nameKh": "លោក ទូច វុទ្ធី",
                        "nameEn": "Mr. ទូច វុទ្ធី",
                        "role": "គ្រូបង្រៀន ព័ត៌មានវិទ្យា & កូដ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher51@spstech.edu.kh",
                        "phone": "+855 61 457 761",
                        "avatar": "images/Teacher/Teacher_51.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ព័ត៌មានវិទ្យា & កូដ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Computer Science",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-52",
                        "nameKh": "លោកស្រី សេក សុភា",
                        "nameEn": "Mrs. សេក សុភា",
                        "role": "គ្រូបង្រៀន ប្រវត្តិវិទ្យា & ភូមិវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher52@spstech.edu.kh",
                        "phone": "+855 62 464 772",
                        "avatar": "images/Teacher/Teacher_52.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ប្រវត្តិវិទ្យា & ភូមិវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of History & Geography",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-53",
                        "nameKh": "លោក សោម ពិសិដ្ឋ",
                        "nameEn": "Mr. សោម ពិសិដ្ឋ",
                        "role": "គ្រូបង្រៀន ពលរដ្ឋវិទ្យា & សីលធម៌",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher53@spstech.edu.kh",
                        "phone": "+855 63 471 783",
                        "avatar": "images/Teacher/Teacher_53.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ពលរដ្ឋវិទ្យា & សីលធម៌ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Civics Education",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-54",
                        "nameKh": "លោកស្រី ង៉ែត សុជាតិ",
                        "nameEn": "Mrs. ង៉ែត សុជាតិ",
                        "role": "គ្រូបង្រៀន គណិតវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher54@spstech.edu.kh",
                        "phone": "+855 64 478 794",
                        "avatar": "images/Teacher/Teacher_54.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គណិតវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Mathematics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-55",
                        "nameKh": "លោក ស៊ូ វិរៈ",
                        "nameEn": "Mr. ស៊ូ វិរៈ",
                        "role": "គ្រូបង្រៀន រូបវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher55@spstech.edu.kh",
                        "phone": "+855 65 485 805",
                        "avatar": "images/Teacher/Teacher_55.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា រូបវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Physics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-56",
                        "nameKh": "លោកស្រី យិន ស្រីពៅ",
                        "nameEn": "Mrs. យិន ស្រីពៅ",
                        "role": "គ្រូបង្រៀន គីមីវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher56@spstech.edu.kh",
                        "phone": "+855 66 492 816",
                        "avatar": "images/Teacher/Teacher_56.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គីមីវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Chemistry",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-57",
                        "nameKh": "លោក សាន សុខា",
                        "nameEn": "Mr. សាន សុខា",
                        "role": "គ្រូបង្រៀន ជីវវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher57@spstech.edu.kh",
                        "phone": "+855 67 499 827",
                        "avatar": "images/Teacher/Teacher_57.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ជីវវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Biology",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-58",
                        "nameKh": "លោកស្រី ឈិន សុផល",
                        "nameEn": "Mrs. ឈិន សុផល",
                        "role": "គ្រូបង្រៀន អក្សរសាស្ត្រខ្មែរ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher58@spstech.edu.kh",
                        "phone": "+855 68 506 838",
                        "avatar": "images/Teacher/Teacher_58.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា អក្សរសាស្ត្រខ្មែរ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Khmer Literature",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-59",
                        "nameKh": "លោក ឆាយ សុវណ្ណ",
                        "nameEn": "Mr. ឆាយ សុវណ្ណ",
                        "role": "គ្រូបង្រៀន ភាសាអង់គ្លេស",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher59@spstech.edu.kh",
                        "phone": "+855 69 513 849",
                        "avatar": "images/Teacher/Teacher_59.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ភាសាអង់គ្លេស មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Arts in English",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-60",
                        "nameKh": "លោកស្រី ស៊ុន សុធី",
                        "nameEn": "Mrs. ស៊ុន សុធី",
                        "role": "គ្រូបង្រៀន ព័ត៌មានវិទ្យា & កូដ",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher60@spstech.edu.kh",
                        "phone": "+855 70 520 860",
                        "avatar": "images/Teacher/Teacher_60.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ព័ត៌មានវិទ្យា & កូដ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Computer Science",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-61",
                        "nameKh": "លោក ផាត សុខេង",
                        "nameEn": "Mr. ផាត សុខេង",
                        "role": "គ្រូបង្រៀន ប្រវត្តិវិទ្យា & ភូមិវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher61@spstech.edu.kh",
                        "phone": "+855 71 527 871",
                        "avatar": "images/Teacher/Teacher_61.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ប្រវត្តិវិទ្យា & ភូមិវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of History & Geography",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-62",
                        "nameKh": "លោកស្រី ផាន ស្រីណែត",
                        "nameEn": "Mrs. ផាន ស្រីណែត",
                        "role": "គ្រូបង្រៀន ពលរដ្ឋវិទ្យា & សីលធម៌",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher62@spstech.edu.kh",
                        "phone": "+855 72 534 882",
                        "avatar": "images/Teacher/Teacher_62.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា ពលរដ្ឋវិទ្យា & សីលធម៌ មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Civics Education",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-63",
                        "nameKh": "លោក ចាន់ សុផល",
                        "nameEn": "Mr. ចាន់ សុផល",
                        "role": "គ្រូបង្រៀន គណិតវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher63@spstech.edu.kh",
                        "phone": "+855 73 541 893",
                        "avatar": "images/Teacher/Teacher_63.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គណិតវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Mathematics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-64",
                        "nameKh": "លោកស្រី គឹម សុភ័ក្ត្រ",
                        "nameEn": "Mrs. គឹម សុភ័ក្ត្រ",
                        "role": "គ្រូបង្រៀន រូបវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher64@spstech.edu.kh",
                        "phone": "+855 74 548 4",
                        "avatar": "images/Teacher/Teacher_64.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា រូបវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Physics",
                                "Certified High School Teacher"
                        ]
                },
                {
                        "id": "st-teach-65",
                        "nameKh": "លោក មាស វ៉ាន់ដា",
                        "nameEn": "Mr. មាស វ៉ាន់ដា",
                        "role": "គ្រូបង្រៀន គីមីវិទ្យា",
                        "dept": "teaching",
                        "deptKh": "គ្រូបង្រៀន",
                        "email": "teacher65@spstech.edu.kh",
                        "phone": "+855 75 555 15",
                        "avatar": "images/Teacher/Teacher_65.jpg",
                        "bio": "គ្រូបង្រៀនមុខវិជ្ជា គីមីវិទ្យា មានបទពិសោធន៍បង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្សានុសិស្សយ៉ាងយកចិត្តទុកដាក់។",
                        "qualifications": [
                                "Bachelor of Chemistry",
                                "Certified High School Teacher"
                        ]
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
                        title: "សាលាបើកទទួលពាក្យចុះឈ្មោះចូលរៀន ឆ្នាំសិក្សា ២០២៦-២០២៧",
                        date: "២៥ កក្កដា ២០២៦",
                        category: "ការចុះឈ្មោះ",
                        author: "គណៈគ្រប់គ្រងសាលា",
                        views: 2450,
                        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
                        summary: "វិទ្យាល័យ ឧដុង្គ បច្ចេកវិទ្យា និងវិទ្យាសាស្ត្រ ប្រកាសទទួលពាក្យសុំចូលរៀនថ្នាក់ទី១០ ទី១១ និងទី១២ ព្រមទាំងផ្តល់អាហារូបករណ៍ ៥០% សម្រាប់សិស្សពូកែផ្នែក STEM។",
                        content: `
                <h3>ការទទួលពាក្យសុំចូលរៀន និងអាហារូបករណ៍ ឆ្នាំសិក្សា ២០២៦-២០២៧</h3>
                <p>វិទ្យាល័យ ឧដុង្គ បច្ចេកវិទ្យា និងវិទ្យាសាស្ត្រ មានកិត្តិយសសូមជម្រាបជូនអាណាព្យាបាល និងសិស្សានុសិស្សទាំងអស់ឱ្យបានជ្រាបថា សាលារៀនចាប់ផ្ដើមបើកទទួលពាក្យចូលរៀនថ្នាក់ទី១០ ទី១១ និងទី១២ សម្រាប់ឆ្នាំសិក្សាថ្មី។</p>
                <div style="background: rgba(59, 130, 246, 0.08); padding: 15px; border-left: 4px solid #3b82f6; margin: 15px 0; border-radius: 4px;">
                    <strong>លក្ខខណ្ឌអាហារូបករណ៍ STEM 50%:</strong> <br>
                    • សម្រាប់សិស្សដែលមាននិទ្ទេស A ឬ B ក្នុងការប្រឡងសញ្ញាបត្របឋមភូមិ (ឌីប្លូម) <br>
                    • សិស្សដែលប្រឡងជាប់តេស្តសមត្ថភាពផ្នែក គណិតវិទ្យា និង ព័ត៌មានវិទ្យា របស់សាលា
                </div>
                <p>កាលបរិច្ឆេទឈប់ទទួលពាក្យ: ថ្ងៃទី ៣១ ខែ សីហា ឆ្នាំ ២០២៦។</p>
            `
                },
                {
                        id: "news-2",
                        title: "ជ័យលាភីមេដាយមាសក្នុងការប្រកួតប្រជែង Robot & Coding ថ្នាក់ជាតិ ២០២៦",
                        date: "១៨ កក្កដា ២០២៦",
                        category: "ជ័យលាភី",
                        author: "ដេប៉ាតឺម៉ង់ IT & Robotics",
                        views: 3120,
                        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
                        summary: "ក្រុមសិស្សតំណាងសាលាបានឈ្នះពានរង្វាន់លេខ១ ក្នុងព្រឹត្តិការណ៍ Cambodia STEM Festival ជាមួយនឹងគម្រោង AI Smart Farm Automation។",
                        content: `
                <h3>មោទនភាពសាលា: ជ័យលាភីមេដាយមាស Robot & AI ថ្នាក់ជាតិ</h3>
                <p>ក្រុមសិស្សស្រាវជ្រាវផ្នែក Robot & Artificial Intelligence នៃវិទ្យាល័យ ឧដុង្គ ទទួលបានមេដាយមាស និងពានរង្វាន់ឯកក្នុងការប្រកួតប្រជែងថ្នាក់ជាតិ Cambodia STEM & Robotics Olympiad 2026។</p>
                <p>ស្នាដៃដែលទទួលបានជ័យលាភី គឺជាប្រព័ន្ធគ្រប់គ្រងកសិដ្ឋានស្វ័យប្រវត្តិតាមបច្ចេកវិទ្យា AI (Smart Farm Automation) ដែលប្រើប្រាស់ Sensor វាស់សំណើមដី សីតុណ្ហភាព និងប្រព័ន្ធស្រោចស្រពស្វ័យប្រវត្តិបញ្ជាតាមទូរស័ព្ទដៃ។</p>
            `
                },
                {
                        id: "news-3",
                        title: "ពិធីសម្ពោធបន្ទប់ពិសោធន៍ AI, IoT និងបណ្ណាល័យឌីជីថលស្វ័យប្រវត្តិ",
                        date: "០៥ កក្កដា ២០២៦",
                        category: "ព្រឹត្តិការណ៍",
                        author: "ការិយាល័យបច្ចេកវិទ្យា",
                        views: 1890,
                        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
                        summary: "សាលាបានបំពាក់កុំព្យូទ័រល្បឿនលឿន ប្រព័ន្ធអ៊ីនធឺណិត fiber-optic និង AI Cloud Workstations ដើម្បីគាំទ្រដល់ការស្រាវជ្រាវរបស់សិស្ស។",
                        content: `
                <h3>ការអភិវឌ្ឍហេដ្ឋារចនាសម្ព័ន្ធអប់រំឌីជីថលទំនើប</h3>
                <p>វិទ្យាល័យ ឧដុង្គ បានប្រកាសសម្ពោធដាក់ឱ្យប្រើប្រាស់ផ្លូវការនូវ បន្ទប់ពិសោធន៍ AI & Robotics Lab ថ្មីស្រឡាង ព្រមទាំងបណ្ណាល័យឌីជីថលស្វ័យប្រវត្តិ ដែលអាចឱ្យសិស្សានុសិស្សទាញយកសៀវភៅ E-Books ជាង ៤,៨០០ ក្បាលដោយសេរី។</p>
            `
                },
                {
                        id: "news-4",
                        title: "សកម្មភាពសិក្សាចុះកម្សាន្ត និងពិសោធន៍វិទ្យាសាស្ត្រជាក់ស្តែង (STEM Field Trip 2026)",
                        date: "២៨ មិថុនា ២០២៦",
                        category: "ព្រឹត្តិការណ៍",
                        author: "គណៈកម្មការសកម្មភាពសិស្ស",
                        views: 1540,
                        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
                        summary: "សិស្សានុសិស្សថ្នាក់ទី១១ និងទី១២ បានចុះសិក្សាស្រាវជ្រាវអំពីបរិស្ថាន ថាមពលកកើតឡើងវិញ និងបច្ចេកវិទ្យាកសិកម្មនៅមជ្ឈមណ្ឌលស្រាវជ្រាវជាតិ។",
                        content: `
                <h3>ដំណើរទស្សនកិច្ចសិក្សាស្រាវជ្រាវជាក់ស្តែង Field Trip</h3>
                <p>សិស្សានុសិស្សបានចុះធ្វើការពិសោធន៍ផ្ទាល់ជាមួយអ្នកជំនាញផ្នែកបរិស្ថាន ថាមពលពន្លឺព្រះអាទិត្យ (Solar Energy) និងការដាំដុះបែបអ៊ីដ្រូពូនិច (Hydroponics) ដើម្បីផ្សារភ្ជាប់មេរៀនទ្រឹស្តីក្នុងថ្នាក់ទៅនឹងការអនុវត្តជាក់ស្តែង។</p>
            `
                },
                {
                        id: "news-5",
                        title: "ការជួបជុំមាតាបិតាសិស្ស និងប្រគល់រង្វាន់លើកទឹកចិត្តសិស្សឆ្នើមប្រចាំឆមាស",
                        date: "១៥ មិថុនា ២០២៦",
                        category: "ជូនដំណឹង",
                        author: "គណៈគ្រប់គ្រងសាលា",
                        views: 2100,
                        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
                        summary: "សាលាបានរៀបចំពិធីជួបជុំជាមួយអាណាព្យាបាលសិស្ស ដើម្បីរាយការណ៍អំពីលទ្ធផលសិក្សា និងប្រគល់លិខិតសរសើរជូនសិស្សដែលមានស្នាដៃឆ្នើម។",
                        content: `
                <h3>កិច្ចប្រជុំមាតាបិតាសិស្ស និងការលើកទឹកចិត្តសិស្សឆ្នើម</h3>
                <p>គណៈគ្រប់គ្រងសាលាបានថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅជូនចំពោះអាណាព្យាបាលសិស្សទាំងអស់ដែលបានសហការយ៉ាងជិតស្និទ្ធក្នុងការតាមដានការសិក្សារបស់បុត្រធីតា។ ក្នុងឱកាសនោះ សាលាក៏បានប្រគល់ប័ណ្ណសរសើរ និងរង្វាន់លើកទឹកចិត្តជូនសិស្សឆ្នើមប្រចាំឆមាសផងដែរ។</p>
            `
                },
                {
                        id: "news-6",
                        title: "សាលាទទួលបានប័ណ្ណសរសើរ សាលារៀនគំរូឌីជីថល និងអនាម័យឆ្នើមថ្នាក់ជាតិ",
                        date: "០១ មិថុនា ២០២៦",
                        category: "ជ័យលាភី",
                        author: "ការិយាល័យរដ្ឋបាល",
                        views: 2890,
                        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
                        summary: "វិទ្យាល័យ ឧដុង្គ ត្រូវបានវាយតម្លៃជាសាលារៀនគំរូផ្នែកគ្រប់គ្រងឌីជីថល បរិស្ថានបៃតង និងស្តង់ដារអប់រំកម្រិតខ្ពស់។",
                        content: `
                <h3>ជ័យលាភីសាលារៀនគំរូថ្នាក់ជាតិ ឆ្នាំ២០២៦</h3>
                <p>ដោយសារការខិតខំប្រឹងប្រែងរបស់ថ្នាក់ដឹកនាំ លោកគ្រូអ្នកគ្រូ និងសិស្សានុសិស្សទាំងអស់ វិទ្យាល័យ ឧដុង្គ បច្ចេកវិទ្យា និងវិទ្យាសាស្ត្រ ត្រូវបានក្រសួងអប់រំ យុវជន និងកីឡា វាយតម្លៃជា "សាលារៀនគំរូឌីជីថល និងបរិស្ថានស្អាតថ្នាក់ជាតិ"។</p>
            `
                }
        ]
};

// Export to global scope
window.schoolData = schoolData;
