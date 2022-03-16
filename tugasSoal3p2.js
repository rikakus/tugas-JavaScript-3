const cekKata = (kata) => {
  return new Promise((resolve, reject) => {
    console.log("loading...");
    setTimeout(() => {
      if (typeof kata == "string") {
        const hasil = kata.toLowerCase().split().reverse().join();
        if (hasil == kata.toLowerCase()) {
          resolve("kata palindrom");
        } else {
          reject("kata bukan palindrom");
        }
      } else {
        console.log("parameter harus string");
      }
    }, 2000);
  });
};

cekKata("maLam")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
