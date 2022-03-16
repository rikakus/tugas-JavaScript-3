const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"));
    }
  }, 4000);
};

const callback = (error, data) => {
  if (!error) {
    data.map((e) => {
      console.log(e);
    });
  } else {
    console.log(error.message);
  }
};

getMonth(callback);
