



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled emoji-size-boost is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-1e23a207d51b99415349a8278e4e8425a3d5decf40d0b7250b147aaeefeac337.css" integrity="sha256-HiOiB9UbmUFTSagnjk6EJaPV3s9A0LclCxR6ru/qwzc=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-a6be22a2877ee0ae350520df78941ecf7599019b31fded938ef98cd11d20ae48.css" integrity="sha256-pr4iood+4K41BSDfeJQez3WZAZsx/e2TjvmM0R0grkg=" media="all" rel="stylesheet" />
    
    
    
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>flowjs/flow.js: A JavaScript library providing multiple simultaneous, stable, fault-tolerant and resumable/restartable file uploads via the HTML5 File API.</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars2.githubusercontent.com/u/5405302?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="flowjs/flow.js" name="twitter:title" /><meta content="flow.js - A JavaScript library providing multiple simultaneous, stable, fault-tolerant and resumable/restartable file uploads via the HTML5 File API." name="twitter:description" />
      <meta content="https://avatars2.githubusercontent.com/u/5405302?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="flowjs/flow.js" property="og:title" /><meta content="https://github.com/flowjs/flow.js" property="og:url" /><meta content="flow.js - A JavaScript library providing multiple simultaneous, stable, fault-tolerant and resumable/restartable file uploads via the HTML5 File API." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTIxMzIzNzE1OjlkNTE1Y2U3YTFmMTNjZGJjNjc2YWM1ZTc5NmFlMWNjYjY4N2NkYzIxNmIxNzUzZTlhNDA0ZDBkMzk4NTZjNWI=--412106a0f4eb61c53de1dc2ecdfa7ba477c05939">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="78880531:654A:FBE980:5869A2BE" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="78880531:654A:FBE980:5869A2BE" name="octolytics-dimension-request_id" /><meta content="12682255" name="octolytics-actor-id" /><meta content="kedarkrishnan" name="octolytics-actor-login" /><meta content="7693daa4e85bcbad3451e721113109b0a5a7d170d85f12b990287c5d0ae62280" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="kedarkrishnan">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="M2M4NzU2NDkyZDU0ZmNjNWM0MTBhNTY3YjA4MjY5NjNiYzBhNTI4M2VlNzk0OTRjYzhkYTI2MzU5MWY3Njg5Nnx7InJlbW90ZV9hZGRyZXNzIjoiMTIwLjEzNi41LjQ5IiwicmVxdWVzdF9pZCI6Ijc4ODgwNTMxOjY1NEE6RkJFOTgwOjU4NjlBMkJFIiwidGltZXN0YW1wIjoxNDgzMzE3OTUwLCJob3N0IjoiZ2l0aHViLmNvbSJ9">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="2ca3d17244fc065ed976f2c9360cf295d7d3cac9">

    <meta http-equiv="x-pjax-version" content="37ce4594845dbaa11557f6b8abfabd1d">
    

      
  <meta name="description" content="flow.js - A JavaScript library providing multiple simultaneous, stable, fault-tolerant and resumable/restartable file uploads via the HTML5 File API.">
  <meta name="go-import" content="github.com/flowjs/flow.js git https://github.com/flowjs/flow.js.git">

  <meta content="5405302" name="octolytics-dimension-user_id" /><meta content="flowjs" name="octolytics-dimension-user_login" /><meta content="12662085" name="octolytics-dimension-repository_id" /><meta content="flowjs/flow.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="12662085" name="octolytics-dimension-repository_network_root_id" /><meta content="flowjs/flow.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/flowjs/flow.js/commits/master.atom" rel="alternate" title="Recent Commits to flow.js:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/flowjs/flow.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production macintosh vis-public">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/flowjs/flow.js/search" class="js-site-search-form" data-scoped-search-url="/flowjs/flow.js/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:12682255" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="flowjs/flow.js">This repository</span>
  </div>
    <a class="dropdown-item" href="/flowjs/flow.js/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/kedarkrishnan"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@kedarkrishnan" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/12682255?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">kedarkrishnan</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/kedarkrishnan" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/kedarkrishnan?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5fFk5Bv9wXk2oFZQtqaDuyZgEOurTK96w6PN6sjAceXRAu3XYjPnZpNp06Md5ZYzJ0JAIxL7lALC/0vd2VMvZA==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="C3CvdntY04Ezur9p/7Y+cTDHGrV5yAjl2ol7PLxdeEAm+jTsE8EDDL0khzetcF/uH3ipFGoh6N7y6RX2tQ2xCg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="12662085" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/flowjs/flow.js/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:files#disambiguate">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/flowjs/flow.js/watchers"
            aria-label="65 users are watching this repository">
            65
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/flowjs/flow.js/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="WuiOG7YH+Sirk62xsWIfTAvyRBjZobsOufCL0AN7E+dH422bCnvNk81Mqo8P9/zJ1dJHNfn+IuXJ1bwF7QgvsA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar flowjs/flow.js"
        data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/flowjs/flow.js/stargazers"
           aria-label="2157 users starred this repository">
          2,157
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/flowjs/flow.js/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Egvy+NI38gVrWFG+guEG5wZd+c0bR6z97r35Uwb7ijSg8eh2M2RLJQ/W1qfTjErfo8Q4sJzHk+V2Fy5epNwCYQ==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star flowjs/flow.js"
        data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/flowjs/flow.js/stargazers"
           aria-label="2157 users starred this repository">
          2,157
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/flowjs/flow.js/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UMgXrISoM2U/d6D4/O4b0GhJPD93Q+y1iQhYLHufSrDkDppN8ciTWcUCelEtsRcnIlkqYfkzkY6cEBSM3QUe4w==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork"
                title="Fork your own copy of flowjs/flow.js to your account"
                aria-label="Fork your own copy of flowjs/flow.js to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/flowjs/flow.js/network" class="social-count"
       aria-label="269 users forked this repository">
      269
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/flowjs" class="url fn" rel="author">flowjs</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/flowjs/flow.js" data-pjax="#js-repo-pjax-container">flow.js</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/flowjs/flow.js" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /flowjs/flow.js" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/flowjs/flow.js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /flowjs/flow.js/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">70</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/flowjs/flow.js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /flowjs/flow.js/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">11</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/flowjs/flow.js/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /flowjs/flow.js/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>
    <a href="/flowjs/flow.js/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /flowjs/flow.js/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/flowjs/flow.js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /flowjs/flow.js/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/flowjs/flow.js/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /flowjs/flow.js/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
