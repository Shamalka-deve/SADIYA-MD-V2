const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SADIYA-MD=2IdQUTaI#qTztk0a-Rvz8-G9DukUZyTDc0LI2Di3Jm1UgD16u5yY", //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || "Shamalka-deve", //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "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", //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || "SADIYA-MD-DATABASE", //Bot Database Repo Name
SESSION_NAME: process.env.SESSION_NAME || "session"
};
