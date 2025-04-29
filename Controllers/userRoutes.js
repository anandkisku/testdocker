export const getUser = (req, res) => {
    const users = [
      { name: "Rohit", age: 26, city: "Pune" },
      { name: "Mohit", age: 29, city: "Gaya" },
      { name: "Harshit", age: 32, city: "Jaisalmer" },
      { name: "Kunal", age: 19, city: "Delhi" }
    ];
    res.status(200).json(users);
  };