<div class="repository-meta js-details-container">
  <div class="repository-meta-content col-11">
        <span class="col-11 text-gray-dark" itemprop="about">
          A JavaScript library providing multiple simultaneous, stable, fault-tolerant and resumable/restartable file uploads via the HTML5 File API.
        </span>

  </div>

</div>



<div class="overall-summary overall-summary-bottomless">
  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/flowjs/flow.js/commits/master">
            <svg aria-hidden="true" class="octicon octicon-history" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"/></svg>
            <span class="num text-emphasized">
              504
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/flowjs/flow.js/branches">
          <svg aria-hidden="true" class="octicon octicon-git-branch" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
          <span class="num text-emphasized">
            3
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/flowjs/flow.js/releases">
          <svg aria-hidden="true" class="octicon octicon-tag" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"/></svg>
          <span class="num text-emphasized">
            23
          </span>
          releases
        </a>
      </li>

      <li>
          <a href="/flowjs/flow.js/graphs/contributors">
  <svg aria-hidden="true" class="octicon octicon-organization" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4"/></svg>
    <span class="num text-emphasized">
      57
    </span>
    contributors
</a>

      </li>
        <li>
          <a href="https://github.com/flowjs/flow.js/blob/master/LICENSE">
            <svg aria-hidden="true" class="octicon octicon-law" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"/></svg>
              MIT
          </a>
        </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/flowjs/flow.js/search?l=javascript"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">99.5%</span>
              </a>
          </li>
          <li>
              <a href="/flowjs/flow.js/search?l=bash"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#89e051;"></span>
                <span class="lang">Shell</span>
                <span class="percent">0.5%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details" data-ga-click="Repository, language bar stats toggle, location:repo overview">
    <span class="language-color" aria-label="JavaScript 99.5%" style="width:99.5%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    <span class="language-color" aria-label="Shell 0.5%" style="width:0.5%; background-color:#89e051;" itemprop="keywords">Shell</span>
  </div>

  <include-fragment src="/flowjs/flow.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page">

    <div class="select-menu get-repo-select-menu js-menu-container float-right select-menu-modal-right">
  <button class="btn btn-sm btn-primary select-menu-button js-menu-target"
    title="Clone or download this repository"
    type="button" aria-label="Clone or download this repository" tabindex="0" aria-haspopup="true">
    <span>Clone or download</span>
  </button>

  <div class="select-menu-modal-holder dropdown-menu-content js-menu-content" aria-hidden="true">
    <div class="get-repo-modal dropdown-menu dropdown-menu-sw pb-0 js-toggler-container ">
      <div class="clone-options https-clone-options">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YYmmA/BrPTvIYbaMldC/zrjexgzI/cAb3pZrsCY6rRkYrkHrExK9cMjtjtpbfBN0b2cRFNJfYjKWftMlq9qm+g==" /></div><button class="btn-link btn-change-protocol js-toggler-target float-right" type="submit">Use SSH</button></form>

        <h4 class="mb-1">
          Clone with HTTPS
          <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
            <svg aria-hidden="true" class="octicon octicon-question" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/></svg>
          </a>
        </h4>
        <p class="mb-2 get-repo-decription-text">
          Use Git or checkout with SVN using the web URL.
        </p>

        <div class="input-group js-zeroclipboard-container">
  <input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="https://github.com/flowjs/flow.js.git" aria-label="Clone this repository at https://github.com/flowjs/flow.js.git" readonly>
  <div class="input-group-button">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg></button>
  </div>
</div>

      </div>

        <div class="clone-options ssh-clone-options">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=https&amp;protocol_type=clone" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vNM/egv088L0eqr/X445WWdpJKooyioPELsNUOVPG43F9NiS6I1zifT2kqmRIpXjsNDzsjJoiCZYU7XFaK8Qbg==" /></div><button class="btn-link btn-change-protocol js-toggler-target float-right" type="submit">Use HTTPS</button></form>

          <h4 class="mb-1">
            Clone with SSH
            <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
              <svg aria-hidden="true" class="octicon octicon-question" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/></svg>
            </a>
          </h4>
          <p class="mb-2 get-repo-decription-text">
            Use an SSH key and passphrase from account.
          </p>

          <div class="input-group js-zeroclipboard-container">
  <input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="git@github.com:flowjs/flow.js.git" aria-label="Clone this repository at git@github.com:flowjs/flow.js.git" readonly>
  <div class="input-group-button">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg></button>
  </div>
</div>

        </div>

      <div class="mt-2">
          <a href="github-mac://openRepo/https://github.com/flowjs/flow.js" class="btn btn-outline get-repo-btn tooltipped tooltipped-s tooltipped-multiline" aria-label="Clone flowjs/flow.js to your computer and use it in GitHub Desktop.">
    Open in Desktop
  </a>

<a href="/flowjs/flow.js/archive/master.zip"
   class="btn btn-outline get-repo-btn
"
   rel="nofollow"
   data-ga-click="Repository, download zip, location:repo overview">
  Download ZIP
</a>

      </div>
    </div>
  </div>
</div>


  <div class="BtnGroup float-right">
      
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/flowjs/flow.js/new/master" class="BtnGroup-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="M7SOxRix1qnqM+tfw52tnnTYlEhbbakbOOUwK6eDpMAVbxT049jgg9Qlz3oVNv6W8hwPE30uNTZjVnBeQIDlUQ==" /></div>
    <button class="btn btn-sm BtnGroup-item" type="submit" data-disable-with="Creating file…">
      Create new file
    </button>
