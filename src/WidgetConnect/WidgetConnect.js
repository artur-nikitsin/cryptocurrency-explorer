const WidgetConnect = () => {

    const widget = document.createElement('script');
    widget.src = "https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js";
    widget.async = true;
    document.body.appendChild(widget);

}
export default WidgetConnect;