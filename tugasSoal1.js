// const cekHariKerja = (day) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
//       let cek = dataDay.find((item) => {
//         return item === day.toLowerCase();
//       });
//       if (cek) {
//         resolve(cek);
//       } else {
//         reject(new Error("Hari ini bukan hari kerja"));
//       }
//     }, 3000);
//   });
// };

// cekHariKerja("minggu")
//   .then((result) => {
//     console.log(result + " = Hari Kerja.");
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
// then untuk menangkap resolve
// catch untuk menangkap reject


const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // untuk menghandel apabila terjadi eror agar program tidak crash
        const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
        let cek = dataDay.find((item) => {
          return item === day.toLowerCase();
        });

        if (cek) {
          resolve(cek);
        } else {
          reject(new Error("Hari ini bukan hari kerja"));
        }
      } catch (error) {
        // untuk menampilkan pesan eror jida ada eror
        reject(new Error("Terjadi Kesalahan saat memproses !"));
      }
    }, 3000);
  });
};
cekHariKerja("senin")
  .then((result) => {
    console.log(result + " = Hari Kerja.");
  })
  .catch((error) => {
    console.log(error.message);
  });
