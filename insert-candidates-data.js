const http = require('http');
const fs = require('fs');
const path = require('path');

// Check if real candidates data exists, otherwise use sample data
let candidatesData;
const realCandidatesPath = path.join(__dirname, 'real-candidates-data.js');

if (fs.existsSync(realCandidatesPath)) {
  console.log('📋 Using real candidates data...');
  candidatesData = require('./real-candidates-data.js');
} else {
  console.log('📋 Using sample data (real-candidates-data.js not found)...');
  candidatesData = [
    {
      ballotNumber: "1",
      name: "Sample User",
      ballotName: "sample_user_2024",
      designation: "General Secretary"
    }
  ];
}

function makeRequest(user) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(user);
    
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/users',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

async function insertCandidatesData() {
  console.log('🚀 Starting DUCSU candidates data insertion...');
  console.log('📡 Make sure your server is running on http://localhost:3000\n');

  // First, test if server is running
  try {
    await new Promise((resolve, reject) => {
      const req = http.request({
        hostname: 'localhost',
        port: 3000,
        path: '/health',
        method: 'GET'
      }, (res) => {
        resolve(res);
      });
      
      req.on('error', reject);
      req.end();
    });
    
    console.log('✅ Server is running!\n');
  } catch (error) {
    console.log('❌ Server is not running. Please start it with: npm run dev');
    console.log('   Then run this script again with: npm run seed-candidates');
    return;
  }

  // Group candidates by position for better output
  const candidatesByPosition = {};
  candidatesData.forEach(candidate => {
    if (!candidatesByPosition[candidate.designation]) {
      candidatesByPosition[candidate.designation] = [];
    }
    candidatesByPosition[candidate.designation].push(candidate);
  });

  console.log('📊 Candidates to be inserted:');
  Object.keys(candidatesByPosition).forEach(position => {
    console.log(`   ${position}: ${candidatesByPosition[position].length} candidates`);
  });
  console.log('');

  let successCount = 0;
  let errorCount = 0;

  for (const user of candidatesData) {
    try {
      const response = await makeRequest(user);
      
      if (response.success) {
        console.log(`✅ Created: ${user.name} (${user.designation}) - Ballot: ${user.ballotName}`);
        successCount++;
      } else {
        console.log(`❌ Failed: ${user.name} - ${response.message}`);
        errorCount++;
      }
    } catch (error) {
      console.log(`❌ Failed: ${user.name} - ${error.message}`);
      errorCount++;
    }
    
    // Small delay between requests to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n🎉 DUCSU candidates data insertion completed!');
  console.log(`📊 Successfully created: ${successCount} candidates`);
  console.log(`⚠️  Failed to create: ${errorCount} candidates`);
  
  if (successCount > 0) {
    console.log('\n📋 You can view all candidates at: http://localhost:3000/api/users');
    
    // Show summary by position
    console.log('\n📈 Summary by position:');
    Object.keys(candidatesByPosition).forEach(position => {
      const totalForPosition = candidatesByPosition[position].length;
      console.log(`   ${position}: ${totalForPosition} candidates`);
    });
  }

  if (errorCount > 0) {
    console.log('\n💡 If you see "Ballot name already exists" errors, candidates might already be in the database.');
    console.log('   You can delete all users and try again, or update existing ones.');
  }
}

// Run the script
insertCandidatesData().catch(console.error);