export const authDB = {
  login: (email, password) => {
    // 1. Get the list of users from local storage
    const users = JSON.parse(localStorage.getItem('secops_users') || '[]');
    
    // 2. Look for a match
    const user = users.find(u => u.email === email && u.password === password);
    
    // 3. Error handling
    if (!user) {
      throw new Error("Access Denied: Invalid credentials.");
    }
    
    // 4. SAVE THE ROLE (Important for different dashboards!)
    // We include user.role so the Dashboard can read it later
    const sessionData = { 
      email: user.email, 
      role: user.role || 'user', // Default to 'user' if no role is found
      loggedIn: true 
    };

    localStorage.setItem('current_user', JSON.stringify(sessionData));
    return user;
  },

  logout: () => {
    localStorage.removeItem('current_user');
  }
};