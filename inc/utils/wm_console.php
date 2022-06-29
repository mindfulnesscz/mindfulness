<?php
// ----------------------- CONSOLE -------------------------

/**
 * Adds message to debug
 * @since 3.0
 * @param String $msg message to display
 * @return void
 */
function wm_console($msg)
{
  global $MindationConsoleArray;
  array_push($MindationConsoleArray, $msg);
}

/**
 * Prints the debug console if Wordpress is in debug mode and the console is not empty 
 * The console is currently called from footer.php
 * @since 1.1.6
 * @return void
 */
function wm_print_console()
{

  global $MindationConsoleArray;

  if (defined('WP_DEBUG') && true === WP_DEBUG && !empty($MindationConsoleArray)) {
    ob_start();

?>
    <div id="wm-debug-console">
      <div id="wm-debug-console-container">
        <ul>
          <?php
          foreach ($MindationConsoleArray as $msg) {
          ?>
            <li>
              <?php echo $msg; ?>
            </li>
          <?php
          }
          ?>
        </ul>
      </div>
    </div>
<?php

    ob_end_flush();
  }
}


?>