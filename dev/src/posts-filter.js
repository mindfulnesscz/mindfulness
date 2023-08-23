/* eslint-disable no-undef */
/*jshint esversion: 6 */

const HelperArray = [];

document.addEventListener( 'DOMContentLoaded', function () {
  filter_izer();
} );

/*** ISOTOPE FUNCTIONS -------------------------------------------- */


var FilterObject = new Object();
var QueryObject = new Object();
var $IsotopeInstance;
var FilterArray = [];

function initialize_filter_object ( holder_id, row_class, item_class ) {
  
  
  let holder_el = document.getElementById( holder_id );
  let rows = holder_el.querySelectorAll( '.'+row_class );

  //console.log(rows);
  
  for ( let n = 0; n < rows.length; n++ ) {
    
    let row = rows[n];
    let row_name = row.getAttribute( 'row' );
    
    FilterObject[row_name] = new Object();
        
    let items = row.querySelectorAll( '.'+item_class );
    
    for ( let i = 0; i < items.length; i++ ) {
      let item = items[i];
      let item_name = item.getAttribute( 'data-filter' );
      let item_link = item.querySelector( 'button' );

      FilterObject[row_name][item_name] = [];
      FilterObject[row_name][item_name]['filter-value'] = item_name;
      FilterObject[row_name][item_name]['filter-active'] = false;
      FilterObject[row_name][item_name]['filter-element'] = item;
      
      // add click event on link to start things moving
      item_link.addEventListener( 'click', ()=>{

        item_link.classList.toggle( 'filter-active' );

        // if the item is getting activated
        if ( item_link.classList.contains( 'filter-active' ) ) {
          FilterObject[row_name][item_name]['filter-active'] = true;

          // if the click button is ALL button
          if( item.getAttribute( 'data-filter' ) == 'all' ) {
            for( let n in FilterObject[row_name] ) {

              if( n != 'all' ) {
                FilterObject[row_name][n]['filter-active'] = false;
                console.log( FilterObject[row_name][n]['filter-element'].querySelector( 'button' ).classList );
                FilterObject[row_name][n]['filter-element'].querySelector( 'button' ).classList.remove( 'filter-active' );
              }
            }
          }
          else if ( FilterObject[row_name]['all']['filter-active'] == true ) {
            FilterObject[row_name]['all']['filter-active'] = false;
            FilterObject[row_name]['all']['filter-element'].querySelector( 'button' ).classList.remove( 'filter-active' );
          }
        }
        // else if the item is being de-activated
        else {
          FilterObject[row_name][item_name]['filter-active'] = false;
          let row_all_passive = true;
          for( let o in FilterObject[row_name] ) {
            if( FilterObject[row_name][o]['filter-active'] == true )
              row_all_passive = false;
          }
          if( row_all_passive ) {
            FilterObject[row_name]['all']['filter-active'] = true;
            FilterObject[row_name]['all']['filter-element'].querySelector( 'button' ).classList.add( 'filter-active' );
          }
        }
        build_isotope_query();
      } );

      if ( item_link.classList.contains( 'filter-active' ) )
        FilterObject[row_name][item_name]['filter-active'] = true;
      else
        FilterObject[row_name][item_name]['filter-active'] = false;
    }
  }

  console.log( FilterObject );
}


function build_isotope_query () {
  
  let query_string = '';
  FilterArray = [];
  
  
  // build filter array

  for( let key in FilterObject ) {
    
    if( !FilterObject[key]['all']['filter-active'] ) { // if all is not active
      
      let row = [];
      
      for( let item_key in FilterObject[key] ) {
        if( FilterObject[key][item_key]['filter-active'] == true )
          row.push( item_key );
      }
      if( row.length != 0 )
        FilterArray.push( row );
    
    }
    
  }

  //removes rows without any filter item active	
  for( let i=0;i<FilterArray.length; i++ ) {
    if ( FilterArray[i].length == 0 )
      FilterArray.splice( i,1 );
  }
  

  if( FilterArray.length != 0 ) { //if there is any filter row item activated at all..
    
    for( let a=0; a<FilterArray.length; a++ ) {
      HelperArray.push( 0 );
    }
    query_string += filter_loop( '' );
  }


  $IsotopeInstance.isotope( { filter: query_string } );

}
var c = 0;
function filter_loop ( ret ) {
  ret = '';
  for( let n=0; n<FilterArray.length; n++ ) {
    ret+='.'+FilterArray[n][HelperArray[n]];

    if( n+1==FilterArray.length ) {//last row
      
      var bool = crawl_up( n );
      if( bool ) {// go for another GO
        ret +=', ';
        ret += filter_loop( ret );
        return ret;
      }
      else {// END OF STORY
        c++;
        return ret;
        
      }
    }
  }	
}
function crawl_up ( n ) {

  if( HelperArray[n]+1 == FilterArray[n].length ) {
    HelperArray[n] = 0;

    if( n==0 ) {
      return false;
    }
    else{
      n = n-1;
      return crawl_up( n );
    }
  }
  else( HelperArray[n]++ );
  return true;
  
}

function filter_izer () {

  let $grid = jQuery( '.filtr-container' );

  let $items = $grid.find( '.filtr-item' );
  console.log( 'items ' );
  console.log( $items );

  $items.each( function () {
    let link = jQuery( this ).find( '.image-link' );
    let w = jQuery( link ).width();
    console.log( '--------------' );
    console.log( link );
    console.log( w );

    jQuery( this ).find( '.image-link' ).css( 'height', w/1.618 );
  } );

  initialize_filter_object( 'filter-holder', 'filter-row', 'filter-item' );
  
  $IsotopeInstance = jQuery( '.filtr-container' ).isotope( {
    filter: ''
  } );
  $IsotopeInstance.isotope( 'revealItemElements', $items );
}