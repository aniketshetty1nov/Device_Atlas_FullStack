import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './styles.css';
import './App.css';

export default function App(){
  const [tablets ,setTablets ] = useState([]);
  const [userAgents, setUserAgents] = useState('');
  const [sortOrder, setSortOrder] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  useEffect(() =>{  
    fetchTablets();
  }, []) 

  const validateInput = () => {
    if (!userAgents.trim()) {
      setErrorMessage("Input cannot be empty. Please enter at least one user-agent.");
      return false;
    }
      const userAgentInput  = userAgents.trim().split('\n');
      const userAgentPattern = /(Dalvik|Mozilla|AppleWebKit|Chrome|Safari|Opera|Edge|Trident|Gecko)\/[0-9.]+/;
  
      for (let userAgent of userAgentInput) {
        if (!userAgentPattern.test(userAgent)) {
          setErrorMessage(`Invalid user-agent detected: "${userAgent.trim()}"`);
          return false;
        }
      }
      setErrorMessage("");
      return true;

    
    }

  
  const fetchTablets = async() =>{
    try{
      const response = await axios.get('http://localhost:5001/tablets');
      setTablets(response.data);
    }
    catch(error){
      console.log("Error fetching tablets: ", error)
    }
  };

  const showPopup = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
    setTimeout(() => {
      setPopupMessage("");
    }, 9000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;  // Check input validation before submitting
      try {
        await axios.post('http://localhost:5001/fetch-devices', { userAgents: userAgents.trim().split('\n') });
        fetchTablets(); // Fetch updated data
        setUserAgents(''); // Clear input box
        setErrorMessage("");   // Clear error message if successful

        showPopup("Data saved successfully!", "success");
      } catch (error) {
        console.log('Error submitting user agents: ', error);
        showPopup("Failed to save data!", "error");
      }
    
  };

  const handleSort = (column) => {
    const isAsc = sortColumn === column && sortOrder === 'asc';
    setSortOrder(isAsc ? 'desc' : 'asc');
    setSortColumn(column);

    const sortedTablets = [...tablets].sort((a, b) => {
      if (a[column] < b[column]) return isAsc ? 1 : -1;
      if (a[column] > b[column]) return isAsc ? -1 : 1;
      return 0;
    });

    setTablets(sortedTablets);
  };



  return (

    <>
     {/* Navbar */}
     <div className="navbar">
     <h2>Device Atlas Dashboard</h2>
   </div>
  
    <div className="container">
        <div className="header">
          <h1>Filtered Tablet Devices</h1>
        </div>
        <div className="input-wrapper">
          <textarea 
            value={userAgents} 
            onChange={(e) => setUserAgents(e.target.value)} 
            placeholder="Enter user-agents (one per line)" 
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {popupMessage && (
          <div className={`popup-message ${popupType}`}>{popupMessage}</div>
        )}

      <div className="table-container">
        {tablets.length > 0 ?(
          <table >
            <thead>
              <tr>
                {['model', 'vendor', 'osName', 'osVersion', 'browserName'].map((col) => (
                  <th key={col} onClick={() => handleSort(col)}>
                    {col.charAt(0).toUpperCase() + col.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tablets.map((tablet, index) => (
                <tr key={index}>
                  <td>{tablet.model}</td>
                  <td>{tablet.vendor}</td>
                  <td>{tablet.osName}</td>
                  <td>{tablet.osVersion}</td>
                  <td>{tablet.browserName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No tablet devices found.</p>
        )}
      </div>
    </div>
    </>
  );
}
