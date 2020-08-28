const labels = document.querySelectorAll('.app-label');
const grids = document.querySelectorAll('.apps-grid');

let activeApp = grids[0];
let activeLabel = labels[0];

function setActiveCategory() {
  const hashValue = location.hash.split('#')[1];

  grids.forEach((grid) => {
    if (grid.id === hashValue) {
      activeApp = grid;
    }
  });

  setActiveLabel(activeApp.id);
  animateApps();

  location.hash = activeApp.id;
}

function setActiveLabel(appId) {
  labels.forEach((label) => {
    label.classList.remove('active-app');

    const labelLink = label.querySelector(`a[href="#${appId}"]`);

    if (labelLink) {
      activeLabel = label;
    }
  });

  activeLabel.classList.add('active-app');
}

function animateApps() {
  const apps = activeApp.querySelectorAll('.app');

  let delay = 0;
  let step = 500;

  apps.forEach((app) => {
    app.style.animationDelay = `${delay}ms`;
    delay += step;
  });
}

window.addEventListener('popstate', (e) => {
  setActiveCategory();
});

setActiveCategory();
