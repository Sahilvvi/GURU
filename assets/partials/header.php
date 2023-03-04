<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo $title;?></title>
    <link rel="stylesheet" href="./medai.css" />
    <link rel="stylesheet" href="./style.css" />
    <link rel="stylesheet" href="./mobile.style.css" />
    <link rel="stylesheet" href="./assets//fontawesome/css/all.min.css">
</head>

<body>
    <div class="smooth-scroll-wrapper">
        <div class="content bg-primary-1">
            <nav class="spaced-flex default-padding py-1  bg-dark-1 light-1">
                <div class="left-nav">
                    <h1 id="site-title"><span class="primary-1">Eco</span> Paper</h1>
                </div>
                <div class="right-nav">
                    <ul class="dedecor spaced-flex font2">
                        <li class="mx-5 animated-ul py-2"><a href="/" class="dedecor">Home</a></li>
                        <li class="mx-5 animated-ul py-2"><a href="/about.html" class="dedecor">About</a></li>
                        <li class="mx-5 animated-ul py-2"><a href="#Products" class="dedecor">Products</a></li>
                        <li class="ml-5 animated-ul py-2"><a href="/contact.html" class="dedecor">Contact</a></li>
                    </ul>
                </div>
                <div id="mobile-nav">
                    <i class="fa fa-bars primary-1" onclick="toggleMenu(event)"></i>
                    <ul id="mobile-menu" class="dedecor column-flex font2">
                        <li class="mx-auto animated-ul py-2"><a href="/" class="dedecor">Home</a></li>
                        <li class="mx-auto animated-ul py-2"><a href="/about.html" class="dedecor">About</a></li>
                        <li class="mx-auto animated-ul py-2"><a href="#Products" class="dedecor">Products</a></li>
                        <li class="mx-auto animated-ul py-2"><a href="/contact.html" class="dedecor">Contact</a></li>
                        <li class="mx-auto my-4 py-2"><i class="fa fa-xmark large primary-3"
                                onclick="toggleMenu(event)"></i></li>
                    </ul>
                </div>
            </nav>
            <section id="loading" class="auto-flex">
                <i class="fa fa-spinner secondary-1 boomer"
                    style="font-size: 100px ; position:relative; bottom:10%;"></i>
            </section>