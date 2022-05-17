<?php
/*
 Cube navigation Banner Template
 The styling is transitional between v.2.0 to 2.1 and will 
 need some fixing in css classes naming conventions later.
*/
?>
<style>
  .banner-button * {
    transition: all .2s ease-out;
  }

  .banner-button:hover * {

    transform: scale(1.05);
    transform: translateY(50);
  }
</style>
<a class="banner-button" style="text-decoration: none" href="<?php echo home_url() . '/ess-events/lange-nacht-der-forschung-long-night-of-research'; ?>">
  <div class="row m-bot-zero" style="background-color: #001431;">
    <div class="col-xs-6 p-left-double flex alignitems-center wrap">
      <div class="py-sm-double">
        <?php
        // NOTE: Aligncenter class is used because of collision with materialize framework 
        //(center has !important flag there and overrides media querried css). 
        //Should be changed back to .center after getting rid of Materialize in v.2.1';
        ?>
        <h2 class="bold aligncenter left-sm" style="color: #ffe030;">Lange Nacht der Forschung</h2>
        <h2 class="aligncenter left-sm" style="color: #ffe030;">22/5/2022</h2>
      </div>
    </div>
    <div class="col-xs-6 p-hor-zero">
      <img loading="lazy" src="<?php echo home_url() . '/ess-media/home-banner/lange_nacht/langenacht_bkg_landscape_cut.webp'; ?>" alt="banner illustration" width="790" height="350" class="show-sm h-full cover" style="object-position: top left;" />
    </div>
  </div>
</a>