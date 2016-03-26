
var config = {};
config.account = {};


// 0 = Basic Logs | 1 = Medium Logs | 2 = Show All Logs
config.verbosityLevel = 1;


config.userAgent = 'Thiez-bot-v1';


config.feederServer = "ws://127.0.0.1:8081"; // Local to host bot

config.serverPort = 8081; //Port For Thiez Bot Run

config.client_uuid = "418e"; //View uuid in extension

// Local for proxy
config.proxies = "proxy.txt";
config.botsPerIp = 3;
config.onboardingTimer = 0;

// Maximum number of bots to load
config.maxBots = 3500;

config.useRandomSkinName = true; 
config.useStaticName = ""; 


// spec_mode = FOLLOW MOUSE ON SPECTATE
// blind = BOT FARM
config.botMode = "spec_mode";


config.minimumMassBeforeFeed = 0;
config.enableSaveMoveTo = false;


module.exports = config;

