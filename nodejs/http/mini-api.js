const http = require("http");
const url = require("url");
let users = [
  { id: 1, name: "Shivam" },
  { id: 2, name: "Rohit" },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.setHeader("Content-Type", "application/json");

  // GET/user
  if (parsedUrl.pathname === "/users" && req.method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  }

  // GET/user?id=1
  else if (parsedUrl.pathname === "/user" && req.method === "GET") {
    const id = Number(parsedUrl.query.id);
    const user = users.find((u) => u.id === id);
    if (!user) {
      res.statusCode = 404;
      return res.end(JSON.stringify({ message: "User not found " }));
    }
    res.end(JSON.stringify(user));
  }

  // POST/user
  else if (parsedUrl.pathname === "/user" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const newuser = JSON.parse(body);

        users.push(newuser);

        res.statusCode = 201;
        res.end(
          JSON.stringify({
            message: "User created successfully",
            user: newuser,
          }),
        );
      } catch (err) {
        res.statusCode = 400;
        res.end(
          JSON.stringify({
            message: "Invalid JSON",
          }),
        );
      }
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
