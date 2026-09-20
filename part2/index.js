const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/user") {
        const users = fs.readFileSync(path.join(__dirname, "/users.json"), {
            encoding: "utf-8",
        });
        res.writeHead(200, { "content-type": "application/json" });
        res.write(users);
        res.end();
    } else if (req.method === "POST" && req.url === "/user") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            let users = fs.readFileSync(path.join(__dirname, "/users.json"), {
                encoding: "utf-8",
            });

            users = JSON.parse(users);

            body = JSON.parse(body);

            if (users.some((user) => user.email === body.email)) {
                res.writeHead(201, { "content-type": "application/json" });
                res.write(JSON.stringify({ message: "Email already exists" }));
                res.end();
                return;
            }

            users.push(body);

            users = JSON.stringify(users);

            fs.writeFileSync(path.join(__dirname, "/users.json"), users);

            res.writeHead(201, { "content-type": "application/json" });
            res.write(JSON.stringify({ message: "User added successfully" }));
            res.end();
        });
    } else if (req.method === "PATCH" && req.url.startsWith("/user/")) {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const id = Number(req.url.split("/").at(-1));

            let users = fs.readFileSync(path.join(__dirname, "/users.json"), {
                encoding: "utf-8",
            });

            users = JSON.parse(users);

            let findUser = users.find((user) => user.id === id);

            if (!findUser) {
                res.writeHead(404, { "content-type": "application/json" });
                res.write(JSON.stringify({ message: "User ID not found." }));
                res.end();
                return;
            }
            body = JSON.parse(body);

            users = users.map((user) =>
                user.id === id ? { ...user, ...body } : user,
            );

            users = JSON.stringify(users);

            fs.writeFileSync(path.join(__dirname, "/users.json"), users);

            res.writeHead(200, { "content-type": "application/json" });
            res.write(JSON.stringify({ message: "User updated successfully" }));
            res.end();
        });
    } else if (req.method === "DELETE" && req.url.startsWith("/user/")) {
        const id = Number(req.url.split("/").at(-1));

        let users = fs.readFileSync(path.join(__dirname, "/users.json"), {
            encoding: "utf-8",
        });

        users = JSON.parse(users);

        let findUser = users.find((user) => user.id === id);

        if (!findUser) {
            res.writeHead(404, { "content-type": "application/json" });
            res.write(JSON.stringify({ message: "User ID not found." }));
            res.end();
            return;
        }

        const newUsers = users.filter((user) => user.id !== id);
        console.log(newUsers);

        users = JSON.stringify(newUsers);

        fs.writeFileSync(path.join(__dirname, "/users.json"), users);

        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify({ message: "User deleted successfully" }));
        res.end();
    }
});

server.listen(3001, () => {
    console.log("successfully conectedt to port 3001");
});
