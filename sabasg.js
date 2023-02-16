<script>
 
window.Ecwid.OnAPILoaded.add(function() {
    console.log("SABA SG API has loaded");
});

Ecwid.OnPageLoaded.add(function(page){
 
    document.getElementsByClassName('product-details-module product-details__subtitle').innerHTML = "~" ; 

   	setTimeout(function hidePrice() {
   		$(".ecwid-productBrowser-price").each(function(idx, el){
           if ($(el).text() == Ecwid.formatCurrency(0)) {
           		if(page.type == "CATEGORY") {
           			$(el).text('Call for price');
           			$('.ecwid-BuyNow-outOfStockLabel').hide();
           		}
           		else if (page.type == "PRODUCT") {
  					$(this).text('Call for price');
  					$('.ecwid-productBrowser-details-inStockLabel').show();
  					$('.ecwid-productBrowser-details-outOfStockLabel').hide();
  					$('.ecwid-AddToBagButton').hide();
  				}
            } 
            else {
            	$('.ecwid-productBrowser-details-outOfStockLabel').show();
  				$('.ecwid-AddToBagButton').show();
            }
     	});
   	}, 50);

});



</script>
