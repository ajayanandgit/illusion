


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Nette-addDynamic/www/js/nette.ajax.js at master · HosipLan/Nette-addDynamic</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe17.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="3052686" name="octolytics-actor-id" /><meta content="d4nci" name="octolytics-actor-login" /><meta content="37d7494ceb2857ded6dbe7da918b5f2e8114edb6a091fb9b5c08f5c8a4fb4165" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="bPBUMyQx5cJL3b3WP7XELS+DFvY2Ozt0+WDNcO7bJDA=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-8921d913c104b05dbca482140b50a4899d808da0.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-07b5a2f9ead69e413a4a39b8bf0414aba066b0aa.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-e8054ad804a1cf9e9849130fee5a4a5487b663ed.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-4e41d7724d8be5d39a03f8e6bf2d50a4414b9649.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="2e2c3f3588b9b3a98ed45f34834b2e61">

        <link data-pjax-transient rel='permalink' href='/HosipLan/Nette-addDynamic/blob/19f1fb8f7d4e1e3f4163b5890ecbdb495cc84665/www/js/nette.ajax.js'>
  <meta property="og:title" content="Nette-addDynamic"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/HosipLan/Nette-addDynamic"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="Nette-addDynamic - [READ-ONLY]"/>

  <meta name="description" content="Nette-addDynamic - [READ-ONLY]" />

  <meta content="158625" name="octolytics-dimension-user_id" /><meta content="HosipLan" name="octolytics-dimension-user_login" /><meta content="1928396" name="octolytics-dimension-repository_id" /><meta content="HosipLan/Nette-addDynamic" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1928396" name="octolytics-dimension-repository_network_root_id" /><meta content="HosipLan/Nette-addDynamic" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/HosipLan/Nette-addDynamic/commits/master.atom" rel="alternate" title="Recent Commits to Nette-addDynamic:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="d4nci"
      data-repo="HosipLan/Nette-addDynamic"
      data-branch="master"
      data-sha="077b052ccea75758412f06fdc22e839d0b08440f"
  >

    <input type="hidden" name="nwo" value="HosipLan/Nette-addDynamic" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/d4nci" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/39bed7cf3043dbac598f4b0f31e6d45b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> d4nci
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            aria-label="Account settings "
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="HosipLan/Nette-addDynamic">This repository</span>
    </li>
    <li>
      <a href="/HosipLan/Nette-addDynamic/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="bPBUMyQx5cJL3b3WP7XELS+DFvY2Ozt0+WDNcO7bJDA=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1928396" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/HosipLan/Nette-addDynamic/watchers">
          0
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/HosipLan/Nette-addDynamic/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/HosipLan/Nette-addDynamic/star" class="minibutton with-count js-toggler-target star-button unstarred upwards " title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/HosipLan/Nette-addDynamic/stargazers">4</a>
</div>

  </li>


        <li>
          <a href="/HosipLan/Nette-addDynamic/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/HosipLan/Nette-addDynamic/network" class="social-count">3</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/HosipLan" class="url fn" itemprop="url" rel="author"><span itemprop="title">HosipLan</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/HosipLan/Nette-addDynamic" class="js-current-repository js-repo-home-link">Nette-addDynamic</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/HosipLan/Nette-addDynamic" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /HosipLan/Nette-addDynamic">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


      <li class="tooltipped leftwards" title="Pull Requests"><a href="/HosipLan/Nette-addDynamic/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /HosipLan/Nette-addDynamic/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>




    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/HosipLan/Nette-addDynamic/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /HosipLan/Nette-addDynamic/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/HosipLan/Nette-addDynamic/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /HosipLan/Nette-addDynamic/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/HosipLan/Nette-addDynamic/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /HosipLan/Nette-addDynamic/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/HosipLan/Nette-addDynamic.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/HosipLan/Nette-addDynamic.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:HosipLan/Nette-addDynamic.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:HosipLan/Nette-addDynamic.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/HosipLan/Nette-addDynamic" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/HosipLan/Nette-addDynamic" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>


  <a href="github-windows://openRepo/https://github.com/HosipLan/Nette-addDynamic" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/HosipLan/Nette-addDynamic/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:6a3ec1621c2608d3afb8228a38a1408f -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:6a3ec1621c2608d3afb8228a38a1408f -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/HosipLan/Nette-addDynamic/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/HosipLan/Nette-addDynamic/blob/master/www/js/nette.ajax.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/HosipLan/Nette-addDynamic" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Nette-addDynamic</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/HosipLan/Nette-addDynamic/tree/master/www" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">www</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/HosipLan/Nette-addDynamic/tree/master/www/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">nette.ajax.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="www/js/nette.ajax.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/07ac3a80e69a6252140feb81b89cbb08?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/HosipLan" rel="author">HosipLan</a></span>
    <time class="js-relative-date" datetime="2012-08-31T16:41:22-07:00" title="2012-08-31 16:41:22">August 31, 2012</time>
    <div class="commit-title">
        <a href="/HosipLan/Nette-addDynamic/commit/7c70b2aebe515c034106c0eab9c6bf3c362ae438" class="message" data-pjax="true" title="Working replicator">Working replicator</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/07ac3a80e69a6252140feb81b89cbb08?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/HosipLan">HosipLan</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>437 lines (396 sloc)</span>
        <span>11.453 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/HosipLan/Nette-addDynamic/edit/master/www/js/nette.ajax.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/HosipLan/Nette-addDynamic/raw/master/www/js/nette.ajax.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/HosipLan/Nette-addDynamic/blame/master/www/js/nette.ajax.js" class="button minibutton ">Blame</a>
          <a href="/HosipLan/Nette-addDynamic/commits/master/www/js/nette.ajax.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/HosipLan/Nette-addDynamic/delete/master/www/js/nette.ajax.js"
               title="Fork this project and delete file" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * AJAX Nette Framework plugin for jQuery</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * @copyright Copyright (c) 2009, 2010 Jan Marek</span></div><div class='line' id='LC5'><span class="cm"> * @copyright Copyright (c) 2009, 2010 David Grudl</span></div><div class='line' id='LC6'><span class="cm"> * @copyright Copyright (c) 2012 Vojtěch Dobeš</span></div><div class='line' id='LC7'><span class="cm"> * @license MIT</span></div><div class='line' id='LC8'><span class="cm"> */</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">$</span> <span class="o">!=</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC13'>	<span class="k">return</span> <span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;nette.ajax.js: jQuery is missing, load it please&#39;</span><span class="p">);</span></div><div class='line' id='LC14'><span class="p">}</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'><span class="kd">var</span> <span class="nx">nette</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC17'>	<span class="kd">var</span> <span class="nx">inner</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC18'>		<span class="nx">self</span><span class="o">:</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC19'>		<span class="nx">initialized</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC20'>		<span class="nx">contexts</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC21'>		<span class="nx">on</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC22'>			<span class="nx">init</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC23'>			<span class="nx">load</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC24'>			<span class="nx">before</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC25'>			<span class="nx">start</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC26'>			<span class="nx">success</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC27'>			<span class="nx">complete</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC28'>			<span class="nx">error</span><span class="o">:</span> <span class="p">{}</span></div><div class='line' id='LC29'>		<span class="p">},</span></div><div class='line' id='LC30'>		<span class="nx">fire</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC31'>			<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC32'>			<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC33'>			<span class="kd">var</span> <span class="nx">props</span> <span class="o">=</span> <span class="nx">args</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></div><div class='line' id='LC34'>			<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">props</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="nx">props</span> <span class="o">:</span> <span class="nx">props</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC35'>			<span class="kd">var</span> <span class="nx">off</span> <span class="o">=</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">props</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="nx">props</span><span class="p">.</span><span class="nx">off</span> <span class="o">||</span> <span class="p">{}</span> <span class="o">:</span> <span class="p">{};</span></div><div class='line' id='LC36'>			<span class="nx">args</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">inner</span><span class="p">.</span><span class="nx">self</span><span class="p">);</span></div><div class='line' id='LC37'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">inner</span><span class="p">.</span><span class="nx">on</span><span class="p">[</span><span class="nx">name</span><span class="p">],</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">reaction</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC38'>				<span class="k">if</span> <span class="p">(</span><span class="nx">reaction</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">off</span><span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC39'>				<span class="kd">var</span> <span class="nx">temp</span> <span class="o">=</span> <span class="nx">reaction</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">inner</span><span class="p">.</span><span class="nx">contexts</span><span class="p">[</span><span class="nx">index</span><span class="p">],</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC40'>				<span class="k">return</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">(</span><span class="nx">temp</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nx">temp</span><span class="p">);</span></div><div class='line' id='LC41'>			<span class="p">});</span></div><div class='line' id='LC42'>			<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC43'>		<span class="p">},</span></div><div class='line' id='LC44'>		<span class="nx">requestHandler</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">inner</span><span class="p">.</span><span class="nx">self</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({},</span> <span class="k">this</span><span class="p">,</span> <span class="nx">e</span><span class="p">))</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC46'>		<span class="p">},</span></div><div class='line' id='LC47'>		<span class="nx">ext</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">callbacks</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>			<span class="k">while</span> <span class="p">(</span><span class="o">!</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>				<span class="nx">name</span> <span class="o">=</span> <span class="s1">&#39;ext_&#39;</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">();</span></div><div class='line' id='LC50'>				<span class="k">if</span> <span class="p">(</span><span class="nx">inner</span><span class="p">.</span><span class="nx">context</span><span class="p">[</span><span class="nx">name</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC51'>					<span class="nx">name</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC52'>				<span class="p">}</span></div><div class='line' id='LC53'>			<span class="p">}</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">callbacks</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC56'>				<span class="nx">inner</span><span class="p">.</span><span class="nx">on</span><span class="p">[</span><span class="nx">event</span><span class="p">][</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC57'>			<span class="p">});</span></div><div class='line' id='LC58'>			<span class="nx">inner</span><span class="p">.</span><span class="nx">contexts</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">context</span> <span class="o">?</span> <span class="nx">context</span> <span class="o">:</span> <span class="p">{},</span> <span class="p">{</span></div><div class='line' id='LC59'>				<span class="nx">name</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC60'>					<span class="k">return</span> <span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC61'>				<span class="p">},</span></div><div class='line' id='LC62'>				<span class="nx">ext</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">force</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'>					<span class="kd">var</span> <span class="nx">ext</span> <span class="o">=</span> <span class="nx">inner</span><span class="p">.</span><span class="nx">contexts</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC64'>					<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">ext</span> <span class="o">&amp;&amp;</span> <span class="nx">force</span><span class="p">)</span> <span class="k">throw</span> <span class="s2">&quot;Extension &#39;&quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">()</span> <span class="o">+</span> <span class="s2">&quot;&#39; depends on disabled extension &#39;&quot;</span> <span class="o">+</span> <span class="nx">name</span> <span class="o">+</span> <span class="s2">&quot;&#39;.&quot;</span><span class="p">;</span></div><div class='line' id='LC65'>					<span class="k">return</span> <span class="nx">ext</span><span class="p">;</span></div><div class='line' id='LC66'>				<span class="p">}</span></div><div class='line' id='LC67'>			<span class="p">});</span></div><div class='line' id='LC68'>		<span class="p">}</span></div><div class='line' id='LC69'>	<span class="p">};</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>	<span class="cm">/**</span></div><div class='line' id='LC72'><span class="cm">	 * Allows manipulation with extensions.</span></div><div class='line' id='LC73'><span class="cm">	 * When called with 1. argument only, it returns extension with given name.</span></div><div class='line' id='LC74'><span class="cm">	 * When called with 2. argument equal to false, it removes extension entirely.</span></div><div class='line' id='LC75'><span class="cm">	 * When called with 2. argument equal to hash of event callbacks, it adds new extension.</span></div><div class='line' id='LC76'><span class="cm">	 *</span></div><div class='line' id='LC77'><span class="cm">	 * @param  {string} Name of extension</span></div><div class='line' id='LC78'><span class="cm">	 * @param  {bool|object|null} Set of callbacks for any events OR false for removing extension.</span></div><div class='line' id='LC79'><span class="cm">	 * @param  {object|null} Context for added extension</span></div><div class='line' id='LC80'><span class="cm">	 * @return {$.nette|object} Provides a fluent interface OR returns extensions with given name</span></div><div class='line' id='LC81'><span class="cm">	 */</span></div><div class='line' id='LC82'>	<span class="k">this</span><span class="p">.</span><span class="nx">ext</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">callbacks</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>		<span class="k">if</span> <span class="p">(</span><span class="nx">callbacks</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC84'>			<span class="k">return</span> <span class="nx">inner</span><span class="p">.</span><span class="nx">contexts</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC85'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">callbacks</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC86'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">([</span><span class="s1">&#39;init&#39;</span><span class="p">,</span> <span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="s1">&#39;before&#39;</span><span class="p">,</span> <span class="s1">&#39;start&#39;</span><span class="p">,</span> <span class="s1">&#39;success&#39;</span><span class="p">,</span> <span class="s1">&#39;complete&#39;</span><span class="p">,</span> <span class="s1">&#39;error&#39;</span><span class="p">],</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC87'>				<span class="nx">inner</span><span class="p">.</span><span class="nx">on</span><span class="p">[</span><span class="nx">event</span><span class="p">][</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC88'>			<span class="p">});</span></div><div class='line' id='LC89'>			<span class="nx">inner</span><span class="p">.</span><span class="nx">contexts</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC90'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">inner</span><span class="p">.</span><span class="nx">contexts</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>			<span class="k">throw</span> <span class="s1">&#39;Cannot override already registered nette-ajax extension.&#39;</span><span class="p">;</span></div><div class='line' id='LC92'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC93'>			<span class="nx">inner</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">callbacks</span><span class="p">);</span></div><div class='line' id='LC94'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC95'>			<span class="nx">inner</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="nx">callbacks</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC96'>		<span class="p">}</span></div><div class='line' id='LC97'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC98'>	<span class="p">};</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>	<span class="cm">/**</span></div><div class='line' id='LC101'><span class="cm">	 * Initializes the plugin:</span></div><div class='line' id='LC102'><span class="cm">	 * - fires &#39;init&#39; event, then &#39;load&#39; event</span></div><div class='line' id='LC103'><span class="cm">	 * - when called with any arguments, it will override default &#39;init&#39; extension</span></div><div class='line' id='LC104'><span class="cm">	 *   with provided callbacks</span></div><div class='line' id='LC105'><span class="cm">	 *</span></div><div class='line' id='LC106'><span class="cm">	 * @param  {function|object|null} Callback for &#39;load&#39; event or entire set of callbacks for any events</span></div><div class='line' id='LC107'><span class="cm">	 * @param  {object|null} Context provided for callbacks in first argument</span></div><div class='line' id='LC108'><span class="cm">	 * @return {$.nette} Provides a fluent interface</span></div><div class='line' id='LC109'><span class="cm">	 */</span></div><div class='line' id='LC110'>	<span class="k">this</span><span class="p">.</span><span class="nx">init</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">load</span><span class="p">,</span> <span class="nx">loadContext</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>		<span class="k">if</span> <span class="p">(</span><span class="nx">inner</span><span class="p">.</span><span class="nx">initialized</span><span class="p">)</span> <span class="k">throw</span> <span class="s1">&#39;Cannot initialize nette-ajax twice.&#39;</span><span class="p">;</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">load</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC114'>			<span class="k">this</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;init&#39;</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC115'>			<span class="k">this</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;init&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC116'>				<span class="nx">load</span><span class="o">:</span> <span class="nx">load</span></div><div class='line' id='LC117'>			<span class="p">},</span> <span class="nx">loadContext</span><span class="p">);</span></div><div class='line' id='LC118'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">load</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC119'>			<span class="k">this</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;init&#39;</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC120'>			<span class="k">this</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;init&#39;</span><span class="p">,</span> <span class="nx">load</span><span class="p">,</span> <span class="nx">loadContext</span><span class="p">);</span></div><div class='line' id='LC121'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">load</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC122'>			<span class="k">throw</span> <span class="s1">&#39;Argument of init() can be function or function-hash only.&#39;</span><span class="p">;</span></div><div class='line' id='LC123'>		<span class="p">}</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>		<span class="nx">inner</span><span class="p">.</span><span class="nx">initialized</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>		<span class="nx">inner</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;init&#39;</span><span class="p">);</span></div><div class='line' id='LC128'>		<span class="k">this</span><span class="p">.</span><span class="nx">load</span><span class="p">();</span></div><div class='line' id='LC129'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC130'>	<span class="p">};</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'>	<span class="cm">/**</span></div><div class='line' id='LC133'><span class="cm">	 * Fires &#39;load&#39; event</span></div><div class='line' id='LC134'><span class="cm">	 *</span></div><div class='line' id='LC135'><span class="cm">	 * @return {$.nette} Provides a fluent interface</span></div><div class='line' id='LC136'><span class="cm">	 */</span></div><div class='line' id='LC137'>	<span class="k">this</span><span class="p">.</span><span class="nx">load</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC138'>		<span class="nx">inner</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nx">inner</span><span class="p">.</span><span class="nx">requestHandler</span><span class="p">);</span></div><div class='line' id='LC139'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC140'>	<span class="p">};</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>	<span class="cm">/**</span></div><div class='line' id='LC143'><span class="cm">	 * Executes AJAX request. Attaches listeners and events.</span></div><div class='line' id='LC144'><span class="cm">	 *</span></div><div class='line' id='LC145'><span class="cm">	 * @param  {object} settings</span></div><div class='line' id='LC146'><span class="cm">	 * @param  {Element|null} ussually Anchor or Form</span></div><div class='line' id='LC147'><span class="cm">	 * @param  {event|null} event causing the request</span></div><div class='line' id='LC148'><span class="cm">	 * @return {jqXHR|null}</span></div><div class='line' id='LC149'><span class="cm">	 */</span></div><div class='line' id='LC150'>	<span class="k">this</span><span class="p">.</span><span class="nx">ajax</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">settings</span><span class="p">,</span> <span class="nx">ui</span><span class="p">,</span> <span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">settings</span><span class="p">.</span><span class="nx">nette</span> <span class="o">&amp;&amp;</span> <span class="nx">ui</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC152'>			<span class="kd">var</span> <span class="nx">$el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">ui</span><span class="p">);</span></div><div class='line' id='LC153'>			<span class="kd">var</span> <span class="nx">analyze</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">nette</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC154'>				<span class="nx">ui</span><span class="o">:</span> <span class="nx">ui</span><span class="p">,</span></div><div class='line' id='LC155'>				<span class="nx">el</span><span class="o">:</span> <span class="nx">$el</span><span class="p">,</span></div><div class='line' id='LC156'>				<span class="nx">isForm</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;form&#39;</span><span class="p">),</span></div><div class='line' id='LC157'>				<span class="nx">isSubmit</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;input[type=submit]&#39;</span><span class="p">),</span></div><div class='line' id='LC158'>				<span class="nx">isImage</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;input[type=image]&#39;</span><span class="p">),</span></div><div class='line' id='LC159'>				<span class="nx">form</span><span class="o">:</span> <span class="kc">null</span></div><div class='line' id='LC160'>			<span class="p">};</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>			<span class="k">if</span> <span class="p">(</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">isSubmit</span> <span class="o">||</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">isImage</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC163'>				<span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span> <span class="o">=</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;form&#39;</span><span class="p">);</span></div><div class='line' id='LC164'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">isForm</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC165'>				<span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span> <span class="o">=</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">el</span><span class="p">;</span></div><div class='line' id='LC166'>			<span class="p">}</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">settings</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC169'>				<span class="nx">settings</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span> <span class="o">?</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;action&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="nx">ui</span><span class="p">.</span><span class="nx">href</span><span class="p">;</span></div><div class='line' id='LC170'>			<span class="p">}</span></div><div class='line' id='LC171'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">settings</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC172'>				<span class="nx">settings</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span> <span class="o">?</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;method&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;get&#39;</span><span class="p">;</span></div><div class='line' id='LC173'>			<span class="p">}</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$el</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;[data-ajax-off]&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC176'>				<span class="nx">settings</span><span class="p">.</span><span class="nx">off</span> <span class="o">=</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;ajaxOff&#39;</span><span class="p">);</span></div><div class='line' id='LC177'>				<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">off</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="nx">setting</span><span class="p">.</span><span class="nx">off</span> <span class="o">=</span> <span class="p">[</span><span class="nx">settings</span><span class="p">.</span><span class="nx">off</span><span class="p">];</span></div><div class='line' id='LC178'>			<span class="p">}</span></div><div class='line' id='LC179'>		<span class="p">}</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">inner</span><span class="p">.</span><span class="nx">fire</span><span class="p">({</span></div><div class='line' id='LC182'>			<span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;before&#39;</span><span class="p">,</span></div><div class='line' id='LC183'>			<span class="nx">off</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">off</span> <span class="o">||</span> <span class="p">{}</span></div><div class='line' id='LC184'>		<span class="p">},</span> <span class="nx">settings</span><span class="p">,</span> <span class="nx">ui</span><span class="p">,</span> <span class="nx">e</span><span class="p">))</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>		<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC187'>			<span class="nx">beforeSend</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC188'>				<span class="k">return</span> <span class="nx">inner</span><span class="p">.</span><span class="nx">fire</span><span class="p">({</span></div><div class='line' id='LC189'>					<span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;start&#39;</span><span class="p">,</span></div><div class='line' id='LC190'>					<span class="nx">off</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">off</span> <span class="o">||</span> <span class="p">{}</span></div><div class='line' id='LC191'>				<span class="p">},</span> <span class="nx">xhr</span><span class="p">);</span></div><div class='line' id='LC192'>			<span class="p">}</span></div><div class='line' id='LC193'>		<span class="p">},</span> <span class="nx">settings</span><span class="p">)).</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">payload</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC194'>			<span class="nx">inner</span><span class="p">.</span><span class="nx">fire</span><span class="p">({</span></div><div class='line' id='LC195'>				<span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;success&#39;</span><span class="p">,</span></div><div class='line' id='LC196'>				<span class="nx">off</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">off</span> <span class="o">||</span> <span class="p">{}</span></div><div class='line' id='LC197'>			<span class="p">},</span> <span class="nx">payload</span><span class="p">);</span></div><div class='line' id='LC198'>		<span class="p">}).</span><span class="nx">fail</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC199'>			<span class="nx">inner</span><span class="p">.</span><span class="nx">fire</span><span class="p">({</span></div><div class='line' id='LC200'>				<span class="nx">name</span> <span class="o">:</span><span class="s1">&#39;error&#39;</span><span class="p">,</span></div><div class='line' id='LC201'>				<span class="nx">off</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">off</span> <span class="o">||</span> <span class="p">{}</span></div><div class='line' id='LC202'>			<span class="p">},</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">error</span><span class="p">);</span></div><div class='line' id='LC203'>		<span class="p">}).</span><span class="nx">always</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC204'>			<span class="nx">inner</span><span class="p">.</span><span class="nx">fire</span><span class="p">({</span></div><div class='line' id='LC205'>				<span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;complete&#39;</span><span class="p">,</span></div><div class='line' id='LC206'>				<span class="nx">off</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">off</span> <span class="o">||</span> <span class="p">{}</span></div><div class='line' id='LC207'>			<span class="p">});</span></div><div class='line' id='LC208'>		<span class="p">});</span></div><div class='line' id='LC209'>	<span class="p">};</span></div><div class='line' id='LC210'><span class="p">};</span></div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'><span class="nx">$</span><span class="p">.</span><span class="nx">nette</span> <span class="o">=</span> <span class="k">new</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">nette</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">nette</span> <span class="o">?</span> <span class="nx">$</span><span class="p">.</span><span class="nx">nette</span> <span class="o">:</span> <span class="p">{}));</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">netteAjax</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC215'>	<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">nette</span><span class="p">.</span><span class="nx">ajax</span><span class="p">(</span><span class="nx">options</span> <span class="o">||</span> <span class="p">{},</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC216'><span class="p">};</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'><span class="nx">$</span><span class="p">.</span><span class="nx">nette</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;validation&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC219'>	<span class="nx">before</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">settings</span><span class="p">,</span> <span class="nx">ui</span><span class="p">,</span> <span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">settings</span><span class="p">.</span><span class="nx">nette</span> <span class="o">||</span> <span class="o">!</span><span class="nx">e</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC221'>		<span class="k">else</span> <span class="kd">var</span> <span class="nx">analyze</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">nette</span><span class="p">;</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>		<span class="kd">var</span> <span class="nx">validate</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC224'>			<span class="nx">keys</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC225'>			<span class="nx">url</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC226'>			<span class="nx">form</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC227'>		<span class="p">},</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">validate</span> <span class="o">||</span> <span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC228'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;[data-ajax-validate]&#39;</span><span class="p">))</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC229'>			<span class="kd">var</span> <span class="nx">attr</span> <span class="o">=</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;ajaxValidate&#39;</span><span class="p">);</span></div><div class='line' id='LC230'>			<span class="k">if</span> <span class="p">(</span><span class="nx">attr</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC231'>				<span class="nx">keys</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC232'>				<span class="nx">url</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC233'>				<span class="nx">form</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC234'>			<span class="p">};</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">attr</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="k">return</span> <span class="nx">attr</span><span class="p">;</span></div><div class='line' id='LC235'>&nbsp;		<span class="p">})()</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC236'><br/></div><div class='line' id='LC237'>		<span class="k">if</span> <span class="p">(</span><span class="nx">validate</span><span class="p">.</span><span class="nx">keys</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC238'>			<span class="c1">// thx to @vrana</span></div><div class='line' id='LC239'>			<span class="kd">var</span> <span class="nx">explicitNoAjax</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">button</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">ctrlKey</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">shiftKey</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">altKey</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">metaKey</span><span class="p">;</span></div><div class='line' id='LC240'><br/></div><div class='line' id='LC241'>			<span class="k">if</span> <span class="p">(</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC242'>				<span class="k">if</span> <span class="p">(</span><span class="nx">explicitNoAjax</span> <span class="o">&amp;&amp;</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">isSubmit</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC243'>					<span class="k">this</span><span class="p">.</span><span class="nx">explicitNoAjax</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC244'>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC245'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">isForm</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">explicitNoAjax</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC246'>					<span class="k">this</span><span class="p">.</span><span class="nx">explicitNoAjax</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC247'>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC248'>				<span class="p">}</span></div><div class='line' id='LC249'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">explicitNoAjax</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC250'>		<span class="p">}</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'>		<span class="k">if</span> <span class="p">(</span><span class="nx">validate</span><span class="p">.</span><span class="nx">form</span> <span class="o">&amp;&amp;</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">((</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">isSubmit</span> <span class="o">||</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">isImage</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;formnovalidate&#39;</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC253'>			<span class="k">if</span> <span class="p">(</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">onsubmit</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">onsubmit</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC254'>				<span class="nx">e</span><span class="p">.</span><span class="nx">stopImmediatePropagation</span><span class="p">();</span></div><div class='line' id='LC255'>				<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC256'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC257'>			<span class="p">}</span></div><div class='line' id='LC258'>		<span class="p">}</span></div><div class='line' id='LC259'><br/></div><div class='line' id='LC260'>		<span class="k">if</span> <span class="p">(</span><span class="nx">validate</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC261'>			<span class="c1">// thx to @vrana</span></div><div class='line' id='LC262'>			<span class="k">if</span> <span class="p">(</span><span class="sr">/:|^#/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span> <span class="o">?</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">url</span> <span class="o">:</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">)))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC263'>		<span class="p">}</span></div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'>		<span class="nx">e</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC266'>		<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC267'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC268'>	<span class="p">}</span></div><div class='line' id='LC269'><span class="p">},</span> <span class="p">{</span></div><div class='line' id='LC270'>	<span class="nx">explicitNoAjax</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC271'><span class="p">});</span></div><div class='line' id='LC272'><br/></div><div class='line' id='LC273'><span class="nx">$</span><span class="p">.</span><span class="nx">nette</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;forms&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC274'>	<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">payload</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC275'>		<span class="kd">var</span> <span class="nx">snippets</span><span class="p">;</span></div><div class='line' id='LC276'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">Nette</span> <span class="o">||</span> <span class="o">!</span><span class="nx">payload</span><span class="p">.</span><span class="nx">snippets</span> <span class="o">||</span> <span class="o">!</span><span class="p">(</span><span class="nx">snippets</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;snippets&#39;</span><span class="p">)))</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC277'><br/></div><div class='line' id='LC278'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">id</span> <span class="k">in</span> <span class="nx">payload</span><span class="p">.</span><span class="nx">snippets</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC279'>			<span class="nx">snippets</span><span class="p">.</span><span class="nx">getElement</span><span class="p">(</span><span class="nx">id</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;form&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC280'>				<span class="nb">window</span><span class="p">.</span><span class="nx">Nette</span><span class="p">.</span><span class="nx">initForm</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC281'>			<span class="p">});</span></div><div class='line' id='LC282'>		<span class="p">}</span></div><div class='line' id='LC283'>	<span class="p">},</span></div><div class='line' id='LC284'>	<span class="nx">before</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">settings</span><span class="p">,</span> <span class="nx">ui</span><span class="p">,</span> <span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC285'>		<span class="kd">var</span> <span class="nx">analyze</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">nette</span><span class="p">;</span></div><div class='line' id='LC286'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">analyze</span> <span class="o">||</span> <span class="o">!</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC287'><br/></div><div class='line' id='LC288'>		<span class="nx">settings</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">data</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC289'><br/></div><div class='line' id='LC290'>		<span class="k">if</span> <span class="p">(</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">isSubmit</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC291'>			<span class="nx">settings</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;name&#39;</span><span class="p">)]</span> <span class="o">=</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC292'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">analyze</span><span class="p">.</span><span class="nx">isImage</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC293'>			<span class="kd">var</span> <span class="nx">offset</span> <span class="o">=</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">offset</span><span class="p">();</span></div><div class='line' id='LC294'>			<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;name&#39;</span><span class="p">);</span></div><div class='line' id='LC295'>			<span class="kd">var</span> <span class="nx">dataOffset</span> <span class="o">=</span> <span class="p">[</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">left</span><span class="p">),</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">top</span><span class="p">)</span> <span class="p">];</span></div><div class='line' id='LC296'><br/></div><div class='line' id='LC297'>			<span class="k">if</span> <span class="p">(</span><span class="nx">name</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;[&#39;</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// inside a container</span></div><div class='line' id='LC298'>				<span class="nx">settings</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">dataOffset</span><span class="p">;</span></div><div class='line' id='LC299'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC300'>				<span class="nx">settings</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39;.x&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">dataOffset</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC301'>				<span class="nx">settings</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39;.y&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">dataOffset</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC302'>			<span class="p">}</span></div><div class='line' id='LC303'>		<span class="p">}</span></div><div class='line' id='LC304'><br/></div><div class='line' id='LC305'>		<span class="nx">settings</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">analyze</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">serialize</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;&amp;&#39;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">.</span><span class="nx">param</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC306'>	<span class="p">}</span></div><div class='line' id='LC307'><span class="p">});</span></div><div class='line' id='LC308'><br/></div><div class='line' id='LC309'><span class="c1">// default snippet handler</span></div><div class='line' id='LC310'><span class="nx">$</span><span class="p">.</span><span class="nx">nette</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;snippets&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC311'>	<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">payload</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC312'>		<span class="k">if</span> <span class="p">(</span><span class="nx">payload</span><span class="p">.</span><span class="nx">snippets</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC313'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="k">in</span> <span class="nx">payload</span><span class="p">.</span><span class="nx">snippets</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>				<span class="k">this</span><span class="p">.</span><span class="nx">updateSnippet</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">payload</span><span class="p">.</span><span class="nx">snippets</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC315'>			<span class="p">}</span></div><div class='line' id='LC316'>		<span class="p">}</span></div><div class='line' id='LC317'>	<span class="p">}</span></div><div class='line' id='LC318'><span class="p">},</span> <span class="p">{</span></div><div class='line' id='LC319'>	<span class="nx">updateSnippet</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">id</span><span class="p">,</span> <span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC320'>		<span class="kd">var</span> <span class="nx">$el</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getElement</span><span class="p">(</span><span class="nx">id</span><span class="p">);</span></div><div class='line' id='LC321'>		<span class="c1">// Fix for setting document title in IE</span></div><div class='line' id='LC322'>		<span class="k">if</span> <span class="p">(</span><span class="nx">$el</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">tagName</span> <span class="o">==</span> <span class="s1">&#39;TITLE&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC323'>			<span class="nb">document</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">html</span><span class="p">;</span></div><div class='line' id='LC324'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC325'>			<span class="k">this</span><span class="p">.</span><span class="nx">applySnippet</span><span class="p">(</span><span class="nx">$el</span><span class="p">,</span> <span class="nx">html</span><span class="p">);</span></div><div class='line' id='LC326'>		<span class="p">}</span></div><div class='line' id='LC327'>	<span class="p">},</span></div><div class='line' id='LC328'>	<span class="nx">getElement</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>		<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">escapeSelector</span><span class="p">(</span><span class="nx">id</span><span class="p">));</span></div><div class='line' id='LC330'>	<span class="p">},</span></div><div class='line' id='LC331'>	<span class="nx">applySnippet</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">$el</span><span class="p">,</span> <span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC332'>		<span class="nx">$el</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">html</span><span class="p">);</span></div><div class='line' id='LC333'>	<span class="p">},</span></div><div class='line' id='LC334'>	<span class="nx">escapeSelector</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">selector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC335'>		<span class="c1">// thx to @uestla (https://github.com/uestla)</span></div><div class='line' id='LC336'>		<span class="k">return</span> <span class="nx">selector</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[\!&quot;#\$%&amp;&#39;\(\)\*\+,\.\/:;&lt;=&gt;\?@\[\\\]\^`\{\|\}~]/g</span><span class="p">,</span> <span class="s1">&#39;\\$&amp;&#39;</span><span class="p">);</span></div><div class='line' id='LC337'>	<span class="p">}</span></div><div class='line' id='LC338'><span class="p">});</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'><span class="c1">// support $this-&gt;redirect()</span></div><div class='line' id='LC341'><span class="nx">$</span><span class="p">.</span><span class="nx">nette</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;redirect&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC342'>	<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">payload</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC343'>		<span class="k">if</span> <span class="p">(</span><span class="nx">payload</span><span class="p">.</span><span class="nx">redirect</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC344'>			<span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">payload</span><span class="p">.</span><span class="nx">redirect</span><span class="p">;</span></div><div class='line' id='LC345'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC346'>		<span class="p">}</span></div><div class='line' id='LC347'>	<span class="p">}</span></div><div class='line' id='LC348'><span class="p">});</span></div><div class='line' id='LC349'><br/></div><div class='line' id='LC350'><span class="c1">// change URL (requires HTML5)</span></div><div class='line' id='LC351'><span class="k">if</span> <span class="p">(</span><span class="o">!!</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">history</span> <span class="o">&amp;&amp;</span> <span class="nx">history</span><span class="p">.</span><span class="nx">pushState</span><span class="p">))</span> <span class="p">{</span> <span class="c1">// check borrowed from Modernizr</span></div><div class='line' id='LC352'>	<span class="nx">$</span><span class="p">.</span><span class="nx">nette</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;history&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC353'>		<span class="nx">before</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">settings</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC354'>			<span class="kd">var</span> <span class="nx">$el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">ui</span><span class="p">);</span></div><div class='line' id='LC355'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$el</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC356'>				<span class="k">this</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">ui</span><span class="p">.</span><span class="nx">href</span><span class="p">;</span></div><div class='line' id='LC357'>			<span class="p">}</span></div><div class='line' id='LC358'>		<span class="p">},</span></div><div class='line' id='LC359'>		<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">payload</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC360'>			<span class="k">if</span> <span class="p">(</span><span class="nx">payload</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC361'>				<span class="k">this</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">payload</span><span class="p">.</span><span class="nx">url</span><span class="p">;</span></div><div class='line' id='LC362'>			<span class="p">}</span></div><div class='line' id='LC363'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">payload</span><span class="p">.</span><span class="nx">signal</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">href</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC364'>				<span class="nx">history</span><span class="p">.</span><span class="nx">pushState</span><span class="p">({</span><span class="nx">href</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">href</span><span class="p">},</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">href</span><span class="p">);</span></div><div class='line' id='LC365'>			<span class="p">}</span></div><div class='line' id='LC366'>		<span class="p">}</span></div><div class='line' id='LC367'>	<span class="p">},</span> <span class="p">{</span><span class="nx">href</span><span class="o">:</span> <span class="kc">null</span><span class="p">});</span></div><div class='line' id='LC368'><span class="p">}</span></div><div class='line' id='LC369'><br/></div><div class='line' id='LC370'><span class="c1">// current page state</span></div><div class='line' id='LC371'><span class="nx">$</span><span class="p">.</span><span class="nx">nette</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;state&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC372'>	<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">payload</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC373'>		<span class="k">if</span> <span class="p">(</span><span class="nx">payload</span><span class="p">.</span><span class="nx">state</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC374'>			<span class="k">this</span><span class="p">.</span><span class="nx">state</span> <span class="o">=</span> <span class="nx">payload</span><span class="p">.</span><span class="nx">state</span><span class="p">;</span></div><div class='line' id='LC375'>		<span class="p">}</span></div><div class='line' id='LC376'>	<span class="p">}</span></div><div class='line' id='LC377'><span class="p">},</span> <span class="p">{</span><span class="nx">state</span><span class="o">:</span> <span class="kc">null</span><span class="p">});</span></div><div class='line' id='LC378'><br/></div><div class='line' id='LC379'><span class="c1">// abort last request if new started</span></div><div class='line' id='LC380'><span class="nx">$</span><span class="p">.</span><span class="nx">nette</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;unique&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC381'>	<span class="nx">start</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC382'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC383'>			<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">abort</span><span class="p">();</span></div><div class='line' id='LC384'>		<span class="p">}</span></div><div class='line' id='LC385'>		<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="nx">xhr</span><span class="p">;</span></div><div class='line' id='LC386'>	<span class="p">},</span></div><div class='line' id='LC387'>	<span class="nx">complete</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC388'>		<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC389'>	<span class="p">}</span></div><div class='line' id='LC390'><span class="p">},</span> <span class="p">{</span><span class="nx">xhr</span><span class="o">:</span> <span class="kc">null</span><span class="p">});</span></div><div class='line' id='LC391'><br/></div><div class='line' id='LC392'><span class="c1">// option to abort by ESC (thx to @vrana)</span></div><div class='line' id='LC393'><span class="nx">$</span><span class="p">.</span><span class="nx">nette</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;abort&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC394'>	<span class="nx">init</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC395'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">).</span><span class="nx">keydown</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC396'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">27</span> <span class="c1">// Esc</span></div><div class='line' id='LC397'>			<span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">ctrlKey</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">shiftKey</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">altKey</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">metaKey</span><span class="p">))</span></div><div class='line' id='LC398'>			<span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC399'>				<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">abort</span><span class="p">();</span></div><div class='line' id='LC400'>			<span class="p">}</span></div><div class='line' id='LC401'>		<span class="p">},</span> <span class="k">this</span><span class="p">));</span></div><div class='line' id='LC402'>	<span class="p">},</span></div><div class='line' id='LC403'>	<span class="nx">start</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC404'>		<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="nx">xhr</span><span class="p">;</span></div><div class='line' id='LC405'>	<span class="p">},</span></div><div class='line' id='LC406'>	<span class="nx">complete</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC407'>		<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC408'>	<span class="p">}</span></div><div class='line' id='LC409'><span class="p">},</span> <span class="p">{</span><span class="nx">xhr</span><span class="o">:</span> <span class="kc">null</span><span class="p">});</span></div><div class='line' id='LC410'><br/></div><div class='line' id='LC411'><span class="c1">// default ajaxification (can be overridden in init())</span></div><div class='line' id='LC412'><span class="nx">$</span><span class="p">.</span><span class="nx">nette</span><span class="p">.</span><span class="nx">ext</span><span class="p">(</span><span class="s1">&#39;init&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC413'>	<span class="nx">load</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">rh</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC414'>		<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">linkSelector</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;click.nette&#39;</span><span class="p">,</span> <span class="nx">rh</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;click.nette&#39;</span><span class="p">,</span> <span class="nx">rh</span><span class="p">);</span></div><div class='line' id='LC415'>		<span class="kd">var</span> <span class="nx">$forms</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">formSelector</span><span class="p">);</span></div><div class='line' id='LC416'>		<span class="nx">$forms</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;submit.nette&#39;</span><span class="p">,</span> <span class="nx">rh</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;submit.nette&#39;</span><span class="p">,</span> <span class="nx">rh</span><span class="p">);</span></div><div class='line' id='LC417'>		<span class="nx">$forms</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;click.nette&#39;</span><span class="p">,</span> <span class="s1">&#39;:image&#39;</span><span class="p">,</span> <span class="nx">rh</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;click.nette&#39;</span><span class="p">,</span> <span class="s1">&#39;:image&#39;</span><span class="p">,</span> <span class="nx">rh</span><span class="p">);</span></div><div class='line' id='LC418'>		<span class="nx">$forms</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;click.nette&#39;</span><span class="p">,</span> <span class="s1">&#39;:submit&#39;</span><span class="p">,</span> <span class="nx">rh</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;click.nette&#39;</span><span class="p">,</span> <span class="s1">&#39;:submit&#39;</span><span class="p">,</span> <span class="nx">rh</span><span class="p">);</span></div><div class='line' id='LC419'><br/></div><div class='line' id='LC420'>		<span class="kd">var</span> <span class="nx">buttonSelector</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">buttonSelector</span><span class="p">;</span></div><div class='line' id='LC421'>		<span class="nx">$</span><span class="p">(</span><span class="nx">buttonSelector</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC422'>			<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;form&#39;</span><span class="p">)</span></div><div class='line' id='LC423'>				<span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;click.nette&#39;</span><span class="p">,</span> <span class="nx">buttonSelector</span><span class="p">,</span> <span class="nx">rh</span><span class="p">)</span></div><div class='line' id='LC424'>				<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;click.nette&#39;</span><span class="p">,</span> <span class="nx">buttonSelector</span><span class="p">,</span> <span class="nx">rh</span><span class="p">);</span></div><div class='line' id='LC425'>		<span class="p">});</span></div><div class='line' id='LC426'>	<span class="p">},</span></div><div class='line' id='LC427'>	<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC428'>		<span class="nx">$</span><span class="p">.</span><span class="nx">nette</span><span class="p">.</span><span class="nx">load</span><span class="p">();</span></div><div class='line' id='LC429'>	<span class="p">}</span></div><div class='line' id='LC430'><span class="p">},</span> <span class="p">{</span></div><div class='line' id='LC431'>	<span class="nx">linkSelector</span><span class="o">:</span> <span class="s1">&#39;a.ajax&#39;</span><span class="p">,</span></div><div class='line' id='LC432'>	<span class="nx">formSelector</span><span class="o">:</span> <span class="s1">&#39;form.ajax&#39;</span><span class="p">,</span></div><div class='line' id='LC433'>	<span class="nx">buttonSelector</span><span class="o">:</span> <span class="s1">&#39;input.ajax[type=&quot;submit&quot;], input.ajax[type=&quot;image&quot;]&#39;</span></div><div class='line' id='LC434'><span class="p">});</span></div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'><span class="p">})(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.07498s from fe17.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/HosipLan/Nette-addDynamic/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

