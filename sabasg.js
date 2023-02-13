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
</script>
