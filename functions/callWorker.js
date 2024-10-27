document.getElementById('fetchData').addEventListener('click', async () => {
    const responseDiv = document.getElementById('response');
    try {
        const response = await fetch('https://bio-dhg.pages.dev/'); // Ganti dengan endpoint Worker Anda
        const data = await response.json();
        responseDiv.innerText = JSON.stringify(data);
    } catch (error) {
        responseDiv.innerText = 'Error fetching data: ' + error;
    }
});