</form>

      
  <a href="/flowjs/flow.js/upload/master" class="btn btn-sm BtnGroup-item">
    Upload files
  </a>


    <a href="/flowjs/flow.js/find/master"
      class="btn btn-sm empty-icon float-right BtnGroup-item"
      data-pjax
      data-hotkey="t"
      data-ga-click="Repository, find file, location:repo overview">
      Find file
    </a>
  </div>

  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/flowjs/flow.js/tree/develop"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/flowjs/flow.js/tree/issue/141"
               data-name="issue/141"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                issue/141
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/flowjs/flow.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.11.2"
              data-name="v2.11.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.11.2">
                v2.11.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.10.1"
              data-name="v2.10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.10.1">
                v2.10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.10.0"
              data-name="v2.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.10.0">
                v2.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.9.0"
              data-name="v2.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.9.0">
                v2.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.8.0"
              data-name="v2.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.8.0">
                v2.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.6.2"
              data-name="v2.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.6.2">
                v2.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.6.1"
              data-name="v2.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.6.1">
                v2.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.6.0"
              data-name="v2.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.6.0">
                v2.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.5.0"
              data-name="v2.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.5.0">
                v2.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.4.0"
              data-name="v2.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.4.0">
                v2.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.3.0"
              data-name="v2.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.3.0">
                v2.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.2.2"
              data-name="v2.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.2">
                v2.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.2.1"
              data-name="v2.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.1">
                v2.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.2.0"
              data-name="v2.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.0">
                v2.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.1.0"
              data-name="v2.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.1.0">
                v2.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.0.1"
              data-name="v2.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.1">
                v2.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.0.0"
              data-name="v2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0">
                v2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.0.0-beta5"
              data-name="v2.0.0-beta5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0-beta5">
                v2.0.0-beta5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.0.0-beta4"
              data-name="v2.0.0-beta4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0-beta4">
                v2.0.0-beta4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.0.0-beta3"
              data-name="v2.0.0-beta3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0-beta3">
                v2.0.0-beta3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.0.0-beta2"
              data-name="v2.0.0-beta2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0-beta2">
                v2.0.0-beta2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.0.0-beta"
              data-name="v2.0.0-beta"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0-beta">
                v2.0.0-beta
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/flowjs/flow.js/tree/v2.0.0-alpha"
              data-name="v2.0.0-alpha"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0-alpha">
                v2.0.0-alpha
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


      <a href="/flowjs/flow.js/pull/new/master" class="btn btn-sm new-pull-request-btn" data-pjax data-ga-click="Repository, new pull request, location:repo overview">
        New pull request
      </a>

  <div class="breadcrumb">
    
  </div>
</div>





  <div class="commit-tease js-details-container">
    <span class="float-right">
      Latest commit
      <a class="commit-tease-sha" href="/flowjs/flow.js/commit/851ff102ec403309d062e755ce0cd09a06fc56d4" data-pjax>
        851ff10
      </a>
      <span itemprop="dateModified"><relative-time datetime="2016-12-04T18:31:05Z">Dec 4, 2016</relative-time></span>
    </span>


    <span class="commit-author-section">
      <img alt="@AidasK" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/2088484?v=3&amp;s=40" width="20" />
      <a href="/AidasK" class="user-mention" rel="contributor">AidasK</a>
        committed on <strong>GitHub</strong>
    </span>

        <a href="/flowjs/flow.js/commit/851ff102ec403309d062e755ce0cd09a06fc56d4" class="message" data-pjax="true" title="Merge pull request #202 from OskarPersson/master

Add directory upload support to Firefox and Edge">Merge pull request</a> <a href="https://github.com/flowjs/flow.js/pull/202" class="issue-link js-issue-link" data-url="https://github.com/flowjs/flow.js/issues/202" data-id="193361370" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#202</a> <a href="/flowjs/flow.js/commit/851ff102ec403309d062e755ce0cd09a06fc56d4" class="message" data-pjax="true" title="Merge pull request #202 from OskarPersson/master

Add directory upload support to Firefox and Edge">from OskarPersson/master</a>
          <span class="hidden-text-expander inline">
            <button type="button" class="ellipsis-expander js-details-target">&hellip;</button>
          </span>
    </span>

      <div class="commit-desc"><pre class="text-small">Add directory upload support to Firefox and Edge</pre></div>
  </div>


<div class="file-wrap">

  <a href="/flowjs/flow.js/tree/851ff102ec403309d062e755ce0cd09a06fc56d4" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-directory" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/tree/master/dist" class="js-navigation-open" id="2a6d07eef8b10b84129b42424ed99327-2bb7e1f09581198df34b5c0791baaa1f3c01e39c" title="dist">dist</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/feff1e1d341ca2e3b17293a5dde36c0a22096ed9" class="message" data-pjax="true" title="Release v2.11.2">Release v2.11.2</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-06-16T08:45:20Z">Jun 16, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-directory" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/tree/master/samples" class="js-navigation-open" id="6ef9161b900632671022358216c7dfe7-4787b034d0d01e12185b84151cb1616f9ef78935" title="samples">samples</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/d04ddd208d26c0574b582fbb300ea2526b82653f" class="message" data-pjax="true" title="docs: updated java samples">docs: updated java samples</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-07-03T06:19:32Z">Jul 3, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-directory" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/tree/master/src" class="js-navigation-open" id="25d902c24283ab8cfbac54dfa101ad31-a45da9c62680c365fdccf73a1aea0c705d44fceb" title="src">src</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/75fe73ef3ce4424de0272067df337264c1cb0e42" class="message" data-pjax="true" title="Add directory upload support to Firefox and Edge">Add directory upload support to Firefox and Edge</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-12-04T16:46:39Z">Dec 5, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-directory" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/tree/master/test" class="js-navigation-open" id="098f6bcd4621d373cade4e832627b4f6-dc8be0e1e4c38daf003bab1e185b9fa4218a3555" title="test">test</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/7d6139ffe65e1475e586478f7bb8eb4cb404cdec" class="message" data-pjax="true" title="Add unit-tests for fileRemove event.">Add unit-tests for fileRemove event.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-03-22T18:59:40Z">Mar 23, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/blob/master/.gitignore" class="js-navigation-open" id="a084b794bc0759e7a6b77810e01874f2-2523ef93efc015dfedebf715a2f5dd22701ba561" title=".gitignore">.gitignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/5cee1e6cc77e44805a1f959056fc5ac42f6a2a86" class="message" data-pjax="true" title="feat: coverage reporter">feat: coverage reporter</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2013-08-26T07:23:40Z">Aug 26, 2013</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/blob/master/.travis.yml" class="js-navigation-open" id="354f30a63fb0907d4ad57269548329e3-953d841b2cac407c83bfe989b4522a8dd7967e66" title=".travis.yml">.travis.yml</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/88aa0526b7dd8d2032a610f33279e94c0b0906d0" class="message" data-pjax="true" title="Adopt Codeclimate for tracking both code quality and test coverage in place of Coveralls">Adopt Codeclimate for tracking both code quality and test coverage in…</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-03-15T12:46:30Z">Mar 16, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/blob/master/.versions" class="js-navigation-open" id="7aa049512823ff318acef707ef87ada4-daec1b85287cf12dc569f4d2fe45f28255bfec4c" title=".versions">.versions</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/3fd8ee28243bde52f32aba4d03e7cd0f748f1bc1" class="message" data-pjax="true" title="meteor.js package for flow.js">meteor.js package for flow.js</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-05-22T08:15:24Z">May 22, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/blob/master/CHANGELOG.md" class="js-navigation-open" id="4ac32a78649ca5bdd8e0ba38b7006a1e-60bc662918bcb5cb8cdb4ccc077305284ed96ef1" title="CHANGELOG.md">CHANGELOG.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/35971ece7b8ceb26a3dd2bb325f9facccceb3682" class="message" data-pjax="true" title="chore: rename to flow.js">chore: rename to flow.js</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2013-10-04T09:04:09Z">Oct 4, 2013</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/blob/master/Gruntfile.js" class="js-navigation-open" id="35b4a816e0441e6a375cd925af50752c-27eb3de8017836daaa5f0b2f2d7da18da28b2343" title="Gruntfile.js">Gruntfile.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/88aa0526b7dd8d2032a610f33279e94c0b0906d0" class="message" data-pjax="true" title="Adopt Codeclimate for tracking both code quality and test coverage in place of Coveralls">Adopt Codeclimate for tracking both code quality and test coverage in…</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-03-15T12:46:30Z">Mar 16, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/blob/master/LICENSE" class="js-navigation-open" id="9879d6db96fd29134fc802214163b95a-72e74414155e35d1cd7794c71d86727c72c191d9" itemprop="license" title="LICENSE">LICENSE</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/f800d796242cdcd15cafaacc6b194a03377d7d68" class="message" data-pjax="true" title="Merge branch 'master' of https://github.com/resumable2/resumable.js

