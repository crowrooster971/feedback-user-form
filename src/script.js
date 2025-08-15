const feedbackForm = document.getElementById('feedbackForm');
const feedbackList = document.getElementById('feedbackList');

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const category = document.getElementById('category').value;
    const feedback = document.getElementById('feedback').value;
    const feedbackItem = document.createElement('div');
    feedbackItem.innerHTML = `<strong>${category}:</strong> ${feedback}`;
    feedbackList.appendChild(feedbackItem);
    feedbackForm.reset();
});
