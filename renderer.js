document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
  })
  
  document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'System'
  })
  document.getElementById('fetch-data').addEventListener('click', async () => {
    const data = await window.database.getData();
    console.log('Data from database:', data);
    // Display the data in the UI as needed
  });