/**
 * Promise.all Implementation
 * 
 * This file demonstrates how to use Promise.all to execute multiple promises
 * concurrently and wait for all of them to complete. It's useful for fetching
 * multiple resources simultaneously.
 * 
 * Time Complexity: O(n) - where n is the number of promises
 * Space Complexity: O(n) - to store all results
 * 
 * @param {Array} ids - Array of user IDs to fetch
 * @returns {Promise<Array>} - Promise that resolves with all user data
 */

const userIds = [1, 2, 3, 4];

// Mock API function that returns a promise
function fetchApi(id) {
  // Hint: Use setTimeout to simulate API delay
  
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: `User ${id}` }), Math.random() * 1000);
  });
}

// Method 1: Using Promise.all (recommended)
async function fetchAllUsers(ids) {
  // Hint: Use Promise.all to execute all promises concurrently
  
  const promises = ids.map(id => fetchApi(id));
  return Promise.all(promises);
}

// Method 2: Using async/await with Promise.all
const fetchAllUsersAsync = async (ids) => {
  // Hint: Use await with Promise.all for cleaner async code
  
  const promises = ids.map(id => fetchApi(id));
  return await Promise.all(promises);
};

// Method 3: Sequential execution (not recommended for performance)
const fetchAllUsersSequential = async (ids) => {
  // Hint: Use for...of loop for sequential execution
  
  const results = [];
  for (const id of ids) {
    const user = await fetchApi(id);
    results.push(user);
  }
  return results;
};

// Method 4: With error handling
const fetchAllUsersWithErrorHandling = async (ids) => {
  // Hint: Use try-catch for error handling
  
  try {
    const promises = ids.map(id => fetchApi(id));
    return await Promise.all(promises);
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Test the implementations
console.log('Fetching all users...');

// Test Promise.all method
fetchAllUsers(userIds)
  .then(users => {
    console.log('Promise.all result:', users);
  })
  .catch(error => {
    console.error('Promise.all error:', error);
  });

// Test async/await method
fetchAllUsersAsync(userIds)
  .then(users => {
    console.log('Async/await result:', users);
  })
  .catch(error => {
    console.error('Async/await error:', error);
  });

// Test sequential method
fetchAllUsersSequential(userIds)
  .then(users => {
    console.log('Sequential result:', users);
  })
  .catch(error => {
    console.error('Sequential error:', error);
  });

// Expected output after a few seconds:
// [
//   { id: 1, name: 'User 1' },
//   { id: 2, name: 'User 2' },
//   { id: 3, name: 'User 3' },
//   { id: 4, name: 'User 4' }
// ]
