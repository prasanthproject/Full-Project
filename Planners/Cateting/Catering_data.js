// import IMAGES from '';
const Breakfast_food_items=[
    {   breakfast:'1 Tiffen',  image:require('./Images/tiffen.jpg') ,btnclick:'tiffen'},

    {   breakfast:'2 Gravies & Chunty', image:require('./Images/gravies.jpg'), btnclick:'sidedish_chunty'},
    
    {   breakfast:'3 Sweets and Dessarts',  image:require('./Images/dessarts.jpg'), btnclick:'sweet_dessart' },
    
    {   breakfast:"4 Vada", image:require('./Images/vadas.jpg'), btnclick:'vada'},
]

const Lunch_food_items=[
    {      images:require('./Images/kootu.png'),  name:'1 Kuttu & Poriyal',btnclick:'kuttu_poriyal'},
    {      images:require('./Images/sambar.jpg'),  name:'2 Kurma and  Gravies',btnclick:'sidedish2'},
    {      images:require('./Images/payasam.png'),  name:'3 Payasam',btnclick:'payasam'},
    {      images:require('./Images/meals.jpg'),  name:'4 Meals',btnclick:'meals'},
    {      images:require('./Images/sweets.jpg'),  name:'5 Sweets ',btnclick:'sweet2' },
    {      images:require('./Images/paan.png'),  name:'7 Paan',btnclick:'paan'},
    {      images:require('./Images/pickle.jpg'),  name:'8 Pickle',btnclick:'pickle'},
    {      images:require('./Images/raita.jpg'),  name:'9 Raita',btnclick:'raita'},

]

const Dinner_food_items=[
    {        name:'Tiffen',       image:require('./Images/tiffen.jpg') ,btnclick:'tiffen2'},
    {        name:'Gravies',      image:require('./Images/gravies.jpg'),btnclick:'Sidedish3'},
    {        name:'Beverages',    image:require('./Images/beverages.png'),btnclick:'beverages'},
    {        name:'Vada ',        image:require('./Images/vadas.jpg'), btnclick:'vada2'},
    {        name:'Sweets & Alwa',image:require('./Images/dessarts.jpg'),btnclick:'Sweet3'},
]
// *******************************************************  Top Receipes ***************************************************
const Top_Receipes=[
    {        name:'Chettinad Receipes',image:require('./Images/Chettinadu.jpg'),btnclick:'chettinad' },
    {        name:'Biryani Receipes',  image:require('./Images/biryani.jpg'),btnclick:'biryani' },
    {        name:'Pulao Receipes',    image:require('./Images/pulao.jpg'),btnclick:'pulao' },
    {        name:'Panner Receipes',   image:require('./Images/Panner.jpg'),btnclick:'panner' },
]

const chettinadu_receipes =[
    {     images:'https://drive.google.com/uc?export=view&id=1dVp99oC-cnDLfWYzlTcq6BgTvzBVc7Up', name:'Chettinad Veg Pulao ',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=16U9boh7Pxsm0R-2vhjgeAQy1EgJBUJIW', name:'Chettinad Chicken',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1BbecG95OS4myL6OxYJ8EBJfn58pVki47', name:'Chettinad Vegtable Kurma',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=12gYDBXYwmpA8ooQjpJDFLcod6HRlciG8', name:'Chettinad Pattani Kurma',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1dVp99oC-cnDLfWYzlTcq6BgTvzBVc7Up', name:'Chettinad Pepper Mushroom',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=14NJY3acq2C_81BpwB4ZA1RdKZR0os3vC', name:'Chettinad Egg Curry',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1fZABImq27gFeZyLMXq5_EkpQAYEx_Ddh', name:'Chettinad Chicken Keema',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1op-5sayb-H4KowNrRqbaql06IQlMGSXU', name:'Chettinad Chicken Kola Urundai ',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=12-F6BsW67j_wukZph8v7Bzh8ewaYUBxR', name:'Chettinad Brinjal Gravy',    price:'7'},

]

