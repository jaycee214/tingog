import express from "express";
import cors from "cors";
import { sample_reports, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))

app.get("/api/reports", (req, res) => {
    res.send(sample_reports);
})

app.get("/api/reports/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const reports = sample_reports
    .filter(report => report.title.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(reports);
})

app.get("/api/reports/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("/api/reports/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const reports = sample_reports
    .filter(report => report.tags?.includes(tagName));
    res.send(reports);
})

app.get("/api/reports/:reportId", (req, res) => {
    const reportId = req.params.reportId;
    const report = sample_reports.find(report => report.id == reportId);
    res.send(report);
})

app.post("/api/users/login", (req,res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if(user){
        res.send(generateTokenResponse(user))
    }else{
        res.status(400).send("User name or password is invalid!");
    }
})

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    },"SomeRandomText", {
        expiresIn:"30d"
    });

    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})