import React, { useEffect, useState } from 'react';

function AccountDetails() {
  const [accountDetails, setAccountDetails] = useState(null);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxnejCCoZ4irWZpaalgVCQxmdop0FN82DcUl27X0b9nV7ktMgf640l7AozK-Cn2k3Kt/exec', {
  method: 'GET',
  mode: 'no-cors', // Include this option
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching account details:', error);
  });
  }, []);

  return (
    <div>
      <h2>Account Details</h2>
      {accountDetails ? (
        <div>
          <p>Account Number: {accountDetails.accountNumber}</p>
          <p>Name: {accountDetails.fullname}</p>
          <p>Email: {accountDetails.email}</p>
          {/* Add more account details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AccountDetails;
