import axios from 'axios';

// --- Configuration ---
const PING_URL = "https://api.leadprosper.io/ping";
const POST_URL = "https://api.leadprosper.io/post";

// Function to handle the two-step Ping and Post process
export async function POST(request) {
  try {
    // Get form data from the request
    const formData = await request.json();
    
    console.log('Received form data:', formData);

    // --- Ping Data (used for the first API call) ---
    const pingData = {
      "lp_campaign_id": "29636",
      "lp_supplier_id": "90620", 
      "lp_key": "qgoptzlrpb1x6v",
      "zip_code": formData.zip_code || 92802,
      "ownership": formData.home_owner === "Own" ? "Owned" : "Rented",
      "years_at_residence": "10+",
      "months_at_residence": "10",
      "coverage_type": "Basic",
      "has_current_auto_insurance": formData.currently_insured === "Yes" ? "true" : "false"
    };

    // --- Post Data (full lead data) ---
    const postData = {
      ...pingData, // Include all ping fields
      "lp_ping_id": "", // Will be updated after ping
      ...formData
    };

    // --- 1. Perform Ping Request ---
    let lp_ping_id = null;
    const pingPayload = new URLSearchParams(pingData).toString();

    console.log('🔄 STEP 1: Sending PING request to Leadprosper...');
    console.log('📤 Ping payload:', pingPayload);
    
    const pingResponse = await axios.post(PING_URL, pingPayload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    lp_ping_id = pingResponse.data.ping_id;
    console.log('✅ PING API Status: SUCCESS');
    console.log('📥 Ping response:', pingResponse.data);
    console.log('🎯 Ping ID extracted:', lp_ping_id);
    console.log("===>",postData);

    if (!lp_ping_id) {
      return Response.json({ 
        success: false,
        message: "Ping accepted, but 'ping_id' was not found in response.",
        details: pingResponse.data
      }, { status: 500 });
    }

    // --- 2. Perform Post Request ---
    postData.lp_ping_id = lp_ping_id;
    const postPayload = new URLSearchParams(postData).toString();

    console.log('🔄 STEP 2: Sending POST request to Leadprosper...');
    console.log('📤 Post payload (with ping_id):', postPayload);
    console.log('🎯 Using ping_id:', lp_ping_id);
    console.log("===>",postData);
    
    const postResponse = await axios.post(POST_URL, postPayload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    console.log('✅ POST API Status: SUCCESS');
    console.log('📥 Post response:', postResponse.data);
    console.log("===>",postData);

    // Success: Return the final API response
    return Response.json({ 
      success: true,
      message: "Lead successfully submitted.", 
      apiResponse: postResponse.data,
      pingId: lp_ping_id,
      dic: postData
    });

  } catch (error) {
    console.log('❌ API Error occurred:');
    console.log('💥 Error details:', error.response?.data || error.message);
    console.log('🔍 Error status:', error.response?.status);
    console.log('📡 Error headers:', error.response?.headers);
    
    return Response.json({ 
      success: false,
      message: "Failed to submit lead.", 
      error: error.response?.data || error.message,
      errorStatus: error.response?.status
    }, { status: 500 });
  }
}
