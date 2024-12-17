const soal = [
    {
      text: "Apa nama molekul yang berfungsi sebagai pembawa energi utama dalam sel makhluk hidup?",
      options: [
        "ATP (Adenosine Triphosphate)",
        "NADH",
        "Glukosa",
        "RNA",
      ],
    },
    {
      text: "Siapa penulis teori heliosentris yang mengubah pandangan manusia tentang tata surya?",
      options: [
        "Nicolaus Copernicus",
        "Johannes Kepler",
        "Galileo Galilei",
        "Tycho Brahe",
      ],
    },
    {
      text: "Apa istilah untuk pergeseran kontinen yang menyebabkan pembentukan Pangaea?",
      options: [
        "Tektonik Lempeng",
        "Subduksi",
        "Pergerakan Divergen",
        "Rift Valley",
      ],
    },
    {
      text: "Siapa tokoh yang memimpin Revolusi Prancis pada masa awal pemerintahan Teror?",
      options: [
        "Maximilien Robespierre",
        "Napoleon Bonaparte",
        "Georges Danton",
        "Louis XVI",
      ],
    },
    {
      text: "Apa nama kode militer Sekutu untuk invasi Normandia pada Perang Dunia II?",
      options: [
        "Operasi Overlord",
        "Operasi Market Garden",
        "Operasi Torch",
        "Operasi Barbarossa",
      ],
    },
    {
      text: "Siapa filsuf Yunani kuno yang dikenal dengan teori 'Alam Semesta Geosentris'?",
      options: [
        "Ptolemaios",
        "Aristoteles",
        "Thales",
        "Herakleitos",
      ],
    },
    {
      text: "Apa nama spesies manusia purba yang ditemukan di Flores, Indonesia?",
      options: [
        "Homo floresiensis",
        "Homo erectus",
        "Homo habilis",
        "Australopithecus afarensis",
      ],
    },
    {
      text: "Siapa pemimpin perang Kartago dalam Perang Punisia melawan Romawi?",
      options: [
        "Hannibal Barca",
        "Scipio Africanus",
        "Hasdrubal",
        "Hamilcar Barca",
      ],
    },
    {
      text: "Di antara empat gaya dasar dalam fisika, gaya apa yang paling kuat tetapi bekerja pada jarak paling pendek?",
      options: [
        "Gaya Nuklir Kuat",
        "Gaya Gravitasi",
        "Gaya Elektromagnetik",
        "Gaya Nuklir Lemah",
      ],
    },
    {
      text: "Apa nama teks kuno yang menjadi dasar hukum Kerajaan Babilonia?",
      options: [
        "Kode Hammurabi",
        "Gilgamesh",
        "Stele Marduk",
        "Enuma Elish",
      ],
    },
    {
      text: "Apa nama peristiwa runtuhnya Uni Soviet yang terjadi pada tahun 1991?",
      options: [
        "Kudeta Agustus",
        "Glasnost",
        "Perestroika",
        "Revolusi Oktober",
      ],
    },
    {
      text: "Di bawah dinasti apa Tembok Besar Cina pertama kali dibangun?",
      options: [
        "Dinasti Qin",
        "Dinasti Han",
        "Dinasti Ming",
        "Dinasti Zhou",
      ],
    },
    {
      text: "Apa nama alat astronomi kuno yang digunakan untuk menentukan posisi benda langit?",
      options: [
        "Astrolabe",
        "Sextant",
        "Armillary Sphere",
        "Kompas Maritim",
      ],
    },
    {
      text: "Siapa tokoh dunia yang pertama kali berhasil mencapai Kutub Selatan pada tahun 1911?",
      options: [
        "Roald Amundsen",
        "Robert Falcon Scott",
        "Ernest Shackleton",
        "James Clark Ross",
      ],
    },
    {
      text: "Apa nama bakteri yang menyebabkan wabah 'Black Death' di Eropa abad ke-14?",
      options: [
        "Yersinia pestis",
        "Escherichia coli",
        "Salmonella typhi",
        "Clostridium botulinum",
      ],
    },
    {
      text: "Apa nama teori kosmologi yang menyatakan bahwa alam semesta berkembang dari satu titik superpadat?",
      options: [
        "Teori Big Bang",
        "Teori Steady State",
        "Teori Multiverse",
        "Teori Inflasi Kosmik",
      ],
    },
    {
      text: "Siapa kaisar Romawi yang memerintahkan pembangunan Colosseum?",
      options: [
        "Vespasian",
        "Nero",
        "Augustus",
        "Trajan",
      ],
    },
    {
      text: "Apa nama hukum yang menyatakan bahwa tekanan gas berbanding terbalik dengan volumenya?",
      options: [
        "Hukum Boyle",
        "Hukum Charles",
        "Hukum Avogadro",
        "Hukum Gay-Lussac",
      ],
    },
    {
      text: "Apa nama negara di Afrika yang tidak pernah dijajah oleh negara Eropa?",
      options: [
        "Ethiopia",
        "Liberia",
        "Maroko",
        "Ghana",
      ],
    },
    {
      text: "Siapa pemimpin Soviet yang memperkenalkan kebijakan Glasnost dan Perestroika?",
      options: [
        "Mikhail Gorbachev",
        "Leonid Brezhnev",
        "Nikita Khrushchev",
        "Boris Yeltsin",
      ],
    },
        {
          text: "Apa nama fenomena fisika yang menyebabkan pelebaran spektrum gelombang cahaya saat benda bergerak menjauh dari pengamat?",
          options: [
            "Efek Doppler Merah",
            "Efek Gravitasi",
            "Efek Raman",
            "Efek Compton",
          ],
        },
        {
          text: "Apa nama teori fisika yang menjelaskan perilaku partikel pada skala subatomik?",
          options: [
            "Mekanika Kuantum",
            "Teori Relativitas",
            "Dinamika Klasik",
            "Fisika Termal",
          ],
        },
        {
          text: "Siapa ahli matematika yang membuktikan Teorema Terakhir Fermat setelah lebih dari 350 tahun?",
          options: [
            "Andrew Wiles",
            "Leonhard Euler",
            "Carl Friedrich Gauss",
            "Pierre de Fermat",
          ],
        },
        {
          text: "Apa nama superkontinen yang mendahului Pangaea?",
          options: [
            "Rodinia",
            "Laurasia",
            "Gondwana",
            "Euramerica",
          ],
        },
        {
          text: "Apa nama kaisar Bizantium yang memerintahkan pembangunan Hagia Sophia?",
          options: [
            "Justinianus I",
            "Konstantinus Agung",
            "Theodosius II",
            "Heraklius",
          ],
        },
        {
          text: "Apa nama eksperimen yang membuktikan bahwa cahaya memiliki sifat gelombang melalui pola interferensi?",
          options: [
            "Eksperimen Celah Ganda Young",
            "Eksperimen Michelson-Morley",
            "Eksperimen Fotoelektrik Einstein",
            "Eksperimen Stern-Gerlach",
          ],
        },
        {
          text: "Apa nama periode geologi yang terjadi setelah kepunahan dinosaurus?",
          options: [
            "Paleogen",
            "Permian",
            "Trias",
            "Kambrium",
          ],
        },
        {
          text: "Apa nama alat navigasi yang digunakan pelaut abad pertengahan untuk menentukan garis lintang dengan mengamati bintang?",
          options: [
            "Astrolabe",
            "Sextant",
            "Quadrant",
            "Kompas Maritim",
          ],
        },
        {
          text: "Siapa filsuf yang menulis 'Critique of Pure Reason' dan membentuk dasar epistemologi modern?",
          options: [
            "Immanuel Kant",
            "René Descartes",
            "David Hume",
            "Georg Wilhelm Friedrich Hegel",
          ],
        },
        {
          text: "Apa nama partikel elementer yang membawa gaya elektromagnetik?",
          options: [
            "Foton",
            "Gluon",
            "Boson W",
            "Neutrino",
          ],
        },
        {
          text: "Apa nama kota kuno yang hancur akibat letusan Gunung Vesuvius pada tahun 79 M?",
          options: [
            "Pompeii",
            "Herculaneum",
            "Stabiae",
            "Oplontis",
          ],
        },
        {
          text: "Siapa pelaut Portugis yang pertama kali mengitari Tanjung Harapan di Afrika?",
          options: [
            "Bartolomeu Dias",
            "Vasco da Gama",
            "Ferdinand Magellan",
            "Henry the Navigator",
          ],
        },
        {
          text: "Apa nama molekul yang menjadi dasar reaksi kimia pada fotosintesis?",
          options: [
            "Klorofil",
            "ATP",
            "Glukosa",
            "CO₂",
          ],
        },
        {
          text: "Apa nama bahasa kuno yang digunakan dalam teks Weda, kitab suci Hindu?",
          options: [
            "Sanskerta",
            "Pali",
            "Prakrit",
            "Tamil",
          ],
        },
        {
          text: "Apa nama ekspedisi ilmiah yang pertama kali mendokumentasikan keberadaan Galápagos dan mendukung teori evolusi Darwin?",
          options: [
            "Ekspedisi HMS Beagle",
            "Ekspedisi Endeavour",
            "Ekspedisi Challenger",
            "Ekspedisi Resolution",
          ],
        },
        {
          text: "Apa nama hukum termodinamika yang menyatakan bahwa energi total alam semesta konstan?",
          options: [
            "Hukum Pertama Termodinamika",
            "Hukum Kedua Termodinamika",
            "Hukum Ketiga Termodinamika",
            "Hukum Nol Termodinamika",
          ],
        },
        {
          text: "Siapa tokoh yang menciptakan alfabet Kiril, yang digunakan dalam bahasa Rusia dan Slavik lainnya?",
          options: [
            "Santo Cyril",
            "Santo Methodius",
            "Ivan IV",
            "Peter Agung",
          ],
        },
        {
          text: "Apa nama cacing pipih parasit yang menyebabkan penyakit skistosomiasis?",
          options: [
            "Schistosoma",
            "Taenia solium",
            "Fasciola hepatica",
            "Enterobius vermicularis",
          ],
        },
        {
          text: "Apa nama fenomena kosmik yang memancarkan radiasi dengan intensitas tinggi dari kutub bintang neutron?",
          options: [
            "Pulsar",
            "Kuasar",
            "Supernova",
            "Nebula",
          ],
        },
        {
          text: "Siapa komandan Yunani dalam perang yang berakhir dengan kemenangan di Pertempuran Marathon?",
          options: [
            "Miltiades",
            "Themistocles",
            "Leonidas",
            "Pericles",
          ],
        },

        {
            text: "Apa nama benda langit pertama yang ditemukan di Sabuk Kuiper pada tahun 1930?",
            options: [
              "Pluto",
              "Haumea",
              "Makemake",
              "Eris",
            ],
          },
          {
            text: "Apa nama dokumen yang menjadi dasar pembentukan Perserikatan Bangsa-Bangsa (PBB)?",
            options: [
              "Piagam PBB",
              "Deklarasi Universal Hak Asasi Manusia",
              "Deklarasi San Francisco",
              "Perjanjian Yalta",
            ],
          },
          {
            text: "Siapa ilmuwan yang pertama kali merumuskan persamaan Maxwell yang menjelaskan elektromagnetisme?",
            options: [
              "James Clerk Maxwell",
              "Michael Faraday",
              "André-Marie Ampère",
              "Hendrik Lorentz",
            ],
          },
          {
            text: "Apa nama bintang neutron yang sangat padat dan berputar cepat?",
            options: [
              "Pulsar",
              "Kuasar",
              "Black Hole",
              "Nebula",
            ],
          },
          {
            text: "Apa nama perang yang berlangsung antara Inggris dan Prancis selama lebih dari 100 tahun?",
            options: [
              "Perang Seratus Tahun",
              "Perang Mawar",
              "Perang Napoleon",
              "Perang Tujuh Tahun",
            ],
          },
          {
            text: "Apa nama unsur kimia yang ditemukan Marie Curie dan dinamai berdasarkan tanah airnya?",
            options: [
              "Polonium",
              "Radium",
              "Uranium",
              "Thorium",
            ],
          },
          {
            text: "Siapa pelukis terkenal yang menciptakan mural 'The Last Supper'?",
            options: [
              "Leonardo da Vinci",
              "Michelangelo",
              "Raphael",
              "Donatello",
            ],
          },
          {
            text: "Apa nama medan gravitasi yang begitu kuat sehingga tidak ada cahaya yang bisa lolos?",
            options: [
              "Black Hole",
              "Singularitas",
              "Wormhole",
              "Nebula",
            ],
          },
          {
            text: "Siapa tokoh filsuf abad ke-17 yang dikenal dengan konsep 'Aku berpikir, maka aku ada'?",
            options: [
              "René Descartes",
              "Baruch Spinoza",
              "John Locke",
              "Francis Bacon",
            ],
          },
          {
            text: "Apa nama eksperimen yang menunjukkan bahwa elektron dapat bertindak seperti gelombang?",
            options: [
              "Eksperimen Celah Ganda",
              "Eksperimen Rutherford",
              "Eksperimen Stern-Gerlach",
              "Eksperimen Millikan",
            ],
          },
          {
            text: "Apa nama teks kuno Mesir yang memuat mantra-mantra untuk kehidupan setelah mati?",
            options: [
              "Kitab Orang Mati",
              "Rosetta Stone",
              "Piramida Teks",
              "Papirus Ebers",
            ],
          },
          {
            text: "Siapa astronom yang menemukan bahwa alam semesta mengembang dengan menganalisis pergeseran merah galaksi?",
            options: [
              "Edwin Hubble",
              "Carl Sagan",
              "Johannes Kepler",
              "Tycho Brahe",
            ],
          },
          {
            text: "Apa nama hukum yang menyatakan bahwa setiap aksi memiliki reaksi yang sama besar dan berlawanan arah?",
            options: [
              "Hukum Ketiga Newton",
              "Hukum Gravitasi Universal",
              "Hukum Coulomb",
              "Hukum Kepler",
            ],
          },
          {
            text: "Apa nama peradaban kuno di Meksiko yang terkenal dengan kalendernya yang rumit?",
            options: [
              "Suku Maya",
              "Aztec",
              "Olmec",
              "Toltec",
            ],
          },
          {
            text: "Apa nama satelit alami terbesar di tata surya?",
            options: [
              "Ganymede",
              "Titan",
              "Callisto",
              "Europa",
            ],
          },
          {
            text: "Apa nama konsep fisika yang memprediksi partikel virtual yang muncul di ruang hampa?",
            options: [
              "Fluktuasi Kuantum",
              "Teori Superstring",
              "Singularitas",
              "Radiasi Hawking",
            ],
          },
          {
            text: "Siapa tokoh Tiongkok kuno yang menulis 'The Art of War'?",
            options: [
              "Sun Tzu",
              "Confucius",
              "Laozi",
              "Han Feizi",
            ],
          },
          {
            text: "Apa nama kota kuno di Timur Tengah yang disebut sebagai salah satu keajaiban dunia kuno?",
            options: [
              "Petra",
              "Babylon",
              "Memphis",
              "Uruk",
            ],
          },
          {
            text: "Siapa pemimpin militer Kartago yang terkenal dengan taktiknya dalam Perang Punisia Kedua?",
            options: [
              "Hannibal Barca",
              "Scipio Africanus",
              "Hasdrubal",
              "Mago Barca",
            ],
          },
          {
            text: "Apa nama senyawa kimia yang paling banyak ditemukan di atmosfer Venus?",
            options: [
              "Karbon Dioksida",
              "Nitrogen",
              "Oksigen",
              "Metana",
            ],
          },
          {
            text: "Apa nama planet terbesar di tata surya kita?",
            options: [
              "Jupiter",
              "Saturnus",
              "Neptunus",
              "Uranus",
            ],
          },
          {
            text: "Siapa penemu teori evolusi melalui seleksi alam?",
            options: [
              "Charles Darwin",
              "Gregor Mendel",
              "Alfred Wallace",
              "Jean-Baptiste Lamarck",
            ],
          },
          {
            text: "Apa nama perang besar yang melibatkan negara-negara di seluruh dunia pada tahun 1914-1918?",
            options: [
              "Perang Dunia I",
              "Perang Dunia II",
              "Perang Tujuh Tahun",
              "Perang Dingin",
            ],
          },
          {
            text: "Apa nama unsur kimia dengan simbol 'Fe'?",
            options: [
              "Besi",
              "Tembaga",
              "Emas",
              "Perak",
            ],
          },
          {
            text: "Siapa yang dikenal sebagai 'Bapak Fisika Modern' karena teori relativitasnya?",
            options: [
              "Albert Einstein",
              "Isaac Newton",
              "Galileo Galilei",
              "Nikola Tesla",
            ],
          },
          {
            text: "Apa nama kota yang menjadi tempat berdirinya Candi Borobudur?",
            options: [
              "Magelang",
              "Yogyakarta",
              "Solo",
              "Malang",
            ],
          },
          {
            text: "Apa nama hewan mamalia terbesar di dunia?",
            options: [
              "Paus Biru",
              "Gajah Afrika",
              "Orangutan",
              "Beruang Kutub",
            ],
          },
          {
            text: "Apa nama lapisan atmosfer tempat terjadinya cuaca?",
            options: [
              "Troposfer",
              "Stratosfer",
              "Mesosfer",
              "Termosfer",
            ],
          },
          {
            text: "Siapa penulis novel 'Bumi Manusia' yang merupakan bagian dari Tetralogi Pulau Buru?",
            options: [
              "Pramoedya Ananta Toer",
              "Chairil Anwar",
              "Taufiq Ismail",
              "Sapardi Djoko Damono",
            ],
          },
          {
            text: "Apa nama organ tubuh manusia yang bertugas memompa darah ke seluruh tubuh?",
            options: [
              "Jantung",
              "Paru-paru",
              "Hati",
              "Ginjal",
            ],
          },
          {
            text: "Apa nama sistem bintang terdekat dengan tata surya kita?",
            options: [
              "Alpha Centauri",
              "Sirius",
              "Betelgeuse",
              "Vega",
            ],
          },
          {
            text: "Apa nama ibu kota Kerajaan Majapahit?",
            options: [
              "Trowulan",
              "Singhasari",
              "Kediri",
              "Malang",
            ],
          },
          {
            text: "Siapa tokoh yang memimpin armada laut terbesar dalam sejarah dinasti Ming di Tiongkok?",
            options: [
              "Laksamana Cheng Ho",
              "Kublai Khan",
              "Sun Yat-sen",
              "Zhao Kuangyin",
            ],
          },
          {
            text: "Apa nama bakteri yang sering digunakan dalam produksi yoghurt?",
            options: [
              "Lactobacillus",
              "Escherichia coli",
              "Clostridium",
              "Salmonella",
            ],
          },
          {
            text: "Apa nama proses perubahan zat cair menjadi gas pada suhu tertentu di bawah titik didihnya?",
            options: [
              "Evaporasi",
              "Kondensasi",
              "Sublimasi",
              "Distilasi",
            ],
          },
          {
            text: "Apa nama teori yang menjelaskan asal mula jagat raya yang dimulai dengan ledakan besar?",
            options: [
              "Teori Big Bang",
              "Teori Steady State",
              "Teori Multiverse",
              "Teori Inflasi Kosmik",
            ],
          },
          {
            text: "Siapa tokoh yang dikenal sebagai pemimpin Perang Diponegoro?",
            options: [
              "Pangeran Diponegoro",
              "Sultan Agung",
              "Raden Wijaya",
              "Patih Gajah Mada",
            ],
          },
          {
            text: "Apa nama unsur kimia yang ditemukan oleh ilmuwan Alfred Nobel dan digunakan dalam dinamit?",
            options: [
              "Nitrogliserin",
              "Ammonium nitrat",
              "Kalium klorat",
              "Sianida",
            ],
          },
          {
            text: "Apa nama negara yang dikenal sebagai tempat kelahiran demokrasi di dunia kuno?",
            options: [
              "Yunani",
              "Roma",
              "Mesir",
              "Persia",
            ],
          },
          {
            text: "Apa nama organel sel yang menjadi pusat respirasi seluler pada sel eukariotik?",
            options: [
              "Mitokondria",
              "Kloroplas",
              "Nukleus",
              "Ribosom",
            ],
          },
          {
            text: "Apa nama senyawa yang digunakan untuk memproduksi gas rumah kaca terbesar di atmosfer bumi?",
            options: [
              "Karbon Dioksida",
              "Metana",
              "Ozon",
              "Nitrogen Oksida",
            ],
          },
          {
            text: "Siapa penemu hukum gravitasi universal?",
            options: [
              "Isaac Newton",
              "Albert Einstein",
              "Galileo Galilei",
              "Nikolai Tesla",
            ],
          },
          {
            text: "Siapa yang mencetuskan teori heliosentris, yang menyatakan bahwa Matahari adalah pusat tata surya?",
            options: [
              "Nicolaus Copernicus",
              "Galileo Galilei",
              "Johannes Kepler",
              "Tycho Brahe",
            ],
          },
          {
            text: "Apa nama negara yang pertama kali memberikan hak pilih kepada perempuan pada tahun 1893?",
            options: [
              "Selandia Baru",
              "Amerika Serikat",
              "Inggris",
              "Kanada",
            ],
          },
          {
            text: "Apa nama hukum yang menyatakan bahwa arus listrik yang mengalir melalui konduktor sebanding dengan tegangan dan berbanding terbalik dengan hambatannya?",
            options: [
              "Hukum Ohm",
              "Hukum Kirchoff",
              "Hukum Ampere",
              "Hukum Faraday",
            ],
          },
          {
            text: "Apa nama unsur kimia yang ditemukan oleh Marie Curie dan digunakan dalam terapi radiasi?",
            options: [
              "Radium",
              "Polonium",
              "Uranium",
              "Thorium",
            ],
          },
          {
            text: "Siapa tokoh yang dikenal sebagai pelopor gerakan kemerdekaan India dan memimpin perjuangan tanpa kekerasan?",
            options: [
              "Mahatma Gandhi",
              "Jawaharlal Nehru",
              "Subhas Chandra Bose",
              "Sardar Patel",
            ],
          },
          {
            text: "Apa nama teori yang menjelaskan asal mula alam semesta dari titik tunggal yang sangat padat dan panas?",
            options: [
              "Teori Big Bang",
              "Teori Steady State",
              "Teori Relativitas Umum",
              "Teori Inflasi Kosmik",
            ],
          },
          {
            text: "Siapa penemu pertama kali struktur DNA?",
            options: [
              "James Watson dan Francis Crick",
              "Rosalind Franklin",
              "Gregor Mendel",
              "Barbara McClintock",
            ],
          },
          {
            text: "Siapa yang dikenal sebagai penemu lampu pijar pertama yang sukses digunakan secara komersial?",
            options: [
              "Thomas Edison",
              "Nikola Tesla",
              "Alexander Graham Bell",
              "Michael Faraday",
            ],
          },
          {
            text: "Apa nama perang yang terjadi antara negara-negara besar di dunia pada tahun 1939-1945?",
            options: [
              "Perang Dunia II",
              "Perang Dunia I",
              "Perang Korea",
              "Perang Vietnam",
            ],
          },
          {
            text: "Siapa ilmuwan yang menemukan vaksin untuk polio pada tahun 1955?",
            options: [
              "Jonas Salk",
              "Louis Pasteur",
              "Edward Jenner",
              "Albert Calmette",
            ],
          },
          {
            text: "Apa nama alat yang digunakan untuk mengukur tekanan atmosfer?",
            options: [
              "Barometer",
              "Thermometer",
              "Anemometer",
              "Hygrometer",
            ],
          },
          {
            text: "Siapa yang memimpin revolusi Bolshevik yang mengubah Rusia menjadi negara komunis pada 1917?",
            options: [
              "Vladimir Lenin",
              "Joseph Stalin",
              "Leon Trotsky",
              "Nikita Khrushchev",
            ],
          },
          {
            text: "Apa nama planet yang dikenal dengan sebutan 'Planet Merah'?",
            options: [
              "Mars",
              "Venus",
              "Jupiter",
              "Saturnus",
            ],
          },
          {
            text: "Apa nama negara yang memiliki patung 'David' karya Michelangelo?",
            options: [
              "Italia",
              "Prancis",
              "Spanyol",
              "Belanda",
            ],
          },
          {
            text: "Apa nama teori yang menyatakan bahwa bumi berada di pusat alam semesta, yang pernah diterima sebelum teori heliosentris?",
            options: [
              "Geosentris",
              "Heliosentris",
              "Ptolemeus",
              "Trithemius",
            ],
          },
          {
            text: "Siapa penulis novel '1984' yang menggambarkan dunia distopia yang totaliter?",
            options: [
              "George Orwell",
              "Aldous Huxley",
              "Ray Bradbury",
              "Margaret Atwood",
            ],
          },
          {
            text: "Siapa yang pertama kali menciptakan konsep atom sebagai partikel terkecil dari materi?",
            options: [
              "Democritus",
              "Aristoteles",
              "Plato",
              "Isaac Newton",
            ],
          },
          {
            text: "Apa nama teori yang menjelaskan bahwa semua materi dan energi berawal dari Big Bang sekitar 13,8 miliar tahun lalu?",
            options: [
              "Teori Big Bang",
              "Teori Relativitas Umum",
              "Teori Kuantum",
              "Teori Multiverse",
            ],
          },
          {
            text: "Apa nama teori fisika yang menyatakan bahwa partikel-partikel subatom memiliki sifat gelombang dan partikel, dan fenomena ini dikenal dengan prinsip ketidakpastian?",
            options: [
              "Teori Mekanika Kuantum",
              "Teori Relativitas Umum",
              "Teori String",
              "Teori Elektromagnetik",
            ],
          },
          {
            text: "Siapa ilmuwan yang merumuskan hukum gerak planet yang dikenal dengan hukum Kepler?",
            options: [
              "Johannes Kepler",
              "Isaac Newton",
              "Galileo Galilei",
              "Tycho Brahe",
            ],
          },
          {
            text: "Apa nama fenomena yang menggambarkan perubahan panjang gelombang cahaya atau suara akibat gerakan sumber atau pengamat?",
            options: [
              "Efek Doppler",
              "Efek Fotoelektrik",
              "Efek Compton",
              "Efek Meissner",
            ],
          },
          {
            text: "Siapa yang pertama kali mengusulkan bahwa bumi berputar pada porosnya dan mengelilingi matahari dalam sebuah orbit elips?",
            options: [
              "Johannes Kepler",
              "Nicolaus Copernicus",
              "Isaac Newton",
              "Galileo Galilei",
            ],
          },
          {
            text: "Apa nama teori yang menggambarkan bagaimana bintang-bintang terlahir, hidup, dan mati melalui siklus hidupnya, termasuk ledakan supernova?",
            options: [
              "Teori Evolusi Bintang",
              "Teori Steady State",
              "Teori Nebula",
              "Teori Relativitas Umum",
            ],
          },
          {
            text: "Siapa ilmuwan yang pertama kali mengidentifikasi sel sebagai unit dasar kehidupan dalam mikroskop?",
            options: [
              "Robert Hooke",
              "Anton van Leeuwenhoek",
              "Louis Pasteur",
              "Charles Darwin",
            ],
          },
          {
            text: "Siapa yang mengembangkan teori relativitas umum yang menggambarkan gravitasi sebagai lengkungan ruang-waktu?",
            options: [
              "Albert Einstein",
              "Isaac Newton",
              "Niels Bohr",
              "Werner Heisenberg",
            ],
          },
          {
            text: "Apa nama unsur yang ditemukan oleh Mendeleev dan memiliki simbol 'Mn' dalam tabel periodik?",
            options: [
              "Mangan",
              "Molibdenum",
              "Magnesium",
              "Molybdenum",
            ],
          },
          {
            text: "Apa nama pendekatan filosofis yang memandang bahwa segala sesuatu di alam semesta dapat dijelaskan dengan prinsip-prinsip matematika dan mekanika?",
            options: [
              "Determinisme",
              "Empirisme",
              "Rasionalisme",
              "Pragmatisme",
            ],
          },
          {
            text: "Apa nama teori yang menjelaskan pembentukan dan evolusi alam semesta berdasarkan pengamatan terhadap galaksi dan ekspansi alam semesta?",
            options: [
              "Teori Big Bang",
              "Teori Multiverse",
              "Teori Steady State",
              "Teori Kosmologi Kuantum",
            ],
          },
          {
            text: "Siapa ilmuwan yang menemukan teori bahwa benda-benda yang lebih besar akan jatuh lebih cepat dalam ruang hampa dibandingkan benda yang lebih kecil?",
            options: [
              "Galileo Galilei",
              "Isaac Newton",
              "Aristoteles",
              "Albert Einstein",
            ],
          },
          {
            text: "Apa nama alat yang digunakan untuk mengukur kecepatan objek yang bergerak dengan menggunakan gelombang suara?",
            options: [
              "Radar Doppler",
              "Anemometer",
              "Oscilloscope",
              "Barometer",
            ],
          },
          {
            text: "Siapa yang pertama kali mengusulkan teori bahwa bumi adalah pusat alam semesta, yang dikenal dengan model geosentris?",
            options: [
              "Ptolemy",
              "Aristoteles",
              "Copernicus",
              "Galileo Galilei",
            ],
          },
          {
            text: "Apa nama hukum fisika yang menyatakan bahwa perubahan momentum suatu benda sebanding dengan gaya yang diterapkan padanya?",
            options: [
              "Hukum Impuls",
              "Hukum Gravitasi Newton",
              "Hukum Kepler",
              "Hukum Termodinamika",
            ],
          },
          {
            text: "Siapa yang merumuskan teori tentang asal mula kehidupan melalui proses kimiawi dalam teori abiogenesis?",
            options: [
              "Alexander Oparin",
              "Charles Darwin",
              "Louis Pasteur",
              "Stanley Miller",
            ],
          },
          {
            text: "Siapa yang menemukan konsep teori atom dan menyatakan bahwa atom terdiri dari inti yang bermuatan positif dan elektron yang bergerak mengelilinginya?",
            options: [
              "Ernest Rutherford",
              "Niels Bohr",
              "J.J. Thomson",
              "Albert Einstein",
            ],
          },
          {
            text: "Apa nama proses biologis yang mengubah sinar matahari menjadi energi kimia yang disimpan dalam bentuk glukosa?",
            options: [
              "Fotosintesis",
              "Respirasi Sel",
              "Fermentasi",
              "Transpirasi",
            ],
          },
          {
            text: "Siapa yang pertama kali mengembangkan hukum gerak planet dan mengaitkan kecepatan orbit planet dengan jaraknya dari matahari?",
            options: [
              "Johannes Kepler",
              "Isaac Newton",
              "Galileo Galilei",
              "Tycho Brahe",
            ],
          },
          {
            text: "Siapa ilmuwan yang pertama kali merumuskan teori heliosentris, yang menyatakan bahwa matahari adalah pusat tata surya?",
            options: [
              "Nicolaus Copernicus",
              "Galileo Galilei",
              "Johannes Kepler",
              "Tycho Brahe",
            ],
          },
          {
            text: "Apa nama unsur yang ditemukan oleh Dmitri Mendeleev dan memiliki simbol 'Na' dalam tabel periodik?",
            options: [
              "Natrium",
              "Nitrogen",
              "Neon",
              "Nikel",
            ],
          },
          {
            text: "Apa nama hukum fisika yang menyatakan bahwa energi dalam sistem tertutup tetap konstan, tidak dapat diciptakan atau dimusnahkan?",
            options: [
              "Hukum Kekekalan Energi",
              "Hukum Newton pertama",
              "Hukum Entropi",
              "Hukum Aksi dan Reaksi",
            ],
          },
          {
            text: "Siapa yang dikenal dengan teori pembentukan bintang melalui proses ledakan supernova?",
            options: [
              "Fred Hoyle",
              "Carl Sagan",
              "Stephen Hawking",
              "Vesto Melvin Slipher",
            ],
          },
          {
            text: "Siapa yang mempelopori teori evolusi dan seleksi alam dalam spesies?",
            options: [
              "Charles Darwin",
              "Gregor Mendel",
              "Alfred Russel Wallace",
              "Jean-Baptiste Lamarck",
            ],
          },
          {
            text: "Apa nama proses dimana tanaman menghasilkan oksigen dan mengubah karbon dioksida menjadi glukosa?",
            options: [
              "Fotosintesis",
              "Respirasi sel",
              "Transpirasi",
              "Fermentasi",
            ],
          },
          {
            text: "Siapa yang mengembangkan teori relativitas khusus yang menjelaskan hubungan antara ruang dan waktu?",
            options: [
              "Albert Einstein",
              "Isaac Newton",
              "Max Planck",
              "Galileo Galilei",
            ],
          },
          {
            text: "Pada perang manakah Jepang menyerang Pearl Harbor yang menyebabkan Amerika Serikat terlibat dalam Perang Dunia II?",
            options: [
              "Perang Dunia II",
              "Perang Dunia I",
              "Perang Korea",
              "Perang Vietnam",
            ],
          },
          {
            text: "Apa nama alat yang digunakan untuk mengukur kekuatan atau intensitas gempa bumi?",
            options: [
              "Seismometer",
              "Barometer",
              "Anemometer",
              "Thermometer",
            ],
          },
          {
            text: "Apa nama unsur yang ditemukan oleh Marie Curie dan digunakan dalam terapi radiasi?",
            options: [
              "Radium",
              "Polonium",
              "Uranium",
              "Thorium",
            ],
          },
          {
            text: "Siapa yang dikenal dengan teori bahwa bumi mengelilingi matahari dalam orbit elips dan memiliki hukum-hukum yang mengatur gerak planet?",
            options: [
              "Johannes Kepler",
              "Isaac Newton",
              "Nicolaus Copernicus",
              "Galileo Galilei",
            ],
          },
          {
            text: "Siapa yang mengembangkan teori elektrodinamika klasik yang menggabungkan listrik dan magnetisme?",
            options: [
              "James Clerk Maxwell",
              "Michael Faraday",
              "Nikola Tesla",
              "Thomas Edison",
            ],
          },
          {
            text: "Siapa yang pertama kali mengemukakan teori tentang penemuan sel dan bahwa sel adalah unit dasar kehidupan?",
            options: [
              "Robert Hooke",
              "Anton van Leeuwenhoek",
              "Louis Pasteur",
              "Charles Darwin",
            ],
          },
          {
            text: "Pada tahun berapakah Indonesia memproklamasikan kemerdekaannya?",
            options: [
              "17 Agustus 1945",
              "20 Mei 1908",
              "28 Oktober 1928",
              "1 Juni 1945",
            ],
          },
          {
            text: "Siapa yang mengemukakan hukum gerak yang menyatakan bahwa percepatan benda sebanding dengan gaya dan berbanding terbalik dengan massa?",
            options: [
              "Isaac Newton",
              "Galileo Galilei",
              "Albert Einstein",
              "James Clerk Maxwell",
            ],
          },
          {
            text: "Apa nama sistem penulisan yang digunakan oleh masyarakat Mesir Kuno untuk mencatat bahasa mereka?",
            options: [
              "Hieroglif",
              "Piktogram",
              "Aksara Latin",
              "Aksara Cina",
            ],
          },
          {
            text: "Siapa yang memimpin pasukan Mongol dan berhasil menaklukkan sebagian besar wilayah Asia dan Eropa pada abad ke-13?",
            options: [
              "Genghis Khan",
              "Kublai Khan",
              "Tamerlane",
              "Attila the Hun",
            ],
          },
          {
            text: "Apa nama teori fisika yang menyatakan bahwa tidak ada benda atau informasi yang dapat bergerak lebih cepat dari kecepatan cahaya?",
            options: [
              "Teori Relativitas Khusus",
              "Teori Relativitas Umum",
              "Teori Quantum",
              "Teori Elektromagnetik",
            ],
          },
          {
            text: "Apa nama hukum yang menjelaskan bahwa tekanan gas dalam ruang tertutup sebanding dengan temperatur absolutnya?",
            options: [
              "Hukum Gay-Lussac",
              "Hukum Boyle",
              "Hukum Charles",
              "Hukum Newton",
            ],
          },
          {
            text: "Siapa yang memimpin pasukan Indonesia dalam pertempuran 10 November 1945 di Surabaya yang menjadi simbol perjuangan kemerdekaan?",
            options: [
              "Soedirman",
              "Sukarno",
              "Hatta",
              "Bung Tomo",
            ],
          },
          {
            text: "Di bawah sistem tata surya, planet manakah yang dikenal sebagai planet merah?",
            options: [
              "Mars",
              "Venus",
              "Jupiter",
              "Merkurius",
            ],
          },
          {
            text: "Peristiwa apa yang menandai dimulainya perlawanan terhadap penjajahan Belanda setelah proklamasi kemerdekaan Indonesia?",
            options: [
              "Agresi Militer Belanda I",
              "Perang Diponegoro",
              "Perang Puputan Margarana",
              "Peristiwa Bandung Lautan Api",
            ],
          },
          {
            text: "Siapa yang mengusulkan konsep Pancasila sebagai dasar negara dalam Sidang BPUPKI pada 1 Juni 1945?",
            options: [
              "Soekarno",
              "Mohammad Hatta",
              "Ki Hajar Dewantara",
              "Sutan Sjahrir",
            ],
          },
          {
            text: "Bagaimana cara tumbuhan melakukan fotosintesis?",
            options: [
              "Menggunakan cahaya matahari untuk mengubah karbon dioksida dan air menjadi glukosa dan oksigen",
              "Menggunakan udara untuk menghasilkan energi kimia",
              "Menggunakan panas bumi untuk menghasilkan oksigen",
              "Menggunakan karbon dioksida untuk menghilangkan oksigen dari atmosfer",
            ],
          },
          {
            text: "Siapa yang menjadi presiden pertama Republik Indonesia setelah Soekarno pada tahun 1967?",
            options: [
              "Soeharto",
              "BJ Habibie",
              "Abdurrahman Wahid",
              "Megawati Soekarnoputri",
            ],
          },
          {
            text: "Apa nama peristiwa yang terjadi pada tahun 1948 di Madiun yang melibatkan pemberontakan PKI?",
            options: [
              "Pemberontakan Madiun",
              "Pemberontakan PRRI",
              "Pemberontakan Andi Azis",
              "Pemberontakan Darul Islam",
            ],
          },
          {
            text: "Siapa penemu teori relativitas yang terkenal dengan rumus E=mc²?",
            options: [
              "Albert Einstein",
              "Isaac Newton",
              "Galileo Galilei",
              "Nikola Tesla",
            ],
          },
          {
            text: "Siapa yang mengusulkan konsep Trisakti yang terdiri dari berdaulat secara politik, berdikari secara ekonomi, dan berkepribadian secara budaya?",
            options: [
              "Soekarno",
              "Soeharto",
              "Sutan Sjahrir",
              "BJ Habibie",
            ],
          },
          {
            text: "Perangkat apa yang digunakan untuk mengukur suhu tubuh manusia?",
            options: [
              "Termometer",
              "Barometer",
              "Altimeter",
              "Oximeter",
            ],
          },
          {
            text: "Siapa tokoh yang menandatangani naskah proklamasi kemerdekaan Indonesia pada 17 Agustus 1945?",
            options: [
              "Soekarno dan Hatta",
              "Soedirman dan Hatta",
              "Sukarno dan Sutan Sjahrir",
              "Soekarno dan Mohammad Nasution",
            ],
          },
          {
            text: "Planet manakah yang memiliki cincin yang paling besar dan terlihat jelas?",
            options: [
              "Saturnus",
              "Jupiter",
              "Mars",
              "Neptunus",
            ],
          },
          {
            text: "Apa nama organisasi yang didirikan oleh Jepang di Indonesia yang berfungsi sebagai organisasi pemuda dalam masa penjajahan Jepang?",
            options: [
              "Peta (Pembela Tanah Air)",
              "Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia",
              "Gerakan 30 September",
              "PKI (Partai Komunis Indonesia)",
            ],
          },
          {
            text: "Siapa yang dikenal sebagai bapak ilmu pengetahuan modern yang mengembangkan hukum gerak dan gravitasi?",
            options: [
              "Isaac Newton",
              "Nikola Tesla",
              "Marie Curie",
              "Galileo Galilei",
            ],
          },
          {
            text: "Peristiwa yang dikenal dengan 'Proklamasi Kemerdekaan' Indonesia terjadi pada tanggal berapa?",
            options: [
              "17 Agustus 1945",
              "20 Mei 1908",
              "28 Oktober 1928",
              "1 Juni 1945",
            ],
          },
          {
            text: "Siapa yang menjadi panglima besar TNI pertama di Indonesia setelah kemerdekaan?",
            options: [
              "Soedirman",
              "Sukarno",
              "Soeharto",
              "A.H. Nasution",
            ],
          },
          {
            text: "Siapa yang dikenal sebagai pejuang kemerdekaan yang membentuk Tentara Nasional Indonesia (TNI) setelah Proklamasi?",
            options: [
              "Soedirman",
              "Sukarno",
              "Hatta",
              "Bung Tomo",
            ],
          },
          {
            text: "Apa nama jaringan komunikasi nirkabel yang menggunakan frekuensi radio untuk menghubungkan perangkat seperti ponsel dan laptop?",
            options: [
              "Wi-Fi",
              "Bluetooth",
              "NFC",
              "Infrared",
            ],
          },
          {
            text: "Pada tahun berapakah Indonesia mengadakan konferensi dengan negara-negara Asia-Afrika di Bandung, yang dikenal dengan nama Konferensi Asia-Afrika?",
            options: [
              "1955",
              "1965",
              "1971",
              "1945",
            ],
          },
          {
            text: "Siapa penulis novel '1984' yang menjadi karya klasik dalam literatur distopia?",
            options: [
              "George Orwell",
              "Aldous Huxley",
              "Ray Bradbury",
              "J.R.R. Tolkien",
            ],
          },
          {
            text: "Apa nama ibu kota negara Kanada?",
            options: [
              "Ottawa",
              "Toronto",
              "Vancouver",
              "Montreal",
            ],
          },
          {
            text: "Siapakah ilmuwan yang menciptakan hukum gerak dan teori gravitasi?",
            options: [
              "Isaac Newton",
              "Albert Einstein",
              "Nikola Tesla",
              "Galileo Galilei",
            ],
          },
          {
            text: "Apa nama bahasa pemrograman yang digunakan untuk membuat aplikasi Android?",
            options: [
              "Java",
              "Python",
              "C++",
              "Ruby",
            ],
          },
          {
            text: "Apa nama proses di mana tumbuhan mengubah energi matahari menjadi makanan?",
            options: [
              "Fotosintesis",
              "Respirasi",
              "Transpirasi",
              "Translokasi",
            ],
          },
          {
            text: "Siapa presiden ke-16 Amerika Serikat yang dikenal dengan Emansipasi Proklamasi?",
            options: [
              "Abraham Lincoln",
              "Thomas Jefferson",
              "George Washington",
              "John F. Kennedy",
            ],
          },
          {
            text: "Apa nama sistem operasi yang dikembangkan oleh Apple untuk komputer pribadi?",
            options: [
              "macOS",
              "Windows",
              "Linux",
              "Android",
            ],
          },
          {
            text: "Di bawah hukum fisika manakah gaya gravitasi dijelaskan?",
            options: [
              "Hukum Newton tentang Gravitasi Universal",
              "Hukum Termodinamika",
              "Hukum Kepler tentang Gerakan Planet",
              "Hukum Faraday tentang Induksi Elektromagnetik",
            ],
          },
          {
            text: "Siapa yang menciptakan teori evolusi melalui seleksi alam?",
            options: [
              "Charles Darwin",
              "Gregor Mendel",
              "Albert Einstein",
              "Louis Pasteur",
            ],
          },
          {
            text: "Apa nama unsur kimia dengan simbol Au?",
            options: [
              "Emas",
              "Perak",
              "Tembaga",
              "Aluminium",
            ],
          },
          {
            text: "Siapa penemu telepon?",
            options: [
              "Alexander Graham Bell",
              "Thomas Edison",
              "Nikola Tesla",
              "Guglielmo Marconi",
            ],
          },
          {
            text: "Siapa yang dikenal sebagai pelopor penerbangan pertama yang sukses di dunia?",
            options: [
              "Wright bersaudara (Orville dan Wilbur Wright)",
              "Charles Lindbergh",
              "Amelia Earhart",
              "Howard Hughes",
            ],
          },
          {
            text: "Apa nama gunung berapi yang meletus pada tahun 1883 dan menghasilkan suara paling keras yang pernah tercatat?",
            options: [
              "Krakatau",
              "Mount St. Helens",
              "Mount Fuji",
              "Mount Vesuvius",
            ],
          },
          {
            text: "Siapa yang menulis karya terkenal 'Don Quixote'?",
            options: [
              "Miguel de Cervantes",
              "William Shakespeare",
              "Homer",
              "Charles Dickens",
            ],
          },
          {
            text: "Apa nama negara yang memiliki ibukota bernama Brasília?",
            options: [
              "Brasil",
              "Argentina",
              "Kolombia",
              "Peru",
            ],
          },
          {
            text: "Siapa yang menjadi wanita pertama yang memenangkan Hadiah Nobel dalam bidang Ilmu Pengetahuan?",
            options: [
              "Marie Curie",
              "Rosalind Franklin",
              "Dorothy Crowfoot Hodgkin",
              "Barbara McClintock",
            ],
          },
          {
            text: "Di negara manakah Kota Petra yang terkenal dengan arsitektur batu kuno berada?",
            options: [
              "Yordania",
              "Mesir",
              "Turki",
              "Irak",
            ],
          },
          {
            text: "Siapa yang menemukan bahwa bumi mengelilingi matahari, bukan sebaliknya?",
            options: [
              "Nikola Copernicus",
              "Galileo Galilei",
              "Isaac Newton",
              "Johannes Kepler",
            ],
          },
          {
            text: "Apa nama alat yang digunakan untuk mengukur tekanan atmosfer?",
            options: [
              "Barometer",
              "Thermometer",
              "Hygrometer",
              "Altimeter",
            ],
          },
          {
            text: "Siapa yang pertama kali mengelilingi dunia?",
            options: [
              "Ferdinand Magellan",
              "Marco Polo",
              "Christopher Columbus",
              "Vasco da Gama",
            ],
          },
          {
            text: "Apa nama hewan yang dapat terbang dan dikenal sebagai mamalia yang bisa terbang?",
            options: [
              "Kelelawar",
              "Burung",
              "Serangga",
              "Flamingo",
            ],
          },
          {
            text: "Siapa penulis yang terkenal dengan karya 'Moby Dick'?",
            options: [
              "Herman Melville",
              "Mark Twain",
              "Ernest Hemingway",
              "F. Scott Fitzgerald",
            ],
          },
      ];
      
  
  
