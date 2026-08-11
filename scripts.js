async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        
        if (!response.ok) {
            throw new Error(`Nu am găsit fișierul la calea: ${filePath}`);
        }
        
        const data = await response.text();
        document.getElementById(elementId).innerHTML = data;
        
    } catch (error) {
        console.error(error);
        document.getElementById(elementId).innerHTML = `<p style="color: #ff4655; font-size: 14px; margin: 10px 0;">Eroare: Nu pot încărca ${filePath}</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Am actualizat rutele catre folderul HTML cu majuscule 
    // si numele fisierului sociale.html
    loadComponent('profile-component', './HTML/profile.html');
    loadComponent('social-component', './HTML/sociale.html');
    loadComponent('affiliate-component', './HTML/affiliate.html');
});