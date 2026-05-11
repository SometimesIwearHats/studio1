/**
 * Announcements Configuration
 * 
 * This file manages the announcement bar content that appears at the top of the page.
 * To update announcements, modify the ANNOUNCEMENTS array below.
 * 
 * Each announcement object can have:
 * - text: The announcement message to display
 * - isActive: Boolean to show/hide the announcement (default: true)
 * - type: Optional - 'warning', 'info', 'success' (for styling purposes)
 */

const ANNOUNCEMENTS = [
    {
        text: "Holiday Hours: Studio 1 will be closed on select holidays. Please check back for updates.",
        isActive: true,
        type: "info"
    }
    // Add more announcements here as needed
    // {
    //     text: "New Year Special: Join now and get your first month at 50% off!",
    //     isActive: false,
    //     type: "success"
    // }
];

/**
 * Gets the active announcement(s)
 * Returns the first active announcement, or null if none are active
 */
function getActiveAnnouncement() {
    return ANNOUNCEMENTS.find(announcement => announcement.isActive) || null;
}

/**
 * Renders the announcement bar
 * This function is called by main.js
 */
function renderAnnouncementBar() {
    const announcement = getActiveAnnouncement();
    const announcementBar = document.getElementById('announcement-bar');
    
    if (!announcement || !announcementBar) {
        return;
    }
    
    // Set the announcement text
    const announcementText = announcementBar.querySelector('.announcement-text');
    if (announcementText) {
        announcementText.textContent = announcement.text;
    }
    
    // Add type class for styling if specified
    if (announcement.type) {
        announcementBar.classList.add(`announcement-${announcement.type}`);
    }
    
    // Show the announcement bar
    announcementBar.style.display = 'block';
}

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { renderAnnouncementBar, getActiveAnnouncement };
}
