const ALERT_SHOW_TIME = 4000;


const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 401;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.bottom = 0;
  alertContainer.style.backgroundColor = 'black';
  alertContainer.style.opacity = '0.5';

  const messageBlock = document.createElement('div');
  messageBlock.style.zIndex = 402;
  messageBlock.style.width = '80%';
  messageBlock.style.height = 'max-content';
  messageBlock.style.position = 'fixed';
  messageBlock.style.left = 0;
  messageBlock.style.top = 0;
  messageBlock.style.right = 0;
  messageBlock.style.bottom = 0;
  messageBlock.style.margin = 'auto auto';
  messageBlock.style.padding = '10px 5px';
  messageBlock.style.fontSize = '30px';
  messageBlock.style.textAlign = 'center';
  messageBlock.style.backgroundColor = 'white';
  messageBlock.style.borderRadius = '10px';

  messageBlock.textContent = message;

  document.body.append(alertContainer, messageBlock);

  setTimeout(() => {
    alertContainer.remove();
    messageBlock.remove();
  }, ALERT_SHOW_TIME);

  window.addEventListener('click', () => {
    alertContainer.remove();
    messageBlock.remove();
  }, { once: true });
};


export { showAlert };

