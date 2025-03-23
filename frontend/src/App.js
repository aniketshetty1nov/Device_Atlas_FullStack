import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './styles.css';
import './App.css';

export default function App(){
  const [devices, setDevices ] = useState([]);
  const [userAgents, setUserAgents] = useState('');
  const [sortOrder, setSortOrder] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");
  const [filter, setFilter] = useState('All'); 

  useEffect(() =>{  
    fetchDevices();
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

  
  const fetchDevices = async() =>{
    try{
      const response = await axios.get('http://localhost:5001/devices');
      setDevices(response.data);
    }
    catch(error){
      console.log("Error fetching devices: ", error)
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
        fetchDevices(); // Fetch updated data
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

    const sorteddevices = [...devices].sort((a, b) => {
      if (a[column] < b[column]) return isAsc ? 1 : -1;
      if (a[column] > b[column]) return isAsc ? -1 : 1;
      return 0;
    });

    setDevices(sorteddevices);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filtered list based on the selected filter
  const filteredDevices = devices.filter((device) =>
    filter === 'All' || device.primaryHardwareType === filter
  );



  return (

    <>
     {/* Navbar */}
     <div className="navbar">
     <h2>Device Atlas Dashboard</h2>
   </div>
  
    <div className="container">
        <div className="header">
          <h1>Devices</h1>
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


      {/* Filter Dropdown */}
      <div className="filter-section">
        <label>Filter by Hardware Type: </label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Tablet">Tablet</option>
          <option value="Mobile Phone">Mobile</option>
          <option value="Desktop">Desktop</option>
        </select>
      </div>

        
      <div className="table-container">
        
        {filteredDevices.length > 0 ?(
          <table >
            <thead>
              <tr>
                {['model', 'vendor', 'osName', 'osVersion', 'browserName','primaryHardwareType'].map((col) => (
                  <th key={col} onClick={() => handleSort(col)}>
                    {col.charAt(0).toUpperCase() + col.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredDevices.map((device, index) => (
                <tr key={index}>
                  <td>{device.model}</td>
                  <td>{device.vendor}</td>
                  <td>{device.osName}</td>
                  <td>{device.osVersion}</td>
                  <td>{device.browserName}</td>
                  <td>{device.primaryHardwareType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No device found.</p>
        )}
      </div>
    </div>
    </>
  );
}
