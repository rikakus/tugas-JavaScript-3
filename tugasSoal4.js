const fetch = require("node-fetch");

const getName = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //mengambil data dari url
    const data = await response.json(); // mengubah data return dari fetch ke format json
    data.map((item) => {
      console.log(item.name);
    });
  } catch (error) {
    console.log("Terjadi kesalahan saat mengambil data");
  }
};

getName();
