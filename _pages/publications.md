---
layout: page
permalink: /publications/
title: Beiträge
description: Publikationsverzeichnis
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
<div class="publications">

{% bibliography %}
<!-- {% bibliography --style apa-6th-edition %} -->

</div>

<script>
$(document).ready(function(){
    var str =$(this).attr('id');
    
    $(".btnId").click(function(){
        var str = $(this).attr('id');
        var ret = str.split("_");
        var id = ret[1];
        $('#' + id).toggle();
    });
});
</script>