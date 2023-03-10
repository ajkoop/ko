<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<title>{% if page.title %}{{ page.title }} - {% endif %}{{ site.title }}</title>
	<meta name="author" content="{{ site.author }}">

	{% capture description %}{% if page.description %}{{ page.description }}{% else %}{{ content | raw_content }}{% endif %}{% endcapture %}
	<meta name="description" content="{{ description | strip_html | condense_spaces | truncate:150 }}">
	{% if page.keywords %}<meta name="keywords" content="{{ page.keywords }}">{% endif %}
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<link href="{{ site.subscribe_rss }}" rel="alternate" title="{{site.title}}" type="application/atom+xml">
	<link rel="canonical" href="{{ canonical }}">
	<link href="{{ root_url }}/favicon.png" rel="shortcut icon">
	<link href="{{ root_url }}/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css">
	<!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="{{ root_url }}/javascripts/jquery.tableofcontents.min.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
  // Revert jQuery's '$' alias, to avoid clashes with ender.js. NOTE: Use
  // jQuery(...), instead of $(...) from here on.
  jQuery.noConflict();
</script>
	{% include custom/head.html %}
</head>