const biryani_receipes=[
    {     images:'https://drive.google.com/uc?export=view&id=1kpU_XVFV_pdZumI4OrEGBznCsjfkJ00C', name:'Ambur Biryani',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1xb3NGOCpO2s6xTVGz3nC5ILdJ5xCsr4O', name:'Assamese',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=19RpoZAMiYr-JxH_6S6LYTRU3nY0cSPCC', name:'Chettinad Prawn Biryani',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1zJ7VaYp72IREcE6JwMIsT-FD20HIsQCW', name:'Chettinad Chicken Biryani',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1k-vxeb-UYiw-McM5ZSmaoWlaqG89eIF1', name:'Dindukal Thalappakatti Biryani',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1FZhgDC4yue9_myO8Jz7IGN-5a3BXlkE3', name:'Hyderabad Biryani',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1gNNCDMJHWNjWWwPAJiCGUf1ZuwY_GgDh', name:'Kashmiri  Biryani',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1rEGQd7-b9JN2SxlnGA0KTMJDdpecQVoX', name:'Malabor Biryani',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=153xkLTxW5KBwsmCeEEY2fmTcmKZPGj0g', name:'Sindi Biryani',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1z-INYrvwGQSrZoEr4j0LpNbAi6pJj1lb', name:'Tehari Biryani',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1Jbz-5KKOKfHjcPeFkDkEmBIiyf4stKhZ', name:'Bombay Biryani',    price:'7'},
]
 
