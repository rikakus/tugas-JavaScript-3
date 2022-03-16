const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day.toLowerCase();
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// cekHariKerja("minggu")
//   .then((result) => {
//     console.log(result + " = Hari Kerja.");
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
// then untuk menangkap resolve
// catch untuk menangkap reject

const cekHari = (data) => {
  try {
    console.log("tunggu...");
    cekHariKerja(data);
  } catch (err) {
    console.log(err.message);
  }
};
