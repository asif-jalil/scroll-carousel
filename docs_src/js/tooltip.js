const tooltipInit = () => {
  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', function () {
      tooltip.setAttribute('data-tooltip', 'Copied');
    });
    tooltip.addEventListener('mouseleave', function () {
      tooltip.setAttribute('data-tooltip', 'Copy');
    });
  });
};

export default tooltipInit;