Conflicts:
	README.md">Merge branch 'master' of</a> <a href="https://github.com/resumable2/resumable.js">https://github.com/resumable2/resumable.js</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2013-09-07T10:21:03Z">Sep 7, 2013</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/blob/master/README.md" class="js-navigation-open" id="04c6e90faac2675aa89e2176d2eec7d8-291f474ef266af0aea354ae090e82efa5da75b0e" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/14193619beaa64bac6c3a9a5096cc46a2aed8669" class="message" data-pjax="true" title="docs: readme">docs: readme</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-06-16T08:22:37Z">Jun 16, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/blob/master/bower.json" class="js-navigation-open" id="0a08a7565aba4405282251491979bb6b-3407ae033fb74a31836ba3ebaf3b855a2041f548" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/cdad5957da9c0b40b918060660b213b0da1729a5" class="message" data-pjax="true" title="Remove moot `version` property from bower.json

Per bower/bower.json-spec@a325da3

Also their maintainer says they probably won&#39;t ever use it: http://stackoverflow.com/questions/24844901/bowers-bower-json-file-version-property">Remove moot `version` property from bower.json</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-06-12T02:32:35Z">Jun 12, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/blob/master/karma.conf.js" class="js-navigation-open" id="a2a3b7b0c9c3b4b93b4aebf4e3ec3cfb-a25135ce44c399f6e05be5ccabc5c113afa5c585" title="karma.conf.js">karma.conf.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/e92107adf6583d1d7090681b2512cdd1c7dee7d3" class="message" data-pjax="true" title="Fix publishing of coverage results on coveralls">Fix publishing of coverage results on coveralls</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-01-05T22:18:29Z">Jan 6, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/blob/master/package.js" class="js-navigation-open" id="49fb32b6d8276ecd1268e47c0339d55c-5fad99968a858e5901f0547a47be559b0572f9b0" title="package.js">package.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/3fd8ee28243bde52f32aba4d03e7cd0f748f1bc1" class="message" data-pjax="true" title="meteor.js package for flow.js">meteor.js package for flow.js</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-05-22T08:15:24Z">May 22, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/blob/master/package.json" class="js-navigation-open" id="b9cfc7f2cdf78a7f4b91a753d10865a2-e6836873793dadc1073ca479c16986c6b7759d2b" title="package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/adc8b80da6a8ca034a1a07445ebdf3d9d43bb15d" class="message" data-pjax="true" title="Require specific grunt version 0.4.5 (#181)">Require specific grunt version 0.4.5 (</a><a href="https://github.com/flowjs/flow.js/issues/181" class="issue-link js-issue-link" data-url="https://github.com/flowjs/flow.js/issues/181" data-id="160962449" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#181</a><a href="/flowjs/flow.js/commit/adc8b80da6a8ca034a1a07445ebdf3d9d43bb15d" class="message" data-pjax="true" title="Require specific grunt version 0.4.5 (#181)">)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-06-17T20:37:55Z">Jun 18, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/flowjs/flow.js/blob/master/travis.sh" class="js-navigation-open" id="f9a62833538ab14fff849c2be16ab986-a8538cf1b8eea3a9b8e206197ed0b09282d9d522" title="travis.sh">travis.sh</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/flowjs/flow.js/commit/88aa0526b7dd8d2032a610f33279e94c0b0906d0" class="message" data-pjax="true" title="Adopt Codeclimate for tracking both code quality and test coverage in place of Coveralls">Adopt Codeclimate for tracking both code quality and test coverage in…</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-03-15T12:46:30Z">Mar 16, 2016</time-ago></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>



  <div id="readme" class="readme boxed-group clearfix announce instapaper_body md">
    <h3>
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      README.md
    </h3>

      <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-flowjs--" class="anchor" href="#flowjs--" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flow.js <a href="https://travis-ci.org/flowjs/flow.js"><img src="https://camo.githubusercontent.com/231c2c5c135a747d0228ecb44954e2461a4c469e/68747470733a2f2f7472617669732d63692e6f72672f666c6f776a732f666c6f772e6a732e737667" alt="Build Status" data-canonical-src="https://travis-ci.org/flowjs/flow.js.svg" style="max-width:100%;"></a> <a href="https://codeclimate.com/github/flowjs/flow.js/coverage"><img src="https://camo.githubusercontent.com/b2d4a0de97b3ae1acaec29ef8bfcc2a297d8dfd9/68747470733a2f2f636f6465636c696d6174652e636f6d2f6769746875622f666c6f776a732f666c6f772e6a732f6261646765732f636f7665726167652e737667" alt="Test Coverage" data-canonical-src="https://codeclimate.com/github/flowjs/flow.js/badges/coverage.svg" style="max-width:100%;"></a></h1>

