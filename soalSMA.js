const soal = [
        {
          text: "Apa istilah untuk jenis kalimat yang tidak memiliki subjek atau predikat lengkap dalam Bahasa Indonesia?",
          options: [
            "Kalimat tidak lengkap",
            "Kalimat deklaratif",
            "Kalimat interogatif",
            "Kalimat aktif",
          ],
        },
        {
          text: "Jika suatu segitiga memiliki sisi-sisi sepanjang 6 cm, 8 cm, dan 10 cm, berapakah luas segitiga tersebut?",
          options: [
            "24 cm²",
            "48 cm²",
            "30 cm²",
            "40 cm²",
          ],
        },
        {
          text: "Peristiwa Sumpah Pemuda yang dianggap sebagai tonggak kebangkitan nasional Indonesia terjadi pada tahun berapa?",
          options: [
            "1928",
            "1945",
            "1908",
            "1930",
          ],
        },
        {
          text: "What is the synonym of the word 'enormous'?",
          options: [
            "Huge",
            "Small",
            "Tiny",
            "Moderate",
          ],
        },
        {
          text: "Apa fungsi utama dari loop 'for' dalam bahasa pemrograman seperti JavaScript?",
          options: [
            "Mengulang kode berdasarkan kondisi tertentu",
            "Menampilkan pesan kesalahan",
            "Menghapus data",
            "Memeriksa tipe variabel",
          ],
        },
        {
          text: "Pilih kalimat dengan ejaan yang benar menurut Pedoman Umum Ejaan Bahasa Indonesia (PUEBI):",
          options: [
            "Adik sedang bermain-main di halaman rumah.",
            "Adik sedang bermain main di halaman rumah.",
            "Adik sedang bermain-main di halaman Rumah.",
            "Adik sedang bermain-main dihhalaman rumah.",
          ],
        },
        {
          text: "Hitung nilai dari persamaan berikut: (5 + 3) × 2 - 4 = ?",
          options: [
            "12",
            "16",
            "10",
            "8",
          ],
        },
        {
          text: "Apa nama organisasi bentukan Jepang yang merupakan cikal bakal TNI?",
          options: [
            "PETA",
            "BPUPKI",
            "KNIP",
            "PKI",
          ],
        },
        {
          text: "What does 'procrastination' mean in English?",
          options: [
            "The act of delaying something",
            "To work hard on a task",
            "To achieve success quickly",
            "To do something urgently",
          ],
        },
        {
          text: "Apa kepanjangan dari HTTP, protokol yang digunakan untuk mengakses situs web?",
          options: [
            "Hypertext Transfer Protocol",
            "Hyperlink Transfer Protocol",
            "Hypertext Transmission Platform",
            "Hyperlink Text Process",
          ],
        },
        {
          text: "Kalimat berikut yang menggunakan majas personifikasi adalah:",
          options: [
            "Angin berbisik lirih di telingaku.",
            "Langit sangat cerah pagi ini.",
            "Ia duduk termenung di sudut ruangan.",
            "Ayah sedang membaca koran di ruang tamu.",
          ],
        },
        {
          text: "Berapakah hasil dari akar kuadrat 144?",
          options: [
            "12",
            "14",
            "10",
            "16",
          ],
        },
        {
          text: "Siapa tokoh yang dikenal sebagai Bapak Pendidikan Nasional Indonesia?",
          options: [
            "Ki Hajar Dewantara",
            "Soekarno",
            "Mohammad Hatta",
            "R.A. Kartini",
          ],
        },
        {
          text: "Complete the sentence: 'She has been working here ______ three years.'",
          options: [
            "for",
            "since",
            "about",
            "in",
          ],
        },
        {
          text: "Apa fungsi dari CSS dalam pengembangan web?",
          options: [
            "Mengatur tampilan dan desain halaman web",
            "Membuat logika aplikasi",
            "Mengelola database",
            "Memastikan keamanan situs",
          ],
        },
        {
          text: "Manakah yang merupakan kata baku menurut PUEBI?",
          options: [
            "Aktivitas",
            "Aktifitas",
            "Acktivitas",
            "Aktivites",
          ],
        },
        {
          text: "Diketahui panjang sisi persegi adalah 9 cm. Berapakah luasnya?",
          options: [
            "81 cm²",
            "72 cm²",
            "90 cm²",
            "100 cm²",
          ],
        },
        {
          text: "Apa nama organisasi yang beranggotakan para pemuda Indonesia dan didirikan pada 28 Oktober 1928?",
          options: [
            "Perhimpunan Indonesia",
            "Budi Utomo",
            "Taman Siswa",
            "Sarekat Islam",
          ],
        },
        {
          text: "Which one is the correct past form of the verb 'teach'?",
          options: [
            "Taught",
            "Teached",
            "Teach",
            "Taughted",
          ],
        },
        {
          text: "Apa fungsi dari tag `<a>` dalam HTML?",
          options: [
            "Membuat hyperlink",
            "Menyisipkan gambar",
            "Membuat tabel",
            "Mengatur ukuran teks",
          ],
        },
        {
            text: "Apa istilah dalam Bahasa Indonesia untuk kata yang digunakan menggantikan kata benda?",
            options: [
              "Kata ganti",
              "Kata kerja",
              "Kata sifat",
              "Kata keterangan",
            ],
          },
          {
            text: "Berapakah hasil dari 7² + 3 × 5?",
            options: [
              "64",
              "49",
              "74",
              "52",
            ],
          },
          {
            text: "Siapa yang dikenal sebagai proklamator kemerdekaan Indonesia selain Soekarno?",
            options: [
              "Mohammad Hatta",
              "Sutan Sjahrir",
              "Ahmad Soebardjo",
              "Ki Hajar Dewantara",
            ],
          },
          {
            text: "Which of the following is the opposite of 'difficult'?",
            options: [
              "Easy",
              "Hard",
              "Complicated",
              "Tough",
            ],
          },
          {
            text: "Apa fungsi utama dari 'if-else' dalam bahasa pemrograman?",
            options: [
              "Melakukan pengambilan keputusan berdasarkan kondisi",
              "Menghapus file dalam program",
              "Mencetak teks ke layar",
              "Menambahkan data ke dalam array",
            ],
          },
          {
            text: "Manakah kalimat dengan ejaan yang sesuai dengan Pedoman Umum Ejaan Bahasa Indonesia (PUEBI)?",
            options: [
              "Saya sedang bersekolah di sekolah menengah atas.",
              "Saya sedang bersekolah di Sekolah Menengah Atas.",
              "Saya sedang bersekolah di sekolah Menengah Atas.",
              "Saya sedang bersekolah di sekolah menengah Atas.",
            ],
          },
          {
            text: "Jika luas lingkaran adalah 154 cm² dan π = 22/7, berapakah jari-jari lingkaran tersebut?",
            options: [
              "7 cm",
              "14 cm",
              "11 cm",
              "5 cm",
            ],
          },
          {
            text: "Peristiwa apa yang menandai dimulainya pendudukan Jepang di Indonesia?",
            options: [
              "Penyerahan Hindia Belanda kepada Jepang",
              "Deklarasi Kemerdekaan Jepang",
              "Serangan Pearl Harbor",
              "Perundingan Linggarjati",
            ],
          },
          {
            text: "Which of the following words is a synonym for 'ancient'?",
            options: [
              "Old",
              "Modern",
              "Recent",
              "New",
            ],
          },
          {
            text: "Apa kepanjangan dari CPU dalam komputer?",
            options: [
              "Central Processing Unit",
              "Central Programming Unit",
              "Central Performance Unit",
              "Core Processing Unit",
            ],
          },
          {
            text: "Kalimat berikut yang menggunakan majas hiperbola adalah:",
            options: [
              "Air matanya mengalir seperti sungai.",
              "Dia berdiri di sudut ruangan.",
              "Langit sangat cerah hari ini.",
              "Angin berhembus perlahan.",
            ],
          },
          {
            text: "Hitung hasil dari 15 ÷ (3 × 2) + 4 = ?",
            options: [
              "6.5",
              "8",
              "7.5",
              "5",
            ],
          },
          {
            text: "Apa nama kerajaan tertua di Indonesia yang memiliki bukti tertulis?",
            options: [
              "Kutai",
              "Majapahit",
              "Sriwijaya",
              "Tarumanegara",
            ],
          },
          {
            text: "Complete the sentence: 'He ______ to the library every day to study.'",
            options: [
              "goes",
              "go",
              "going",
              "gone",
            ],
          },
          {
            text: "Apa fungsi utama dari protokol FTP dalam jaringan komputer?",
            options: [
              "Mengirim dan menerima file",
              "Melakukan enkripsi data",
              "Memonitor aktivitas pengguna",
              "Mengatur akses jaringan",
            ],
          },
          {
            text: "Kalimat berikut yang mengandung makna denotatif adalah:",
            options: [
              "Ayah memetik bunga di taman.",
              "Hatinya berbunga-bunga melihat hasil ujian.",
              "Ia merasa tertekan oleh tanggung jawab.",
              "Pikiran gelap meliputi dirinya.",
            ],
          },
          {
            text: "Berapakah hasil dari akar pangkat tiga dari 729?",
            options: [
              "9",
              "27",
              "81",
              "18",
            ],
          },
          {
            text: "Siapa yang diangkat sebagai presiden Indonesia kedua setelah Soekarno?",
            options: [
              "Soeharto",
              "BJ Habibie",
              "Abdurrahman Wahid",
              "Megawati Soekarnoputri",
            ],
          },
          {
            text: "What does the idiom 'a piece of cake' mean?",
            options: [
              "Something very easy",
              "Something very difficult",
              "Something very expensive",
              "Something very confusing",
            ],
          },
          {
            text: "Apa fungsi dari tag `<img>` dalam HTML?",
            options: [
              "Menampilkan gambar di halaman web",
              "Mengatur ukuran teks",
              "Membuat daftar poin",
              "Menambahkan tabel ke halaman",
            ],
          },

          {
  text: "Siapa penulis puisi terkenal 'Aku' yang menjadi ikon sastra Indonesia?",
  options: [
    "Chairil Anwar",
    "Pramoedya Ananta Toer",
    "Sapardi Djoko Damono",
    "WS Rendra",
  ],
},
{
  text: "Jika x² - 4x + 3 = 0, maka akar-akarnya adalah?",
  options: [
    "x = 1 dan x = 3",
    "x = 2 dan x = -3",
    "x = -1 dan x = -3",
    "x = 0 dan x = 4",
  ],
},
{
  text: "Peristiwa apakah yang dikenal sebagai titik awal dari Revolusi Industri?",
  options: [
    "Penemuan mesin uap oleh James Watt",
    "Penemuan listrik oleh Michael Faraday",
    "Pendirian VOC oleh Belanda",
    "Revolusi Prancis di tahun 1789",
  ],
},
{
  text: "Complete the sentence: 'The students _____ their homework when the teacher arrived.'",
  options: [
    "were doing",
    "are doing",
    "did",
    "do",
  ],
},
{
  text: "Apa kepanjangan dari RAM dalam perangkat komputer?",
  options: [
    "Random Access Memory",
    "Read Access Memory",
    "Rapid Access Memory",
    "Remote Access Memory",
  ],
},
{
  text: "Manakah yang merupakan kalimat tidak langsung?",
  options: [
    "'Dia mengatakan bahwa ia sedang belajar.'",
    "'Saya sedang belajar,' kata dia.",
    "'Saya sedang membaca novel,' jawabnya.",
    "'Ia berujar, saya sedang belajar.'",
  ],
},
{
  text: "Jika panjang diagonal sebuah persegi adalah 10√2 cm, berapakah luas persegi tersebut?",
  options: [
    "100 cm²",
    "200 cm²",
    "50 cm²",
    "150 cm²",
  ],
},
{
  text: "Perjanjian apa yang menjadi awal masuknya Belanda ke Indonesia pada tahun 1602?",
  options: [
    "Perjanjian Plakaat van Verlatinghe",
    "Perjanjian Tordesillas",
    "Perjanjian Giyanti",
    "Perjanjian Bongaya",
  ],
},
{
  text: "What does the word 'innovation' mean?",
  options: [
    "The process of introducing new ideas",
    "The study of ancient history",
    "The act of preserving old traditions",
    "The improvement of artistic skills",
  ],
},
{
  text: "Apa peran utama dari file `.css` dalam pengembangan web?",
  options: [
    "Mengatur tampilan dan tata letak",
    "Menjalankan logika program",
    "Menyimpan data pengguna",
    "Membuat koneksi ke database",
  ],
},
{
  text: "Kalimat berikut yang menggunakan majas paralelisme adalah:",
  options: [
    "Dia membaca, dia menulis, dia berpikir.",
    "Langit biru, ombak berdebur, angin semilir.",
    "Batu karang teguh di tengah ombak.",
    "Rumput bergoyang terkena angin.",
  ],
},
{
  text: "Jika jumlah sudut pada segitiga adalah 180°, maka berapakah besar sudut ketiga jika dua sudut lainnya adalah 50° dan 60°?",
  options: [
    "70°",
    "80°",
    "60°",
    "90°",
  ],
},
{
  text: "Apa nama pertempuran besar yang terjadi pada 10 November 1945 di Surabaya?",
  options: [
    "Pertempuran Surabaya",
    "Pertempuran Medan Area",
    "Pertempuran Ambarawa",
    "Pertempuran Lima Hari Semarang",
  ],
},
{
  text: "Complete the sentence: 'If she _____ harder, she would have passed the exam.'",
  options: [
    "had studied",
    "studies",
    "is studying",
    "study",
  ],
},
{
  text: "Apa kegunaan utama dari protokol IP dalam jaringan komputer?",
  options: [
    "Mengatur alamat perangkat",
    "Meningkatkan kecepatan internet",
    "Mengamankan data pengguna",
    "Memantau aktivitas jaringan",
  ],
},
{
  text: "Kalimat berikut yang menggunakan ejaan baku adalah:",
  options: [
    "Dia menghadiri rapat tahunan perusahaan.",
    "Dia menghadiri rapat tahunan Perusahaan.",
    "Dia menghadiri rapat tahunan di Perusahaan.",
    "Dia menghadiri Rapat tahunan Perusahaan.",
  ],
},
{
  text: "Berapakah keliling lingkaran dengan diameter 14 cm (π = 22/7)?",
  options: [
    "44 cm",
    "28 cm",
    "88 cm",
    "72 cm",
  ],
},
{
  text: "Siapa yang menulis novel 'Tenggelamnya Kapal Van der Wijck'?",
  options: [
    "Hamka",
    "Abdul Muis",
    "Marah Rusli",
    "Sutan Takdir Alisjahbana",
  ],
},
{
  text: "Dalam pemrograman, apakah istilah untuk struktur data yang mengikuti prinsip LIFO (Last In, First Out)?",
  options: [
    "Stack",
    "Queue",
    "Array",
    "Tree",
  ],
},
{
    text: "Siapa penulis naskah proklamasi kemerdekaan Indonesia?",
    options: [
      "Soekarno dan Mohammad Hatta",
      "Ahmad Soebardjo dan Soekarno",
      "Mohammad Hatta dan Sutan Sjahrir",
      "Soekarno dan Sutan Sjahrir",
    ],
  },
  {
    text: "Jika sebuah fungsi kuadrat f(x) = x² - 6x + 8, maka titik puncaknya adalah?",
    options: [
      "(3, -1)",
      "(2, 0)",
      "(4, -2)",
      "(5, 1)",
    ],
  },
  {
    text: "Kerajaan maritim terbesar di Asia Tenggara pada abad ke-7 adalah?",
    options: [
      "Kerajaan Sriwijaya",
      "Kerajaan Majapahit",
      "Kerajaan Mataram Kuno",
      "Kerajaan Tarumanegara",
    ],
  },
  {
    text: "What is the meaning of the phrase 'once in a blue moon'?",
    options: [
      "Something that happens very rarely",
      "Something that is very common",
      "A predictable event",
      "An unusual weather phenomenon",
    ],
  },
  {
    text: "Komponen utama CPU dalam komputer adalah?",
    options: [
      "ALU, Control Unit, dan Registers",
      "RAM, ROM, dan Cache",
      "Motherboard, BIOS, dan Power Supply",
      "Hard Drive, GPU, dan Processor",
    ],
  },
  {
    text: "Kalimat berikut yang menggunakan imbuhan yang benar adalah:",
    options: [
      "Dia meminum segelas air dengan cepat.",
      "Dia meminumkan segelas air dengan cepat.",
      "Dia meminumi segelas air dengan cepat.",
      "Dia meminuman segelas air dengan cepat.",
    ],
  },
  {
    text: "Jika panjang sisi persegi adalah 12 cm, berapakah kelilingnya?",
    options: [
      "48 cm",
      "24 cm",
      "144 cm",
      "36 cm",
    ],
  },
  {
    text: "Siapa nama diplomat Indonesia yang berjasa dalam menyusun teks proklamasi?",
    options: [
      "Ahmad Soebardjo",
      "Adam Malik",
      "Soepomo",
      "Sutan Sjahrir",
    ],
  },
  {
    text: "Choose the correct sentence: 'She has lived in London _____ five years.'",
    options: [
      "for",
      "since",
      "from",
      "during",
    ],
  },
  {
    text: "Apa fungsi utama dari algoritma sorting dalam pemrograman?",
    options: [
      "Mengatur data dalam urutan tertentu",
      "Menghapus data yang tidak digunakan",
      "Menggabungkan dua dataset",
      "Mengatur hak akses pengguna",
    ],
  },
  {
    text: "Manakah dari berikut ini yang merupakan sinonim dari kata 'berhasil'?",
    options: [
      "Sukses",
      "Kegagalan",
      "Kendala",
      "Kerugian",
    ],
  },
  {
    text: "Jika 3x - 2 = 10, maka nilai x adalah?",
    options: [
      "4",
      "2",
      "6",
      "5",
    ],
  },
  {
    text: "Apa nama perjanjian yang mengakhiri Perang Dunia I?",
    options: [
      "Perjanjian Versailles",
      "Perjanjian Tordesillas",
      "Perjanjian Utrecht",
      "Perjanjian San Francisco",
    ],
  },
  {
    text: "What is the synonym of 'elaborate'?",
    options: [
      "Detailed",
      "Simple",
      "Quick",
      "Brief",
    ],
  },
  {
    text: "Apa nama bahasa pemrograman yang sering digunakan untuk pengembangan aplikasi web frontend?",
    options: [
      "JavaScript",
      "Python",
      "Java",
      "C++",
    ],
  },
  {
    text: "Kalimat berikut yang menggunakan pola SPOK adalah:",
    options: [
      "Saya belajar matematika di perpustakaan.",
      "Di perpustakaan saya belajar matematika.",
      "Matematika saya pelajari di perpustakaan.",
      "Saya di perpustakaan belajar matematika.",
    ],
  },
  {
    text: "Jika sin 30° = 0,5, maka berapa nilai cos 30°?",
    options: [
      "√3/2",
      "1/2",
      "√2/2",
      "1",
    ],
  },
  {
    text: "Kapan Sumpah Pemuda dideklarasikan?",
    options: [
      "28 Oktober 1928",
      "17 Agustus 1945",
      "20 Mei 1908",
      "1 Juni 1945",
    ],
  },
  {
    text: "Which word best completes the sentence: 'The scientist conducted a _____ experiment to test the hypothesis.'",
    options: [
      "controlled",
      "random",
      "basic",
      "simple",
    ],
  },
  {
    text: "Apa peran utama dari GPU (Graphics Processing Unit) dalam komputer?",
    options: [
      "Mengolah grafis dan gambar",
      "Meningkatkan kecepatan prosesor",
      "Menyimpan data pengguna",
      "Mengatur koneksi jaringan",
    ],
  },
  {
    text: "Apa nama organisasi pemuda yang menjadi cikal bakal Sumpah Pemuda?",
    options: [
      "Jong Java",
      "Jong Ambon",
      "Jong Celebes",
      "Jong Sumatra",
    ],
  },
  {
    text: "Jika nilai dari 2x² - 8x + 6 = 0, maka akar-akarnya adalah?",
    options: [
      "x = 1 dan x = 3",
      "x = -1 dan x = -3",
      "x = 2 dan x = 3",
      "x = -2 dan x = -3",
    ],
  },
  {
    text: "Siapa tokoh yang dikenal sebagai Bapak Pendidikan Nasional Indonesia?",
    options: [
      "Ki Hajar Dewantara",
      "Soekarno",
      "Mohammad Hatta",
      "Kartini",
    ],
  },
  {
    text: "What does the phrase 'break the ice' mean?",
    options: [
      "To start a conversation",
      "To stop an argument",
      "To overcome fear",
      "To make a decision",
    ],
  },
  {
    text: "Protokol jaringan apakah yang digunakan untuk mentransfer data di internet?",
    options: [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP",
    ],
  },
  {
    text: "Kalimat yang benar menggunakan kata 'di mana' adalah:",
    options: [
      "Kami mencari tempat di mana kami bisa berdiskusi.",
      "Kami mencari tempat dimana kami bisa berdiskusi.",
      "Kami mencari tempat, dimana kami bisa berdiskusi.",
      "Kami mencari tempat dimanakah kami bisa berdiskusi.",
    ],
  },
  {
    text: "Jika sebuah lingkaran memiliki jari-jari 7 cm, berapakah luasnya (π = 22/7)?",
    options: [
      "154 cm²",
      "44 cm²",
      "88 cm²",
      "132 cm²",
    ],
  },
  {
    text: "Apa nama perjanjian yang mengakhiri konflik antara VOC dan Kerajaan Mataram pada tahun 1755?",
    options: [
      "Perjanjian Giyanti",
      "Perjanjian Bongaya",
      "Perjanjian Renville",
      "Perjanjian Saragosa",
    ],
  },
  {
    text: "Choose the correct word to complete the sentence: 'He has been working here _____ 2015.'",
    options: [
      "since",
      "for",
      "from",
      "during",
    ],
  },
  {
    text: "Apa fungsi utama dari perangkat firewall dalam jaringan komputer?",
    options: [
      "Melindungi jaringan dari akses tidak sah",
      "Meningkatkan kecepatan koneksi",
      "Mengatur alamat IP perangkat",
      "Mengatur data dalam jaringan",
    ],
  },
  {
    text: "Kalimat berikut yang menggunakan kata baku adalah:",
    options: [
      "Mereka sedang melakukan penelitian ilmiah.",
      "Mereka sedang mengerjakan riset ilmiah.",
      "Mereka sedang membuat penilitian ilmiah.",
      "Mereka sedang memproduksi penelitiaan ilmiah.",
    ],
  },
  {
    text: "Berapakah hasil dari 5! (5 faktorial)?",
    options: [
      "120",
      "60",
      "20",
      "24",
    ],
  },
  {
    text: "Siapa nama presiden ketiga Republik Indonesia?",
    options: [
      "BJ Habibie",
      "Soekarno",
      "Soeharto",
      "Abdurrahman Wahid",
    ],
  },
  {
    text: "What is the antonym of the word 'expand'?",
    options: [
      "Contract",
      "Enlarge",
      "Increase",
      "Develop",
    ],
  },
  {
    text: "Bahasa pemrograman apakah yang biasa digunakan untuk pengolahan data statistik?",
    options: [
      "Python",
      "JavaScript",
      "Java",
      "C#",
    ],
  },
  {
    text: "Kalimat yang menggunakan pola SPO adalah:",
    options: [
      "Ayah membaca koran.",
      "Koran sedang dibaca ayah.",
      "Membaca koran adalah kegiatan ayah.",
      "Ayah membaca di ruang tamu.",
    ],
  },
  {
    text: "Jika panjang sisi segitiga sama sisi adalah 10 cm, berapakah kelilingnya?",
    options: [
      "30 cm",
      "20 cm",
      "40 cm",
      "50 cm",
    ],
  },
  {
    text: "Apa nama kongres yang menghasilkan keputusan penting berupa Sumpah Pemuda?",
    options: [
      "Kongres Pemuda II",
      "Kongres Pemuda I",
      "Kongres Perempuan Indonesia",
      "Kongres Nasional Pemuda",
    ],
  },
  {
    text: "Which word best completes the sentence: 'The invention of the internet has greatly _____ communication worldwide.'",
    options: [
      "improved",
      "reduced",
      "interrupted",
      "complicated",
    ],
  },
  {
    text: "Apa fungsi utama dari cache dalam komputer?",
    options: [
      "Meningkatkan kecepatan akses data",
      "Mengurangi konsumsi daya",
      "Menyimpan data pengguna",
      "Melindungi sistem dari virus",
    ],
  }
  
  

      


];

export default soal;