const pulao_receipes=[
    {     images:'https://drive.google.com/uc?export=view&id=1E7LR2ASbXKkOiGQr6IXunTDxBG9HCM0y',  name:'Panner Pulao', price:'45'    },
    {     images:'https://drive.google.com/uc?export=view&id=1moWHJFFhe4BbGvoGvPYjrT7D4hspn4-r',  name:'Veg Pulao', price:'45'    },
    {     images:'https://drive.google.com/uc?export=view&id=1acvkw2IdP0mCUt8W0Iv3c7Or0HgitY53',  name:'Mashroom Pulao', price:'45'    },
    {     images:'https://drive.google.com/uc?export=view&id=1MtR25oTyQIsTKd62HNLw4Laa39FUZi3O',  name:'kashmiri Pulao', price:'45'    },
    {     images:'https://drive.google.com/uc?export=view&id=1ez83oqjvetiVSr2wBUcCrVn5B6ZJp_zS', name:'Methi Rice Pulao',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1rOg7YbyqqVB-QTznwFrPvSB83WAHR0Vc', name:'Palak Pulao',         price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=17x-6xtK7Db3UcloxQOT2ezVfhp2jwq8v', name:'Pash Tooni Zarda Pulao',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1UXNg7mdDyieOALfjyc-tJW-xVHoqyuzR', name:'Tawa Pulao',    price:'7'},
]

const paneer_receipes=[
    {     images:'https://drive.google.com/uc?export=view&id=1dosq6e0u6P_Ak60mlBb6kbOGOk9p5G4Q', name:'Chili Panner',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1sQ92KCFNi6fKK4TPPdwvG3FPKzsmFYnr', name:'Kadai Panner',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1vdKxgFRduPXiYFgt_MfliOwMjqbrhoif', name:'Palak Panner',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1dwnf_070eWcffFbI8QZE1jAbMaH6awWP', name:'Panner 65',       price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1xbeMSBz6GgSW2yDyoP-vrM3mBmxgyhSz', name:'Panner Butter Masala',    price:'7'},
    {     images:'https://drive.google.com/uc?export=view&id=1o8oN1HyQkyYl6AlfMHiMLxnCw_3FNahg', name:'Tomoto Panner',    price:'7'},
]


// *********************************************************    Breakfast Foods ****************************************************
const Tiffen_items=[
    {      images:require('D:/React_Programs/project1/src/Imges/idly.jpg'),  name:'Idy',        price:'5'},
    {      images:'https://drive.google.com/uc?export=view&id=1fxukSyscRNf0H31cGkY4WUB0XkmDtjWB',  name:'Pongal' ,     price:'20'},    
    {      images:'https://drive.google.com/uc?export=view&id=1E7Bh9iKsJ0X89O54Ta2XcGcScYZTIqTJ',  name:'Idiyappam',   price:'10'},
    {      images:'https://drive.google.com/uc?export=view&id=1ceT5Jcl4Yfa5mCfH6gqyeuwLdNHvWzwU',  name:'Uthappam',    price:'10'},
    {      images:'https://drive.google.com/uc?export=view&id=14Bixu9RuDJ8qT1UFjuBDZsG25_X4St6H',  name:'Puttu',       price:'15'},
    {      images:'https://drive.google.com/uc?export=view&id=1PnwEuxh4n_1-ZSMk5whVWay-hOyhE7H7',  name:'Poori',       price:'10'},
    {      images:'https://drive.google.com/uc?export=view&id=1bNLSa_vk5ObYmraq1cCRMj6lSKk76H2N',  name:'Chappati',     price:'10'},
    {      images:'https://drive.google.com/uc?export=view&id=1eQWTjk4DQ9HkLjTBnh-BXzI8SZh1XnBA',  name:'Onion Uthappam',    price:'15'},
    {      images:'https://drive.google.com/uc?export=view&id=1TvR5s3MU_LJlcPGy4TOtPIzl9FYm-ZaN',  name:'Heart Idli',price:'5'},
    {      images:'https://drive.google.com/uc?export=view&id=1aKMDVaJCSMf1M0sq7iePn5RqeyqDs_ui',  name:'Bun Parotta',price:'15'},
    {      images:'https://drive.google.com/uc?export=view&id=1ipkD__Dsxf9IxazYx8HANX04eLd32HAs',  name:'Parotta',price:'12'},
    {      images:'https://drive.google.com/uc?export=view&id=1Ue6FDpRUL6wxYfJO7reUODkqwBTX6JUd',  name:'Chilli Parotta',price:'40'}

   
]
const Sidedish_items=[
    {      images:'https://drive.google.com/uc?export=view&id=11_ZZBJMj4UDqx-d_A_bnrfLMOKYfo8g-',  name:'Sambar',    price:'Free'},
    {      images:'https://drive.google.com/uc?export=view&id=1DEbwg0g_LpTfoC9Nf0JXfSNvgpZ31eCI',  name:'Chana Masala' ,   price:'60'},
    {      images:'https://drive.google.com/uc?export=view&id=1diIkd17eDkduk9a1e388qs5o5bV9suwN',  name:'Mashroom Kurma',    price:'80'},
    {      images:'https://drive.google.com/uc?export=view&id=1XbI0echfbq61ABI2kkynIddYYdiPP3mg',  name:'Paneer Kurma',    price:'90'},
    {      images:'https://drive.google.com/uc?export=view&id=1tjSaZVqV6SK1VV6gwJRb4iufvErDYleT',  name:'Potato Kurma',    price:'50'},
    {      images:'https://drive.google.com/uc?export=view&id=1OxcJf_-DohVoSmlvgN5Z9p7j_CTQus6J',  name:'Veg Kurma',    price:'50'},
    {      images:'https://drive.google.com/uc?export=view&id=1t3_bP15w0xQIjODciRHy9qgPBZ8MF8Uq',  name:'Veg Salna',    price:'50'},
    {      images:'https://drive.google.com/uc?export=view&id=1OxcJf_-DohVoSmlvgN5Z9p7j_CTQus6J',  name:'Poori Masala Kurma',    price:'Free'},
    {      images:'https://drive.google.com/uc?export=view&id=1Inu_J9wOXj6KQnSg61GONAuSddvFZhTZ',  name:'white Kurma',    price:'60'},

]

const Chunty_items=[
    {       images:'https://drive.google.com/uc?export=view&id=17J9YYeoC8239uOFz66VybMwnj_rh7tKp', name:'Coconut Chutney',    price:'Free'},
    {       images:'https://drive.google.com/uc?export=view&id=1FDZ1VOD6h2lAtWhrFK-ctPLqvAGgD2Pg', name:'Tomoto Chutney',    price:'Free'},
    {       images:'https://drive.google.com/uc?export=view&id=1R7wojYnEsmoTp_2-w2hsFwSNuGgHpeUB', name:'Peanut Chutney' ,   price:'50'},
    {       images:'https://drive.google.com/uc?export=view&id=1gvKwKaEXhRtbRwwsPtsr6dWI_ekgNCnN', name:'Coriander Chutney',    price:'40'},
    {       images:'https://drive.google.com/uc?export=view&id=1rs7PeC-JKyivHH-oGZqCOkyILcI7vjeJ', name:'Ginger Chutney',    price:'40'},
    {       images:'https://drive.google.com/uc?export=view&id=1A8g7A9qjL8wc8yCMYY42i9JwJsqG95N1', name:'Mint Chutney',    price:'40'},
    {       images:'https://drive.google.com/uc?export=view&id=1AeUwokpRbbzFpv3SsQM29fyAsCse7V6N', name:'CurryLeaves Chutney',    price:'40'},
    {       images:'https://drive.google.com/uc?export=view&id=1EK3ixG2eP5NpsIqJOruEyHSGs6LoLOop',  name:'Onion Chutney',    price:'40'},

]
const Vada_items=[
    {       images:'https://drive.google.com/uc?export=view&id=1vFuYI93Suvk_TV0n1dYM-jx1K9D6E0z0', name:'Ulunthu Vadai',    price:'7'},
    {       images:'https://drive.google.com/uc?export=view&id=1txpSpolfoOdJLolbIqsg7YrVqF8F9aXs', name:'Onion Vadai' ,   price:'7'},
    {       images:'https://drive.google.com/uc?export=view&id=1Sd62gKmPl5qexda9blO2uLir7hKswczd', name:'Paruppu Vadai',    price:'7'},
    {       images:'https://drive.google.com/uc?export=view&id=1LX_v4o0k6kK8Ttc6lR8JAtUr1OyNiRoc', name:'Veg Keema Samosa',    price:'7'},
    {       images:'https://drive.google.com/uc?export=view&id=1JTqb8ZWN4cZXewgXwBAC05fJKD2VALPW', name:'Mysore Ponda',    price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1kSDaKoklduZkqo8nvvfP6nkNG8ztT9-w', name:'Milakayi Bajji', price:'7'},
    {       images:'https://drive.google.com/uc?export=view&id=1B7fkZjeZc8nvDW3kRI_ow7c9vfFos71-', name:'Keerai Vadai', price:'7'},


]
const Sweet_items=[
    {      images:'https://drive.google.com/uc?export=view&id=1k-DyzjlP34z29xdJPy5C6ApaKPPiATvj',  name:'Laddu',    price:'10'},
    {      images:'https://drive.google.com/uc?export=view&id=1MuCc44hmP0ns8Uns7iZI5YJtGxHiIlzu',  name:'Jilebi' ,   price:'10'},
    {      images:'https://drive.google.com/uc?export=view&id=1HgWANt1kT7j-6DgFPDQh8zNSlkJVobpQ',  name:'Kaju Katli',    price:'10'},
    {      images:'https://drive.google.com/uc?export=view&id=1Uxt-BR7DK8jn8R15lCATW01tNcBGYBBE',  name:'Gulab Jamun',      price:'10'},
    {      images:'https://drive.google.com/uc?export=view&id=1kP0qwsx2Qs7EkuJvvpWimvezNX6JBP_Q',  name:'Mysore Pak',    price:'10'},
    {      images:'https://drive.google.com/uc?export=view&id=1GVRJCZqY6my5nwDgWxCOg7ZqQv3Wyqrx',  name:'Rasakulla', price:'10'}
]
const Dessarts_items=[
    {     images:'https://drive.google.com/uc?export=view&id=1oMWG1pSkERD7NetVVk6nHixe6nRDglW2',  name:'Semiya Kesari',    price:'15'},
    {     images:'https://drive.google.com/uc?export=view&id=1JNPHpjGOarJ8Si25KvFjZzyWkxYM7cvy',  name:'Pineapple Kesari',    price:'35'},
    {     images:'https://drive.google.com/uc?export=view&id=1124sRpXraUONLI4JwQjE05cquw-cauQO',  name:'Rava Kesari',    price:'15'},
    {     images:'https://drive.google.com/uc?export=view&id=1lhUqV9qDsg9tLj7wIB1sx1KYAqL_-uL0',  name:'Mango Kesari',    price:'25'},
    {     images:'https://drive.google.com/uc?export=view&id=1GVMomRoqCczfwwH8YrLm7LXEtzTDlVC1',   name:'Carrot Halwa' ,   price:'20'},  
    {     images:'https://drive.google.com/uc?export=view&id=1_nCGJzV2pQ7wz8WQCFIgT3Who0cksaL4',   name:'Pumkin Halwa' ,   price:'30'},
    {     images:'https://drive.google.com/uc?export=view&id=1M5TD5wJZTh9MW77-0o_NPUJYZ6QnErzV',   name:'Beetroot Halwa' ,   price:'20'},
    {     images:'https://drive.google.com/uc?export=view&id=1gipHsEvnUUNpCuzYTi8ledSF0isPDFiS',   name:'Bread Halwa',    price:'15'},
    {     images:'https://drive.google.com/uc?export=view&id=1e-nuPl1iAthtWMFvrf5KUeo9BoYsmdOi',   name:'Thirunelveli Halwa',    price:'20'},
    {     images:'https://drive.google.com/uc?export=view&id=1OPbIPjUn9YOvMNHggIpAobMJ7SO1-ydS',   name:'DryFruits Kalwa',    price:'40'},
    {     images:'https://drive.google.com/uc?export=view&id=1IuKo-XeYjUrjfOnZHOzbzVKeRgE39QKc',   name:'Badam Halwa',    price:'50'},
]
// ------------------------------------------------- LUNCH----------------------------
const KuttuPoriyal_items=[
    {       images:'https://drive.google.com/uc?export=view&id=1uqrXkFjwFEqVrE3F-9jxIH741MhHUIJQ',  name:'Avial' ,             price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1ykeTIpiq84CQREsB5Mn3hHxAhBcYk-9K',  name:'Brinjal kootu',      price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1FQWts5bVNeO9mavcLrzywN69Z0URrvj8',  name:'Chow Chow Kootu',    price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1v3a6PT-T0IivjqUpxAnCT7-69iMvr24W',  name:'Poosanikai Kootu',   price:'15'},
    {       images:'https://drive.google.com/uc?export=view&id=1MIiGouQ1YdX-w08lXaUmYr0GLTZL9JVs',  name:'Peerkankai Kootu',   price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1Pb_MH0Han8K5STt4kprxtnaBt4Fyam1j',  name:'Pudalankai Kootu',   price:'10'},
    
    {       images:'https://drive.google.com/uc?export=view&id=1goQDDqq7hwozovj5dniS0D_U86qNTPc7', name:'Seppankilanku Roast',    price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1wLNgJewLvYlddTT1xofblazAnl_m0eTq', name:'KarunaiKilanku Roast',    price:'15'},
    
    {       images:'https://drive.google.com/uc?export=view&id=1SBXTSBuvOFjz31AS71ZV3XgAWbR40T_4', name:'Beans Paruppu Usili',    price:'15' },
    {       images:'https://drive.google.com/uc?export=view&id=12wNtRAGFHpZ_8_DFKheMhNjeqwKCf4CE', name:'Gobi 65',    price:'25'},
    {       images:'https://drive.google.com/uc?export=view&id=1E9JAG-ukRg1rKud6lOYnoVQ1-mZUrXdd', name:'Mushroom 65',    price:'30'},

    {       images:'https://drive.google.com/uc?export=view&id=1QAVJIOI2YDDGhrfufbFvhcf-gSgdkmEk', name:'Tindora Fry',    price:'20'},
    {       images:'https://drive.google.com/uc?export=view&id=1vICFHALyvXbV23rIQdGhotEehFJWSwvp', name:'Baby Potato Fry',    price:'20'},
    {       images:'https://drive.google.com/uc?export=view&id=11_1_FR7Vw0rnXXKP6z7Ubu4qLfGMwnRR', name:'Mushroom Fry',    price:'30'},
]
const Poriyal=[
    {       images:'https://drive.google.com/uc?export=view&id=1qAdQr5Cg2_S1XSR2iNOZUHa43xNSYMox', name:'Avarakkai Poriyal',    price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1vdgmvCqGpgy3MWlnr_VftbB_Ha2Ck0MJ', name:'Beetroot Poriyal',    price:'10' },
    {       images:'https://drive.google.com/uc?export=view&id=1jjjrKECWHSSa6Cam_A9ESxIrSqIOlUZx', name:'Brinjal Poriyal',    price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1l8NlgeUiEzKgBAhKePjZTsq2MSWkXOmm', name:'Carrot-Beans Poriyal',    price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1fx2L6vU1LEjI-vW6sZzRCZjqbjZuWimy', name:'Kudaimilakai Poriyal',    price:'15' },
    {       images:'https://drive.google.com/uc?export=view&id=1k32NLarF95cXGtoD_d9HZx9V84F_9oty', name:'Seeni Avarakkai Poriyal',    price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1YVuJDt9ctLptQ3w--mPr4Zvig7W1r2UC', name:'Valakkayi Poriyal',    price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1D2E3LMQzHqjhdT_czTSjHEApEbu8Dh-5', name:'Valakkai Varuval',    price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1XSDZknrnsM4KUJAJ0FmYV3y0F1trQPqu', name:'Vendakkai Poriyal',    price:'10' },
    {       images:'https://drive.google.com/uc?export=view&id=1P6da4w2Gq3VoKBwL22px7fMR3pM_SHHP', name:'Muttaigosh Poriyal',    price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1-upGuEWAZOb16HV63spr1UJhIjviGHzB', name:'Mochai Poriyal',    price:'15'},
    {       images:'https://drive.google.com/uc?export=view&id=1ZQMYO5oTqwJsnllkAFoMK6xiBtoVJ8XV', name:'Long Beans poriyal',    price:'15'},
    {       images:'https://drive.google.com/uc?export=view&id=1bC2emQDongbmrz_lTn5rms2Pw9sP-eyI', name:'Potato Poriyal',    price:'10'},
    {       images:'https://drive.google.com/uc?export=view&id=1e1zQrCUrbD6CrozlNkAg2MshhrncX2bj', name:'Potato Karakari',    price:'15'},
    
]
const sidedish1_items=[
    {     images:'https://drive.google.com/uc?export=view&id=1vreoz02sV23n8GRPg5Ruo-Sxe-_0kkEL', name:'Sambar',    price:'Free'},
    {     images:'https://drive.google.com/uc?export=view&id=16aSlukw4JzVlqD0EXp37UBw9z8kAaXSy', name:'Rasam' ,   price:'Free'},
    {     images:'https://drive.google.com/uc?export=view&id=1zUUJHJbxAlirl__x1-uxb0I9yHkvf2q8', name:'Vantha Kulanbu',  price:'130'},
    {     images:'https://drive.google.com/uc?export=view&id=19CXjvuv9LA7fz-iesW6Fi88me5BbS9rR', name:'Moor ',    price:'70'},
    {     images:'https://drive.google.com/uc?export=view&id=13f81QJJIQJXn3E8nUlMlKFylQpcDGqBf', name:'Tomato Rasam',    price:'120'},
    {     images:'https://drive.google.com/uc?export=view&id=1qAQcLevWbFgydBNVS1msS6p5F6LN_KU7', name:'Moor Kulambu',    price:'80'},
    
]
const Payasam_items=[
    {     images:'https://drive.google.com/uc?export=view&id=1h_O-kSfpfv8ncVA6-fvYV5JwQFFXKihe', name:'Semiya Payasam' ,     price:'20'},
    {     images:'', name:'Elaneer Payasam',    price:'60'},
    {     images:'https://drive.google.com/uc?export=view&id=1Rz617kXFhFa9H3n9prz65giUonPDcZJO', name:'Moong Dal Payasam',   price:'40'},
    {     images:'https://drive.google.com/uc?export=view&id=1QIx79cfRyQdjF2qn3KZbK86Ts42-XaXK', name:'Jackfruit Payasam',   price:'50'},
    {     images:'https://drive.google.com/uc?export=view&id=1etg0LwEftCzVQOJdMjU7W0rxJZobeTD2', name:'Thengai  Payasam',    price:'30'},
    {     images:'https://drive.google.com/uc?export=view&id=11IYb1vpCunZQ9Wa1VsAarnUCf9gN_my4', name:'Paal Payasam',        price:'20'},
    {     images:'https://drive.google.com/uc?export=view&id=1lH2P7zqF_hNYjzbaMNEvYPSPrfz7r-W2', name:'Sabudana Payasam',    price:'20'},
    {     images:'https://drive.google.com/uc?export=view&id=1A2a95F7hn7s_qTmQ7u2fhsZ6p5-IuXD0', name:'Banana Payasam',      price:'30'},

]
const Meals_items=[
    {     images:'https://drive.google.com/uc?export=view&id=1AKeGHF44j-_ToisFNCjmb6ivnkSRmF5F',  name:'White Rice',    price:'60'},
    {     images:'https://drive.google.com/uc?export=view&id=1dZx-SYwrkzSiP7kj0hUl0WhkziwvnFg5',  name:'Fried Rice' ,   price:'150'},
    {     images:'https://drive.google.com/uc?export=view&id=1SDnCar5B347-RxoED8YC9WJJcwxeYp28',  name:'Veg Briyani',    price:'120'},
    {     images:'https://drive.google.com/uc?export=view&id=1WNq-LFw8j3edLv9Z0dOCR3vAOX8ul_xO', name:'Lemon Rice',    price:'50'},
    {     images:'https://drive.google.com/uc?export=view&id=1LpAYNVwqOXHIOikZafiyc16SEgaPngXO', name:'Pudina Rice',    price:'60'},
    {     images:'https://drive.google.com/uc?export=view&id=1qAzP8UwGLjjIW4v8IBB-ZqpWKyvsGb5w', name:'Curd Rice',    price:'40'},
    {     images:'https://drive.google.com/uc?export=view&id=1slKL35tAb-4lpNUKCJcx3PZEGwJuC9wT', name:'Puliyodharai Rice',    price:'50'},
    {     images:'https://drive.google.com/uc?export=view&id=1PgzJ7UWPepk-t5X7H04_kdzAwsTgt2zo', name:'Schezwan fried rice',    price:'150'},
    {     images:'https://drive.google.com/uc?export=view&id=1sVdMqhW6UyS2eAp90tMLRfI9c2aVO6o3', name:'Bisi bela path',    price:'140'},
    {     images:'https://drive.google.com/uc?export=view&id=1qAzP8UwGLjjIW4v8IBB-ZqpWKyvsGb5w', name:'Ghee Rice',    price:'80'},
    {     images:'https://drive.google.com/uc?export=view&id=1Ak_99NwtSftsqHsRTj1KcYAO0D7EZdG2', name:'Jeera Rice',    price:'75'},
    {     images:'https://drive.google.com/uc?export=view&id=1rgxdnp4DvqC98oARDgcFB8G1zri_UMUG',name:'Cocount Rice',price:'50'}
]
const Pickle_items=[
    {     images:'https://drive.google.com/uc?export=view&id=1NPQ3j7fZcRrGNfoO9_iVRnzdEun7kT4O',  name:'Mango Pickle',     price:'50'},
    {     images:'https://drive.google.com/uc?export=view&id=1tc68c2g6sO7917fRFmFsdpmVpgk8VINP',  name:'Garlic Pickle',    price:'55'},
    {     images:'https://drive.google.com/uc?export=view&id=1aCri29Vt9QDnpoxtdm_JaTSh9hU7_Ltu',  name:'Lemon Pickle',     price:'50'},
    {     images:'https://drive.google.com/uc?export=view&id=1O_nRQcJ6P5glCGbq5AMFaHGw4yJzqUTL',  name:'Tomoto Pickle',    price:'50'},
    {     images:'https://drive.google.com/uc?export=view&id=1KbMvNkoyGysZUocByAoji5_frqNZESx1',  name:'Narthangai Pickle',price:'60'},
]
const Raita_items=[
    {     images:'https://drive.google.com/uc?export=view&id=1OgidRcsMeqjVagFhAsmnugqbnORYg8UM', name:'Onion Raita',       price:'Free'},
    {     images:'https://drive.google.com/uc?export=view&id=1kS7lKLm74I4dIVmNlS5LDkz2uLoPAlt8', name:'Cucumber Raita',    price:'20'},
    {     images:'https://drive.google.com/uc?export=view&id=1hJvjNC8BObqfxSAnnl4nNETyfHdYM2nA', name:'Thakkali Raita',    price:'20'},
    {     images:'https://drive.google.com/uc?export=view&id=13vuBgtXIDtvI_-FYzokbYE7C2SUwV8Se', name:'Pineapple Raita',   price:'30'},
    {     images:'https://drive.google.com/uc?export=view&id=1Q9KBf7oSCv081XPzc5aADDUOw2cX0Aiw', name:'Panner Raita',      price:'50'},
    {     images:'https://drive.google.com/uc?export=view&id=1LVSzDeykbTjtEwuz_byqrSeZruR5O2pj', name:'Boondi Raita',      price:'40'},
    {     images:'https://drive.google.com/uc?export=view&id=146nTxD2ZvikMLQv3-dM2xZOzH1462A-i', name:'Beetroot Raita',    price:'20'},
]

const paan_items=[
    {     images:'https://drive.google.com/uc?export=view&id=1ARwhOIB3PE7gjHVmiy04eLPxeAO3SOQl',  name:'Paan',    price:'20'},
    {     images:'https://drive.google.com/uc?export=view&id=1Trzzje9K-hg37SHo7D2-47hFOoPuDhb7',  name:'Paan Masala' ,   price:'20'},
    {     images:'https://drive.google.com/uc?export=view&id=14rf984WVv63aiZwcM_e6fnQTztI0cxrj',  name:'Strawberry Paan',    price:'50'},
    {     images:'https://drive.google.com/uc?export=view&id=1aoYsy5TOh_YPvQIXlKtTOZyFcQiaK1el',  name:'Kesar Paan',    price:'20'},
    {     images:'https://drive.google.com/uc?export=view&id=19y0jwzn5s-sk4Cl6FiSmLpXvrkkawYB-',  name:'Chocolate With Coffee Sweet Paan',    price:'40'},
    {     images:'https://drive.google.com/uc?export=view&id=1AW7lZsnH6rGPvOqID3LwOmglZTe26ZAY',  name:'Choco Cashew Sweet Paan',    price:'40'},
    {     images:'https://drive.google.com/uc?export=view&id=1AaufYdYQkG0MF-ASH6chicJHE13CxjS-',  name:'Choco With Walnut Sweet Paan',    price:'50'},
]
const beverages=[
    {     images:'https://drive.google.com/uc?export=view&id=1DnvYHszboxJY1cKDH1ROdT_fGyom6-T3',name:'Filter Coffee',price:'15'},
    {     images:'https://drive.google.com/uc?export=view&id=1VbxlHYwkIQubx0NOvL4VjbkT3p0soqgI',name:'Masala Chai',price:'20'},
    {     images:'https://drive.google.com/uc?export=view&id=1yQTfp0T6C0pVhH4j-xwkz-bHt2PZfRTI',name:'Badam Milk',price:'25'},
    {     images:'https://drive.google.com/uc?export=view&id=1HJSnKYTurWoVpbczWNIUJEf0gr9sI_xI',name:'Lessi',price:'20'},

]
export {Breakfast_food_items,Lunch_food_items, Dinner_food_items,
        Top_Receipes,chettinadu_receipes,biryani_receipes,pulao_receipes,paneer_receipes,
        Tiffen_items,Sidedish_items,Chunty_items,Vada_items,Sweet_items,Dessarts_items,
        KuttuPoriyal_items,Poriyal,sidedish1_items,Payasam_items,Meals_items,paan_items,Pickle_items,Raita_items,
        beverages
    };
