function setupRouting(id, route) {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', function() {
            window.location.href = route;
        });
    }
    // Comment out or remove the warning line
    // console.warn(`Element with id "${id}" not found.`);
}

// Usage
setupRouting('fastRead', 'fastRead.html');
setupRouting('mindGames', 'mindGames.html');
setupRouting('morseCode', 'Morsecode.html');
setupRouting('fastReadEx001', 'fastReadEx001.html');