<p><a href="https://saucelabs.com/u/flowjs"><img src="https://camo.githubusercontent.com/00f7ada4813a8bfb0ada5f459e3de0ef383cc362/68747470733a2f2f73617563656c6162732e636f6d2f62726f777365722d6d61747269782f666c6f776a732e737667" alt="Saucelabs Test Status" data-canonical-src="https://saucelabs.com/browser-matrix/flowjs.svg" style="max-width:100%;"></a></p>

<p>Flow.js is a JavaScript library providing multiple simultaneous, stable and resumable uploads via the HTML5 File API. </p>

<p>The library is designed to introduce fault-tolerance into the upload of large files through HTTP. This is done by splitting each file into small chunks. Then, whenever the upload of a chunk fails, uploading is retried until the procedure completes. This allows uploads to automatically resume uploading after a network connection is lost either locally or to the server. Additionally, it allows for users to pause, resume and even recover uploads without losing state because only the currently uploading chunks will be aborted, not the entire upload.</p>

<p>Flow.js does not have any external dependencies other than the <code>HTML5 File API</code>. This is relied on for the ability to chunk files into smaller pieces. Currently, this means that support is limited to Firefox 4+, Chrome 11+, Safari 6+ and Internet Explorer 10+.</p>

<p>Samples and examples are available in the <code>samples/</code> folder. Please push your own as Markdown to help document the project.</p>

<h2><a id="user-content-can-i-see-a-demo" class="anchor" href="#can-i-see-a-demo" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Can I see a demo?</h2>

<p><a href="http://flowjs.github.io/ng-flow/">Flow.js + angular.js file upload demo</a> - ng-flow extension page <a href="https://github.com/flowjs/ng-flow">https://github.com/flowjs/ng-flow</a></p>

<p>JQuery and node.js backend demo <a href="https://github.com/flowjs/flow.js/tree/master/samples/Node.js">https://github.com/flowjs/flow.js/tree/master/samples/Node.js</a></p>

<h2><a id="user-content-how-can-i-install-it" class="anchor" href="#how-can-i-install-it" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How can I install it?</h2>

<p>Download a latest build from <a href="https://github.com/flowjs/flow.js/releases">https://github.com/flowjs/flow.js/releases</a>
it contains development and minified production files in <code>dist/</code> folder.</p>

<p>or use bower:</p>

<div class="highlight highlight-text-shell-session"><pre><span class="pl-mo">bower install flow.js#~2</span></pre></div>

<p>or use git clone</p>

<div class="highlight highlight-text-shell-session"><pre><span class="pl-mo">git clone https://github.com/flowjs/flow.js</span></pre></div>

<h2><a id="user-content-how-can-i-use-it" class="anchor" href="#how-can-i-use-it" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How can I use it?</h2>

<p>A new <code>Flow</code> object is created with information of what and where to post:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> flow <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Flow</span>({
  target<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">'</span>/api/photo/redeem-upload-token<span class="pl-pds">'</span></span>, 
  query<span class="pl-k">:</span>{upload_token<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">'</span>my_token<span class="pl-pds">'</span></span>}
});
<span class="pl-c"><span class="pl-c">//</span> Flow.js isn't supported, fall back on a different method</span>
<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">flow</span>.<span class="pl-smi">support</span>) <span class="pl-smi">location</span>.<span class="pl-c1">href</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>/some-old-crappy-uploader<span class="pl-pds">'</span></span>;</pre></div>

<p>To allow files to be either selected and drag-dropped, you'll assign drop target and a DOM item to be clicked for browsing:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">flow</span>.<span class="pl-en">assignBrowse</span>(<span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>browseButton<span class="pl-pds">'</span></span>));
<span class="pl-smi">flow</span>.<span class="pl-en">assignDrop</span>(<span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>dropTarget<span class="pl-pds">'</span></span>));</pre></div>

<p>After this, interaction with Flow.js is done by listening to events:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">flow</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>fileAdded<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">file</span>, <span class="pl-c1">event</span>){
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(file, <span class="pl-c1">event</span>);
});
<span class="pl-smi">flow</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>fileSuccess<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">file</span>,<span class="pl-smi">message</span>){
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(file,message);
});
<span class="pl-smi">flow</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>fileError<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">file</span>, <span class="pl-smi">message</span>){
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(file, message);
});</pre></div>

<h2><a id="user-content-how-do-i-set-it-up-with-my-server" class="anchor" href="#how-do-i-set-it-up-with-my-server" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I set it up with my server?</h2>

<p>Most of the magic for Flow.js happens in the user's browser, but files still need to be reassembled from chunks on the server side. This should be a fairly simple task and can be achieved in any web framework or language, which is able to receive file uploads.</p>

<p>To handle the state of upload chunks, a number of extra parameters are sent along with all requests:</p>

<ul>
<li><code>flowChunkNumber</code>: The index of the chunk in the current upload. First chunk is <code>1</code> (no base-0 counting here).</li>
<li><code>flowTotalChunks</code>: The total number of chunks.<br></li>
<li><code>flowChunkSize</code>: The general chunk size. Using this value and <code>flowTotalSize</code> you can calculate the total number of chunks. Please note that the size of the data received in the HTTP might be lower than <code>flowChunkSize</code> of this for the last chunk for a file.</li>
<li><code>flowTotalSize</code>: The total file size.</li>
<li><code>flowIdentifier</code>: A unique identifier for the file contained in the request.</li>
<li><code>flowFilename</code>: The original file name (since a bug in Firefox results in the file name not being transmitted in chunk multipart posts).</li>
<li><code>flowRelativePath</code>: The file's relative path when selecting a directory (defaults to file name in all browsers except Chrome).</li>
</ul>

