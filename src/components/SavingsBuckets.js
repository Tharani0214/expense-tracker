import React, { useState } from 'react';

function SavingsBuckets() {
  const [savingsBuckets, setSavingsBuckets] = useState([]); // Initialize with an empty array
  const [bucketName, setBucketName] = useState('');
  const [bucketAmount, setBucketAmount] = useState('');

  // Function to add a new savings bucket
  const handleAddBucket = (e) => {
    e.preventDefault();
    if (bucketName && bucketAmount) {
      const newBucket = {
        id: Date.now(),
        name: bucketName,
        amount: parseFloat(bucketAmount),
      };
      setSavingsBuckets([...savingsBuckets, newBucket]);
      setBucketName('');
      setBucketAmount('');
    } else {
      alert('Please enter both bucket name and amount.');
    }
  };

  return (
    <div>
     
      
      <form onSubmit={handleAddBucket}>
        <input
          type="text"
          placeholder="Bucket Name"
          value={bucketName}
          onChange={(e) => setBucketName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={bucketAmount}
          onChange={(e) => setBucketAmount(e.target.value)}
          required
        />
        <button type="submit">Add Savings Bucket</button>
      </form>

      {savingsBuckets.length > 0 ? (
        <ul>
          {savingsBuckets.map((bucket) => (
            <li key={bucket.id}>
              {bucket.name}: ${bucket.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No savings buckets added yet.</p>
      )}
    </div>
  );
}

export default SavingsBuckets;

