<script>
Ecwid.OnPageLoaded.add(function(page) {
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
   
    ecwidMessages = {
    "BreadCrumbs.your_bag" : "My shopping cart",
    "Minicart.shopping_bag" : "Shopping Cart.",
    "ShoppingCartView.shopping_bag" : "My Shopping Cart,",
    "EmptyShoppingCartPanel.empty" : "My Shopping Cart is empty"
  };
   
   alert('SABASG');
   
});
</script>