<p>You should allow for the same chunk to be uploaded more than once; this isn't standard behaviour, but on an unstable network environment it could happen, and this case is exactly what Flow.js is designed for.</p>

<p>For every request, you can confirm reception in HTTP status codes (can be change through the <code>permanentErrors</code> option):</p>

<ul>
<li><code>200</code>, <code>201</code>, <code>202</code>: The chunk was accepted and correct. No need to re-upload.</li>
<li><code>404</code>, <code>415</code>. <code>500</code>, <code>501</code>: The file for which the chunk was uploaded is not supported, cancel the entire upload.</li>
<li><em>Anything else</em>: Something went wrong, but try reuploading the file.</li>
</ul>

<h2><a id="user-content-handling-get-or-test-requests" class="anchor" href="#handling-get-or-test-requests" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Handling GET (or <code>test()</code> requests)</h2>

<p>Enabling the <code>testChunks</code> option will allow uploads to be resumed after browser restarts and even across browsers (in theory you could even run the same file upload across multiple tabs or different browsers).  The <code>POST</code> data requests listed are required to use Flow.js to receive data, but you can extend support by implementing a corresponding <code>GET</code> request with the same parameters:</p>

<ul>
<li>If this request returns a <code>200</code>, <code>201</code> or <code>202</code> HTTP code, the chunks is assumed to have been completed.</li>
<li>If request returns a permanent error status, upload is stopped.</li>
<li>If request returns anything else, the chunk will be uploaded in the standard fashion.</li>
</ul>

<p>After this is done and <code>testChunks</code> enabled, an upload can quickly catch up even after a browser restart by simply verifying already uploaded chunks that do not need to be uploaded again.</p>

<h2><a id="user-content-full-documentation" class="anchor" href="#full-documentation" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Full documentation</h2>

<h3><a id="user-content-flow" class="anchor" href="#flow" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flow</h3>

<h4><a id="user-content-configuration" class="anchor" href="#configuration" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuration</h4>

