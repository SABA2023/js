<script>
   Ecwid.OnAPILoaded.add(function() {
    console.log("Storefront JS API has loaded");
});

   Ecwid.OnPageLoaded.add(function(page) {
    if (page.type == "CART") {
      // Print Page Type
       console.log("Page Type: " + page.type);
    }
});

const collection = document.getElementsByClassName("details-product-price__value ec-price-item notranslate");
collection[0].innerHTML = "Singapore Dollar";

</script>
