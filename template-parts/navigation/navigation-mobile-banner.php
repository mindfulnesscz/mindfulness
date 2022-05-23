<?php
/*
 Classic Banenr for Homepage with responsive template
 with sm breakpoint going from portrait to landscape.
 The styling is transitional between v.2.0 to 2.1 and will 
 probably need some fixing in css classes naming conventions later.
*/
?>


<a class="hide-desktop" style="text-decoration: none" href="<?php echo home_url() . '/ess-events/lange-nacht-der-forschung-long-night-of-research'; ?>">

  <div class="row m-bot-zero" style="background-color: #001431;">

    <div class="col-xs-12 col-sm-6 p-hor-zero">
      <img loading="lazy" src="<?php echo home_url() . '/ess-media/home-banner/lange_nacht/langenacht_bkg_landscape_cut.webp'; ?>" alt="banner illustration" width="790" height="350" class="show-sm h-full cover" style="object-position: top left;" />
      <img loading="lazy" src="<?php echo home_url() . '/ess-media/home-banner/lange_nacht/langenacht_bkg_portrait_cut.webp'; ?>" alt="banner illustration" width="375" height="320" class="hide-sm" />
    </div>
    <div class="col-xs-12 col-sm-6 pl-sm-double first-sm flex alignitems-center wrap">
      <div class="p-top-zero p-bot-double py-sm-double">
        <?php

        // NOTE: Aligncenter class is used because of collision with materialize framework 
        //(center has !important flag there and overrides media querried css). 
        //Should be changed back to .center after getting rid of Materialize in v.2.1';
        ?>
        <h2 class="bold aligncenter left-sm" style="color: #ffe030;">Lange Nacht der Forschung</h2>
        <h2 class="aligncenter left-sm" style="color: #ffe030;">20/5/2022</h2>
      </div>
    </div>
  </div>
</a>