<p>The object is loaded with a configuration options:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> r <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Flow</span>({opt1<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">'</span>val<span class="pl-pds">'</span></span>, <span class="pl-k">...</span>});</pre></div>

<p>Available configuration options are:</p>

<ul>
<li><code>target</code> The target URL for the multipart POST request. This can be a string or a function. If a
function, it will be passed a FlowFile, a FlowChunk and isTest boolean (Default: <code>/</code>)</li>
<li><code>singleFile</code> Enable single file upload. Once one file is uploaded, second file will overtake existing one, first one will be canceled. (Default: false)</li>
<li><code>chunkSize</code> The size in bytes of each uploaded chunk of data. The last uploaded chunk will be at least this size and up to two the size, see <a href="https://github.com/23/resumable.js/issues/51">Issue #51</a> for details and reasons. (Default: <code>1*1024*1024</code>)</li>
<li><code>forceChunkSize</code> Force all chunks to be less or equal than chunkSize. Otherwise, the last chunk will be greater than or equal to <code>chunkSize</code>. (Default: <code>false</code>)</li>
<li><code>simultaneousUploads</code> Number of simultaneous uploads (Default: <code>3</code>)</li>
<li><code>fileParameterName</code> The name of the multipart POST parameter to use for the file chunk  (Default: <code>file</code>)</li>
<li><code>query</code> Extra parameters to include in the multipart POST with data. This can be an object or a
function. If a function, it will be passed a FlowFile, a FlowChunk object and a isTest boolean
(Default: <code>{}</code>)</li>
<li><code>headers</code> Extra headers to include in the multipart POST with data. If a function, it will be passed a FlowFile, a FlowChunk object and a isTest boolean (Default: <code>{}</code>)</li>
<li><code>withCredentials</code> Standard CORS requests do not send or set any cookies by default. In order to
include cookies as part of the request, you need to set the <code>withCredentials</code> property to true.
(Default: <code>false</code>)</li>
<li><code>method</code> Method to use when POSTing chunks to the server (<code>multipart</code> or <code>octet</code>) (Default: <code>multipart</code>)</li>
<li><code>testMethod</code> HTTP method to use when chunks are being tested. If set to a function, it will be passed a FlowFile and a FlowChunk arguments. (Default: <code>GET</code>)</li>
<li><code>uploadMethod</code> HTTP method to use when chunks are being uploaded. If set to a function, it will be passed a FlowFile and a FlowChunk arguments. (Default: <code>POST</code>)</li>
<li><code>allowDuplicateUploads</code> Once a file is uploaded, allow reupload of the same file. By default, if a file is already uploaded, it will be skipped unless the file is removed from the existing Flow object. (Default: <code>false</code>)</li>
<li><code>prioritizeFirstAndLastChunk</code> Prioritize first and last chunks of all files. This can be handy if you can determine if a file is valid for your service from only the first or last chunk. For example, photo or video meta data is usually located in the first part of a file, making it easy to test support from only the first chunk. (Default: <code>false</code>)</li>
<li><code>testChunks</code> Make a GET request to the server for each chunks to see if it already exists. If implemented on the server-side, this will allow for upload resumes even after a browser crash or even a computer restart. (Default: <code>true</code>)</li>
<li><code>preprocess</code> Optional function to process each chunk before testing &amp; sending. To the function it will be passed the chunk as parameter, and should call the <code>preprocessFinished</code> method on the chunk when finished. (Default: <code>null</code>)</li>
<li><code>initFileFn</code> Optional function to initialize the fileObject. To the function it will be passed a FlowFile and a FlowChunk arguments.</li>
<li><code>readFileFn</code> Optional function wrapping reading operation from the original file. To the function it will be passed the FlowFile, the startByte and endByte, the fileType and the FlowChunk.</li>
<li><code>generateUniqueIdentifier</code> Override the function that generates unique identifiers for each file. (Default: <code>null</code>)</li>
<li><code>maxChunkRetries</code> The maximum number of retries for a chunk before the upload is failed. Valid values are any positive integer and <code>undefined</code> for no limit. (Default: <code>0</code>)</li>
<li><code>chunkRetryInterval</code> The number of milliseconds to wait before retrying a chunk on a non-permanent error.  Valid values are any positive integer and <code>undefined</code> for immediate retry. (Default: <code>undefined</code>)</li>
<li><code>progressCallbacksInterval</code> The time interval in milliseconds between progress reports. Set it
to 0 to handle each progress callback. (Default: <code>500</code>)</li>
<li><code>speedSmoothingFactor</code> Used for calculating average upload speed. Number from 1 to 0. Set to 1
and average upload speed wil be equal to current upload speed. For longer file uploads it is
better set this number to 0.02, because time remaining estimation will be more accurate. This
parameter must be adjusted together with <code>progressCallbacksInterval</code> parameter. (Default 0.1)</li>
<li><code>successStatuses</code> Response is success if response status is in this list (Default: <code>[200,201,
202]</code>)</li>
<li><code>permanentErrors</code> Response fails if response status is in this list (Default: <code>[404, 415, 500, 501]</code>)</li>
</ul>

<h4><a id="user-content-properties" class="anchor" href="#properties" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Properties</h4>

<ul>
<li><code>.support</code> A boolean value indicator whether or not Flow.js is supported by the current browser.</li>
<li><code>.supportDirectory</code> A boolean value, which indicates if browser supports directory uploads.</li>
<li><code>.opts</code> A hash object of the configuration of the Flow.js instance.</li>
<li><code>.files</code> An array of <code>FlowFile</code> file objects added by the user (see full docs for this object type below).</li>
</ul>

<h4><a id="user-content-methods" class="anchor" href="#methods" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Methods</h4>

<ul>
<li><p><code>.assignBrowse(domNodes, isDirectory, singleFile, attributes)</code> Assign a browse action to one or more DOM nodes.</p>

<ul>
<li><code>domNodes</code> array of dom nodes or a single node.</li>
<li><code>isDirectory</code> Pass in <code>true</code> to allow directories to be selected (Chrome only, support can be checked with <code>supportDirectory</code> property).</li>
<li><code>singleFile</code> To prevent multiple file uploads set this to true. Also look at config parameter <code>singleFile</code>.</li>
<li><code>attributes</code> Pass object of keys and values to set custom attributes on input fields.
For example, you can set <code>accept</code> attribute to <code>image/*</code>. This means that user will be able to select only images.
Full list of attributes: <a href="http://www.w3.org/TR/html-markup/input.file.html#input.file-attributes">http://www.w3.org/TR/html-markup/input.file.html#input.file-attributes</a></li>
</ul>

<p>Note: avoid using <code>a</code> and <code>button</code> tags as file upload buttons, use span instead.</p></li>
<li><code>.assignDrop(domNodes)</code> Assign one or more DOM nodes as a drop target.</li>
<li><code>.unAssignDrop(domNodes)</code> Unassign one or more DOM nodes as a drop target.</li>
<li><code>.on(event, callback)</code> Listen for event from Flow.js (see below)</li>
<li><code>.off([event, [callback]])</code>:

<ul>
<li><code>.off()</code> All events are removed.</li>
<li><code>.off(event)</code> Remove all callbacks of specific event.</li>
<li><code>.off(event, callback)</code> Remove specific callback of event. <code>callback</code> should be a <code>Function</code>.</li>
</ul></li>
<li><code>.upload()</code> Start or resume uploading.</li>
<li><code>.pause()</code> Pause uploading.</li>
<li><code>.resume()</code> Resume uploading.</li>
<li><code>.cancel()</code> Cancel upload of all <code>FlowFile</code> objects and remove them from the list.</li>
<li><code>.progress()</code> Returns a float between 0 and 1 indicating the current upload progress of all files.</li>
<li><code>.isUploading()</code> Returns a boolean indicating whether or not the instance is currently uploading anything.</li>
<li><code>.addFile(file)</code> Add a HTML5 File object to the list of files.</li>
<li><code>.removeFile(file)</code> Cancel upload of a specific <code>FlowFile</code> object on the list from the list.</li>
<li><code>.getFromUniqueIdentifier(uniqueIdentifier)</code> Look up a <code>FlowFile</code> object by its unique identifier.</li>
<li><code>.getSize()</code> Returns the total size of the upload in bytes.</li>
<li><code>.sizeUploaded()</code> Returns the total size uploaded of all files in bytes.</li>
<li><code>.timeRemaining()</code> Returns remaining time to upload all files in seconds. Accuracy is based on average speed. If speed is zero, time remaining will be equal to positive infinity <code>Number.POSITIVE_INFINITY</code></li>
</ul>

<h4><a id="user-content-events" class="anchor" href="#events" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h4>

<ul>
<li><code>.fileSuccess(file, message, chunk)</code> A specific file was completed. First argument <code>file</code> is instance of <code>FlowFile</code>, second argument <code>message</code> contains server response. Response is always a string. 
Third argument <code>chunk</code> is instance of <code>FlowChunk</code>. You can get response status by accessing xhr 
object <code>chunk.xhr.status</code>.</li>
<li><code>.fileProgress(file, chunk)</code> Uploading progressed for a specific file.</li>
<li><code>.fileAdded(file, event)</code> This event is used for file validation. To reject this file return false.
This event is also called before file is added to upload queue,
this means that calling <code>flow.upload()</code> function will not start current file upload.
Optionally, you can use the browser <code>event</code> object from when the file was
added.</li>
<li><code>.filesAdded(array, event)</code> Same as fileAdded, but used for multiple file validation.</li>
<li><code>.filesSubmitted(array, event)</code> Same as filesAdded, but happens after the file is added to upload queue. Can be used to start upload of currently added files.</li>
<li><code>.fileRemoved(file)</code> The specific file was removed from the upload queue. Combined with filesSubmitted, can be used to notify UI to update its state to match the upload queue.</li>
<li><code>.fileRetry(file, chunk)</code> Something went wrong during upload of a specific file, uploading is being 
retried.</li>
<li><code>.fileError(file, message, chunk)</code> An error occurred during upload of a specific file.</li>
<li><code>.uploadStart()</code> Upload has been started on the Flow object.</li>
<li><code>.complete()</code> Uploading completed.</li>
<li><code>.progress()</code> Uploading progress.</li>
<li><code>.error(message, file, chunk)</code> An error, including fileError, occurred.</li>
<li><code>.catchAll(event, ...)</code> Listen to all the events listed above with the same callback function.</li>
</ul>

<h3><a id="user-content-flowfile" class="anchor" href="#flowfile" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FlowFile</h3>

<p>FlowFile constructor can be accessed in <code>Flow.FlowFile</code>.</p>

<h4><a id="user-content-properties-1" class="anchor" href="#properties-1" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Properties</h4>

<ul>
<li><code>.flowObj</code> A back-reference to the parent <code>Flow</code> object.</li>
<li><code>.file</code> The correlating HTML5 <code>File</code> object.</li>
<li><code>.name</code> The name of the file.</li>
<li><code>.relativePath</code> The relative path to the file (defaults to file name if relative path doesn't exist)</li>
<li><code>.size</code> Size in bytes of the file.</li>
<li><code>.uniqueIdentifier</code> A unique identifier assigned to this file object. This value is included in uploads to the server for reference, but can also be used in CSS classes etc when building your upload UI.</li>
<li><code>.averageSpeed</code> Average upload speed, bytes per second.</li>
<li><code>.currentSpeed</code> Current upload speed, bytes per second.</li>
<li><code>.chunks</code> An array of <code>FlowChunk</code> items. You shouldn't need to dig into these.</li>
<li><code>.paused</code> Indicated if file is paused.</li>
<li><code>.error</code> Indicated if file has encountered an error.</li>
</ul>

<h4><a id="user-content-methods-1" class="anchor" href="#methods-1" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Methods</h4>

<ul>
<li><code>.progress(relative)</code> Returns a float between 0 and 1 indicating the current upload progress of the file. If <code>relative</code> is <code>true</code>, the value is returned relative to all files in the Flow.js instance.</li>
<li><code>.pause()</code> Pause uploading the file.</li>
<li><code>.resume()</code> Resume uploading the file.</li>
<li><code>.cancel()</code> Abort uploading the file and delete it from the list of files to upload.</li>
<li><code>.retry()</code> Retry uploading the file.</li>
<li><code>.bootstrap()</code> Rebuild the state of a <code>FlowFile</code> object, including reassigning chunks and XMLHttpRequest instances.</li>
<li><code>.isUploading()</code> Returns a boolean indicating whether file chunks is uploading.</li>
<li><code>.isComplete()</code> Returns a boolean indicating whether the file has completed uploading and received a server response.</li>
<li><code>.sizeUploaded()</code> Returns size uploaded in bytes.</li>
<li><code>.timeRemaining()</code> Returns remaining time to finish upload file in seconds. Accuracy is based on average speed. If speed is zero, time remaining will be equal to positive infinity <code>Number.POSITIVE_INFINITY</code></li>
<li><code>.getExtension()</code> Returns file extension in lowercase.</li>
<li><code>.getType()</code> Returns file type.</li>
</ul>

<h2><a id="user-content-contribution" class="anchor" href="#contribution" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribution</h2>

<p>To ensure consistency throughout the source code, keep these rules in mind as you are working:</p>

<ul>
<li><p>All features or bug fixes must be tested by one or more specs.</p></li>
<li><p>We follow the rules contained in <a href="http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml">Google's JavaScript Style Guide</a> with an exception we wrap all code at 100 characters.</p></li>
</ul>

<h2><a id="user-content-installation-dependencies" class="anchor" href="#installation-dependencies" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation Dependencies</h2>

<ol>
<li>To clone your Github repository, run:</li>
</ol>

<div class="highlight highlight-text-shell-session"><pre><span class="pl-mo">git clone git@github.com:&lt;github username&gt;/flow.js.git</span></pre></div>

<ol>
<li>To go to the Flow.js directory, run:</li>
</ol>

<div class="highlight highlight-text-shell-session"><pre><span class="pl-mo">cd flow.js</span></pre></div>

<ol>
<li>To add node.js dependencies</li>
</ol>

<div class="highlight highlight-text-shell-session"><pre><span class="pl-mo">npm install</span></pre></div>

<h2><a id="user-content-testing" class="anchor" href="#testing" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing</h2>

<p>Our unit and integration tests are written with Jasmine and executed with Karma. To run all of the
tests on Chrome run:</p>

<div class="highlight highlight-text-shell-session"><pre><span class="pl-mo">grunt karma:watch</span></pre></div>

<p>Or choose other browser</p>

<div class="highlight highlight-text-shell-session"><pre><span class="pl-mo">grunt karma:watch --browsers=Firefox,Chrome</span></pre></div>

<p>Browsers should be comma separated and case sensitive.</p>

<p>To re-run tests just change any source or test file.</p>

<p>Automated tests is running after every commit at travis-ci.</p>

<h3><a id="user-content-running-test-on-saucelabs" class="anchor" href="#running-test-on-saucelabs" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running test on sauceLabs</h3>

<ol>
<li>Connect to sauce labs <a href="https://saucelabs.com/docs/connect">https://saucelabs.com/docs/connect</a></li>
<li><code>grunt  test --sauce-local=true --sauce-username=**** --sauce-access-key=***</code></li>
</ol>

<p>other browsers can be used with <code>--browsers</code> flag, available browsers: sl_opera,sl_iphone,sl_safari,sl_ie10,sl_chrome,sl_firefox</p>

<h2><a id="user-content-origin" class="anchor" href="#origin" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Origin</h2>

<p>Flow.js was inspired by and evolved from <a href="https://github.com/23/resumable.js">https://github.com/23/resumable.js</a>. Library has been supplemented with tests and features, such as drag and drop for folders, upload speed, time remaining estimation, separate files pause, resume and more.</p>
</article>
  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.11546s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-O3ZfG1WTdLV/rzgVoYbzz8OvBdJ34HyTxqPmJFhbkZY=" src="https://assets-cdn.github.com/assets/frameworks-3b765f1b559374b57faf3815a186f3cfc3af05d277e07c93c6a3e624585b9196.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-0ZAdzbA8tlXNsp4GA4r8cp1HAVLefQYMGwxuuRNvcRQ=" src="https://assets-cdn.github.com/assets/github-d1901dcdb03cb655cdb29e06038afc729d470152de7d060c1b0c6eb9136f7114.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  </body>
</html>

