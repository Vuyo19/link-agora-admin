import React from 'react';


const SettingsPage = () => {
  const dummySettings = [
    { id: 1, category: "General", label: "Enable Notifications", value: true },
    { id: 2, category: "Display", label: "Dark Mode", value: false },
    { id: 3, category: "Security", label: "Two-Factor Authentication", value: true },
  ];

  return (
    <div className='settings'>
      <h2>Settings</h2>
      <div>
        <h3>Preferences</h3>
        <ul>
          {dummySettings.map(setting => (
            <li key={setting.id}>
              <strong>{setting.label}</strong> - Category: {setting.category} - Value: {setting.value ? "Enabled" : "Disabled"}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/* Other settings-related components or widgets can be added here */}
      </div>
    </div>
  );
};

export default SettingsPage;
