const { execSync } = require('child_process');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Setting up your project...');

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Create .env file
console.log('\nSetting up environment variables...');
const envExample = fs.readFileSync('.env.example', 'utf8');
const envVars = envExample.split('\n').filter(line => line.trim() !== '');

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const setupEnv = async () => {
  let envContent = '';
  for (const line of envVars) {
    const [key] = line.split('=');
    const value = await askQuestion(`Enter value for ${key}: `);
    envContent += `${key}=${value}\n`;
  }
  fs.writeFileSync('.env', envContent);
};

setupEnv().then(() => {
  console.log('\nSetup complete! You can now run your project.');
  rl.close();
});