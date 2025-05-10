import React, { useState, useEffect } from 'react';

const UserProfile = ({ user, setUser }) => {
  const [editableBio, setEditableBio] = useState(user?.bio || '');
  const [editing, setEditing] = useState(false);
  const [theme, setTheme] = useState(user?.theme || 'light');

  useEffect(() => {
    setEditableBio(user?.bio || '');
    setTheme(user?.theme || 'light');
  }, [user]);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      bio: editableBio,
      theme: theme,
    };

    setUser(updatedUser);
    localStorage.setItem(updatedUser.username, JSON.stringify(updatedUser));
    setEditing(false);
  };

  const calculateLevel = () => {
    const tradeCount = user?.trades?.length || 0;
    if (tradeCount > 50) return 'Expert';
    if (tradeCount > 20) return 'Intermediate';
    return 'Beginner';
  };

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div className={`user-profile ${theme}`} style={{ padding: '20px' }}>
      <h2>My Profile</h2>


      <h3>{user.name || user.username}</h3>
      <p><strong>Joined:</strong> {user.joinDate || 'Unknown'}</p>
      <p><strong>Level:</strong> {calculateLevel()}</p>

      {editing ? (
        <>
          <textarea
            value={editableBio}
            onChange={(e) => setEditableBio(e.target.value)}
            placeholder="Write something about yourself..."
          />
          
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p><strong>Bio:</strong> {user.bio || 'No bio yet.'}</p>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </>
      )}

      <h4>Trade History</h4>
      {user.trades && user.trades.length > 0 ? (
        <table>
          <thead>
            <tr><th>Symbol</th><th>Action</th><th>Qty</th><th>Price</th><th>Date</th></tr>
          </thead>
          <tbody>
            {user.trades.map((trade, index) => (
              <tr key={index}>
                <td>{trade.symbol}</td>
                <td>{trade.action}</td>
                <td>{trade.quantity}</td>
                <td>${trade.price}</td>
                <td>{trade.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Shows your Trade History.</p>
      )}
    </div>
  );
};

export default UserProfile;
