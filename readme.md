# Posts Block Lite

**Contributors:** troytempleman \
**Donate link:** https://www.buymeacoffee.com/troytempleman \
**Tags:** latest posts, recent posts, posts, block, carousel, accessible, responsive \
**Requires at least:** 6.0 \
**Tested up to:** 6.4.1 \
**Stable tag:** 0.1.1 \
**Requires PHP:** 7.4 \
**License:** GPLv2 or later \
**License URI:** https://www.gnu.org/licenses/gpl-2.0.html

A block that displays posts in a list, grid or carousel. 

## Description

Posts Block Lite adds a Posts block to the block editor inserter that can be added to display posts in a list, grid or carousel.

Upgrade to Pro at [https://troytempleman.com/wordpress/blocks/posts-block/](https://troytempleman.com/wordpress/blocks/posts-block/).

### Features

* Responsive
* Settings
  * Block alignment
  * Layout
    * List
    * Grid
    * Carousel   
  * Text alignment
  * Post type **[Pro]** 
  * Number of posts
  * Order by
  * Order
  * Number of columns
  * Column gutter width 
  * Display featured image
  * Display title
  * Add heading to title
  * Title heading
  * Display author
  * Display date
  * Display excerpt
  * Maximum number of words in excerpt
  * Display content
  * Display link
  * Link text
  * Carousel
    * Display dots
    * Display arrows
    * Infinite
    * Speed
    * Slides to show
    * Slides to scroll
* Styles
  * Color
     * Text
     * Background
     * Link
     * Carousel dots **[Pro]** 
     * Carousel dots hover **[Pro]** 
     * Carousel arrows **[Pro]** 
     * Carousel arrows hover **[Pro]** 
  * Typography
     * Font family
     * Font size
     * Appearance
     * Line height
     * Letter spacing
     * Text decoration
     * Letter case
  * Dimensions
     * Padding
     * Margin
     * List post padding **[Pro]**
     * List post margin **[Pro]**
     * Grid post padding **[Pro]**  
     * Grid post margin **[Pro]**     
     * Carousel post padding **[Pro]**
     * Carousel post margin **[Pro]**
     * Featured image padding **[Pro]**
     * Featured image margin **[Pro]**
     * Title padding **[Pro]**
     * Title margin **[Pro]**
     * Meta padding **[Pro]**
     * Meta margin **[Pro]**
     * Excerpt padding **[Pro]**
     * Excerpt margin **[Pro]**
     * Content padding **[Pro]**
     * Content margin **[Pro]**
     * Link padding **[Pro]**
     * Link margin **[Pro]**
* Variations **[Pro]** 
  * List **[Pro]** 
  * Grid **[Pro]** 
  * Carousel **[Pro]** 
  
### Demo

[https://troytempleman.com/wordpress/blocks/posts-block/](https://troytempleman.com/wordpress/blocks/posts-block/)

### HTML

Posts Block Lite will output a Posts block with the following HTML structure:

    <ul class="wp-block-tt-posts wp-block-tt-posts-6">
        <li class="wp-block-tt-posts-post">
            <div class="wp-block-tt-posts-post-featured-image”>
                <img class=“wp-block-tt-posts-post-thumbnail” src=“#”>
            </div>
            <h3 class="wp-block-tt-posts-post-title">
                <a href=“#”>Title</a>
            </h3>
            <div class="wp-block-tt-posts-post-meta">
                <span class="wp-block-tt-posts-post-meta-date">Posted <time class="wp-block-tt-posts-post-meta-date-time" datetime="2023-11-01T12:00:00+00:00">November 1, 2023</time></span>
            </div>
            <div class="wp-block-tt-posts-post-excerpt">Excerpt</div>
            <a class="wp-block-tt-posts-post-link" href=“#”>Read more</a>
        </li>
    </ul>
	
## Support

If you need help with Posts Block Lite, please submit a ticket on the [Support]https://wordpress.org/support/plugin/posts-block-lite) forum.

## Donate

If you like Posts Block Lite and would like to support it's future development, how about [buying me a coffee](https://www.buymeacoffee.com/troytempleman)?

## Contribute

If you would like to contribute to the development of Posts Block Lite, the repository is located on [GitHub](https://github.com/troytempleman/posts-block-lite).

## License

Posts Block Lite is released under the [GNU General Public License, version 2 (GPLv2)](https://www.gnu.org/licenses/gpl-2.0.html). 

## Requirements

* WordPress 6.0 or greater
* PHP version 7.4 or greater
* MySQL version 5.7 or greater or MariaDB version 10.3 or greater.

## Installation

Posts Block Lite can be installed in one of the following four ways:

### Automatic

To install with the built-in plugin installer:

1. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
2. On the **Dashboard** page, in the left menu, click **Plugins**.
3. On the **Plugins** page, click **Add New Plugin**.
4. On the **Add Plugins** page, in the **Search plugins...** field, type **Posts Block Lite**.
5. In the **Search Results**, locate **Posts Block Lite**, click **Install Now** and **Activate**.

### Upload

To install with a .zip file:

1. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
2. On the **Dashboard** page, in the left menu, click **Plugins**.
3. On the **Plugins** page, click **Add New Plugin**.
3. On the **Add Plugins** page, click **Upload Plugin**.
4. Click **Choose File**, locate the **.zip file** and click **Open**. 
5. Click **Install Now**.
6. On the **Installing Plugin from uploaded file** page, click **Activate**.

### Manual

To install with a SFTP client:

1. If you have a **.zip file**, unzip it with archiving software such as [WinZip](https://www.winzip.com/) or [Archive Utility](https://apps.apple.com/us/app/archive-utility/id1409613331).
2. In a **SFTP client** such as [WinSCP](https://winscp.net/) or [FileZilla](https://filezilla-project.org/), connect to your WordPress site directory on your server.
3. In the **unzipped files**, copy the **posts-block-lite** folder and paste on your server, in your site’s **wp-content/plugins** folder.
4. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
5. On the **Dashboard** page, in the left menu, click **Plugins**.
6. On the **Plugins** page, locate **Posts Block Lite** and click **Activate**.

### Theme

To install in your theme instead of a plugin:

1. If you have a **.zip file**, unzip it with archiving software such as [WinZip](https://www.winzip.com/) or [Archive Utility](https://apps.apple.com/us/app/archive-utility/id1409613331).

2. In the **unzipped files**, copy the **posts-block-lite** folder and paste in your site’s theme folder, such as **wp-content/themes/your-theme/inc/posts-block-lite/**, where **your-theme** is your theme folder.


2. In the **unzipped files**, copy the **posts-block-lite** folder and paste in your site’s theme folder, such as **wp-content/themes/your-theme/inc/posts-block-lite/**, where **your-theme** is your theme folder.
3. In a **code editor** such as [Visual Studio Code](https://code.visualstudio.com/) or [Notepad++](https://notepad-plus-plus.org/), open your theme's **functions.php** file.
4. In your **functions.php** file, add the path from Step 2, such as **require get_stylesheet_directory() . '/inc/posts-block-lite/posts-block-lite.php';**.
5. Save and close your **functions.php** file.

## FAQ

### What are posts?

Posts are dynamic and time-based content typically used for blogs, news, events, etc. Posts are usually listed in reverse chronological order, can be tagged, categorized and commented on.

### How do I install Posts Block Lite?

Please see **Installation** section.

### How do I add a Posts block?

1. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
2. On the **Dashboard** page, in the left menu, click **Posts** or **Pages**.
3. On the **Posts** or **Pages** page, either click **Add New**, search for and/or click the desired post or page title.
4. In the **block editor**, either:
   * Click the block inserter **+** icon in the top toolbar
   * Click the block inserter **+** icon to the right of an empty block, or
   * Click the block inserter **+** icon between blocks
5. In the block inserter pop-up modal window, search for and/or click **Posts** to add a Posts block. 

### How do I edit a Posts block?

1. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
2. On the **Dashboard** page, in the left menu, click **Posts** or **Pages**.
3. On the **Posts** or **Pages** page, search for and/or click the desired post or page title.
4. In the **block editor**, click the desired **Posts** block.
5. In the block toolbar above, select the desired block alignment, layout, text formatting and/or other options. 
6. In the settings sidebar, in the **Block** tab:
   * In the **Settings** tab, select the desired settings. 	
   * In the **Styles** tab, select the desired **Color**, **Typography** and/or **Dimensions** settings.  

### How do I setup a development environment?

1. Install WordPress on a local server such as [Local](https://localwp.com/), [Docker](https://www.docker.com/), [MAMP](https://www.mamp.info/) or [XAMPP](https://www.apachefriends.org/).
2. To install Posts Block Lite on your local site, see **Installation** section.
3. If node.js is not already installed locally, go to [https://nodejs.org/](https://nodejs.org/) to install.
4. In a **Command Line Interface (CLI)** such as Command Prompt or Terminal, navigate to the **posts-block-lite** folder. For example, **cd localhost/your-site/wp-content/plugins/posts-block-lite**.
5. To install project dependencies, type **npm install**.
6. In the **posts-block-lite** folder, edit the desired file or files.
7. To create or update the production **build** directory, type **npm run build**. For other commands, type **npm run**.

## Screenshots

1. Posts block added from the block inserter.
2. Posts block variations **[Pro]**.
3. Posts block with default settings.
4. Posts block with list view settings.
5. Posts block with grid view settings.
6. Posts block with carousel settings.
7. Posts block on the front end.

## Changelog

### 0.1.1 - May 20, 2024 

* Added: Code to prevent direct file access in `build/render.php` and `src/render.php`.
* Added: Security improvement by adding `wp_kses_post` filter to `$block_content` in build/render.php` and `src/render.php`.
* Changed: Function names from `posts_block_*` to `posts_block_lite_*` in `posts-block-lite.php`.
* Changed: Text domains from `posts-block-lite` to `posts-block`.
* Removed: `src/slick/config.rb`
* Updated: Version in `build/block.json` and `src/block.json`.
* Updated: Version in `package.json` and `posts-block-lite.php`.
* Updated: Stable tag and changelog in `readme.md` and `readme.txt`.

### 0.1.0 - November 15, 2023

* Initial release

## Credits

* [WordPress/gutenberg/packages/block-library/src/latest-posts on GitHub](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src/latest-posts)
* [Slick](https://kenwheeler.github.io/slick/)
