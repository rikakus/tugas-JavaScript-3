const cekPrima = (data) => {
  return new Promise((resolve, reject) => {
    console.log("loading...");
    setTimeout(() => {
      if (typeof data == "number") {
        let pembagi = 0;
        for (let i = 1; i <= data; i++) {
          if (data % i == 0) {
            pembagi++;
          }
        }
        if (pembagi == 2) {
          resolve(data + " = bilangan prima");
        } else {
          reject(data + " = bukan bilangan prima");
        }
      } else {
        console.log("parameter harus number");
      }
    }, 2000);
  });
};

cekPrima(4)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
