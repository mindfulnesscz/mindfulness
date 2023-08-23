
# DEVELOPMENT ENVIRONMENT FOR mindfulnESS THEME FOR ESSTEYR.COM


There are some interesting and for development quite important notes:

## javascript global properties:

All the properties should be available after content loaded via window.{porperty name}

- **mindfulness_version**: Current version of the theme.
- **template_url**: url of the themes root for refference in javascript
- **el_header**: Header element
- **vw**: window width
- **vh**: window height
- **sc**: scroll value from top
- **is_homepage**: boolean true if what seen is homepage false otherwise.


## SQL queries to update posts in 3.0:

- **grey to gray:**<br/>
UPDATE ess_191021_posts SET post_content = REPLACE(post_content, 'grey', 'gray') WHERE post_content LIKE ('%grey%');

- **lighten-4 to lighten-2 in gray (color shifts in most keypage headers):**<br/>
UPDATE ess_191021_posts SET post_content = REPLACE(post_content, 'has-gray-lighten-4', 'has-gray-lighten-2') WHERE post_content LIKE ('%has-gray-lighten-4%');
  
