class addElevatorEffect {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
    this.init();
  }

  init() {
    this.elements.forEach(element => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('text-wrapper');
      wrapper.style.width = `${element.offsetWidth}px`;
      wrapper.style.height = `${element.offsetHeight}px`;
      element.parentNode.insertBefore(wrapper, element);
      wrapper.appendChild(element);

      const duplicate = element.cloneNode(true);
      duplicate.classList.add('text-duplicate');
      wrapper.appendChild(duplicate);

      wrapper.addEventListener('mouseenter', () => {
        const hoverColor = window.getComputedStyle(element).color;
        duplicate.style.color = hoverColor;

        element.style.transform = 'translateY(-100%)';
        element.style.opacity = '0';
        duplicate.style.transform = 'translateY(0)';
        duplicate.style.opacity = '1';
      });

      wrapper.addEventListener('mouseleave', () => {
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
        duplicate.style.transform = 'translateY(100%)';
        duplicate.style.opacity = '0';
      });
    });
  }
}

export default addElevatorEffect;
